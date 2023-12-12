import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faTools, faFileAlt, faMap, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Article from './Article';
import Service from './Service';
import Report from './Report';
import Maps from './Maps';
import Help from './Help';
import Link from 'next/link';


const Index = () => {
    const [activeTab, setActiveTab] = useState('article');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'article':
                return <Article />;
            case 'report':
                return <Report />;
            case 'service':
                return <Service />;
            case 'maps':
                return <Maps />;
            case 'help':
                return <Help />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className='fixed w-screen h-screen flex'>
                <ul className='absolute top-0 left-0 z-10'>
                    <div className="bg-[#27005D] w-64 pb-4 rounded-r-3xl border-r-4 border-white h-screen">
                        <div className="mb-1">
                            <img className="w-52 h-52 mx-auto" src="img/adminlogo.png" alt="logo" />
                        </div>

                        <nav className="mb-8 pb-8 font-Poppins md:pt-16 lg:pt-16">
                            <ul className=" py-4 pl-16 ml-auto">
                                <li className={activeTab === 'article' ? 'mb-1 bg-white hover:bg-gray-300 cursor-pointer rounded-tl-xl py-2' : 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2 rounded-tl-xl'} onClick={() => handleTabChange('article')}>
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                                        Article
                                    </a>
                                </li>
                                <li className={activeTab === 'service' ? 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2' : 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2 '} onClick={() => handleTabChange('service')}>
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faTools} className="mr-2" />
                                        Service
                                    </a>
                                </li>
                                <li className={activeTab === 'report' ? 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2' : 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2'} onClick={() => handleTabChange('report')}>
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                                        Report
                                    </a>
                                </li>
                                <li className={activeTab === 'maps' ? 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2' : 'mb-1 bg-white hover:bg-gray-300 cursor-pointer py-2'} onClick={() => handleTabChange('maps')}>
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faMap} className="mr-2" />
                                        Maps
                                    </a>
                                </li>
                                <li className={activeTab === 'help' ? 'mb-1 bg-white hover:bg-gray-300 cursor-pointer rounded-bl-xl py-2' : 'mb-1 bg-white hover:bg-gray-300 cursor-pointer rounded-bl-xl py-2'} onClick={() => handleTabChange('help')}>
                                    <a className="text-black text-xl pl-5 ">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex justify-center pt-1">
                            <Link href="/" className="text-[#27005D] hover:text-gray-400 bg-white py-2 px-14 rounded-xl font-Poppins">
                                Logout
                            </Link>
                        </div>
                    </div>
                </ul>

                <div className='flex flex-col flex-grow'>
                    <div className="bg-[#27005D] p-4 flex justify-between items-center rounded-br-3xl">
                        <div className="text-white">
                            <span className="font-semibold text-2xl pl-64 font-Poppins">Article Overview</span>
                        </div>
                        <div className='pr-10'>
                            <img alt="" className="w-12 h-12 rounded-full bg-slate-300" />
                        </div>
                    </div>

                    <div className='ml-[265px] pl-1 pr-4 pt-4 pb-3 z-0 overflow-y-auto max-h-screen'>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
