export default function FooterProduct(){
    return(
        <>
        <div className="container font-Poppins bg-[#27005D] py-[56px] rounded-t-[30px]">
            <div className="logo flex items-center font-bold text-2xl cursor-pointer ml-[156px]">
                <img className="mr-[19px]" src="img/logo.png" alt="" />
                <h1 className="text-white">LAYANG</h1>
            </div>
            <p className="text-white opacity-30 w-[360px] my-[24px] ml-[156px]">
            Jln. Panji Tilar no. 13, Karang Anyar, Lonbok Utara, Nusa Tenggara Barat 
            </p>
            <div className="flex gap-[32px] ml-[156px] ">
                <a href=""><img src="img/logo-facebook.png" alt="" /></a>
                <a href=""><img src="img/logo-twitter.png" alt="" /></a>
                <a href=""><img src="img/logo-instagram.png" alt="" /></a>
                <a href=""><img src="img/logo-github.png" alt="" /></a>
            </div>
            <div className="produk-kami flex grid justify-center -mt-[170px] ml-[-300px]">
                <span className="text-white opacity-40 font-semibold text-[14px] mb-[20px]">PRODUK KAMI</span>
                <div className="flex grid text-white text-[16px] gap-[8px]">
                    <a href="">Aplikasi</a>
                    <a href="">Website</a>
                    <a href="">Admin</a>
                </div>
            </div>

            <div className="tentang-kami flex grid justify-center -mt-[130px] ml-[120px]">
                <span className="text-white opacity-40 font-semibold text-[14px] mb-[20px]">TENTANG KAMI</span>
                <div className="flex grid text-white text-[16px] gap-[8px]">
                    <a href="">Perusahaan</a>
                    <a href="">Visi</a>
                    <a href="">Misi</a>
                    <a href="">Mitra</a>
                </div>
            </div>

            <div className="Artikel flex grid justify-center -mt-[162px] ml-[490px] ">
                <span className="text-white opacity-40 font-semibold text-[14px] mb-[20px] ">ARTIKEL</span>
                <div className="flex grid text-white text-[16px] gap-[8px]">
                    <a href="">Blog</a>
                    <a href="">Kategori</a>
                    <a href="">Penulis</a>
                </div>
            </div>

            <div className="Kontak-Kami flex grid justify-center py-[150px] mt-[-280px] ml-[890px]">
                <span className="text-white opacity-40 font-semibold text-[14px] mb-[22px]">KONTAK KAMI</span>
                <div className="flex grid text-white text-[16px] gap-[8px]">
                    <a href="">FAQ</a>
                    <a href="">Kebijakan Privasi</a>
                </div>
            </div>

            <div className="flex ml-[175px] justify-center border-t border-gray-300 w-[1150px] mt-[42px] py-[37px]">
                <span className="text-white opacity-40 text-[16px] mt-[40px]">
                 © 2023 Powered by PT Layang Warga Indonesia
                </span>
            </div>  

        </div>
        </>
    );
}