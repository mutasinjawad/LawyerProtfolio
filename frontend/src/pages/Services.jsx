import React from 'react'
import { useState, useEffect } from 'react'
import { Element } from 'react-scroll'
import { useNavigate } from 'react-router';
import { Check, ArrowRight} from 'lucide-react';
import Footer from './Footer';

const HeroServices = () => {
    const services = [
    { name: 'Administrative Law', path: '/administrative-law'},
    { name: 'Admiralty and Shipping', path: '/admiralty-and-shipping'},
    { name: 'Aviation Matters', path: '/aviation-matters'},
    { name: 'Banking Litigation', path: '/banking-litigation'},
    { name: 'Civil Litigation', path: '/civil-litigation'},
    { name: 'Commercial Litigation', path: '/commercial-litigation'},
    { name: 'Constitutional Law', path: '/constitutional-law'},
    { name: 'Corporate Law', path: '/corporate-law'},
    { name: 'Environmental Law', path: '/environmental-law'},
    { name: 'Family Law', path: '/family-law'},
    { name: 'Intellectual Property', path: '/intellectual-property'},
    { name: 'Labor Law', path: '/labor-law'},
    { name: 'Taxation Matters', path: '/taxation-matters'},
    { name: 'Contracts', path: '/contracts' },
    { name: 'Global Investment and Citizenship', path: '/global-investment-and-citizenship' },
    { name: 'Alternative Dispute Resolution', path: '/alternative-dispute-resolution' },
    { name: 'Business Setup', path: '/business-setup' },
    { name: 'Government Contracts and Litigation', path: '/government-contracts-and-litigation' },
    { name: 'Company Formation and Registration', path: '/company-formation-and-registration' },
    { name: 'Criminal Prosecution and Defense', path: '/criminal-prosecution-and-defense' },
    { name: 'Domestic and International Arbitration', path: '/domestic-and-international-arbitration' },
    { name: 'Family Matters and Child Custody', path: '/family-matters-and-child-custody' },
    ]
    const sortedServices = services.sort((a, b) => a.name.localeCompare(b.name))

    const [iconSize, setIconSize] = useState(getSize());

    const navigate = useNavigate()

    function getSize() {
        if (window.innerWidth > 1280) return 16;
        if (window.innerWidth > 775) return 14;
        if (window.innerWidth > 640) return 10;
        return 9;
      }

    const handleServiceClick = (path) => {
        navigate(path)
    }

    useEffect(() => {
        const handleResize = () => setIconSize(getSize());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Element className='flex flex-col items-center justify-between w-full h-full pt-16 xs:h-screen md:pt-44 xs:pt-28' name='services'>
            <div className='flex flex-col items-center justify-between w-full pb-8 xs:pb-0'>
                <ul className='flex flex-col flex-wrap gap-4 xl:h-[400px] lg:h-[400px] sm:h-[700px] xs:h-[500px] h-[500px]'>
                    {sortedServices.map((service, index) => (
                    <button
                        // onClick={() => setActiveComponent(service.component)}
                        key={index}
                        className='flex items-center gap-2 xl:w-[280px] xl:h-[50px] lg:w-[190px] lg:h-[50px] sm:w-[260px] sm:h-[45px] xs:w-[160px] xs:h-[30px] w-[120px] h-[30px]'
                    >
                        <Check size={iconSize}/>
                        <p className='flex items-center h-full duration-150 hover:text-secondary font-rlight 
                            xl:text-[15px] lg:text-[12px] md:text-[13px] sm:text-[12px] xs:text-[10px] text-[9px] 
                            text-left break-words whitespace-normal'
                        onClick={() => handleServiceClick(service.path)}
                        >
                        {service.name}
                        </p>
                    </button>
                    ))}
                </ul>
            </div>
            <Footer />
        </Element>
    )
}

export default HeroServices
