import React, { useState } from 'react';
import Modal from 'react-modal';

const Service = () => {
    const [activeTab, setActiveTab] = useState('All');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const tableData = [
        { id: 1, date: '2023-01-01', reporter: 'Topik Sucihartono', location: 'Kota A', description: 'Laporan Keamanan A Laporan Keamanan A Laporan Keamanan A Laporan Keamanan A Laporan Keamanan A Laporan Keamanan A', category: 'Keamanan', status: 'Proses' },
        { id: 2, date: '2023-01-02', reporter: 'Hambalang', location: 'Kota B', description: 'Laporan Kegiatan B', category: 'Kegiatan', status: 'Proses' },
        { id: 3, date: '2023-01-03', reporter: 'Dwi Hartono', location: 'Kota C', description: 'Laporan Lingkungan C', category: 'Lingkungan', status: 'Proses' },
        { id: 4, date: '2023-01-04', reporter: 'Siti Rahayu', location: 'Kota D', description: 'Laporan Pelayanan Publik D', category: 'Pelayanan Publik', status: 'Proses' },
        { id: 5, date: '2023-01-05', reporter: 'Ahmad Hasan', location: 'Kota E', description: 'Laporan Keamanan E', category: 'Keamanan', status: 'Proses' },
        { id: 6, date: '2023-01-06', reporter: 'Nurul Amin', location: 'Kota F', description: 'Laporan Kegiatan F', category: 'Kegiatan', status: 'Proses' },
        { id: 7, date: '2023-01-07', reporter: 'Rina Fitriani', location: 'Kota G', description: 'Laporan Lingkungan G', category: 'Lingkungan', status: 'Proses' },
        { id: 8, date: '2023-01-08', reporter: 'Budi Santoso', location: 'Kota H', description: 'Laporan Pelayanan Publik H', category: 'Pelayanan Publik', status: 'Proses' },
        { id: 9, date: '2023-01-09', reporter: 'Sari Mulia', location: 'Kota I', description: 'Laporan Keamanan I', category: 'Keamanan', status: 'Proses' },
        { id: 10, date: '2023-01-10', reporter: 'Joko Susilo', location: 'Kota J', description: 'Laporan Kegiatan J', category: 'Kegiatan', status: 'Proses' },
    ];


    const filteredTableData = activeTab === 'All' ? tableData : tableData.filter(item => item.category === activeTab);

    return (
        <div className='p-2 rounded-2xl bg-[#F1F1FF]'>
            <ul className="flex mb-4 mt-5 font-Poppins mx-[29px]">
                <li className={`ml-4 mr-6 cursor-pointer ${activeTab === 'All' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('All')}>All</li>
                <li className={`mr-6 cursor-pointer ${activeTab === 'Keamanan' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('Keamanan')}>Keamanan</li>
                <li className={`mr-6 cursor-pointer ${activeTab === 'Kegiatan' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('Kegiatan')}>Kegiatan</li>
                <li className={`mr-6 cursor-pointer ${activeTab === 'Lingkungan' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('Lingkungan')}>Lingkungan</li>
                <li className={`cursor-pointer ${activeTab === 'Pelayanan publik' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('Pelayanan publik')}>Pelayanan publik</li>
            </ul>
            <div className='px-2 bg-[#FFFFFF] rounded-2xl mx-[29px]'>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className='font-Poppins text-left'>
                            <th className="border-b-4 border-black px-3 py-2">ID</th>
                            <th className="border-b-4 border-black px-3 py-2">Date</th>
                            <th className="border-b-4 border-black px-3 py-2">Reporter</th>
                            <th className="border-b-4 border-black px-3 py-2">Location</th>
                            <th className="border-b-4 border-black px-3 py-2">Description</th>
                            <th className="border-b-4 border-black px-3 py-2">Category</th>
                            <th className="border-b-4 border-black px-3 py-2">Status</th>
                            <th className="border-b-4 border-black px-3 py-2 "></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTableData.map(item => (
                            <tr key={item.id} className='font-Poppins'>
                                <td className="px-3 py-2">{item.id}</td>
                                <td className="px-3 py-2">{item.date}</td>
                                <td className="px-3 py-2">{item.reporter}</td>
                                <td className="px-3 py-2">{item.location.length > 30 ? `${item.location.slice(0, 60)}...` : item.location}</td>
                                <td className="px-3 py-2">{item.description.length > 30 ? `${item.description.slice(0, 60)}...` : item.description}</td>
                                <td className="px-3 py-2">{item.category}</td>
                                <td className="px-3 py-2">{item.status}</td>
                                <td className="py-2">
                                    <img src="/img/file-minus.png" alt="Edit Icon" className="ml-2 cursor-pointer w-6 h-6" onClick={openModal} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded"
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
            >
                test
            </Modal>
            <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-500">
                    Showing 1 to 10 of 100 entries
                </p>
                <div className="flex items-center space-x-2">
                    <button className="w-11 h-11 bg-[#FFFF] text-black rounded flex items-center justify-center">
                        Previous
                    </button>
                    <button className="w-11 h-11 bg-[#27005D] text-white rounded flex items-center justify-center">
                        1
                    </button>
                    <button className="w-11 h-11 bg-[#27005D] text-white rounded flex items-center justify-center">
                        2
                    </button>
                    <button className="w-11 h-11 bg-[#27005D] text-white rounded flex items-center justify-center">
                        3
                    </button>
                    <button className="w-11 h-11 bg-[#27005D] text-white rounded flex items-center justify-center">
                        ...
                    </button>
                    <button className="w-11 h-11 bg-[#FFFF] text-black rounded flex items-center justify-center">
                        Next
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Service;