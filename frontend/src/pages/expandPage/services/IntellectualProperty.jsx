import React from 'react';
import News from '../../../components/NewsTicker/News';
import Footer from '../../Footer';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const IntellectualProperty = () => {

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
                        <h1 className="font-rbold mb-6 text-primary xl:text-[18px]">Intellectual Property</h1>
                        
                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            Intellectual property law is the area of law concerned with legal rights associated with creative efforts or commercial reputation and goodwill. Intellectual property includes things created by human thought as a result of intellectual activities. I have earned an extraordinary reputation in connection with a wide range of intellectual property services, including the registration of IP rights and addressing disputes arising from such rights.
                        </p>

                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            In today's global marketplace, identifying, developing, and protecting intellectual property (IP) rights is crucial for establishing and growing a successful business. I provide a full range of IP-related legal solutions for clients dealing with trademark, copyright, patent, and trade secret legal issues. From the inception of an idea to the global marketing of products, I seek to partner with clients to anticipate and minimize future conflicts while maximizing current opportunities. I employ a team approach to each transaction, so the same lawyers who perform a trademark search are also the ones who defend its proprietary rights.
                        </p>

                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            My goal is to remain on the cutting edge of this rapidly changing field to help preserve clients’ competitive advantages. Although intellectual property is divided into two branches—industrial property and copyright—I extend services to companies in need of protecting their intellectual property.
                        </p>
                        
                        <p className="leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            As the business and activities in this field gradually increase in Bangladesh, the necessity of practicing intellectual property law has become more apparent. Over the years, I have dedicated considerable time to building a team solely specialized in intellectual property law. Companies with significant reputations often face the threat of others using similar names with subtle changes, which are not immediately recognizable as infringements. These individuals or groups exploit the original company's name to generate revenue, causing serious losses to the original entity. Consequently, the practice of intellectual property law has become an integral part of many industries. My experience has shown that courts generally apply the principles of intellectual property with great care, ensuring that the injured party suffers no further loss and is compensated by the infringers. My team has a strong record of safeguarding intellectual property rights, particularly in trademark, design, and patent cases.
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

export default IntellectualProperty;
