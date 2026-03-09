import './Hero.css'

export default function Hero() {
    return (
        <>
            <section className="hero flex justify-between">
                <div className="left-Section flex flex-col text-center items-center justify-center">
                    <div className="image">
                        <img src="/src/assets/me.jpg" alt="Me " className='rounded-full w-40 shadow-2xl' />
                    </div>
                    <h1>Ali AL-Hamawy</h1>
                    <h3>Front-End Dev</h3>
                    <div className='icon-container'>
                        <a href="#" className='ri-facebook-box-line facebook '></a>
                        <a href="#" className='ri-instagram-line instagram'></a>
                        <a href="#" className='ri-telegram-line telegram'></a>
                        <a href="#" className='ri-linkedin-box-line linkedin'></a>
                        <a href="#" className='ri-github-line github'></a>
                    </div>
                </div>
                <div className='border-l border-mist-400 mind'></div>
                <div className="right-Section ">
                    <p>Welcome, I’m <span className='ali'>Ali</span><br />
                        Front-End Dev,<br />
                        And this is my website <br />
                        Hope you like it. <br />
                    </p>
                </div>
            </section>
            <hr className='my-5 pb-20'/>
        </>
    )
}
