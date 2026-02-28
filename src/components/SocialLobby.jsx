import React from 'react';

export default function SocialLobby() {
    return (
        <aside className="social-lobby">
            <div className="section-header">
                <h3>LIVE LOBBY</h3>
            </div>

            <ul className="player-list">
                <li className="player active-player hover-target">
                    <img src="https://i.pravatar.cc/100?img=11" alt="Player" />
                    <div className="info">
                        <h4>KYRO_BYTE</h4>
                        <span className="status ready">Ready</span>
                    </div>
                </li>
                <li className="player hover-target">
                    <img src="https://i.pravatar.cc/100?img=8" alt="Player" />
                    <div className="info">
                        <h4>ZELDA</h4>
                        <span className="status searching">Searching...</span>
                    </div>
                </li>
            </ul>

            <div className="chat-section">
                <div className="chat-input hover-target">
                    <input type="text" placeholder="Squad chat..." />
                    <i className="ph-fill ph-paper-plane-right send-icon"></i>
                </div>
            </div>
        </aside>
    );
}
