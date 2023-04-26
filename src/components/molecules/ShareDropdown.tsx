import React, { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import { HiClipboard } from "react-icons/hi";
import Modal from "src/components/atoms/Modal";

const ShareDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const handleShareToFacebook = () => {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href,
      "Facebook",
      "width=600,height=400"
    );
  };

  const handleShareToTwitter = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        document.title +
        "&url=" +
        window.location.href,
      "Twitter",
      "width=600,height=400"
    );
  };

  const handleShareToWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send?text=" +
        encodeURIComponent(document.title + " - " + window.location.href),
      "Whatsapp",
      "width=600,height=400"
    );
  };

  const handleCopyLink = () => {
    // copy the link to clipboard
    navigator.clipboard.writeText(window.location.href);

    // show the "copied" modal
    setShowModal(true);

    // hide the modal after 2 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          <FiShare2 className="mr-2" />
          <span>Share</span>
        </button>
      </div>
      {isDropdownOpen && (
        <div
          className="origin-top-right absolute z-40 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              className="flex items-center w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleShareToFacebook}
            >
              <IoLogoFacebook className="mr-2" />
              <span>Facebook</span>
            </button>
            <button
              className="flex items-center w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleShareToTwitter}
            >
              <IoLogoTwitter className="mr-2" />
              <span>Twitter</span>
            </button>
            <button
              className="flex items-center w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleShareToWhatsapp}
            >
              <IoLogoWhatsapp className="mr-2" />
              <span>WhatsApp</span>
            </button>
            <button
              className="flex items-center w-full text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleCopyLink}
            >
              <HiClipboard className="mr-2" />
              <span>Copy Link</span>
            </button>
          </div>
        </div>
      )}
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          Copied!
        </Modal>
      )}
    </div>
  );
};

export default ShareDropdown;
