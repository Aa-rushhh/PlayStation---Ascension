import React from 'react';

export default function MainContent() {
    return (
        <main className="main-content">
            <div className="search-bar hover-target">
                <i className="ph ph-magnifying-glass"></i>
                <input type="text" placeholder="Search the network..." />
            </div>

            <div className="hero-banner hover-target">
                <div className="hero-content">
                    <span className="live-tag"><span className="pulse-dot"></span> LIVE EVENT</span>
                    <h2>AETHER'S AWAKENING</h2>
                    <button className="play-btn hover-target">PLAY NOW</button>
                </div>
            </div>

            <div className="grid-section">
                <div className="activity-cards">
                    <div className="card mini-card hover-target">
                        <i className="ph-fill ph-sword"></i> Ranked Gold III
                    </div>
                    <div className="card mini-card hover-target">
                        <i className="ph-fill ph-trophy"></i> 14 Trophies Unlocked
                    </div>
                </div>
            </div>
        </main>
    );
}
