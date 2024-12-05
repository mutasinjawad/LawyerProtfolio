import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Button from './Button'

const Contact = () => {
  return (
    <div className="flex flex-col w-full items-center justify-start">
        <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 w-full max-w-4xl p-8 rounded-xl">
            <div className='flex flex-col space-y-8 justify-between'>
                <div>
                    <h1 className='font-pbold text-4xl tracking-wide'>Contact Me</h1>
                    <p className="pt-2 font-pregular text-gray-600 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, nihil temporibus?</p>
                </div>
                <div className='flex flex-col space-y-6'>
                    <div className='inline-flex space-x-2 items-center'>
                        <FontAwesomeIcon icon={faPhone} size="lg" style={{color: "#202020"}}/>
                        <span className="font-plight text-lg">+(880) 111 222 3333</span>
                    </div>
                    <div className='inline-flex space-x-2 items-center'>
                        <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#202020"}}/>
                        <span className="font-plight text-lg">examplemail@gmail.com</span>
                    </div>
                    <div className='inline-flex space-x-2 items-center'>
                        <FontAwesomeIcon icon={faLocationDot} size="lg" style={{color: "#202020"}}/>
                        <span className="font-plight text-lg">109, Annex Extenstion Building, Supreme Court Bar Association</span>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <a href="">
                        <FontAwesomeIcon icon={faFacebook} size="lg"/>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faInstagram} size="lg"/>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </a>
                </div>
            </div>
            <div>
                <div className='bg-white rounded-3xl p-8 border border-neutral-200 md:w-64'>
                    <form action="" className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="" className="">Your name</label>
                            <input type="text" placeholder='Your name' className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="" className="">Email Address</label>
                            <input type="email" placeholder='Email Address' className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="" className="">Message</label>
                            <textarea placeholder='Message' rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none" />
                        </div>
                        <div className="flex justify-end">
                            <Button text="Send" icon={faPaperPlane} route="#" classStyle="ml-6"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact