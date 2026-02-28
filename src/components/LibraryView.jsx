import React from 'react';

export default function LibraryView({ games }) {
    return (
        <div className="ps5-library-view fade-up-enter">
            <div className="library-header">
                <h1>Game Library</h1>
                <div className="library-tabs">
                    <div className="library-tab active">Your Collection</div>
                    <div className="library-tab">Installed</div>
                    <div className="library-tab">PlayStation Plus</div>
                </div>
            </div>

            <div className="library-grid">
                {games.map(game => (
                    <div key={`lib-${game.id}`} className={`library-card ${!game.isOwned ? 'locked' : ''}`}>
                        <div className="card-image-wrapper">
                            <img src={game.icon} alt={game.title} />
                            {!game.isOwned && (
                                <div className="lock-overlay">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                </div>
                            )}
                        </div>
                        <div className="library-card-info">
                            <div className="card-title">{game.title}</div>
                            <div className="card-subtitle">{game.isOwned ? 'PS5' : 'Purchase Required'}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
