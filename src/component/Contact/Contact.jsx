import { useState, useEffect } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [isMobile, setIsMobile] = useState(window.innerWidth < 665)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 665)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_899nnrb'
        const templateId = 'template_ju4cwgs'
        const publicKey = 'epKj-gKJfCXPXGR5C'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Ali AL-Hamawy',
            title: title,
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent succesfully!", response);
                setName('')
                setEmail('')
                setTitle('')
                setMessage('')
            })
            .catch((erorr) => {
                console.error("Failed to send email:", erorr);
            })
    }

    return (
        <div className='contact flex '>
    <div className='container'>
        <div className="leftsc  ">
        Contact Us
    </div>
    <div className="rightsc">
        <form onSubmit={handleSubmit} className=' flex flex-col justify-center text-center align-middle m-auto'>
            
                <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} className='' />
                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='' />
                <input type="text" placeholder='Enter your Title' value={title} onChange={(e) => setTitle(e.target.value)} className='' />
            <textarea placeholder='Enter your message'
                value={message} onChange={(e) => setMessage(e.target.value)} className='' />
            <button type='submit' className='contact-btn'>
                Submit
            </button>
        </form>
    </div>
    </div>
</div>
    )
}

export default Contact