import React from 'react';
import News from '../../../components/NewsTicker/News';
import Footer from '../../Footer';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const EnvironmentalLaw = () => {

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
                        <h1 className="font-rbold mb-6 text-primary xl:text-[18px]">Environmental Law</h1>
                        
                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            Global warming, also known as climate change, refers to the observed century-scale rise in the Earth’s average temperature and its related impacts. As the need to protect the environment becomes increasingly urgent, the range of environmental law issues facing companies has expanded. These issues now encompass not only land development, waste management, and permitting, but also concerns like climate change, greenhouse gas emissions, and carbon footprints.
                        </p>
                        <p className="leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            I offer comprehensive expertise and legal guidance to help clients navigate these complex environmental challenges. With a deep understanding of both national and international regulations, I provide effective strategies to ensure compliance and proactively manage evolving environmental concerns, keeping my clients a step ahead of changing laws and regulations.
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

export default EnvironmentalLaw;
