import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 bottom-0 text-white py-4 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center">&copy; 2024</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/werner-van-vuuren-703892116/"
            className="text-gray-400 hover:text-gray-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/WernerVV93"
            className="text-gray-400 hover:text-gray-200"
          >
            GitHub
          </a>
          <a
            href="https://bitbucket.org/account/workspaces/"
            className="text-gray-400 hover:text-gray-200"
          >
            BitBucket
          </a>
        </div>
      </div>
    </footer>
  );
}
