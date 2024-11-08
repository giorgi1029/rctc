import React, { useState } from "react";

function RatingComponent() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 max-w-sm mx-auto bg-[#5d5d6f] rounded-xl shadow-lg mt-[175px]">
      {!isSubmitted ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            How Did We Do!
          </h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex space-x-4 mb-8">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingSelect(rating)}
                className={`w-12 h-12 rounded-full transition-colors duration-200 ${
                  selectedRating === rating
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-800"
                } font-semibold text-lg`}
              >
                {rating}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            disabled={selectedRating === null}
            className={`w-full py-3 rounded-full text-lg font-semibold ${
              selectedRating === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-500 text-white"
            } transition-colors duration-200`}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-900">
            You rated us:{" "}
            <span className="font-semibold text-gray-800">
              {selectedRating}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default RatingComponent;
