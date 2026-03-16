import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isHover, setIsHover] = useState(false)
    // const [theme, setTheme] = useState(() => {
    //     return localStorage.getItem("theme") || "dark";
    // })

    // useEffect(() => {
    //     if (theme === "light") {
    //         document.documentElement.classList.add("light")
    //     } else {
    //         document.documentElement.classList.remove("light")
    //     }
    //     localStorage.setItem("theme", theme)
    // }, [theme])

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop === 0) {
                setIsVisible(true)
            }
            else if (scrollTop > lastScrollTop && !isHover) {
                setIsVisible(false)
            }
            else if (scrollTop < scrollTop && scrollTop > 0 && !isHover) {
                setIsVisible(true)
            }
            setLastScrollTop(scrollTop)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop, isHover]);

    // للـ Hover
    const handleTopTriggerEnter = () => {
        setIsVisible(true);
        setIsHover(true);
    };

    const handleTopTriggerLeave = () => {

        setIsHover(false);

        if (window.pageYOffset === 0) {
            setTimeout(() => {
                if (!isHover) {
                    setIsVisible(false);
                }
            }, 300)
        }
    };

    const handleNavbarEnter = () => {
        setIsHover(true)
        setIsVisible(true)
    }

    const handleNavbarLeave = () => {

        setIsHover(false);

        if (window.pageYOffset === 0) {
            setTimeout(() => {
                if (!isHover)
                    setIsVisible(false)
            }, 300)
        }
    };

    return (
        <>

            <div
                className="top-trigger"
                onMouseEnter={handleTopTriggerEnter}
                onMouseLeave={handleTopTriggerLeave}
            ></div>

            <nav
                className={`flex justify-between mb-3 md:px-10 px-4 align-middle border-b-mist-400 shadow ${isVisible ? 'visible' : ''
                    }`}
                onMouseEnter={handleNavbarEnter}
                onMouseLeave={handleNavbarLeave}
            >
                <div className="left-section">
                    <Link to="/">
                        <img src="/src/assets/logo.png" alt="" className='w-20 ' />
                    </Link>
                </div>
                <div className="right-section flex flex-row-reverse justify-center align-middle gap-3">
                    <span
                        // onClick={() => {
                        //     setTheme(theme === "dark" ? "light" : "dark")
                        // }}
                        className='light ri-sun-line flex m-5 mr-2 font-bold text-xl color-mod border text-center justify-center align-middle pt-1.25 w-10 h-10 rounded-full' />
                    <div className='flex justify-between gap-12 mt-7'>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;