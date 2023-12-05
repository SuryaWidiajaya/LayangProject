export default function BodyProduct() {
  return (
    <div>
      <div className="container flex mt-[111px]">
        <div className="containerLeft font-Poppins w-[652px] ml-[200px]">
          <span className="text-[#444BD3] font-semibold">FITUR UTAMA APLIKASI LAYANG</span>
          <h1 className="text-slate-950 text-[32px] font-bold">2 FITUR UTAMA YANG KAMI TAWARKAN...</h1>
          <p className="text-slate-950 text-[16PX] font-normal">
            Kami memahami kebutuhan desa Anda. Aplikasi kami menawarkan dua fitur utama yang revolusioner:
            <span className="font-semibold"> Pembuatan Surat Pengantar secara Online dan Pelaporan Online Masalah Desa.</span>
          </p>

          <div className="flex card w-[264px] rounded-[12px] py-[25px] gap-[24px]">
            <div className="">
            <h1 className=" font-Poppins text-[16px] font-bold mt-[24px] mb-[16px] text-bold">Tools for every stack</h1>
              <p className="text-[#7D7D7D] text-[14px]">Pembuatan surat pengantar sekarang dapat dilakukan dengan beberapa ketukan jari.  Masukkan informasi, dan surat pengantar akan segera di proses.</p>
              
              <div className="mt-[12px] text-[#444BD3] font-medium text-[14px]">
                Pelajari Lebih Lanjut
              </div>
            </div>

            <div className="">
            <h1 className="font-Poppins text-[16px] font-bold mt-[24px] mb-[16px] text-bold">Prebuilt integrations</h1>
              <p className="text-[#7D7D7D] text-[14px]">Sampaikan permasalahan seputar infrastruktur, lingkungan, atau keamanan secara langsung dari ponsel Anda dan pihak terkait akan segera bertindak.</p>

              <div className="mt-[12px] text-[#444BD3] font-medium text-[14px]">
                Pelajari Lebih Lanjut
              </div>
            </div>
          </div>

        <div className="flex items-center">
            <div className="containerRight mr-[150px] mb-[120px]">
            <img src="/imgProduct/product2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}