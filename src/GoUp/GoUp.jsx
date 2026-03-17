import { useState } from 'react';
import './GoUp.css'
import { useEffect } from 'react';

function GoUp() {
    const [showBtn, setShowBtn] = useState(false);
    
    useEffect(()=> {
        const checkScrollHeight =() => {
            if(!showBtn && window.scrollY >= 400)
                setShowBtn(true)
            else if(showBtn && window.scrollY < 400)
                setShowBtn(false)
        }
        window.addEventListener('scroll', checkScrollHeight)
        return() => {
            window.removeEventListener('scroll' ,checkScrollHeight)
        }
    },[showBtn])

    const scrollToTop = () => {
        console.log("Button clicked - trying to scroll");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }
    return (
        <div><div className={`goup ${showBtn ? 'show' : ''} `}>
            {showBtn &&(<button
                onClick={scrollToTop}
                className='ri-arrow-up-s-fill'
            >
            </button>)}
        </div></div>
    )
}

export default GoUp