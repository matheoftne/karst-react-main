import React from "react";
import './Footer.css';

// Components du footer

export default function Footer() {
    return (
        <div>
            <footer>
                <div id="top">
                    <div id="p1">
                        <ul>
                            <li>Shop products</li>
                            <li>Bookmark</li>
                            <li>About</li>
                            <li>Customs Projects</li>
                        </ul>
                    </div>
                    <div id="p2">
                        <ul>
                            <li>Wholesale Orders</li>
                            <li>Contact Us</li>
                            <li>Shipping + Returns</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                </div>
                <span id="bar"></span>
                <div id="bottom">
                    <p id="credits">Made by Mathéo</p>
                </div>
            </footer>
        </div>
    )
};