import React from 'react'
import { Element } from 'react-scroll'
import News from '../components/NewsTicker/News'

const Career = () => {
  return (
    <Element className='w-full h-screen flex flex-col items-center justify-between pt-40' name='career'>
      <div className='flex flex-col items-start justify-between w-[140vh] bg-white rounded-xl p-4 mx-16'>
        <h1 className='font-rbold mb-8 text-primary text-[30px]'>Internship</h1>
        <p className='font-rregular text-[14px] mb-4'>
          “The Lawyers & Jurists”- one of the renowned corporate law chambers in the country, is seeking application from competent, dynamic, dedicated and self motivated individuals to fill up the following position:
        </p>

        <h3 className='font-rsemibold text-[14px]'>
          (i) Major Responsibilities:
        </h3>
        <h1 className='font-rregular text-[14px] mb-4'>The responsibility of the selected intern shall be as follows:</h1>

        <ul className="list-disc list-inside text-gray-700 space-y-1 font-rregular mb-4">
          <li>Assist senior Lawyers in the courtroom as well as in the chamber.</li>
          <li>Prepare various legal drafts (plaint, written statements, applications, objections, etc.).</li>
          <li>Assist in drafting various agreements.</li>
          <li>Conduct legal research as instructed.</li>
          <li>Maintain case reports on a regular basis.</li>
        </ul>

        <h3 className='font-rsemibold text-[14px] mb-4'>
          (ii) Educational Qualification:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 font-rregular mb-4">
          <li>LL.B (Hons.) with a CGPA of 3.00 out of 4.00 or Higher 2nd Class.</li>
          <li>Minimum CGPA 4.00 or 1st Division in S.S.C & H.S.C (50% marks in English required).</li>
          <li>A score of 6.5 in IELTS (optional).</li>
        </ul>

        <h3 className='font-rsemibold text-[14px] mb-4'>
        (iii) Additional Requirements:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 font-rregular mb-4">
          <li>Excellent communication skills in English (both oral & written).</li>
          <li>Proficiency in MS Word, Excel, and PowerPoint.</li>
          <li>Strong analytical ability.</li>
          <li>Knowledge of the professional code of conduct for lawyers.</li>
        </ul>

        <p className="font-rregular text-[14px] mb-4"><strong>(iv) Age:</strong> Not exceeding 25</p>
        <p className="font-rregular text-[14px] mb-4"><strong>(v) Job Location:</strong> Dhaka</p>

        <h3 className='font-rsemibold text-[14px] mb-4'>
          (vi) Other Benefits:
        </h3>
        <p className="font-rregular text-[14px] mb-4">
          The Lawyers & Jurists offers a vibrant environment for work. With a huge library of thousands of books we offer great opportunity for research to the desired person which may bridge between the academic arenas to the court practice. Our lawyers are affable and intend to prepare a number of brilliant junior lawyers who intends to become Social Engineer.
        </p>
        <p className="font-rregular text-[14px] mb-4">
          We do not offer any job in the ordinary sense. We provide scope to cope up with a challenging and passionate profession. We try to build up the vigor of such “Royal Profession” in your mind. Our chamber suggests its junior how to survive in this competitive legal arena.
        </p>
        <p className="font-rregular text-[14px] mb-4">
          If you feel you have the right skills for the above mentioned position, please send your CV along with a cover letter, photocopy of academic certificates, photocopy of National ID Card and 2 (two) recent passport size color photographs to the following address. Please mention the name of the position on top of the cover letter and the envelope.
        </p>
        <p className="font-rregular text-[14px] mb-4">
          Due to large number of applications received only short listed candidates will be contacted.
        </p>

        <a href="" className='font-rbold text-[20px] underline hover:text-secondary duration-150'>Apply Here</a>

      </div>
      <News />
    </Element>
  )
}

export default Career