import React from 'react';
import News from '../../../components/NewsTicker/News';
import Footer from '../../Footer';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const FamilyMattersandChildCustody = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-between w-full h-screen gap-6 pt-2 lg:pt-6 xl:pt-8 md:pt-6 xs:pt-4'>
            <div className='flex flex-col items-center justify-between gap-6 xl:w-[1310px] w-full xl:px-8 md:px-8 sm:px-8 xs:px-6 px-2'>
                <div className='flex flex-col items-start'>
                    <button className="left-0 flex items-center justify-start p-1 mb-5 text-base text-black transition-all duration-200 ease-in-out outline-none stickey lg:w-28 font-psemibold lg:text-xl hover:text-secondary lg:gap-6 hover:gap-2 hover:cursor"
                            onClick={() => navigate(-1)}>
                                <ChevronLeft className='w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 xs:w-4 xs:h-4' strokeWidth={3}/>
                                <span className='font-rbold md:text-[18px] xs:text-[15px] text-[13px]'>Back</span>
                    </button>
                    <div className="flex flex-col items-start w-full p-2 text-black bg-white shadow-sm lg:p-6 md:p-4 xs:p-3 rounded-xl">
                        <h1 className="font-rbold mb-6 text-primary xl:text-[18px]">Family Matters and Child Custody</h1>
                        
                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            I have extensive experience in family law matters, covering a wide range of disputes related to marriage, divorce, guardianship, child custody, residence, and all associated financial claims such as maintenance, property distribution, and lump sum settlements. My approach combines legal expertise with a compassionate understanding of family dynamics, ensuring that my clients feel supported during what can often be a difficult and emotional time.
                        </p>

                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            Family disputes, particularly those involving divorce and guardianship, are on the rise in Bangladesh. These matters are often complicated by social pressures and the need for privacy and sensitivity. I am committed to helping clients navigate the complexities of conjugal status disputes and related issues, while understanding the social impact these cases can have.
                        </p>

                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            In response to increasing concerns about family violence, including dowry, torture, assault, rape, acid attacks, and more, various special Acts have been enacted to offer protection. While some of these offenses are addressed under the Penal Code, 1860, others are governed by specific laws.
                        </p>

                        <p className="leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            I pride myself on providing confidential, sensitive legal assistance in cases involving dower, divorce, maintenance, restitution of conjugal life, and child custody. I ensure the privacy of my clients is respected, understanding the potential social consequences such matters can have.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start p-2 text-black bg-white shadow-sm md:p-4 xs:p-3 lg:p-6 rounded-xl">
                    <h1 className="font-rbold mb-6 text-primary text-[18px]">Disclaimer:</h1>
                    <p className="leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                        The information provided on this website is for general informational and educational purposes only and does not constitute legal advice. While every effort is made to ensure the accuracy of the content, no guarantees are made regarding its completeness or reliability. Visitors are encouraged to seek professional legal advice tailored to their specific circumstances. This website does not create a lawyer-client relationship through its content or communications. Any references to third-party products, services, or links do not imply endorsement. The views expressed on this site are solely those of the website owner. If any concerns or issues arise regarding content, please contact the site administrator for prompt review and, if necessary, removal.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <News />
                <Footer />
            </div>
        </div>
    );
};

export default FamilyMattersandChildCustody;
