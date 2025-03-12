import React from 'react'
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

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/services')
  }

  const handleServiceClick = (path) => {
    navigate(path)
  }

  return (
    <Element
      className='flex flex-col items-center justify-between xl:m-8 xl:mx-16 xl:mb-20 lg:mb-24 mb-20 lg:m-8 mx-10 xl:h-[36vh] lg:h-[62vh]'
      name='services'
    >
      <div className='flex flex-col items-center justify-between w-[140vh] h-full gap-4'>
        <h1 className='font-essemibold xl:text-[40px] lg:text-[45px] text-[34px] text-primary'>
          Services
        </h1>

        <div className='flex flex-col items-center justify-between gap-4 xl:gap-8'>
          <ul className='flex flex-col flex-wrap gap-4 h-[280px]'>
            {services.slice(0, 15).map((service, index) => (
              <button
                // onClick={() => setActiveComponent(service.component)}
                key={index}
                className='flex items-center gap-2 w-[240px] h-[40px]'
              >
                <Check />
                <div className='w-full h-full flex items-center font-eslight hover:text-secondary text-sm duration-150'
                  onClick={() => handleServiceClick(service.path)}
                >
                  {service.name}
                </div>
              </button>
            ))}
          </ul>
          <Button text='View All Services' route='#' Icon={ArrowRight} onClick={handleClick}/>
        </div>
      </div>
    </Element>
  )
}

export default HeroServices
