import React, { useState } from 'react';
import CardArticle from './componentsadmin/CardArticle';
import Modal from 'react-modal';

const Article = () => {

    const [formData, setFormData] = useState({
        photo: '',
        location: '',
        dateTime: '',
        author: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = () => {
        // Implement your save logic here
        console.log('Saved:', formData);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="p-2 rounded-2xl bg-[#F1F1FF]">
                <div className='flex justify-between ml-2 mr-4 pt-4'>
                    <button id="openModal" className="w-14 h-14 bg-[#27005D] rounded-2xl overflow-hidden flex items-center justify-center" onClick={openModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path>
                        </svg>
                    </button>
                    <div id="myModal" class="fixed inset-0 z-50 hidden overflow-auto bg-black bg-opacity-50">
                        <div class="flex items-center justify-center min-h-screen">
                            <div class="bg-white p-8 rounded shadow-lg">
                                <p>Isi dari modal di sini...</p>
                                <button id="closeModal" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Tutup</button>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {/* Card pertama */}
                        <CardArticle img="img/CardArticle.png" textArticle="Isi artikel Pertama" />

                        {/* Card kedua */}
                        <CardArticle img="img/CardArticle2.png" textArticle="Isi artikel kedua" />

                        {/* Card ketiga */}
                        <CardArticle img="img/CardArticle3.png" textArticle="Isi artikel ketiga" />

                        {/* Card keempat */}
                        <CardArticle img="img/CardArticle4.png" textArticle="Isi artikel keempat" />
                    </div>
                    <div className="">
                        <div className="flex flex-col items-center font-Poppins">
                            <div className="flex items-center m-3 p-3 rounded-3xl">
                                <a className="w-10 h-10 mr-2" src="" alt="" />
                                <div className="flex flex-col">
                                    <div className="flex items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center font-Poppins fixed right-12">
                        <div className="flex items-center m-3 p-3 border-black bg-white rounded-3xl">
                            <img className="w-10 h-10 mr-2" src="img/ArticleIcon.jpg" alt="Article Logo" />
                            <div className="flex flex-col">
                                <p className="text-[#27005D] text-4xl font-medium mb-1 text-center">30</p>
                                <div className="flex items-center">
                                    <p className="text-[#27005D] font-bold text-xl">Artikel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded"
                    overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
                >
                    <div className="flex">
                        {/* Left Side */}
                        <div className="flex-1 p-4">
                            <div className="mb-4">
                                <label htmlFor="photo">Photo:</label>
                                <input
                                    type="text"
                                    id="photo"
                                    name="photo"
                                    value={formData.photo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location">Location:</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="dateTime">Date/Time:</label>
                                <input
                                    type="text"
                                    id="dateTime"
                                    name="dateTime"
                                    value={formData.dateTime}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="author">Author:</label>
                                <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex-1 p-4">
                            <div className="mb-4">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                    onClick={handleSave}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default Article;