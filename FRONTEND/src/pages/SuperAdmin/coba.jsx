import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditAdmin = () => {
  const router = useRouter();
  const [nama, setNama] = useState('');
  const [pangkat, setPangkat] = useState('');
  const [nomor, setNomor] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alamat, setAlamat] = useState('');
  const [imageURL, setImageURL] = useState('');

  const [provinsiList, setProvinsiList] = useState([]);
  const [kabupatenList, setKabupatenList] = useState([]);
  const [kecamatanList, setKecamatanList] = useState([]);

  const [ProvinsiId, setProvinsiId] = useState('');
  const [KabupatenId, setKabupatenId] = useState('');
  const [KecamatanId, setKecamatanId] = useState('');

  const id = router.query.id;

  const handleProvinsiChange = (e) => {
    setProvinsiId(e.target.value);
    loadKabupaten();
  };

  const handleKabupatenChange = (e) => {
    setKabupatenId(e.target.value);
    loadKecamatan();
  };

  useEffect(() => {
    getAdminById();
    loadProvinsi();
  }, []);

  useEffect(() => {
    if (ProvinsiId) {
      loadKabupaten();
    }
  }, [ProvinsiId]);

  useEffect(() => {
    if (KabupatenId) {
      loadKecamatan();
    }
  }, [KabupatenId]);

  const getAdminById = async () => {
    const response = await axios.get(`http://localhost:3000/api/admin/${id}`);
    setNama(response.data.nama);
    setPangkat(response.data.pangkat);
    setNomor(response.data.nomor);
    setEmail(response.data.email);
    setPassword(response.data.password);
    setAlamat(response.data.alamat);
    setImageURL(response.data.imageURL);

  };

  const updateAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append('nama', nama);
    formData.append('pangkat', pangkat);
    formData.append('nomor', nomor);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('alamat', alamat);
    formData.append('imageURL', imageURL);
  
    try {
      await axios.patch(`http://localhost:3000/api/admin/${id}`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      router.push('/Admin');
    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };
  

  const loadProvinsi = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/provinsi/all');
      const provinsiData = response.data.data;
      if (provinsiData && Array.isArray(provinsiData)) {
        setProvinsiList(provinsiData);
      } else {
        console.error('Invalid data format for provinsi:', response.data);
      }
    } catch (error) {
      console.error('Error loading provinsi:', error);
    }
  };

  const loadKabupaten = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/kabupaten/${ProvinsiId}`);
      const kabupatenData = response.data.data;
      if (kabupatenData && Array.isArray(kabupatenData)) {
        setKabupatenList(kabupatenData);
      } else {
        console.error('Invalid data format for kabupaten:', response.data);
      }

      console.log(ProvinsiId)
    } catch (error) {
      console.error('Error loading kabupaten:', error);
    }
  };
  
  const loadKecamatan = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/kecamatan/${KabupatenId}`);
      const kecamatanData = response.data.data;
      if (kecamatanData && Array.isArray(kecamatanData)) {
        setKecamatanList(kecamatanData);
      } else {
        console.error('Invalid data format for kecamatan:', response.data);
      }
    } catch (error) {
      console.error('Error loading kecamatan:', error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="w-3/4 mt-10">
          <form onSubmit={updateAdmin} className="bg-white  px-8 pt-6 pb-8 mb-4 rounded-[30px] border-[1px] border-[#D9D9D9] hover:border-transparent hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nama:</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Pangkat:</label>
              <input
                type="text"
                value={pangkat}
                placeholder="Admin Name"
                onChange={(e) => setPangkat(e.target.value)}
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nomor:</label>
              <input
                type="text"
                value={nomor}
                onChange={(e) => setNomor(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Provinsi:</label>
              <select
                value={ProvinsiId}
                onChange={handleProvinsiChange}
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Pilih Provinsi</option>
                {provinsiList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kabupaten:</label>
              <select
                value={KabupatenId}
                onChange={handleKabupatenChange}
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Pilih Kabupaten</option>
                {kabupatenList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kecamatan:</label>
              <select
                value={KecamatanId}
                onChange={ (e) => {
                  setKecamatanId(e.target.value);
                  loadKabupaten();
                }}
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Pilih Kecamatan</option>
                {kecamatanList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Kelurahan:</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Image:</label>
              <textarea
                type="text"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                placeholder="Admin Name"
                className="rounded-[10px] border-[1px] border-[#D9D9D9] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-end">
              <button type="submit" className="bg-[#27005D] rounded-[10px] py-[10px] px-[42px] text-white font-Poppins text-[16px] font-semibold hover:bg-[#0F0024]">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAdmin;
