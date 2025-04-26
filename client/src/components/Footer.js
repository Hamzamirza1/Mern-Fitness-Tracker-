import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// cant use <a> in react, instead, use <link> from react router dom
import { Link, useLocation } from "react-router-dom";
import Auth from "../utils/auth"

// import "./Footer.css"; // External CSS for styling

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-logo">Fitness Tracker</p>
                <p className="footer-text">&copy; 2025 Noor ul Ain. All rights reserved.</p>
                <ul className="footer-links">
                    <li>
                        <a href="/privacy-policy" className="footer-link">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/terms" className="footer-link">
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="footer-link">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
