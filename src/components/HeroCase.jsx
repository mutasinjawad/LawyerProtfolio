import React from 'react'
import Button from './Button'
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'
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

  return (
    <>
      <div className="flex flex-col items-center justify-between lg:m-36 mx-12 h-[70vh]">
        <h1 className="font-pmedium lg:text-[60px] text-[35px] text-black mt-16">Cases</h1>
        <div className="flex justify-center gap-16 lg:mb-28 mb-12">
        {cases.map((cass) => (
          <div key={cass.id} className="lg:h-[400px] w-[320px] bg-white rounded-3xl cursor-pointer hover:bg-primary-100 hover:shadow transition-all duration-300 ease-in-out">
            <div className="p-10 lg:h-[25vh]" style={{
              overflow:"hidden"
            }}>
              <h3 className="font-pmedium text-[20px]">{cass.title}</h3>
              <p className="font-pregular text-gray-600">{cass.type}</p>
              <p className="font-pregular pt-10">{cass.summary}</p>
            </div>
            <button className="flex items-center justify-start text-neutral-400 hover:text-neutral-500 mt-[20px] ml-[40px] py-2 gap-2 hover:gap-6 transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(cass)}
            >
              <h1 className="font-pregular">Expand</h1>
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>
          </div>
        ))  
        }
        </div>
        <div className="transform -translate-y-32">
          <Button text="See More" icon={faArrowRight} route="#" classStyle="ml-6"/>
        </div>
      </div>
      {expand && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={toggleExpand}
        >
          <div
            className="bg-white rounded-3xl p-12 w-[80%] h-[75vh] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-pbold">{cass.title}</h2>
              <button className="text-primary hover:text-modernRed transition duration-300 ease-in-out" onClick={toggleExpand}>
                <FontAwesomeIcon icon={faXmark} size="2xl"/>
              </button>
            </div>
            <div>
              <p className="font-pregular text-gray-600">{cass.type}</p>
              <div className='flex flex-col gap-y-2 pt-10'>
                <h1 className='font-plight text-2xl text-gray-400'>Summary:</h1>
                <p className="font-pregular">{cass.summary}</p>
              </div>
              <div className='flex flex-col gap-y-2 pt-10'>
                <h1 className='font-plight text-2xl text-gray-400'>Outcome:</h1>
                <p className="font-pregular">{cass.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroCase