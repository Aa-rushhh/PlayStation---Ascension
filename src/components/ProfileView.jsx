import React from 'react';
import spiderImg from '../assets/spiderman.jpeg';

export default function ProfileView() {
    return (
        <div className="ps5-profile-view fade-up-enter">
            <div className="profile-header-banner">
                <div className="profile-avatar-large">
                    <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=300&auto=format&fit=crop" alt="Profile" />
                    <div className="online-indicator"></div>
                </div>
                <div className="profile-user-info">
                    <h1>PlayerOne_77</h1>
                    <div className="real-name">John Doe</div>
                </div>
            </div>

            <div className="profile-stats-container">
                <div className="stat-card xp-card">
                    <div className="xp-header">
                        <div className="level-badge">242</div>
                        <div className="xp-details">
                            <div className="xp-title">Current Level</div>
                            <div className="xp-progress-text">14,250 / 20,000 XP</div>
                        </div>
                    </div>
                    <div className="xp-bar-container">
                        <div className="xp-bar-fill" style={{ width: '71%' }}></div>
                    </div>
                    <div className="xp-footer">Next Level: 243</div>
                </div>

                <div className="stat-card trophies-summary-card">
                    <h3>Trophies</h3>
                    <div className="trophy-row">
                        <div className="trophy-col">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#e5e4e2"><circle cx="12" cy="12" r="10" /></svg>
                            <span>12</span>
                        </div>
                        <div className="trophy-col">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffd700"><circle cx="12" cy="12" r="10" /></svg>
                            <span>45</span>
                        </div>
                        <div className="trophy-col">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#c0c0c0"><circle cx="12" cy="12" r="10" /></svg>
                            <span>128</span>
                        </div>
                        <div className="trophy-col">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#cd7f32"><circle cx="12" cy="12" r="10" /></svg>
                            <span>412</span>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="profile-section-title">Recent Activity</h3>
            <div className="activity-feed">
                <div className="activity-item">
                    <div className="activity-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 15c-3.31 0-6-2.69-6-6V3h12v6c0 3.31-2.69 6-6 6z" /><path d="M12 15v7M8 22h8" /></svg>
                    </div>
                    <div className="activity-text">
                        <strong>PlayerOne_77</strong> earned the platinum trophy in <em>Ghost of Tsushima</em>
                        <div className="activity-time">2 hours ago</div>
                    </div>
                </div>
                <div className="activity-item">
                    <img src={spiderImg} className="activity-game-icon" alt="spider" style={{ width: 48, height: 48, borderRadius: '8px', objectFit: 'cover' }} />
                    <div className="activity-text">
                        <strong>PlayerOne_77</strong> played <em>Marvel's Spider-Man 2</em>
                        <div className="activity-time" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>5 hours ago</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
