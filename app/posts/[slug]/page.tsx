"use client";

import React, { useState } from "react";
import { use } from "react";

// Define blogs with unique content and images
const blogs: {
  [key: string]: { title: string; content: string; image: string };
} = {
  "ai-advancements": {
    title: "AI Advancements in 2024",
    content:
      "Artificial Intelligence (AI) continues to revolutionize the world, and 2024 has been no exception. This year has witnessed groundbreaking advancements across various sectors, shaping industries, enhancing productivity, and redefining human interactions with technology. Let’s dive deep into the key AI innovations and their impact.1. Generative AI Redefining Creativity. </br> <h1> ali </h1>",
    image: "/ai.jpg",
  },
  "blockchain-future": {
    title: "Blockchain and its Future",
    content:
      "Blockchain technology continues to disrupt traditional systems, offering unparalleled transparency and security. In this post, we explore the future of blockchain and its potential applications beyond cryptocurrencies.",
    image: "/blog-images/blockchain-future.jpg",
  },
  // Add entries for all 10 topics
  "exploring-metaverse": {
    title: "Exploring the Metaverse: A New Reality",
    content:
      "The metaverse is an emerging digital frontier that blends augmented reality, virtual reality, and the internet. This blog uncovers what the metaverse means for individuals and businesses in the coming decade.",
    image: "/blog-images/exploring-metaverse.jpg",
  },
  "web3-decentralized-internet": {
    title: "The Role of Web3 in Decentralized Internet",
    content:
      "Web3 is transforming the internet into a decentralized space where users have full control over their data and privacy. Discover how this new paradigm is challenging traditional internet models.",
    image: "/blog-images/web3-decentralized-internet.jpg",
  },
  // Repeat for other topics...
};

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const blog = blogs[slug];

  // Handle invalid slugs
  if (!blog) {
    return (
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p>Sorry, the post you are looking for does not exist.</p>
      </div>
    );
  }

  // State for comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="p-6">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-w-3xl mx-auto h-auto rounded-md shadow-md my-6"
      />

      {/* Blog Content */}
      <p className="text-lg leading-7 text-gray-700 mb-6">{blog.content}</p>

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
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
