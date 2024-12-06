import React from 'react'
import { Element } from "react-scroll";
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
    <Element className="flex flex-col items-center justify-between lg:m-36 mx-12 lg:h-[70vh]" name="contact">
        <h1 className="font-psemibold lg:text-[60px] text-[34px] text-black">Contact Me</h1>
        <div className="flex lg:flex-row flex-col justify-center items-start w-full lg:gap-16 gap-6 lg:mb-0 mb-8 lg:mt-0 mt-8">
            <div className='flex flex-col items-center justify-center space-y-6 lg:w-auto w-full lg:h-[49vh]'>
                <div className='flex flex-col items-center justify-center lg:p-8 p-4 lg:text-2xl h-[20vh] lg:w-[36vh] w-full bg-white rounded-3xl hover:bg-primary-100 hover:shadow cursor-pointer transition-all duration-300 ease-in-out'
                onClick={() => copyToClipboard('biplab_poddar@hotmail.com')}
                >
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#202020"}}/>
                    <h1 className="font-pregular lg:text-lg text-black mt-4">Email</h1>
                    <span className="font-pregular lg:text-lg text-neutral-400 text-center">biplab_poddar@hotmail.com</span>
                </div>
                <div className='flex flex-col items-center justify-center lg:p-8 p-4 lg:text-2xl h-[20vh] lg:w-[36vh] w-full bg-white rounded-3xl hover:bg-primary-100 hover:shadow cursor-pointer transition-all duration-300 ease-in-out'
                onClick={() => copyToClipboard('+8801700587914')}
                >
                    <FontAwesomeIcon icon={faPhone} style={{color: "#202020"}}/>
                    <h1 className="font-pregular lg:text-lg text-black mt-4">Phone</h1>
                    <span className="font-pregular lg:text-lg text-neutral-400 text-center">+8801700587914</span>
                </div>
                <a href="https://maps.app.goo.gl/a6DnJt5z7ypdGFbSA" target="_blank" rel="noopener noreferrer" className='flex flex-col items-center justify-center lg:text-2xl lg:p-8 p-4 h-[20vh] lg:w-[36vh] w-full bg-white rounded-3xl hover:bg-primary-100 hover:shadow cursor-pointer transition-all duration-300 ease-in-out'>
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#202020"}}/>
                    <h1 className="font-pregular lg:text-lg text-black mt-4">Location</h1>
                    <span className="font-pregular lg:text-lg text-neutral-400 text-center">109, Annex Extenstion Building, Supreme Court Bar Association</span>
                </a>
            </div>
            <div className='lg:w-[45vh] w-full lg:h-[49vh] lg:mt-0 mt-12'>
                <form action="" className='flex flex-col lg:space-y-[4vh] space-y-[2vh]'>
                    <div className="relative">
                        <label htmlFor="" className="absolute -top-3 left-1 transfrom translate-x-1/4 px-2 text-sm bg-whiteBg font-plight text-neutral-400">
                            Name
                        </label>
                        <input
                            id="input"
                            type="text"
                            placeholder='Insert your name' 
                            className="w-full h-[6vh] bg-whiteBg border-2 border-neutral-300 rounded-3xl font-pextralight text-lg focus:border-[#505050] focus:outline-none px-6 py-2"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="" className="absolute -top-3 left-1 transfrom translate-x-1/4 px-2 text-sm bg-whiteBg font-plight text-neutral-400">
                            Email
                        </label>
                        <input
                            id="input"
                            type="text"
                            placeholder='Insert your email' 
                            className="w-full h-[6vh] bg-whiteBg border-2 border-neutral-300 rounded-3xl font-pextralight text-lg focus:border-[#505050] focus:outline-none px-6 py-2"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="" className="absolute -top-3 left-1 transfrom translate-x-1/4 px-2 text-sm bg-whiteBg font-plight text-neutral-400">
                            Message
                        </label>
                        <textarea placeholder='Message' className="w-full h-[20vh] bg-whiteBg border-2 border-neutral-300 rounded-3xl font-pextralight text-lg focus:border-[#505050] focus:outline-none resize-none px-6 py-2"/>
                    </div>
                    <div className="flex justify-between">
                        <Button text="Send" icon={faPaperPlane} route="#" classStyle="ml-6"/>
                        <div className='flex items-center justify-center gap-x-6 mr-2'>
                            <a href="https://www.facebook.com/muhtasin.jawad.1" target="_blank" rel="noopener noreferrer" className='lg:text-[40px] text-3xl text-black hover:text-[#505050] transition duration-300 ease-in-out cursor-pointer'>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='lg:text-[40px] text-3xl text-black hover:text-[#505050] transition duration-300 ease-in-out cursor-pointer'>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='lg:text-[40px] text-3xl text-black hover:text-[#505050] transition duration-300 ease-in-out cursor-pointer'>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </Element>
  )
}

export default Contact