import React, { useState } from 'react';

export default function StoreView({ games }) {
    const [activeTab, setActiveTab] = useState('Latest');
    // Push the newest additions to the front
    const featuredGames = [...games].reverse();

    return (
        <div className="ps5-store-view fade-up-enter">
            <div className="store-header">
                <h1>PlayStation Store</h1>
                <div className="store-tabs">
                    {['Latest', 'Collections', 'Deals', 'Subscriptions'].map(tab => (
                        <div
                            key={tab}
                            className={`store-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
            </div>

            <div className="store-tab-content fade-up-enter" key={activeTab}>
                {activeTab === 'Latest' && (
                    <>
                        <div className="store-hero">
                            <img src={featuredGames[0].bg} alt="Hero" className="store-hero-bg" />
                            <div className="store-hero-content">
                                <div className="store-hero-tag">Out Now</div>
                                <h2>{featuredGames[0].title}</h2>
                                <p style={{ fontSize: '1.2rem', opacity: 0.9, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Experience the critically acclaimed masterpiece.</p>
                                <button className="ps5-store-btn">$69.99 - Add to Cart</button>
                            </div>
                        </div>

                        <h3 className="store-section-title">New Releases</h3>
                        <div className="store-grid">
                            {featuredGames.slice(1, 5).map(game => (
                                <div key={`store-${game.id}`} className="store-card">
                                    <img src={game.icon} alt={game.title} />
                                    <div className="store-card-details">
                                        <div className="store-card-title">{game.title}</div>
                                        <div className="store-card-price">{game.isOwned ? 'Purchased' : '$59.99'}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {activeTab === 'Collections' && (
                    <div className="collections-grid">
                        <div className="collection-card">
                            <img src={featuredGames[1].bg} alt="Essential" />
                            <div className="collection-overlay">
                                <h3>PlayStation Essentials</h3>
                            </div>
                        </div>
                        <div className="collection-card">
                            <img src={featuredGames[3].bg} alt="Indie" />
                            <div className="collection-overlay">
                                <h3>Indie Masterpieces</h3>
                            </div>
                        </div>
                        <div className="collection-card">
                            <img src={featuredGames[2].bg} alt="Multiplayer" />
                            <div className="collection-overlay">
                                <h3>Multiplayer Mayhem</h3>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Deals' && (
                    <div className="store-grid">
                        {featuredGames.slice(1, 6).map(game => (
                            <div key={`deal-${game.id}`} className="store-card deal-card">
                                <img src={game.icon} alt={game.title} />
                                <div className="store-card-details">
                                    <div className="deal-badge">-50%</div>
                                    <div className="store-card-title">{game.title}</div>
                                    <div className="price-row">
                                        <span className="old-price">$59.99</span>
                                        <span className="new-price">$29.99</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'Subscriptions' && (
                    <div className="subscriptions-container">
                        <div className="sub-tier essential">
                            <div className="sub-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
                            </div>
                            <h3>PlayStation Plus Essential</h3>
                            <p>Monthly Games, Online Multiplayer, Exclusive Discounts.</p>
                            <div className="sub-price">$9.99 / month</div>
                            <button className="ps5-store-btn sub-btn">Subscribe</button>
                        </div>
                        <div className="sub-tier extra">
                            <div className="sub-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
                            </div>
                            <h3>PlayStation Plus Extra</h3>
                            <p>Everything in Essential, plus a massive catalog of PS4 & PS5 games.</p>
                            <div className="sub-price">$14.99 / month</div>
                            <button className="ps5-store-btn sub-btn">Subscribe</button>
                        </div>
                        <div className="sub-tier premium">
                            <div className="sub-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" /></svg>
                            </div>
                            <h3>PlayStation Plus Premium</h3>
                            <p>Everything in Extra, plus classics catalog, game trials, and cloud streaming.</p>
                            <div className="sub-price">$17.99 / month</div>
                            <button className="ps5-store-btn sub-btn">Subscribe</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
