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
        <div className='justify-center flex align-middle min-h-screen m-auto text-center gap-5 contact'>
            <form onSubmit={handleSubmit} className='emailForm border flex justify-center  align-middle text-center w-11/12 h-auto m-auto gap-5 p-5' style={{
                flexDirection: isMobile ? 'column' : 'row',
            }}>
                <div className="container flex flex-col gap-10 justify-center" style={{
                    width: isMobile ? '100%' : '41.666667%'
                }}>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        value={name}
                        className='border h-2/12'
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        className='border h-2/12'
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input
                        type="text"
                        placeholder='Enter your Title'
                        value={title}
                        className='border h-2/12'
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    
                    {/* Button placement based on screen size */}
                    {!isMobile && (
                        <button type='submit' className='border'>
                            Submit
                        </button>
                    )}
                </div>
                
                <div className="flex flex-col gap-7 " style={{
                    width: isMobile ? '100%' : '58.333333%'
                }}>
                    <textarea 
                        cols={30} 
                        rows={isMobile ? 10 : 20} 
                        placeholder='Enter your message' 
                        value={message} 
                        className='border w-full  md:h-11/12 m-auto' 
                        onChange={(e) => setMessage(e.target.value)} 
                    />
                    
                    {/* Button at bottom for mobile */}
                    {isMobile && (
                        <button type='submit' className='border w-full'>
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Contact