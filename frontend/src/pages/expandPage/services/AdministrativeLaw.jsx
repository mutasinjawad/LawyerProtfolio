import React from 'react';
import News from '../../../components/NewsTicker/News';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const AdministrativeLaw = () => {

    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-between w-full h-screen'>
            <div className='flex flex-col items-start max-w-[100vh] mt-16'>
                <button className="left-0 flex items-center justify-start p-1 mb-5 text-base text-black transition-all duration-200 ease-in-out outline-none stickey lg:w-28 font-psemibold lg:text-xl hover:text-secondary lg:gap-6 hover:gap-2 hover:cursor"
                        onClick={() => navigate(-1)}>
                            <ChevronLeft className='w-5 h-5 lg:w-6 lg:h-6' strokeWidth={3}/>
                            <span
                            className='hidden lg:block'
                            >
                            Back
                            </span>
                </button>
                <div className="flex flex-col items-start bg-white max-w-[100vh] p-6 rounded-xl shadow-sm text-black">
                    <h1 className="text-2xl font-esbold mb-6 text-primary text-[25px]">Administrative Law in Bangladesh</h1>
                    
                    <p className="mb-4 text-lg leading-relaxed font-eslight text-[16px]">
                        The intention of administrative law is to provide a legal framework for regulating the powers, 
                        procedures, and acts of public administration. All matters in this relation are referred to an 
                        administrative tribunal with exclusive jurisdiction to determine applications made by persons in 
                        the service of the republic regarding their terms and conditions of service.
                    </p>

                    <p className="mb-4 text-lg leading-relaxed font-eslight text-[16px]">
                        Rule of law eschews arbitrariness or decisions based on whim, promoting fairness and equality 
                        as enshrined in Article 27 of the Constitution of Bangladesh. Governmental actions must be right, 
                        just, and fair, avoiding arbitrary, fanciful, or oppressive practices.
                    </p>

                    <p className="mb-4 text-lg leading-relaxed font-eslight text-[16px]">
                        Our lawyers have gained extensive experience in Administrative Law, representing prominent 
                        corporations, disadvantaged individuals, and governmental agencies. Our expertise enables us 
                        to assess and plan cases expeditiously and effectively, delivering exceptional advocacy.
                    </p>

                    <button className="px-6 py-2 mt-6 text-black transition-all rounded-full shadow-md bg-secondary font-essemibold hover:bg-opacity-90">
                        Contact Us for Legal Support
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-start bg-white max-w-[100vh] p-6 rounded-xl shadow-sm text-black">
                <h1 className="text-2xl font-esbold mb-6 text-primary text-[25px]">Disclaimer:</h1>
                <p className="leading-relaxed font-eslight text-[16px]">The information contains in this web-site is prepared for educational purpose. This site may be used by the 
                    students, faculties, independent learners and the learned advocates of all over the world. Researchers all 
                    over the world have the access to upload their writes up in this site. In consideration of the people’s 
                    participation in the Web Page, the individual, group, organization, business, spectator, or other, does 
                    hereby release and forever discharge the Lawyers & Jurists, and its officers, board, and employees, jointly 
                    and severally from any and all actions, causes of actions, claims and demands for, upon or by reason of any 
                    damage, loss or injury, which hereafter may be sustained by participating their work in the Web Page. This 
                    release extends and applies to, and also covers and includes, all unknown, unforeseen, unanticipated and 
                    unsuspected injuries, damages, loss and liability and the consequences thereof, as well as those now disclosed
                     and known to exist.  The provisions of any state’s law providing substance that releases shall not extend to
                      claims, demands, injuries, or damages which are known or unsuspected to exist at this time, to the person 
                      executing such release, are hereby expressly waived. However the Lawyers & Jurists makes no warranty 
                      expressed or implied or assumes any legal liability or responsibility for the accuracy, completeness or 
                      usefulness of any information, apparatus, product or process disclosed or represents that its use would 
                      not infringe privately owned rights. Reference herein to any specific commercial product process or 
                      service by trade name, trade mark, manufacturer or otherwise, does not necessarily constitute or imply its
                       endorsement, recommendation or favouring by the Lawyers & Jurists. The views and opinions of the authors 
                       expressed in the Web site do not necessarily state or reflect those of the Lawyers & Jurists. Above all, 
                       if there is any complaint drop by any independent user to the admin for any contents of this site, the 
                       Lawyers & Jurists would remove this immediately from its site.
                    </p>
            </div>
            <News />
        </div>
  );
};

export default AdministrativeLaw;
