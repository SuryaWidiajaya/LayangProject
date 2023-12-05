/*import BgContact from '/img/bg-contact.png?url' */

export default function Contact() {
  return (
      <div className="font-Poppins ">
          <div className="ContactLeft w-[264px] h-[35px] ml-[156px]">
              <h1 className="text-black text-[24px] font-bold mt-[50px]">
              Info Kontak
              </h1>
              <p className="text-black text-[14px] mt-[24px]">
              Apakah Anda memiliki pertanyaan, umpan balik, atau ingin berbagi pengalaman Anda dengan aplikasi Layang? Jangan ragu untuk menghubungi kami melalui salah satu opsi di bawah ini:
              </p>

              <p className="text-black text-[14px] mt-[36px]">
              supportLayang@website.com
              </p>

              <p className="text-black text-[14px] mt-[16px]">
              (480) 555-0103
              </p>
          </div>

          <div className="ContactRight flex w-[264px] h-[35px] ml-[636px]">
              <h1 className="text-[#27005D] text-[24px] font-bold leading-[33.6px]">
              Kirim Pesan
              </h1>
          </div>
          
      </div>
  )
}
