import React from 'react'
import { useState, useEffect } from 'react'
import { ChevronRight, ChevronsDown, X } from 'lucide-react';
import Button from './Button';

const Case = () => {

  const cases = [
    {
      "id": 1,
      "title": "State v. TechGlobal Ltd.",
      "type": "Corporate Fraud",
      "summary": "TechGlobal Ltd. was accused of creating fake subsidiaries to evade taxes. The investigation uncovered a network of shell companies used to hide profits.",
      "outcome": "The company paid a $1 billion fine, and key executives were barred from holding leadership roles for 10 years."
    },
    {
      "id": 2,
      "title": "Emily Brown v. Alpha Medical Center",
      "type": "Medical Malpractice",
      "summary": "Emily Brown sued Alpha Medical Center for performing a surgery without informed consent, leading to complications.",
      "outcome": "Emily received $500,000 in compensation for negligence."
    },
    {
      "id": 3,
      "title": "Johnson v. Clark Industries",
      "type": "Labor Dispute",
      "summary": "Workers sued Clark Industries for unpaid overtime wages over a five-year period.",
      "outcome": "The court awarded $2 million in back wages to the workers."
    },
    {
      "id": 4,
      "title": "City of Metropolis v. Skyline Developers",
      "type": "Environmental Law",
      "summary": "Skyline Developers was accused of illegal deforestation while constructing a new housing complex.",
      "outcome": "The company was fined $200,000 and ordered to replant the area."
    },
    {
      "id": 5,
      "title": "Martha Green v. MetroRail Co.",
      "type": "Personal Injury",
      "summary": "Martha Green sued MetroRail Co. after slipping on an unmarked wet floor at a train station, resulting in a broken arm.",
      "outcome": "MetroRail was held liable and paid $50,000 in damages."
    },
    {
      "id": 6,
      "title": "Innovate Inc. v. Bright Ideas LLC",
      "type": "Intellectual Property",
      "summary": "Innovate Inc. accused Bright Ideas LLC of copying their patented lighting system design.",
      "outcome": "The court ordered Bright Ideas to cease production and pay $1.5 million in damages."
    },
    {
      "id": 7,
      "title": "The People v. Richard Malone",
      "type": "Criminal Embezzlement",
      "summary": "Richard Malone was accused of embezzling $1.2 million from his employer over a span of six years.",
      "outcome": "Malone was sentenced to eight years in prison and ordered to repay the full amount."
    },
    {
      "id": 8,
      "title": "Sarah Hill v. City General Hospital",
      "type": "Medical Negligence",
      "summary": "Sarah Hill sued the hospital after an incorrect medication was administered, causing severe allergic reactions.",
      "outcome": "Hill was awarded $300,000 for damages."
    },
    {
      "id": 9,
      "title": "State v. James Carter",
      "type": "Tax Evasion",
      "summary": "James Carter failed to report income of over $5 million, resulting in a tax evasion charge.",
      "outcome": "Carter was fined $2 million and sentenced to two years in prison."
    },
    {
      "id": 10,
      "title": "Global Innovations v. TechMasters",
      "type": "Patent Infringement",
      "summary": "Global Innovations claimed TechMasters unlawfully used their patented AI technology.",
      "outcome": "The court sided with Global Innovations, awarding $5 million in damages."
    },
    {
      "id": 11,
      "title": "The People v. Maria Sanchez",
      "type": "Drug Trafficking",
      "summary": "Maria Sanchez was caught smuggling illegal substances across state lines.",
      "outcome": "Sanchez received a 12-year prison sentence."
    },
    {
      "id": 12,
      "title": "Alpha Developers v. Beta Builders",
      "type": "Breach of Contract",
      "summary": "Alpha Developers accused Beta Builders of failing to deliver construction materials as per the agreement.",
      "outcome": "Beta Builders paid $200,000 for breach of contract."
    },
    {
      "id": 13,
      "title": "John Taylor v. Mark Evans",
      "type": "Defamation",
      "summary": "John Taylor sued Mark Evans for publishing false claims about his business in local media.",
      "outcome": "Taylor won $100,000 in damages for reputational harm."
    },
    {
      "id": 14,
      "title": "Omega Corp. v. Smart Solutions",
      "type": "Trade Secrets",
      "summary": "Omega Corp. alleged that Smart Solutions stole confidential product designs.",
      "outcome": "The court ruled in Omega's favor, awarding $3 million in damages."
    },
    {
      "id": 15,
      "title": "State v. David Rogers",
      "type": "Armed Robbery",
      "summary": "David Rogers was charged with armed robbery of a local convenience store.",
      "outcome": "Rogers was sentenced to 10 years in prison."
    },
    {
      "id": 16,
      "title": "Linda Grey v. Sunny Acres Nursing Home",
      "type": "Elder Abuse",
      "summary": "Linda Grey alleged mistreatment and neglect of her elderly mother at Sunny Acres.",
      "outcome": "The court awarded Grey $400,000 in damages."
    },
    {
      "id": 17,
      "title": "People of State v. Kevin Young",
      "type": "Vehicular Manslaughter",
      "summary": "Kevin Young was accused of causing a fatal accident while driving under the influence.",
      "outcome": "Young was sentenced to five years in prison."
    },
    {
      "id": 18,
      "title": "ZaraTech v. BrightFuture Inc.",
      "type": "Trademark Infringement",
      "summary": "ZaraTech accused BrightFuture of using a similar logo to mislead customers.",
      "outcome": "The court ordered BrightFuture to stop using the logo and pay $500,000 in damages."
    },
    {
      "id": 19,
      "title": "State v. Olivia Harris",
      "type": "Identity Theft",
      "summary": "Olivia Harris was charged with stealing and using another individual's identity for financial gain.",
      "outcome": "Harris was sentenced to four years in prison."
    },
    {
      "id": 20,
      "title": "Carlson Enterprises v. JetPower Inc.",
      "type": "Breach of Warranty",
      "summary": "Carlson Enterprises alleged that JetPower provided defective equipment under warranty.",
      "outcome": "JetPower was ordered to replace the equipment and pay $1 million in damages."
    },
    {
      "id": 21,
      "title": "People v. Raymond Lewis",
      "type": "Hate Crime",
      "summary": "Raymond Lewis was charged with a hate crime following a violent incident in a public park.",
      "outcome": "Lewis received a six-year prison sentence."
    },
    {
      "id": 22,
      "title": "State v. CyberGuard Systems",
      "type": "Data Breach",
      "summary": "CyberGuard Systems was held liable for exposing the personal data of over 10 million users.",
      "outcome": "The company paid a $50 million fine."
    },
    {
      "id": 23,
      "title": "Emily Rose v. DigitalClicks Agency",
      "type": "Employment Discrimination",
      "summary": "Emily Rose alleged gender-based discrimination after being denied a promotion.",
      "outcome": "Rose was awarded $250,000 in damages."
    },
    {
      "id": 24,
      "title": "Maxwell v. Greenfield Apartments",
      "type": "Housing Discrimination",
      "summary": "Maxwell accused Greenfield Apartments of racial discrimination during a rental application process.",
      "outcome": "The court fined the apartment management $75,000."
    },
    {
      "id": 25,
      "title": "City of Brookdale v. RiverRun Chemicals",
      "type": "Pollution Violation",
      "summary": "RiverRun Chemicals was found guilty of polluting a local river with toxic waste.",
      "outcome": "The company was fined $10 million and mandated to clean up the site."
    },
    {
      "id": 26,
      "title": "State v. Michael Dean",
      "type": "Arson",
      "summary": "Michael Dean was accused of setting a commercial building on fire.",
      "outcome": "Dean was sentenced to 15 years in prison."
    },
    {
      "id": 27,
      "title": "Jessica Black v. Pine Hills School",
      "type": "Negligence",
      "summary": "Jessica Black sued the school after her child was injured due to unsafe playground equipment.",
      "outcome": "Black received $80,000 in damages."
    },
    {
      "id": 28,
      "title": "United States v. OffshoreBank Inc.",
      "type": "Money Laundering",
      "summary": "OffshoreBank was accused of facilitating money laundering for criminal enterprises.",
      "outcome": "The bank was fined $1 billion and its operations were suspended."
    },
    {
      "id": 29,
      "title": "People v. Samuel Hayes",
      "type": "Human Trafficking",
      "summary": "Samuel Hayes was charged with running an illegal human trafficking ring.",
      "outcome": "Hayes received a life sentence."
    },
    {
      "id": 30,
      "title": "State v. Lisa Harper",
      "type": "Cybercrime",
      "summary": "Lisa Harper was accused of hacking into a government database and stealing sensitive information.",
      "outcome": "Harper was sentenced to 10 years in prison."
    }
]

  const ITEMS_PER_PAGE = 12;
  
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
  };

  const [expand, setExpand] = useState(false);
  const [cass, setCass] = useState(null);
  const toggleExpand = (id) => {
    setCass(id);
    setExpand(!expand);
  }

  useEffect(() => {
    if (expand) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [expand]);

  return (
    <>
      <div className="lg:mx-36 mx-14 lg:mb-16 mb-8 lg:mt-28 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.slice(0, visibleCount).map((cass) => (
            <div
              key={cass.id}
              className="flex flex-col items-start justify-between lg:rounded-3xl rounded-2xl lg:p-4 p-3 hover:shadow bg-white lg:h-[30vh] h-[25vh]"
            >
              <div className='lg:h-[24vh] h-[18vh] overflow-auto w-full'>
                <h3 className="font-pmedium lg:text-xl text-[18px] text-black">{cass.title}</h3>
                <p className="font-pregular text-gray-500 lg:text-base text-sm">{cass.type}</p>
                <div className='flex flex-col gap-y-2 pt-10'>
                  <h1 className="font-plight lg:text-lg text-base text-gray-400">Summary:</h1>
                  <p className="font-pregular lg:text-base text-sm text-gray-800">{cass.summary}</p>
                </div>
                <div className='flex flex-col gap-y-2 pt-10'>
                  <h1 className="font-plight lg:text-lg text-base text-gray-400">Outcome:</h1>
                  <p className="font-pregular lg:text-base text-sm text-gray-800">{cass.outcome}</p>
                </div>
              </div>
              <button className="flex items-center justify-start lg:text-base text-sm text-neutral-400 hover:text-neutral-600 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(cass)}
              >
                <h1 className="font-pregular">Expand</h1>
                <ChevronRight className='lg:w-6 lg:h-6 w-5 h-5'/>
              </button>
            </div>
          ))}
        </div>
        {visibleCount < cases.length && (
          <div className="flex justify-center mt-4">
            <Button text="See More" Icon={ChevronsDown} onClick={handleShowMore} classStyle="ml-2 lg:w-6 lg:h-6 w-4 h-4"/>
          </div>
        )}
        {visibleCount >= cases.length && (
          <h1 className="flex items-center justify-center m-6 font-pregular text-neutral-300 lg:text-xl text-lg">
            No more to show
          </h1>
        )}
      </div>
      {expand && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={toggleExpand}
        >
          <div
            className="bg-white rounded-3xl lg:p-5 p-4 w-[88%] lg:h-[80vh] h-[88vh] shadow-lg overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-pbold lg:text-[25px] text-[18px] text-black">{cass.title}</h2>
              <button className="text-black hover:text-modernRed transition duration-300 ease-in-out" onClick={toggleExpand}>
                <X size={30}/>
              </button>
            </div>
            <div>
              <p className='font-pregular text-gray-600 lg:text-[18px] text-[15px]'>{cass.type}</p>
              <div className='flex flex-col gap-y-2 pt-10'>
                <h1 className="font-plight lg:text-lg text-base text-gray-400">Summary:</h1>
                <p className="font-pregular lg:text-lg text-base">{cass.summary}</p>
              </div>
              <div className='flex flex-col gap-y-2 pt-6'>
                <h1 className="font-plight lg:text-lg text-base text-gray-400">Outcome:</h1>
                <p className="font-pregular lg:text-lg text-base">{cass.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Case