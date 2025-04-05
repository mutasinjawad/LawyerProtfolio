import React from 'react';
import News from '../../../components/NewsTicker/News';
import Footer from '../../Footer';
import { Bold, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const BankingLitigation = () => {

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
                        <h1 className="font-rbold mb-6 text-primary xl:text-[18px]">Banking Litigation</h1>
                        
                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            Banking litigation is one of the key areas of my legal practice. I bring in-depth expertise and significant experience representing both Banks and Non-Banking Financial Institutions (NBFIs) in a wide range of disputes. My goal is to deliver swift and effective resolutions so that clients receive maximum value from legal support.
                        </p>

                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            As Bangladesh’s banking sector continues to grow—with the emergence of many private banks—the industry is also facing increasing complexities and risks. Fraud, default, and financial misconduct have become frequent challenges. Without strong legal support, it can be difficult for banks and NBFIs to manage operations smoothly. I understand the structure and mechanics of the financial transactions at the heart of these disputes and provide both contentious and non-contentious legal services tailored to the needs of financial institutions.
                        </p>

                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            I offer banking litigation services in the following areas:
                        </p>

                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            <span className='font-bold'>(a) Litigations under the Negotiable Instruments Act, 1881 (NI Act):</span> In Bangladesh, litigations for dishonoured/bounced cheques are administered under the provisions of NI Act. The Lawyers & Jurists has extensive track-record in handling the NI Act cases.
                        </p>

                        <p className="mb-4 leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            <span className='font-bold'>(b) Litigation under the Money Loan Court Act, 2003 (Artha Rin Adalat Ain):</span> Loan default is a significant issue in the banking sector. The Artha Rin Adalat Ain was enacted to ensure fast resolution of loan recovery cases. I have extensive experience representing banks and NBFIs in Artha Rin suits and have successfully helped recover large sums through focused legal strategies and thorough casework.
                        </p>

                        <p className="leading-relaxed xl:font-rlight font-rregular xl:text-[15px] lg:text-[12px] md:text-sm sm:text-[12px] xs:text-[11px] text-[10px]">
                            <span className='font-bold'>(c) Litigation related to fraud and forgery under the Penal Code, 1860:</span> I have represented clients in numerous criminal matters involving banking fraud, forgery, and other financial offenses. This includes cases under sections addressing cheating (415–420), fraudulent deeds and dispositions (421–424), loss of property of banking companies (462A & 462B), document-related offenses (463–489), and currency-related crimes (489A–489E). My practice is dedicated to providing robust legal protection for financial institutions against fraudulent actions and safeguarding their interests.
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

export default BankingLitigation;
