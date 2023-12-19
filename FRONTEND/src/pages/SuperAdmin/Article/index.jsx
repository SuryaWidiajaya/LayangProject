import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardAdmin from '@/components/Admin/CardAdmin';
import Link from 'next/link';


const Article = () => {
  const [article, setArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/articles');
      setArticles(response.data.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="p-2 rounded-2xl bg-[#F1F1FF]">
        <div className="flex gap-4 p-4">
          <Link href="/SuperAdmin/Article/AddArticle">
            <button
              className="w-14 h-14 bg-[#27005D] rounded-2xl overflow-hidden flex items-center justify-center"
              onClick={openModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </Link>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
              <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded shadow-lg">
                  <p>Isi dari modal di sini...</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={closeModal}>
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {article.map((value) => (
              <CardAdmin
                title={value.title}
                author={value.name}
                imgUrl={value.url}
                date={value.date}
                content1={value.content}
                id={value.article_id}
                key={value.article_id}
              />
            ))}
          </div>
          <div className="">
            <div className="flex flex-col items-center font-Poppins">
              <div className="flex items-center m-3 p-3 rounded-3xl">
                <a className="w-10 h-10 mr-2" src="" alt="" />
                <div className="flex flex-col">
                  <div className="flex items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
