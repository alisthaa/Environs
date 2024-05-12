import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button when user scrolls down 20px
        const toggleVisibility = () => {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    className="fixed z-50 bottom-4 right-4 bg-primary text-black p-3  shadow-md hover:brightness-110"
                    onClick={scrollToTop}
                    title="Scroll to top"
                >
                    <HiArrowUp className="w-6 h-6" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
