function Hore() {
  return (
    <div>
        <div className="hore flex mt-[40px] ">
          <div className="flex items-center">
              <div className="horeLeft font-Poppins w-[652px] ml-[200px]">
                  <h1 className="text-slate-950 text-[40px] font-bold">APLIKASI LAYANG AKAN MEMBANTUMU</h1>
                  <h4 className="text-slate-950 text-[18PX] font-normal">Dengan Layang, melaporkan secara online dan membuat surat pengantar tidak pernah semudah ini. Segera dapatkan aplikasinya.</h4>
                  <div className="button flex my-5 space-x-4 text-center">
                      <button className='pr-[32px] py-[14px] rounded-lg'>
                        <img src="/imgProduct/gps.png" alt="" />
                      </button>
                      <button className='pr-[32px] py-[14px] rounded-lg'>
                        <img src="/imgProduct/btnapp.png" alt="" />
                      </button>
                  </div>
              </div>
              <div className="horeRight  z-0 mr-[195px]">
                  <img src="/imgProduct/product.png" alt="" className="rounded-r-[30px]"/>  
              </div>
              </div>
          </div>
    </div>
  )
}

export default Hore
