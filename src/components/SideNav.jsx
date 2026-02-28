import React from 'react';
import psLogo from '../assets/ps logo.jpeg';

export default function SideNav({ currentView, setCurrentView }) {
    return (
        <div className="ps5-sidebar">
            <div className="ps5-sidebar-logo" style={{ backgroundImage: `url(${psLogo})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '32px', height: '32px', borderRadius: '50%' }}>
            </div>
            <div className="ps5-nav-items">
                <div
                    className={`ps5-nav-item ${currentView === 'games' ? 'active' : ''}`}
                    onClick={() => setCurrentView('games')}
                    title="Games"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2" ry="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>
                </div>
                <div
                    className={`ps5-nav-item ${currentView === 'store' ? 'active' : ''}`}
                    onClick={() => setCurrentView('store')}
                    title="Store"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                </div>
                <div
                    className={`ps5-nav-item ${currentView === 'library' ? 'active' : ''}`}
                    onClick={() => setCurrentView('library')}
                    title="Library"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                </div>
                <div
                    className={`ps5-nav-item ${currentView === 'profile' ? 'active' : ''}`}
                    onClick={() => setCurrentView('profile')}
                    title="Profile"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
            </div>
            <div className="ps5-sidebar-bottom">
                <div className="ps5-nav-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
                </div>
            </div>
        </div>
    );
}
