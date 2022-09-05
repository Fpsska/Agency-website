import { useState, useEffect } from 'react';

export function useWidthHandler(): { isTabletWidth: boolean } {

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [breakpoint] = useState<number>(768);
    const [isTabletWidth, setTabletWidth] = useState<boolean>(false);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        setTabletWidth(width <= breakpoint);
    }, [width, breakpoint]);

    return { isTabletWidth };
};