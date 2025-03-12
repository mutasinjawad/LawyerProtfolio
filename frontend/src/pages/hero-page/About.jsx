import React, { useEffect, useState } from 'react';
import { Element, Link } from "react-scroll";
import Lawyer from '../../assets/images/lawyer.jpg';
import SupremeCourt from '../../assets/images/supreme-court.png';
import SupremeCourt2 from '../../assets/images/supreme-court2.png';
import Bar from '../../assets/images/international-bar-association.png';
import CriminalCourt from '../../assets/images/international-criminal-court.png';
import Button from '../../components/Button';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { Facebook, Instagram, Linkedin, Send, Upload } from 'lucide-react';

const About = () => {

    const [iconSize, setIconSize] = useState(24); // Icon size
    const [currentImage, setCurrentImage] = useState(0); // Current image index

    const [images, setImages] = useState([
        SupremeCourt,
        SupremeCourt2
    ])

    // Update icon size
    const updateIconSize = () => {
        const width = window.innerWidth;

        if (width >= 1280) {
            // XL screens
            setIconSize(16);
        } else if (width >= 775) {
            // LG screens
            setIconSize(14);
        } else {
            // Small screens
            setIconSize(10);
        }
    };

    // Event listener for icon size
    useEffect(() => {
        updateIconSize(); // Set initially
        window.addEventListener('resize', updateIconSize);

        return () => {
          window.removeEventListener('resize', updateIconSize); // Cleanup
        };
    }, []);

return (
    // Start of the About component
    <Element className="flex justify-center xl:pt-10 xl:h-[800px] lg:pt-8 lg:h-[700px] md:h-[1000px] h-[980px] pt-12 mb-2" name="about">
        <div className='flex lg:flex-row flex-col-reverse gap-y-2 gap-x-2 items-center justify-center xl:w-[1310px] lg:w-[1060px] md:w-[800px] w-[500px] h-full xl:px-8 md:px-8 px-6'>
            
            {/* Photos & Help */}
            <div className='flex flex-col lg:w-2/3 lg:h-full md:w-full md:h-[65%] w-full h-[50%] gap-2 lg:items-start justify-center'>
                {/* Photos */}
                <div className='w-full xl:h-2/3 lg:h-3/5 md:h-2/3 h-[50%] rounded-[5px] overflow-hidden'>
                    <ImageSlider images={images} />
                </div>

                {/* Help */}
                <form class="w-full xl:h-1/3 lg:h-2/5 md:h-1/3 h-[50%] bg-white rounded-[5px] xl:p-4 md:p-3 p-2">
                    <div className='flex items-center justify-between w-full md:pb-2'>
                        <h1 className='font-rsemibold xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] pb-2'>How Can We Help You?</h1>
                        <div className='flex gap-6'>
                            <Button text="Upload Files" Icon={Upload} iconSize={iconSize}/>
                            <Button text='Send' Icon={Send} route='#' iconSize={iconSize} />
                        </div>
                    </div>
                    {/* Name & Email */}
                    <div className="flex flex-col w-full mb-1 md:flex-row gap-x-2 gap-y-1 md:mb-2">
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full border-[1px] border-neutral-300 rounded-[5px] font-rregular xl:text-sm md:text-[13px] focus:border-[#404030] focus:outline-none xl:px-2 xl:py-2 md:px-2 md:py-2 px-2 py-1 text-[12px]"
                        />
                        <input
                            id="email"
                            type="text"
                            placeholder="Your Email"
                            className="w-full border-[1px] border-neutral-300 rounded-[5px] font-rregular xl:text-sm md:text-[13px] focus:border-[#404030] focus:outline-none xl:px-2 xl:py-2 md:px-2 md:py-2 px-2 py-1 text-[12px]"
                        />
                    </div>

                    {/* Message */}
                    <div className="w-full mb-1">
                        <textarea 
                            id="message"
                            placeholder="Your Message"
                            className="w-full xl:h-[130px] lg:h-[170px] md:h-[100px] h-[105px] resize-none border-[1px] border-neutral-300 rounded-[5px] font-rregular xl:text-sm md:text-[13px] focus:border-[#404030] focus:outline-none xl:px-2 xl:pt-2 md:px-2 md:py-2 px-2 py-1 text-[12px]"
                        />
                    </div>
                </form>
            </div>

            {/* About & Members */}
            <div className='flex lg:flex-col md:flex-row flex-col lg:w-1/3 lg:h-full h-[50%] md:h-[35%] gap-2'> 

                {/* About */}
                <div className='lg:h-4/6 flex flex-col lg:items-center items-start justify-between gap-2 bg-accent rounded-[5px] xl:p-4 md:p-3 p-2'>

                    {/* Photo & About until medium view */}
                    <div className='flex gap-2 md:gap-2'>
                        <img
                            src={Lawyer}
                            alt="Lawyer"
                            className="xxl:w-[150px] xl:w-[180px] lg:w-[120px] md:w-[130px] w-[80px] xl:rounded-2xl md:rounded-xl rounded-lg"
                        />
                        <div className='flex flex-col items-start justify-center block lg:hidden'>
                            <h1 className='font-rbold md:text-[36px] text-[22px]'>
                                Biplab Kumar Poddar
                            </h1>
                            <h2 className='font-rmedium md:text-[18px] text-[14px]'>
                                Advocate, Supreme Court of Bangladesh
                            </h2>
                        </div>
                    </div>

                    {/* About */}
                    <div className='flex flex-col justify-end h-full lg:justify-between'>
                        <div>
                            <h1 className='font-rbold xxl:text-[40px] xl:text-[30px] lg:text-[24px] hidden lg:block'>
                                Biplab Kumar Poddar
                            </h1>
                            <h2 className='font-rmedium xxl:text-[20px] xl:text-[15px] lg:text-[12px] text-base xl:mb-4 lg:mb-3 hidden lg:block'>
                                Advocate, Supreme Court of Bangladesh
                            </h2>
                            <p className='xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm text-[12px] mb-4'>
                                With 20+ years of legal experience across Bangladesh, the UK, and India, I am a seasoned lawyer and International Bar Association member. I've represented cases at the International Court of Justice and UK Supreme Court, and currently act as the legal representative for two Bangladeshi banks in India. I'm also dedicated to public interest law, filing cases in the Supreme Court of Bangladesh.
                            </p>
                        </div>
                        <div className='flex items-center justify-between w-full gap-12'>
                            <Link to='contact' smooth={true} offset={-200} duration={500}>
                                <Button text='Contact Me' Icon={Send} route='#' iconSize={iconSize} />
                            </Link>
                            <div className='flex items-center justify-center m-2 space-x-4'>
                                <a href='https://www.facebook.com/muhtasin.jawad.1' target='_blank' rel='noopener noreferrer'><Facebook className="w-4 h-4 text-black duration-150 hover:text-secondary xl:w-5 xl:h-5" /></a>
                                <a href='#' target='_blank' rel='noopener noreferrer'><Instagram className="w-4 h-4 text-black duration-150 hover:text-secondary xl:w-5 xl:h-5" /></a>
                                <a href='#' target='_blank' rel='noopener noreferrer'><Linkedin className="w-4 h-4 text-black duration-150 hover:text-secondary xl:w-5 xl:h-5" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Members */}
                <div className="w-full lg:h-2/6 h-full bg-white rounded-[5px] xl:p-4 md:p-3 p-2">
                    <h1 className='font-rsemibold xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] pb-2'>Members Of</h1>
                    <hr style={{ border: "1px grey #333333" }} />
                    <div className='flex flex-col w-full overflow-auto'>
                        <a className='flex items-center justify-start w-full gap-5 my-1 cursor-pointer xl:my-3 md:my-2' href='https://www.ibanet.org/' target='_blank' rel='noopener noreferrer'>
                            <img src={Bar} alt="" className='w-10 aspect-square' />
                            <p className='font-rlight lg:text-[13px] md:text-sm'>International Bar Association</p>
                        </a>
                        <hr style={{ border: "1px grey #e0e0e0" }} />
                        <a className='flex items-center justify-start w-full gap-5 my-1 cursor-pointer xl:my-3 md:my-2' href='https://www.icc-cpi.int/' target='_blank' rel='noopener noreferrer'>
                            <img src={CriminalCourt} alt="" className='w-10 aspect-square' />
                            <p className='font-rlight lg:text-[13px] md:text-sm'>International Criminal Court</p>
                        </a>
                        <hr style={{ border: "1px grey #333333" }} />
                    </div>
                </div>

            </div>

        </div>
    </Element>
  );
};

export default About;