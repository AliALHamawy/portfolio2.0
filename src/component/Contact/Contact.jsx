import './Contact.css'
import emailjs from '@emailjs/browser'

import { useState } from 'react'

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

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
        

        <div className='flex justify-center align-middle flex-col h-screen m-auto  '>
            <form onSubmit={handleSubmit} className='emailForm border'>
                <input
                    type="text"
                    placeholder='Enter your name'
                    value={name}
                    className='border'
                    onChange={(e) => setName(e.target.value)} />
                <input
                    type="email"
                    placeholder='Enter yor email'
                    value={email}
                    className='border'
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="text"
                    placeholder='Enter your Title'
                    value={title}
                    className='border'
                    onChange={(e) => setTitle(e.target.value)} />
                <textarea cols={30} rows={10} placeholder='Enter your message' value={message} className='border' onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type='submit' className='border'>Submit</button>
            </form>
        </div>
    )
}

export default Contact