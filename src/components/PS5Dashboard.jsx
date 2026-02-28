import React, { useState, useEffect } from 'react';
import ghostVideo from '../assets/ghost of tsushima trailer.mp4';
import spiderVideo from '../assets/spiderman trialer.webm';
import rdrVideo from '../assets/rdr 2 trailer.webm';

import SideNav from './SideNav';
import TopBar from './TopBar';
import LibraryView from './LibraryView';
import StoreView from './StoreView';
import ProfileView from './ProfileView';

import cyberpunkImg from '../assets/cyber punk.jpeg';
import fcImg from '../assets/fc.jpeg';
import forzaImg from '../assets/forza.jpeg';
import ghostImg from '../assets/ghost of tsushima.jpeg';
import ghostImg1 from '../assets/ghost of tsushima1.jpeg';
import psLogo from '../assets/ps logo.jpeg';
import spidermanImg from '../assets/spiderman.jpeg';
import valoImg from '../assets/valo.jpeg';
import rdrImg from '../assets/rdr.jpeg';

// Using high quality Unsplash placeholders to mimic premium PlayStation Games
const games = [
    {
        id: 'g1',
        title: 'Valorant',
        subtitle: 'PS5 • Tactical Shooter',
        bg: valoImg, // Epic landscape
        icon: valoImg, // Neon/character vibe
        progress: '28%',
        isOwned: true,
        bronze: 14,
        silver: 2,
        gold: 0,
        platinum: 0
    },
    {
        id: 'g2',
        title: 'Cyberpunk 2077',
        subtitle: 'PS5 • RPG',
        bg: cyberpunkImg, // Cyberpunk neon city
        icon: cyberpunkImg, // Neon mask
        progress: '85%',
        isOwned: true,
        bronze: 44,
        silver: 12,
        gold: 3,
        platinum: 0
    },
    {
        id: 'g3',
        title: 'Forza Horizon 5',
        subtitle: 'PS5 • Racing',
        bg: forzaImg, // Supercar race
        icon: forzaImg, // Car icon
        progress: '15%',
        isOwned: true,
        bronze: 10,
        silver: 0,
        gold: 0,
        platinum: 0
    },
    {
        id: 'g4',
        title: 'Ghost of Tsushima',
        subtitle: 'PS5 • Open World',
        bg: ghostImg, // Japanese scenery
        bgVideo: ghostVideo,
        icon: ghostImg1, // Samurai sword
        progress: '100%',
        isOwned: true,
        bronze: 59,
        silver: 9,
        gold: 2,
        platinum: 1
    },
    {
        id: 'g5',
        title: 'Marvel\'s Spider-Man 2',
        subtitle: 'PS5 • Action',
        bg: spidermanImg, // NYC cityscape
        bgVideo: spiderVideo,
        icon: spidermanImg, // Spider-Man vibe
        progress: '55%',
        isOwned: true,
        bronze: 32,
        silver: 8,
        gold: 1,
        platinum: 0
    },
    {
        id: 'g6',
        title: 'Red Dead Redemption 2',
        subtitle: 'PS5 • Open World',
        bg: rdrImg,
        bgVideo: rdrVideo,
        icon: rdrImg,
        progress: '0%',
        isOwned: false,
        bronze: 0, silver: 0, gold: 0, platinum: 0
    },
    {
        id: 'g7',
        title: 'EA SPORTS FC 24',
        subtitle: 'PS5 • Sports',
        bg: fcImg,
        icon: fcImg,
        progress: '0%',
        isOwned: false,
        bronze: 0, silver: 0, gold: 0, platinum: 0
    }
];

export default function PS5Dashboard() {
    const [currentView, setCurrentView] = useState('games');
    const [activeGameId, setActiveGameId] = useState(games[0].id);

    const activeGame = games.find(g => g.id === activeGameId) || games[0];

    return (
        <div className="ps5-app">
            <div className={`ps5-bg-container ${currentView !== 'games' ? 'blurred-bg' : ''}`}>
                {games.map(game => (
                    game.bgVideo ? (
                        <video
                            key={`bg-${game.id}`}
                            src={game.bgVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`ps5-bg-image ${activeGameId === game.id ? 'active' : ''}`}
                        />
                    ) : (
                        <img
                            key={`bg-${game.id}`}
                            src={game.bg}
                            alt={game.title}
                            className={`ps5-bg-image ${activeGameId === game.id ? 'active' : ''}`}
                        />
                    )
                ))}
                <div className="ps5-bg-overlay"></div>
            </div>

            <SideNav currentView={currentView} setCurrentView={setCurrentView} />

            <div className="ps5-content-wrapper">
                <TopBar setCurrentView={setCurrentView} />

                <div className="ps5-main-content">
                    {currentView === 'games' && (
                        <>
                            <div key={`info-${activeGame.id}`} className="ps5-game-info-container fade-up-enter">
                                <h1 className="ps5-game-title">{activeGame.title}</h1>
                                <div className="ps5-game-subtitle">{activeGame.subtitle}</div>

                                <div className="ps5-action-row">
                                    <button className="ps5-btn play">{activeGame.isOwned ? 'Play' : 'Purchase'}</button>
                                    <button className="ps5-btn">
                                        <svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" fill="currentColor" /><circle cx="19" cy="12" r="2" fill="currentColor" /><circle cx="5" cy="12" r="2" fill="currentColor" /></svg>
                                    </button>

                                    {activeGame.isOwned && (
                                        <div className="ps5-trophy-status">
                                            <div className="trophy-item">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 15c-3.31 0-6-2.69-6-6V3h12v6c0 3.31-2.69 6-6 6z" /><path d="M12 15v7M8 22h8" /></svg>
                                                <span>{activeGame.progress}</span>
                                            </div>
                                            <div className="trophy-item">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#cd7f32"><circle cx="12" cy="12" r="10" /></svg>
                                                {activeGame.bronze}
                                            </div>
                                            <div className="trophy-item">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#c0c0c0"><circle cx="12" cy="12" r="10" /></svg>
                                                {activeGame.silver}
                                            </div>
                                            <div className="trophy-item">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffd700"><circle cx="12" cy="12" r="10" /></svg>
                                                {activeGame.gold}
                                            </div>
                                            {activeGame.platinum > 0 && (
                                                <div className="trophy-item">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#e5e4e2"><circle cx="12" cy="12" r="10" /></svg>
                                                    {activeGame.platinum}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="ps5-carousel">
                                {games.map(game => (
                                    <div className="ps5-carousel-item" key={game.id}>
                                        <div
                                            className={`ps5-game-card ${activeGameId === game.id ? 'active' : ''}`}
                                            onClick={() => setActiveGameId(game.id)}
                                        >
                                            <img src={game.icon} alt={game.title} />
                                        </div>
                                        <div className={`ps5-card-label ${activeGameId === game.id ? 'active' : ''}`}>
                                            {game.title}
                                        </div>
                                    </div>
                                ))}
                                <div className="ps5-carousel-item">
                                    <div className="ps5-game-card">
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111' }}>
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ps5-card-label">Game Library</div>
                                </div>
                            </div>
                        </>
                    )}

                    {currentView === 'store' && <StoreView games={games} />}
                    {currentView === 'library' && <LibraryView games={games} />}
                    {currentView === 'profile' && <ProfileView />}
                </div>
            </div>
        </div>
    );
}
