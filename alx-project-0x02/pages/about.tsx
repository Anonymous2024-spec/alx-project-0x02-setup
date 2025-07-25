import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button"

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Button size="small" shape="rounded-sm">Small Button</Button>
      <Button size="medium" shape="rounded-md">Medium Button</Button>
      <Button size="large" shape="rounded-full">Large Button</Button>
    </div>
    </div>
  );
};

export default AboutPage;
