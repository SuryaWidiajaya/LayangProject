import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function BodyProduct() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div className="container flex mt-[111px]">
        <div className="containerLeft font-Poppins w-[652px]">
          <h1 className="text-[#444BD3] font-semibold" data-aos="fade-up" data-aos-delay='400'>FITUR UTAMA APLIKASI LAYANG</h1>
          <h1 className="text-slate-950 text-[32px] font-bold" data-aos="fade-up" data-aos-delay='500'>2 FITUR UTAMA YANG KAMI TAWARKAN...</h1>
          <p className="text-slate-950 text-[16PX] font-normal" data-aos="fade-up" data-aos-delay='600'>
            Kami memahami kebutuhan desa Anda. Aplikasi kami menawarkan dua fitur utama yang revolusioner:
            <span className="font-semibold"> Pembuatan Surat Pengantar secara Online dan Pelaporan Online Masalah Desa.</span>
          </p>
        </div>

        <div className="flex items-center" data-aos="fade-up" data-aos-delay='300'>
          <div className="containerRight  mb-[120px]">
            <img src="/imgProduct/product2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyProduct;
