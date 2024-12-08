import React from 'react'
import { useState, useEffect } from 'react'
import { ChevronRight, X, ChevronsDown } from 'lucide-react';
import Button from './Button';

const Blog = () => {

    const blogs = [
        {
            "id": 1,
            "title": "The Role of Arbitration in Bangladesh's Legal System",
            "description": "Explore how arbitration is utilized to resolve disputes efficiently in Bangladesh and its impact on businesses and individuals.",
            "category": "Arbitration Law",
            "tags": ["Arbitration", "Bangladesh Law", "Dispute Resolution"],
            "author": "Legal Insights",
            "date_published": "Dec 05, 2024"
        },
        {
            "id": 2,
            "title": "Digital Transformation in the Legal Sector of Bangladesh",
            "description": "A look into how technology is reshaping the legal landscape in Bangladesh, with examples of digital tools used by law firms.",
            "category": "Legal Tech",
            "tags": ["Legal Technology", "Digital Transformation", "Bangladesh"],
            "author": "Tech Legal Blog",
            "date_published": "Dec 06, 2024"
        },
        {
            "id": 3,
            "title": "Understanding Family Law in Bangladesh",
            "description": "An in-depth guide to family law in Bangladesh, covering marriage, divorce, and child custody regulations.",
            "category": "Family Law",
            "tags": ["Family Law", "Bangladesh", "Legal Guide"],
            "author": "Family Law Experts",
            "date_published": "Dec 07, 2024"
        },
        {
            "id": 4,
            "title": "How to Register a Business in Bangladesh",
            "description": "Step-by-step instructions on registering a business in Bangladesh, including the required documents and legal process.",
            "category": "Business Law",
            "tags": ["Business Registration", "Bangladesh", "Startup Guide"],
            "author": "Startup Legal",
            "date_published": "Dec 08, 2024"
        },
        {
            "id": 5,
            "title": "Legal Rights of Tenants and Landlords in Bangladesh",
            "description": "A discussion of the legal rights and responsibilities of tenants and landlords under Bangladeshi law.",
            "category": "Real Estate Law",
            "tags": ["Tenant Rights", "Landlord Rights", "Bangladesh"],
            "author": "Property Law Blog",
            "date_published": "Dec 09, 2024"
        },
        {
            "id": 6,
            "title": "Cybersecurity and Data Privacy Laws in Bangladesh",
            "description": "Learn about the laws governing cybersecurity and data privacy in Bangladesh, with tips for businesses to ensure compliance.",
            "category": "Cyber Law",
            "tags": ["Data Privacy", "Cybersecurity", "Bangladesh Law"],
            "author": "Cyber Legal News",
            "date_published": "Dec 10, 2024"
        },
        {
            "id": 7,
            "title": "Employment Contracts: Best Practices in Bangladesh",
            "description": "A guide to drafting and managing employment contracts under Bangladeshi labor laws.",
            "category": "Labor Law",
            "tags": ["Employment Contracts", "Labor Law", "Bangladesh"],
            "author": "HR Legal Blog",
            "date_published": "Dec 11, 2024"
        },
        {
            "id": 8,
            "title": "Consumer Protection Laws in Bangladesh",
            "description": "An overview of consumer rights in Bangladesh and the laws that protect them, including examples of common disputes.",
            "category": "Consumer Law",
            "tags": ["Consumer Rights", "Legal Protection", "Bangladesh"],
            "author": "Consumer Rights Advocate",
            "date_published": "Dec 12, 2024"
        },
        {
            "id": 9,
            "title": "Taxation Laws for Small Businesses in Bangladesh",
            "description": "Insights into the taxation system in Bangladesh and how small businesses can navigate their tax obligations.",
            "category": "Tax Law",
            "tags": ["Taxation", "Small Business", "Bangladesh"],
            "author": "Tax Legal Experts",
            "date_published": "Dec 13, 2024"
        },
        {
            "id": 10,
            "title": "Judiciary Independence in Bangladesh",
            "description": "An analysis of the importance and challenges of maintaining judicial independence in Bangladesh.",
            "category": "Judiciary",
            "tags": ["Judiciary Independence", "Bangladesh Legal System"],
            "author": "Justice Blog",
            "date_published": "Dec 14, 2024"
        },
        {
            "id": 11,
            "title": "The Impact of Environmental Laws in Bangladesh",
            "description": "A discussion on the implementation and enforcement of environmental regulations in Bangladesh.",
            "category": "Environmental Law",
            "tags": ["Environment", "Bangladesh", "Law"],
            "author": "Green Law Advocates",
            "date_published": "Dec 15, 2024"
        },
        {
            "id": 12,
            "title": "Anti-Corruption Laws in Bangladesh",
            "description": "A look into anti-corruption initiatives and their effectiveness in combating financial crimes in Bangladesh.",
            "category": "Corporate Governance",
            "tags": ["Anti-Corruption", "Bangladesh", "Corporate Governance"],
            "author": "Anti-Corruption Network",
            "date_published": "Dec 16, 2024"
        },
        {
            "id": 13,
            "title": "Corporate Social Responsibility and Bangladeshi Laws",
            "description": "How CSR practices are regulated and encouraged in Bangladesh.",
            "category": "Corporate Law",
            "tags": ["CSR", "Bangladesh Corporate Law"],
            "author": "Corporate Ethics Blog",
            "date_published": "Dec 17, 2024"
        },
        {
            "id": 14,
            "title": "Legal Protection for Freelancers in Bangladesh",
            "description": "Understanding legal frameworks that protect freelancers' rights in Bangladesh.",
            "category": "Labor Law",
            "tags": ["Freelancer Rights", "Labor Law", "Bangladesh"],
            "author": "Freelance Advocates",
            "date_published": "Dec 18, 2024"
        },
        {
            "id": 15,
            "title": "Corporate Tax Planning in Bangladesh",
            "description": "Strategies for effective tax planning within the legal framework in Bangladesh.",
            "category": "Tax Law",
            "tags": ["Tax Planning", "Corporate Law"],
            "author": "Tax Advisory",
            "date_published": "Dec 19, 2024"
        },
        {
            "id": 16,
            "title": "Legal Framework for Startups in Bangladesh",
            "description": "A guide to understanding startup-friendly laws in Bangladesh.",
            "category": "Business Law",
            "tags": ["Startup", "Bangladesh Law"],
            "author": "Startup Legal Blog",
            "date_published": "Dec 20, 2024"
        },
        {
            "id": 17,
            "title": "An Overview of Criminal Law in Bangladesh",
            "description": "An introduction to the basics of criminal law and its application in Bangladesh.",
            "category": "Criminal Law",
            "tags": ["Criminal Law", "Bangladesh"],
            "author": "Criminal Defense Blog",
            "date_published": "Dec 21, 2024"
        },
        {
            "id": 18,
            "title": "Adoption Laws in Bangladesh",
            "description": "A detailed overview of the legal requirements and process for adopting a child in Bangladesh.",
            "category": "Family Law",
            "tags": ["Adoption", "Family Law", "Bangladesh"],
            "author": "Family Advocates",
            "date_published": "Dec 22, 2024"
        },
        {
            "id": 19,
            "title": "The Future of Legal Technology in Bangladesh",
            "description": "Emerging trends in legal technology and their potential impact in Bangladesh.",
            "category": "Legal Tech",
            "tags": ["Legal Technology", "Future Trends", "Bangladesh"],
            "author": "Tech Legal Blog",
            "date_published": "Dec 23, 2024"
        },
        {
            "id": 20,
            "title": "Legal Requirements for E-Commerce in Bangladesh",
            "description": "A comprehensive guide to laws regulating e-commerce businesses in Bangladesh.",
            "category": "E-Commerce Law",
            "tags": ["E-Commerce", "Bangladesh", "Legal Guide"],
            "author": "E-Business Blog",
            "date_published": "Dec 24, 2024"
        },
        {
            "id": 21,
            "title": "Legal Challenges in the Garments Industry",
            "description": "How Bangladeshi garment industries navigate labor laws and international regulations.",
            "category": "Labor Law",
            "tags": ["Garments", "Labor Law", "Bangladesh"],
            "author": "Industrial Law Insights",
            "date_published": "Dec 25, 2024"
        },
        {
            "id": 22,
            "title": "Regulation of Microfinance Institutions in Bangladesh",
            "description": "A closer look at how microfinance institutions are regulated to protect borrowers.",
            "category": "Financial Law",
            "tags": ["Microfinance", "Regulation", "Bangladesh"],
            "author": "Financial Insights",
            "date_published": "Dec 26, 2024"
        },
        {
            "id": 23,
            "title": "Land Acquisition and Compensation Laws",
            "description": "Understanding the legal process for land acquisition and compensation for affected individuals.",
            "category": "Land Law",
            "tags": ["Land Acquisition", "Compensation", "Bangladesh"],
            "author": "Property Rights Blog",
            "date_published": "Dec 27, 2024"
        },
        {
            "id": 24,
            "title": "Bankruptcy Laws and Practices",
            "description": "An overview of bankruptcy laws and their implications for businesses in Bangladesh.",
            "category": "Corporate Law",
            "tags": ["Bankruptcy", "Corporate Law", "Bangladesh"],
            "author": "Legal Financial Guide",
            "date_published": "Dec 28, 2024"
        },
        {
            "id": 25,
            "title": "Understanding Cybercrime Laws in Bangladesh",
            "description": "A discussion on how cybercrimes are regulated and prosecuted in Bangladesh.",
            "category": "Cyber Law",
            "tags": ["Cybercrime", "Regulations", "Bangladesh"],
            "author": "Cyber Legal Network",
            "date_published": "Dec 29, 2024"
        },
        {
            "id": 26,
            "title": "Women’s Property Rights in Bangladesh",
            "description": "An in-depth look at laws affecting women’s property ownership and inheritance rights.",
            "category": "Gender Law",
            "tags": ["Property Rights", "Women's Rights", "Bangladesh"],
            "author": "Equality Law Advocates",
            "date_published": "Dec 30, 2024"
        },
        {
            "id": 27,
            "title": "Maritime Laws in Bangladesh",
            "description": "An introduction to maritime laws governing trade and fishing rights.",
            "category": "Maritime Law",
            "tags": ["Maritime", "Bangladesh", "Law"],
            "author": "Ocean Law Journal",
            "date_published": "Dec 31, 2024"
        },
        {
            "id": 28,
            "title": "Election Laws in Bangladesh",
            "description": "A review of election laws and their role in ensuring democratic processes.",
            "category": "Election Law",
            "tags": ["Elections", "Democracy", "Bangladesh"],
            "author": "Democracy Watch",
            "date_published": "Jan 01, 2025"
        },
        {
            "id": 29,
            "title": "Corporate Mergers and Acquisitions",
            "description": "Legal considerations for businesses involved in mergers and acquisitions.",
            "category": "Corporate Law",
            "tags": ["Mergers", "Acquisitions", "Bangladesh"],
            "author": "Corporate Strategies",
            "date_published": "Jan 02, 2025"
        },
        {
            "id": 30,
            "title": "Human Rights in the Workplace",
            "description": "An analysis of laws aimed at protecting human rights in the workplace.",
            "category": "Human Rights",
            "tags": ["Workplace Rights", "Human Rights", "Bangladesh"],
            "author": "Rights Advocates",
            "date_published": "Jan 03, 2025"
        }
    ];    

    const fomratDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    const ITEMS_PER_PAGE = 12;
    
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + ITEMS_PER_PAGE);
    };

    const [expand, setExpand] = useState(false);
    const [blogId, setBlogId] = useState(null);
    const toggleExpand = (id) => {
        setBlogId(id);
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
      <div className="lg:mx-36 mx-14 mb-16 lg:mt-28 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(0, visibleCount).map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col items-start justify-between w-full lg:rounded-3xl rounded-2xl lg:p-4 p-3 hover:shadow bg-white lg:h-[30vh] h-[25vh]"
            >
              <div className='lg:h-[24vh] h-[18vh] w-full overflow-auto'>
                <h3 className="font-pmedium lg:text-lg text-[20px] text-black">{blog.title}</h3>
                <p className="font-pregular text-gray-500 lg:text-base text-sm">{fomratDate(blog.date_published)}</p>
                <p className="font-pregular pt-10 lg:text-base text-sm text-gray-800">{blog.description}</p>
              </div>
              <button className="flex items-center justify-start lg:text-base text-sm text-neutral-400 hover:text-neutral-600 gap-2 hover:gap-6 hover:cursor transition-all duration-200 ease-in-out"
              onClick={() => toggleExpand(blog)}
              >
                <h1 className="font-pregular">Expand</h1>
                <ChevronRight className='lg:w-6 lg:h-6 w-5 h-5'/>
              </button>
            </div>
          ))}
        </div>
        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-4">
            <Button text="See More" Icon={ChevronsDown} onClick={handleShowMore} classStyle="ml-2 lg:w-6 lg:h-6 w-4 h-4"/>
          </div>
        )}
        {visibleCount >= blogs.length && (
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
              <h2 className="font-pbold lg:text-[25px] text-[18px] text-black">{blogId.title}</h2>
              <button className="text-black hover:text-modernRed transition duration-300 ease-in-out" onClick={toggleExpand}>
                <X size={30}/>
              </button>
            </div>
            <div>
              <p className="font-pregular text-gray-600 lg:text-[18px] text-[15px]">{fomratDate(blogId.date_published)}</p>
              <p className="font-pregular pt-10 lg:text-[18px] text-[15px]">{blogId.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Blog;