import React, { useEffect, useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigator.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navigator() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <Navbar className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <Button 
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </Button>
      </div>
      <div className="links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/timeline" className="nav-link">Timeline</Link>
      </div>
    </Navbar>
  );
}

export default Navigator;
