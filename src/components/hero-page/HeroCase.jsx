import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Button from '../Button'
import { ArrowRight, ChevronRight, X } from 'lucide-react';
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeroCase = () => {

  const [expand, setExpand] = useState(false)
  const [cass, setCass] = useState(null)
  const toggleExpand = (id) => {
    setCass(id);
    setExpand(!expand)
  }

  useEffect(() => {
    if (expand) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [expand]);

  const cases = [
    {
      "id": 1,
      "title": "State v. GlobalCorp Inc.",
      "type": "Corporate Fraud",
      "summary": "GlobalCorp Inc., a multinational company, was accused of inflating revenue reports to attract investors. Investigations revealed the company used fraudulent accounting methods to overstate profits by $3 billion over five years. The CEO and CFO were charged with securities fraud and insider trading.",
      "outcome": "The court ruled in favor of the state, imposing a $500 million fine on the company. The CEO received a 10-year prison sentence."
    },
    {
      "id": 2,
      "title": "John Doe v. Jane Smith",
      "type": "Civil Land Dispute",
      "summary": "John Doe filed a suit against Jane Smith, claiming ownership of a 10-acre property based on a disputed will. Jane Smith argued that the property was inherited through direct lineage and presented a separate will to support her claim.",
      "outcome": "The court favored Jane Smith after validating her will as authentic."
    },
    {
      "id": 3,
      "title": "InnovateTech v. CopyCat LLC",
      "type": "Intellectual Property",
      "summary": "InnovateTech accused CopyCat LLC of stealing patented software algorithms. Evidence showed that CopyCat reverse-engineered the product and marketed it under a different name.",
      "outcome": "CopyCat LLC was ordered to cease sales, pay $2 million in damages, and issue a public apology."
    },
    {
      "id": 4,
      "title": "The People v. Alex Johnson",
      "type": "Criminal Assault",
      "summary": "Alex Johnson was charged with aggravated assault after an altercation in a bar where the victim sustained serious injuries. Surveillance footage and eyewitness accounts were presented as evidence.",
      "outcome": "Johnson was convicted and sentenced to five years in prison."
    }
  ]

  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("cases");
  };

  return (
    <>
      <Element className='relative flex flex-col items-center justify-between lg:m-36 mx-12 mb-16 lg:h-[70vh]' name="case">
        <h1 className="font-psemibold lg:text-[60px] text-[34px] text-black">Cases</h1>
        <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:gap-16 gap-6 lg:mb-0 mb-8 lg:mt-0 mt-8">
          {cases.map((cass) => (
            <div key={cass.id} className="flex flex-col items-start justify-between lg:h-[38vh] h-[23vh] lg:w-[30vh] w-full bg-white rounded-3xl hover:shadow cursor-pointer transition-all duration-300 ease-in-out">
              <div className="lg:p-5 p-4 lg:h-[30vh] h-[18vh]" style={{
                overflow:"hidden"
              }}>
                <h3 className="font-pmedium lg:text-[20px] text-[18px] text-black">{cass.title}</h3>
                <p className="font-pregular text-gray-500 lg:text-[18px] text-[15px]">{cass.type}</p>
                <p className="font-pregular pt-10 lg:text-[18px] text-[15px]">{cass.summary}</p>
              </div>
              <button className="flex items-center justify-start text-neutral-400 hover:text-neutral-600 lg:p-5 p-4 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(cass)}
              >
                <h1 className="font-pregular">Expand</h1>
                <ChevronRight/>
              </button>
            </div>
          ))
          }
        </div>
        <div className="">
          <Button text="See More" Icon={ArrowRight} onClick={handleSeeMore} classstyle="ml-2 lg:w-6 lg:h-6 w-4 h-4"/>
        </div>
      </Element>
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
                <h1 className="font-plight lg:text-2xl text-lg text-gray-400">Summary:</h1>
                <p className="font-pregular lg:text-[18px] text-[15px]">{cass.summary}</p>
              </div>
              <div className='flex flex-col gap-y-2 pt-6'>
                <h1 className="font-plight lg:text-2xl text:lg text-gray-400">Outcome:</h1>
                <p className="font-pregular lg:text-[18px] text-[15px]">{cass.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroCase