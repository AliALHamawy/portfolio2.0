import './Hero.css'

export default function Hero() {
    return (
        <>
            <section className="hero flex justify-between">
                <div className="left-Section flex flex-col text-center items-center justify-center">
                    <div className="image">
                        <img src="assets/me.jpg" alt="Me " className='rounded-full w-40 shadow-2xl' />
                    </div>
                    <h1>Ali AL-Hamawy</h1>
                    <h3>Front-End Dev</h3>
                    <div className='icon-container'>
                        <a href="https://www.facebook.com/share/15y8VErk1w/" target='_blank' className='ri-facebook-box-line facebook '></a>
                        <a href="https://www.instagram.com/alialhamawy?igsh=MTVjZTEzd29wNWtjeQ==" target='_blank' className='ri-instagram-line instagram'></a>
                        <a href="https://t.me/@alialhamawy" target='_blank' className='ri-telegram-line telegram'></a>
                        <a href="https://www.linkedin.com/in/ali-al-hamawy-1141b9393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='ri-linkedin-box-line linkedin'></a>
                        <a href="https://github.com/AliALHamawy" target='_blank' className='ri-github-line github'></a>
                    </div>
                </div>
                <div className='border-l border-mist-400 mind '></div>
                <div className="right-Section ">
                    <p>Welcome, I’m <span className='ali'>Ali </span><br className='fbr'/>
                        Front-End Dev,<br />
                        And this is my website <br />
                        Hope you like it. <br />
                    </p>
                </div>
            </section>
            {/* <hr className='my-5 pb-20'/> */}
        </>
    )
}
