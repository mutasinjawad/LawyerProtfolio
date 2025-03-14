import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../../components/Button'
import { Element } from 'react-scroll'
import { useNavigate } from 'react-router'
import { Check, ArrowRight} from 'lucide-react';

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

  const [iconSize, setIconSize] = useState(getSize());

  const navigate = useNavigate()

  function getSize() {
    if (window.innerWidth > 1280) return 16;
    if (window.innerWidth > 775) return 14;
    if (window.innerWidth > 640) return 10;
    return 9;
  }

  const handleClick = () => {
    navigate('/services')
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
    <Element className='flex items-center justify-center xl:py-10 xl:h-[600px] lg:h-[700px] md:h-[520px] xs:h-[460px] h-[400px] md:py-8 xs:py-6 py-4 w-full overflow-hidden' name='services'>
      <div className='flex flex-col items-center justify-between md:w-[1300px] sm:w-[500px] xs:w-[440px] w-[300px] h-full md:px-6'>
        <h1 className='font-essemibold xl:text-[40px] lg:text-[45px] md:text-[34px] xs:text-[28px] text-[22px] text-primary'>
          Services
        </h1>
          <ul className='flex flex-col items-center justify-start flex-wrap xl:gap-4 gap-2 xl:h-[280px] md:h-[250px] xs:h-[300px] h-[300px]'>
            {services.slice(0, 15).map((service, index) => (
              <button
                // onClick={() => setActiveComponent(service.component)}
                key={index}
                className='flex items-center gap-2 sm:w-[240px] sm:h-[40px] xs:w-[170px] xs:h-[30px] w-[120px] h-[22px]'
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
          <Button text='View All Services' route='#' Icon={ArrowRight} onClick={handleClick} iconSize={iconSize}/>
      </div>
    </Element>
  )
}

export default HeroServices