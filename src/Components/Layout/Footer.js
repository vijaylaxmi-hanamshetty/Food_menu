import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6 text-center">
        <div className="my-3">
          <InstagramIcon className="text-white text-3xl cursor-pointer hover:text-yellow-500 transition duration-400 transform hover:translate-x-1 mr-2" />
          <TwitterIcon className="text-white text-3xl cursor-pointer hover:text-yellow-500 transition duration-400 transform hover:translate-x-1 mr-2" />
          <GitHubIcon className="text-white text-3xl cursor-pointer hover:text-yellow-500 transition duration-400 transform hover:translate-x-1 mr-2" />
          <YouTubeIcon className="text-white text-3xl cursor-pointer hover:text-yellow-500 transition duration-400 transform hover:translate-x-1" />
        </div>
        <p className="text-lg">
          Welcome to &copy; 2024
        </p>
      </footer>
    </>
  );
};

export default Footer;

