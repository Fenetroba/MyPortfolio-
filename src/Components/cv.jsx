import React from "react";
import { RiDownload2Fill } from "react-icons/ri";

const DownloadButton = ({ cv }) => {
  return (
    <button
      style={{
        backgroundColor: "#3498db", // Blue background
        color: "white", // White text
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px", // Space between text and icon
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#2980b9")} // Darker blue on hover
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#3498db")} // Revert to original color
    >
      <a
        href={cv}
        download="CV.pdf"
        style={{
          color: "inherit", // Inherit button text color
          textDecoration: "none", // Remove underline
          display: "flex",
          alignItems: "center",
          gap: "8px", // Space between text and icon
        }}
      >
        Download CV
        <RiDownload2Fill style={{ color: "gold" }} /> {/* Gold icon */}
      </a>
    </button>
  );
};

export default DownloadButton;