import React from "react";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-2xl font-bold">All Posts</h1>
      </main>
    </div>
  );
};

export default PostsPage;
