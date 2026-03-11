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
        <div className='contact flex w-full'>
    <div className="left my-auto w-2/5 h-10/12">
        lkjkjllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll<br/>
        ssssssss<br/>sdadad,b
    </div>
    <div className="right w-3/5">
        <form onSubmit={handleSubmit} className='border flex flex-col justify-center text-center align-middle m-auto'>
            <div className="mt-100">
                <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} className='border' />
                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} className='border' />
                <input type="text" placeholder='Enter your Title' value={title} onChange={(e) => setTitle(e.target.value)} className='border' />
            </div>
            <textarea placeholder='Enter your message'
                value={message} onChange={(e) => setMessage(e.target.value)} className='border' />
            <button type='submit' className='border'>
                Submit
            </button>
        </form>
    </div>
</div>
    )
}

export default Contact