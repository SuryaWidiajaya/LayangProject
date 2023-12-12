import { FaTrash, FaEdit } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Service = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [service, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    const response = await axios.get('http://localhost:5000/Services');
    setServices(response.data);
  };

  const filteredTableData = activeTab === 'All' ? service : service.filter((item) => item.proses === activeTab);

  return (
    <div className="p-2 rounded-2xl bg-[#F1F1FF]">
      <ul className="flex mb-4 mt-5 mx-[29px]">
        <li className={`ml-4 mr-6 cursor-pointer ${activeTab === 'All' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('All')}>
          All
        </li>
        <li className={`mr-6 cursor-pointer ${activeTab === 'menunggu' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('menunggu')}>
          Menunggu
        </li>
        <li className={`mr-6 cursor-pointer ${activeTab === 'proses' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('proses')}>
          Proses
        </li>
        <li className={`mr-6 cursor-pointer ${activeTab === 'selesai' ? 'text-[#27005D] border-b-2 border-black' : ''}`} onClick={() => handleTabChange('selesai')}>
          Selesai
        </li>
      </ul>
      <div className="px-2 bg-[#FFFFFF] rounded-2xl mx-[29px]">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="text-left">
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '3%' }}>
                id
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '10%' }}>
                Nama
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '10%' }}>
                NIK
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '12%' }}>
                TTL
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '10%' }}>
                Agama
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '10%' }}>
                Status
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '25%' }}>
                Alamat
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '10%' }}>
                Jenis
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '10%' }}>
                Proses
              </th>
              <th className="border-b-2 border-black px-2 py-2" style={{ width: '10%' }}></th>
            </tr>
          </thead>
          <tbody>
            {filteredTableData.map((item) => (
              <tr key={item.id} className="">
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.id}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.nama.length > 30 ? `${item.nama.slice(0, 20)}...` : item.nama}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.nik.length > 30 ? `${item.nik.slice(0, 20)}...` : item.nik}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.ttl.length > 30 ? `${item.ttl.slice(0, 20)}...` : item.ttl}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.agama.length > 30 ? `${item.agama.slice(0, 20)}...` : item.agama}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.status.length > 30 ? `${item.status.slice(0, 20)}...` : item.status}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.alamat.length > 30 ? `${item.alamat.slice(0, 50)}...` : item.alamat}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.jenis.length > 30 ? `${item.jenis.slice(0, 30)}...` : item.jenis}
                </td>
                <td className="px-2 py-2" style={{ verticalAlign: 'top' }}>
                  {item.proses.length > 30 ? `${item.proses.slice(0, 20)}...` : item.proses}
                </td>
                <td className="py-2" style={{ verticalAlign: 'top' }}>
                  <div className="flex gap-4 justify-end px-5">
                    {activeTab === 'All' && <></>}
                    {activeTab === 'proses' && (
                      <Link href={'/Admin/EditService/' + item.id}>
                        <FaEdit className="text-[#D9D9D9]  text-xl cursor-pointer hover:text-[#919191]" />
                      </Link>
                    )}

                    {activeTab === 'menunggu' && (
                      <Link href={'/Admin/EditService/' + item.id}>
                        <FaEdit className="text-[#D9D9D9] text-xl cursor-pointer hover:text-[#919191]" />
                      </Link>
                    )}
                    {activeTab === 'selesai' && <FaTrash className="text-[#D9D9D9]  text-xl cursor-pointer hover:text-[#919191]" />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Service;
