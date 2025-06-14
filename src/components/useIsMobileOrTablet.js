import { useEffect, useState } from 'react';

export default function useIsMobileOrTablet() {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024); // <1024 = tablet and below

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobileOrTablet;
}
