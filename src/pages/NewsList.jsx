import CardArticle from '@/components/Cards/CardArticle';
import CardNewArticle from '@/components/Cards/CardNewArticle';
import Layout from '@/components/Layout';
import ArticleJson from '@/JSON/Article.json';

export default function NewsList() {
  return (
    <>
    <Layout>
      <div className="relative bg-cover z-0 h-[]" style={{ backgroundImage: `url(img/bg-Newlist.png)` }}>
        <div className=" flex flex-col items-center">

          {/*Title */}

          <div className="mt-10">
            <div>
              <div className="Article font-Poppins gap-[12px] text-center mt-[50px] mb-[100px]">
                <span className="text-[#444BD3] text-[16px] font-semibold mt-[20px]">ARTIKEL KAMI</span>
                <h1 className="text-[#27005D] text-[44px] font-bold">Semua Informasi di Desa Anda</h1>
                <p className="text-[18px] opacity-50">
                  Baca informasi informasi penting di desa anda yang dikelola langsung oleh <br /> warga setempat
                </p>
              </div>
            </div>

            {/* Content */}

            <div className="flex gap-[75px]">
              <div className="flex flex-col gap-[63px]">
                {ArticleJson.map((value) => (
                  <CardArticle  
                  title = {value.title} 
                  author = {value.author} 
                  imgUrl = {value.imgUrl} 
                  date = {value.date_published} 
                  content1 = {value.content1} 
                  id = {value.post_id} 
                  link = {value.link} />
                ))}
              </div>

              <div>
                <CardNewArticle />
              </div>
            </div>

            <div className="flex justify-end mt-[55px] mb-[100px] items-center">
              <h1 className="text-[25px] font-bold">1 / 3</h1>
              <button className="text-white text-[18px] ml-[46px] font-semibold bg-[#27005D] rounded-lg py-2 px-8">Next</button>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}
