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
      "Artificial Intelligence (AI) in 2024 has reached unprecedented heights, driving innovation across industries and reshaping human interactions with technology. Generative AI tools like OpenAI's GPT and DALL·E have advanced to create hyper-realistic images, videos, and music, revolutionizing entertainment, marketing, and education by enabling more personalized and immersive experiences. In healthcare, AI-powered systems have enhanced early disease detection, streamlined drug discovery, and enabled real-time remote monitoring through sophisticated wearable devices, bringing precision medicine closer to reality. Autonomous systems, including self-driving cars, drones, and smart agricultural robots, have become increasingly reliable and efficient, significantly improving transportation, logistics, and farming practices. Natural Language Processing (NLP) advancements allow machines to understand and generate human language more effectively, resulting in seamless real-time translations, lifelike chatbots for customer support, and automated creation of articles, reports, and even creative works like novels. Education has seen transformative changes, with AI offering personalized learning experiences, adaptive content, and interactive AI tutors that cater to individual needs, making education more accessible and effective. Ethical AI remains a priority, with significant strides made in reducing algorithmic biases, ensuring data privacy, and enhancing transparency through explainable AI models. Sustainability efforts have been boosted by AI’s ability to optimize energy consumption, monitor environmental changes, and promote precision agriculture, helping address global challenges like climate change. Quantum AI, while still in its early stages, promises breakthroughs in areas such as cryptography, material science, and complex simulations, pushing the boundaries of what’s possible. Businesses across sectors are leveraging AI to optimize operations, enhance customer experiences, and drive innovation in supply chain management, marketing, and human resources. Even in art and design, AI continues to redefine creativity, producing unique masterpieces, aiding in fashion forecasting, and contributing to architectural innovations. As 2024 unfolds, it’s evident that while AI offers immense opportunities, balancing its potential with ethical considerations is crucial to ensure a future where technology serves humanity responsibly and equitably.",
    image: "/ai.jpg",
  },
  "blockchain-future": {
    title: "Blockchain and its Future",
    content:
      "Blockchain technology has evolved into a transformative force in 2024, reshaping industries with its promise of transparency, security, and decentralization. Originally synonymous with cryptocurrencies like Bitcoin and Ethereum, blockchain has grown far beyond its financial roots, finding applications in sectors such as supply chain management, healthcare, real estate, and governance. Its immutable ledger system ensures unparalleled data security and reduces fraud, making it a cornerstone for industries reliant on trust and verification. In the financial world, decentralized finance (DeFi) platforms are revolutionizing banking, lending, and trading, providing users with decentralized, peer-to-peer solutions that eliminate intermediaries. The integration of smart contracts has enabled automated and tamper-proof transactions, streamlining processes like property sales, insurance claims, and intellectual property rights management. Blockchain’s role in supply chain management is particularly impactful, offering real-time tracking and verification of goods, ensuring authenticity, and reducing inefficiencies. In healthcare, blockchain secures patient records, ensures data interoperability, and empowers individuals with control over their medical history. Governments and organizations are leveraging blockchain for transparent voting systems, reducing corruption and enhancing democratic participation. The environmental impact of blockchain technology has also been a critical focus, with advancements in energy-efficient consensus mechanisms like Proof of Stake (PoS) reducing the carbon footprint of blockchain networks. As businesses and developers continue to innovate, blockchain is becoming the backbone of Web3, powering decentralized applications (dApps) and enabling a more equitable internet. However, challenges remain, including regulatory uncertainty, scalability issues, and the need for widespread education to harness its potential fully. Despite these hurdles, blockchain’s ability to foster trust and transparency across digital ecosystems positions it as a key driver of innovation and a pivotal technology for the future.",
    image: "/block.jpg",
  },
  // Add entries for all 10 topics
  "exploring-metaverse": {
    title: "Exploring the Metaverse: A New Reality",
    content:
      "Exploring the metaverse in 2024 reveals a rapidly evolving digital frontier that merges virtual and physical realities, offering limitless possibilities for communication, commerce, and creativity. The metaverse, powered by advancements in blockchain, artificial intelligence, and extended reality (XR) technologies, has transformed into a vibrant ecosystem where users can interact, create, and transact in immersive 3D environments. Blockchain ensures the authenticity and ownership of digital assets, enabling the rise of non-fungible tokens (NFTs) and decentralized marketplaces. AI enhances these virtual experiences by providing intelligent avatars, personalized content, and dynamic interactions. Extended reality devices, including VR headsets and AR glasses, have become more accessible and sophisticated, bridging the gap between the digital and physical worlds. The metaverse is reshaping industries, from virtual real estate and gaming to education and remote work, by fostering collaboration and innovation in unprecedented ways. Brands and businesses are leveraging this space to build virtual storefronts, host immersive events, and engage with global audiences like never before. Educational institutions are also using the metaverse to create engaging virtual classrooms and hands-on training environments, offering students a more interactive learning experience. In the realm of social interaction, the metaverse provides new ways for people to connect across the globe, hosting virtual meetups, concerts, and festivals. However, the metaverse also raises critical questions about data privacy, digital ethics, and inclusivity, highlighting the need for robust governance frameworks to ensure a fair and secure virtual landscape. As the metaverse continues to mature, its potential to redefine human interaction, economic activity, and even cultural expression cements its role as a cornerstone of the digital future",
    image: "/meta.jpg",
  },
  "web3-decentralized-internet": {
    title: "The Role of Web3 in Decentralized Internet",
    content:
      "Web3, often referred to as the decentralized internet, represents a paradigm shift in how digital ecosystems are designed, operated, and governed in 2024. Built on blockchain technology, Web3 aims to create an internet that prioritizes user control, data ownership, and transparency over the centralized models of Web2. This transformative vision empowers individuals to own and monetize their digital identities, interactions, and creations without the need for intermediaries. Decentralized platforms and applications (dApps) form the backbone of Web3, enabling peer-to-peer interactions and secure transactions across a wide range of use cases, from finance and social media to gaming and e-commerce. Tokenization plays a crucial role in Web3, allowing for the creation of digital assets and incentivizing community participation through governance tokens and rewards. Smart contracts ensure that interactions are automated, trustless, and immutable, reducing reliance on centralized authorities. Beyond individual empowerment, Web3 has sparked innovation in digital collectives, known as Decentralized Autonomous Organizations (DAOs), where members can collaborate, vote, and share resources transparently. Web3 is also addressing long-standing issues of data privacy and security, offering users greater control over their personal information through self-sovereign identities and encrypted data storage. However, the journey to a fully decentralized internet is not without challenges, including scalability concerns, regulatory complexities, and the need for broader accessibility and education. Despite these hurdles, Web3 is laying the foundation for a more equitable and inclusive digital future, redefining how we interact with technology and each other on a global scale.",
    image: "/web.jpg",
  },
  "5G-internet": {
    title: "How 5G is Transforming Connectivity",
    content:
      "Web3 is transforming the internet into a decentralized space where users have full control over their data and privacy. Discover how this new paradigm is challenging traditional internet models.",
    image: "/5g.jpg",
  },
  " quantum-computing": {
    title: "Quantum Computing: A Leap into the Future",
    content:
      "Web3 is transforming the internet into a decentralized space where users have full control over their data and privacy. Discover how this new paradigm is challenging traditional internet models.",
    image: "/qc.jpg",
  },
  "autonomous-vehicles": {
    title: "The Rise of Autonomous Vehicles",
    content:
      "Web3 is transforming the internet into a decentralized space where users have full control over their data and privacy. Discover how this new paradigm is challenging traditional internet models.",
    image: "/auto.jpg",
  },
  "cybersecurity-trends": {
    title: "Cybersecurity Trends in the Digital Age",
    content:
      "Web3 is transforming the internet into a decentralized space where users have full control over their data and privacy. Discover how this new paradigm is challenging traditional internet models.",
    image: "/cyber.jpg",
  },
  "ai-on-job-markets": {
    title: "The Impact of AI on Job Markets",
    content:
      "Web3 is transforming the internet into a decentralized space where users have full control over their data and privacy. Discover how this new paradigm is challenging traditional internet models.",
    image: "/job.jpg",
  },
  "sustainable-technology": {
    title: "Sustainable Technology: Innovations for a Greener Future",
    content:
      "Web3 is transforming the internet into a decentralized space where users have full control over their data and privacy. Discover how this new paradigm is challenging traditional internet models.",
    image: "/tech.jpg",
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
