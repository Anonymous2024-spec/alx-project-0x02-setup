import React, { useState } from "react";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import { PostData } from "@/interfaces";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handlePostSubmit = (post: PostData) => {
    console.log("Submitted Post:", post);
    // TODO: You can add logic to save to an API or local state
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-md rounded-lg">
        <div className="text-center mb-8">
          <button
            onClick={handleOpenModal}
            className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-200"
          >
            Create New Post
          </button>
        </div>

        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Welcome to the Home Page
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Click the button above to create a new post.
        </p>
      </div>

      {isModalOpen && (
        <PostModal onClose={handleCloseModal} onSubmit={handlePostSubmit} />
      )}
    </div>
  );
};

export default HomePage;
