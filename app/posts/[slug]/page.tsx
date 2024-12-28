"use client";
import React, { useState } from "react";
import { use } from "react";

// Define the blogs object with an index signature
const blogs: { [key: string]: string } = {
  "ai-advancements": "AI Advancements in 2024",
  "blockchain-future": "Blockchain and it Future",
  // Add other slugs and titles here...
};

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // Unwrap the Promise
  const [comments, setComments] = useState<string[]>([]); // State for comments
  const [newComment, setNewComment] = useState(""); // State for the input field

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]); // Add new comment to the list
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">
        {blogs[slug] || slug.replace("-", " ")}
      </h1>
      <img
        src="/path-to-your-image.jpg"
        alt="Blog Post Image"
        className="w-full h-auto rounded-md shadow-md my-6"
      />
      <p>/* Add 800-word content here */</p>

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          {/* Display Comments */}
          {comments.length === 0 ? (
            <p className="text-gray-600">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-md shadow-sm border border-gray-300"
              >
                {comment}
              </div>
            ))
          )}
        </div>

        {/* Add New Comment */}
        <div className="mt-6">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onClick={handleAddComment}
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
}
