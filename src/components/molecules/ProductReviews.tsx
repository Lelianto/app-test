/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef, useEffect } from "react";

type Review = {
  id?: number;
  username: string;
  comment: string;
  userImage: string;
  createdAt: Date;
};

const ProductReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      username: "John Doe",
      comment: "This product is amazing!",
      userImage: "https://via.placeholder.com/50",
      createdAt: new Date("2023-01-01T10:00:00Z"),
    },
    {
      id: 2,
      username: "Jane Doe",
      comment: "I love this product so much!",
      userImage: "https://via.placeholder.com/50",
      createdAt: new Date("2023-01-02T14:30:00Z"),
    },
    {
      id: 3,
      username: "Bob Smith",
      comment: "This product exceeded my expectations!",
      userImage: "https://via.placeholder.com/50",
      createdAt: new Date("2023-01-03T08:15:00Z"),
    },
  ]);

  const [commentInput, setCommentInput] = useState("");

  const handleSubmit = () => {
    if (!commentInput) return;
    const newReview: Review = {
      username: "You",
      comment: commentInput,
      userImage: "https://via.placeholder.com/50",
      createdAt: new Date(),
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setCommentInput("");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleSubmit();
    }
  };

  const reviewsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollTop =
        reviewsContainerRef.current.scrollHeight;
    }
  }, [reviews]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-6">Product Reviews</h2>
      <div className="h-52 overflow-y-scroll" ref={reviewsContainerRef}>
        {reviews.map((review) => (
          <div
            key={review.id ?? review.username}
            className="flex items-start mb-4"
          >
            <img
              src={review.userImage}
              alt={review.username}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">{review.username}</h3>
                <span className="text-xs text-gray-500 pr-4">
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }).format(review.createdAt)}
                </span>
              </div>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-2">Review This Product</h3>
        <div className="flex mb-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Your Image"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div className="flex-1">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyDown={(e) => handleEnter(e)}
              placeholder="Add your comment"
              className="w-full border-2 border-gray-300 rounded-md py-2 px-4"
            />
          </div>
        </div>
        <button
          className={`${
            !commentInput
              ? "bg-gray-200 hover:bg-gray-400 text-gray-500"
              : "bg-blue-500 hover:bg-blue-700 text-white"
          } font-bold py-2 px-4 rounded`}
          onClick={handleSubmit}
          disabled={!commentInput}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProductReviews;
