import ButtonArticle from '../Buttons/ButtonArticle';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function InfoMitra() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="info font-Poppins flex justify-center mt-[160px]">
        <div className="">
          <span className="text-[#444BD3] text-[16px] font-semibold mt-[20px] " data-aos="fade-down" data-aos-delay='0'>LAYANG MELAYANI DESA ANDA</span>
          <h1 className="w-[463px] text-[40px] font-bold text-[#27005D] my-[8px]" data-aos="fade-up" data-aos-delay='200'>Beberapa desa telah bergabung bersama kami!!</h1>
          <p className="w-[456px] text-[16px] opacity-50 mb-[32px]" data-aos="fade-up" data-aos-delay='200'>DocuSign uses Dlex to track key metrics to improve customer experience, resulting in more conversions, onboarding completions, and paid upgrades.</p>
          <div data-aos="fade-up" data-aos-delay='0'>
          <Link href='./Profile'><ButtonArticle /></Link>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay='0'>
        <img className="ml-[113px]" src="img/InfoMitra.png" alt="" />
        </div>
      </div>
      <div className="flex ml-[175px] justify-center border-b border-t border-gray-300 w-[1150px] mt-[72px] py-[37px]">
        <div className="logoKota flex " data-aos="fade-up" data-aos-delay='0'>
          <img src="img/GrupKota.png" alt="" />
        </div>
      </div>
    </>
  );
}
