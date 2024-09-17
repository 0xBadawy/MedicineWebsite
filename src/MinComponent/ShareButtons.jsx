import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Import icons
import { FiShare2 } from "react-icons/fi"; // Share icon

const ShareButtons = () => {
  const currentUrl = window.location.href; // Get the current URL

  const shareText = encodeURIComponent("Check out this amazing website!"); // Custom share text

  return (
    <div className="flex space-x-4  items-center">
      {/* Share Icon */}
      <span className="text-gray-700">
        <FiShare2 size={24} />
      </span>

      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        title="Share on Facebook"
      >
        <FaFacebookF size={18} />
      </a>

      {/* Twitter Share */}
      <a
        href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500"
        title="Share on Twitter"
      >
        <FaTwitter size={18} />
      </a>

      {/* LinkedIn Share */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800"
        title="Share on LinkedIn"
      >
        <FaLinkedinIn size={18} />
      </a>
    </div>
  );
};

export default ShareButtons;
