import React, { useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SocialLobby from './SocialLobby';

export default function Dashboard() {
    const dashboardRef = useRef(null);

    useEffect(() => {
        const dashboard = dashboardRef.current;

        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            const xAxis = (window.innerWidth / 2 - posX) / 40;
            const yAxis = (window.innerHeight / 2 - posY) / 40;

            dashboard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        };

        const handleMouseOut = () => {
            dashboard.style.transition = 'transform 0.5s ease';
            dashboard.style.transform = `rotateY(-10deg) rotateX(5deg)`;
        };

        const handleMouseEnter = () => {
            dashboard.style.transition = 'none';
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <div className="dashboard hover-target" ref={dashboardRef}>
            <Sidebar />
            <MainContent />
            <SocialLobby />
        </div>
    );
}
