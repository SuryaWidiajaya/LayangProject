import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Hore() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <div>
        <div className="hore flex mt-[40px] ">
          <div className="flex items-center">
              <div className="horeLeft font-Poppins w-[652px]">
                  <h1 className="text-slate-950 text-[40px] font-bold" data-aos="fade-up" data-aos-delay='0'>APLIKASI LAYANG AKAN MEMBANTUMU</h1>
                  <h4 className="text-slate-950 text-[18PX] font-normal" data-aos="fade-up" data-aos-delay='100'>Dengan Layang, melaporkan secara online dan membuat surat pengantar tidak pernah semudah ini. Segera dapatkan aplikasinya.</h4>
                  <div className="button flex my-5 space-x-4 text-center" data-aos="fade-up" data-aos-delay='300'>
                      <button className='pr-[32px] py-[14px] rounded-lg'>
                        <img src="/imgProduct/gps.png" alt="" />
                      </button>
                      <button className='pr-[32px] py-[14px] rounded-lg'>
                        <img src="/imgProduct/btnapp.png" alt="" />
                      </button>
                  </div>
              </div>
              <div className="horeRight  z-0 " data-aos="fade-up" data-aos-delay='0'>
                  <img src="/imgProduct/product.png" alt="" className="rounded-r-[30px]"/>  
              </div>
              </div>
          </div>
    </div>
  )
}

export default Hore
