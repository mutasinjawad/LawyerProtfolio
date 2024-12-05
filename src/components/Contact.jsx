import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Button from './Button'

const Contact = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            alert('Copied to clipboard')
        })
    };

  return (
    <div className="flex flex-col items-center justify-between lg:m-36 mx-12 h-[80vh]">
        <h1 className="font-pmedium lg:text-[60px] text-[35px] text-black mt-16">Contact Me</h1>
        <div className='flex items-start h-auto w-full transform -translate-y-36 justify-center gap-x-36'>
            <div className='flex flex-col space-y-6'>
                <div className='flex flex-col items-center justify-center w-[380px] h-[200px] cursor-pointer bg-white rounded-3xl
                hover:bg-primary-100 hover:shadow transition-all duration-300 ease-in-out'
                onClick={() => copyToClipboard('biplab_poddar@hotmail.com')}
                >
                    <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#202020"}}/>
                    <h1 className="font-pregular text-lg text-black mt-4">Email</h1>
                    <span className="font-pregular text-lg text-neutral-400">biplab_poddar@hotmail.com</span>
                </div>
                <div className='flex flex-col items-center justify-center w-[380px] h-[200px] cursor-pointer bg-white rounded-3xl
                hover:bg-primary-100 hover:shadow transition-all duration-300 ease-in-out'
                onClick={() => copyToClipboard('+8801700587914')}
                >
                    <FontAwesomeIcon icon={faPhone} size="2xl" style={{color: "#202020"}}/>
                    <h1 className="font-pregular text-lg text-black mt-4">Phone</h1>
                    <span className="font-pregular text-lg text-neutral-400">+8801700587914</span>
                </div>
                <a href="https://maps.app.goo.gl/a6DnJt5z7ypdGFbSA" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center justify-center w-[380px] h-[200px] cursor-pointer p-8 bg-white rounded-3xl
                hover:bg-primary-100 hover:shadow transition-all duration-300 ease-in-out'>
                    <FontAwesomeIcon icon={faLocationDot} size="lg" style={{color: "#202020"}}/>
                    <h1 className="font-pregular text-lg text-black mt-4">Location</h1>
                    <span className="font-pregular text-lg text-neutral-400">109, Annex Extenstion Building, Supreme Court Bar Association</span>
                </a>
            </div>
            <div className='w-[500px]'>
                <form action="" className="flex flex-col space-y-12">
                    <div className="relative w-full max-w-sm">
                        <label htmlFor="" className="absolute -top-3 left-1 transfrom translate-x-1/4 px-2 text-sm bg-whiteBg font-plight text-neutral-400">
                            Name
                        </label>
                        <input
                            id="input"
                            type="text"
                            placeholder='Insert your name' 
                            className="w-[500px] h-[70px] bg-whiteBg border-2 border-neutral-300 rounded-3xl font-pextralight text-lg focus:border-[#505050] focus:outline-none px-6 py-2"
                        />
                    </div>
                    <div className="relative w-full max-w-sm">
                        <label htmlFor="" className="absolute -top-3 left-1 transfrom translate-x-1/4 px-2 text-sm bg-whiteBg font-plight text-neutral-400">
                            Email
                        </label>
                        <input
                            id="input"
                            type="text"
                            placeholder='Insert your email' 
                            className="w-[500px] h-[70px] bg-whiteBg border-2 border-neutral-300 rounded-3xl font-pextralight text-lg focus:border-[#505050] focus:outline-none px-6 py-2"
                        />
                    </div>
                    <div className="relative w-full max-w-sm">
                        <label htmlFor="" className="absolute -top-3 left-1 transfrom translate-x-1/4 px-2 text-sm bg-whiteBg font-plight text-neutral-400">
                            Message
                        </label>
                        <textarea placeholder='Message' rows="9" className="w-[500px] bg-whiteBg border-2 border-neutral-300 rounded-3xl font-pextralight text-lg focus:border-[#505050] focus:outline-none resize-none px-6 py-2"/>
                    </div>
                    <div className="flex justify-between">
                        <Button text="Send" icon={faPaperPlane} route="#" classStyle="ml-6"/>
                        <div className='flex items-center justify-center gap-x-6 mr-2'>
                            <a href="https://www.facebook.com/muhtasin.jawad.1" target="_blank" rel="noopener noreferrer" className=' text-xl text-black hover:text-[#505050] transition duration-300 ease-in-out cursor-pointer'>
                                <FontAwesomeIcon icon={faFacebook} size='2xl'/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='text-xl text-black hover:text-[#505050] transition duration-300 ease-in-out cursor-pointer'>
                                <FontAwesomeIcon icon={faInstagram} size="2xl"/>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='text-xl text-black hover:text-[#505050] transition duration-300 ease-in-out cursor-pointer'>
                                <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact