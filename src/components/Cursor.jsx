import React, { useEffect, useRef } from 'react';

export default function Cursor() {
    const cursorDotRef = useRef(null);
    const cursorRingRef = useRef(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorRing = cursorRingRef.current;

        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorRing.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 150, fill: "forwards" });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('.hover-target')) {
                cursorRing.style.width = '50px';
                cursorRing.style.height = '50px';
                cursorRing.style.backgroundColor = 'rgba(255, 0, 85, 0.1)';
                cursorRing.style.borderColor = '#ff0055';
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.closest('.hover-target')) {
                cursorRing.style.width = '36px';
                cursorRing.style.height = '36px';
                cursorRing.style.backgroundColor = 'transparent';
                cursorRing.style.borderColor = 'rgba(255, 0, 85, 0.5)';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={cursorDotRef}></div>
            <div className="cursor-ring" ref={cursorRingRef}></div>
        </>
    );
}
