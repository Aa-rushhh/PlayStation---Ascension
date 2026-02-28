import React from 'react';

export default function Sidebar() {
    return (
        <nav className="sidebar">
            <div className="logo"><i className="ph-fill ph-playstation-logo"></i></div>
            <ul className="nav-links">
                <li className="active"><i className="ph-fill ph-squares-four"></i> Dashboard</li>
                <li className="hover-target"><i className="ph ph-books"></i> Library</li>
                <li className="hover-target"><i className="ph ph-user"></i> Profile</li>
                <li className="hover-target"><i className="ph ph-users"></i> Community</li>
                <li className="hover-target"><i className="ph ph-shopping-cart"></i> Store</li>
            </ul>
        </nav>
    );
}
