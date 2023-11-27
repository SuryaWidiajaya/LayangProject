import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import image1 from '../../../public/img/Depan 5.png';
import image2 from '../../../public/img/Depan 2.png';
import image3 from '../../../public/img/Depan 3.png';
import image4 from '../../../public/img/Depan 4.png';
import image5 from '../../../public/img/Depan 1.png';

export default function AppInfo() {

  const images = [image1, image2, image3, image4, image5];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);


  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div className="container flex justify-center my-[100px] ml-[50]">
        <div data-aos="fade-up" data-aos-delay='500'>
          <Image src={images[currentImage]}></Image>
        </div>
        <div className="OurApp font-Poppins justify-center ml-[62px] my-[200px]">
          <h1 className="w-[681px] text-[#27005D] text-[40px] font-bold" data-aos="fade-up" data-aos-delay='0'>Segera Download Aplikasi Kami, dan Rasakan Manfaatnya</h1>
          <div className="flex gap-[32px] mt-[28px]" data-aos="fade-up" data-aos-delay='200'>
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="187" height="55" viewBox="0 0 187 55" fill="none">
              <path d="M180.074 54.0215H6.92593C3.1184 54.0215 0 50.981 0 47.2687V6.75204C0 3.0397 3.1184 -0.00073719 6.92593 -0.00073719H180.074C183.882 -0.00073719 187 3.0397 187 6.75204V47.2687C187 50.981 183.882 54.0215 180.074 54.0215Z" fill="#27005D" />
              <path d="M180.074 1.08139C183.281 1.08139 185.89 3.6255 185.89 6.75204V47.2687C185.89 50.3952 183.281 52.9394 180.074 52.9394H6.92593C3.71922 52.9394 1.10988 50.3952 1.10988 47.2687V6.75204C1.10988 3.6255 3.71922 1.08139 6.92593 1.08139H180.074ZM180.074 -0.00073719H6.92593C3.1184 -0.00073719 0 3.0397 0 6.75204V47.2687C0 50.981 3.1184 54.0215 6.92593 54.0215H180.074C183.882 54.0215 187 50.981 187 47.2687V6.75204C187 3.0397 183.882 -0.00073719 180.074 -0.00073719Z" fill="#A6A6A6" />
              <path d="M14.4544 10.1823C14.0475 10.5976 13.812 11.2442 13.812 12.0815V41.9491C13.812 42.7864 14.0475 43.433 14.4544 43.8483L14.5548 43.9395L31.7207 27.2094V26.8144L14.5548 10.0844L14.4544 10.1823Z" fill="url(#paint0_linear_97_6459)" />
              <path d="M37.4361 32.7891L31.7205 27.2096V26.8145L37.443 21.2351L37.5711 21.3077L44.3482 25.0673C46.2822 26.1342 46.2822 27.8899 44.3482 28.9636L37.5711 32.7165L37.4361 32.7891Z" fill="url(#paint1_linear_97_6459)" />
              <path d="M37.5714 32.7156L31.7207 27.0112L14.4543 43.8476C15.0967 44.5059 16.1443 44.5853 17.3355 43.9269L37.5714 32.7156Z" fill="url(#paint2_linear_97_6459)" />
              <path d="M37.5714 21.3073L17.3355 10.096C16.1443 9.44437 15.0967 9.52371 14.4543 10.1821L31.7207 27.0117L37.5714 21.3073Z" fill="url(#paint3_linear_97_6459)" />
              <path d="M65.6817 13.8327C65.6817 14.9604 65.3354 15.8636 64.6532 16.5372C63.8688 17.3357 62.8472 17.7375 61.5954 17.7375C60.3989 17.7375 59.3773 17.329 58.5393 16.5237C57.6995 15.7066 57.2805 14.7038 57.2805 13.5035C57.2805 12.3032 57.6995 11.3004 58.5393 10.4901C59.3773 9.67808 60.3989 9.26953 61.5954 9.26953C62.191 9.26953 62.7589 9.38939 63.3009 9.61223C63.8411 9.83676 64.2809 10.1406 64.5995 10.5154L63.8757 11.2278C63.3199 10.588 62.5633 10.2723 61.5954 10.2723C60.7227 10.2723 59.966 10.5694 59.3237 11.1687C58.6882 11.7697 58.3696 12.548 58.3696 13.5035C58.3696 14.459 58.6882 15.244 59.3237 15.845C59.966 16.4376 60.7227 16.7415 61.5954 16.7415C62.5217 16.7415 63.3009 16.4376 63.9156 15.8383C64.3207 15.4416 64.551 14.8946 64.6116 14.1957H61.5954V13.2199H65.6193C65.6678 13.4309 65.6817 13.6352 65.6817 13.8327Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10" />
              <path d="M72.0652 10.4514H68.2854V13.0174H71.6929V13.9932H68.2854V16.5593H72.0652V17.5536H67.2153V9.45703H72.0652V10.4514Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10" />
              <path d="M76.5714 17.5536H75.5013V10.4514H73.1829V9.45703H78.8916V10.4514H76.5714V17.5536Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10" />
              <path d="M83.0225 17.5536V9.45703H84.0908V17.5536H83.0225Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10" />
              <path d="M88.8262 17.5536H87.7648V10.4514H85.4377V9.45703H91.1533V10.4514H88.8262V17.5536Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10" />
              <path d="M101.961 16.5102C101.142 17.329 100.128 17.7375 98.9174 17.7375C97.7001 17.7375 96.6855 17.329 95.8665 16.5102C95.0492 15.6931 94.6423 14.6903 94.6423 13.5035C94.6423 12.3167 95.0492 11.3139 95.8665 10.4968C96.6855 9.67807 97.7001 9.26953 98.9174 9.26953C100.121 9.26953 101.135 9.67807 101.954 10.5036C102.779 11.3274 103.185 12.3235 103.185 13.5035C103.185 14.6903 102.779 15.6931 101.961 16.5102ZM96.6578 15.8315C97.2742 16.4376 98.0239 16.7415 98.9174 16.7415C99.8039 16.7415 100.561 16.4376 101.17 15.8315C101.785 15.2255 102.096 14.4472 102.096 13.5035C102.096 12.5598 101.785 11.7816 101.17 11.1755C100.561 10.5694 99.8039 10.2656 98.9174 10.2656C98.0239 10.2656 97.2742 10.5694 96.6578 11.1755C96.0431 11.7816 95.7314 12.5598 95.7314 13.5035C95.7314 14.4472 96.0431 15.2255 96.6578 15.8315Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10" />
              <path d="M104.686 17.5536V9.45703H105.985L110.023 15.754H110.069L110.023 14.1975V9.45703H111.091V17.5536H109.976L105.748 10.946H105.701L105.748 12.5093V17.5536H104.686Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10" />
              <path d="M94.3795 29.3778C91.126 29.3778 88.4682 31.792 88.4682 35.1228C88.4682 38.4266 91.126 40.866 94.3795 40.866C97.6399 40.866 100.298 38.4266 100.298 35.1228C100.298 31.792 97.6399 29.3778 94.3795 29.3778ZM94.3795 38.6038C92.5943 38.6038 91.0585 37.1672 91.0585 35.1228C91.0585 33.0514 92.5943 31.64 94.3795 31.64C96.1646 31.64 97.7074 33.0514 97.7074 35.1228C97.7074 37.1672 96.1646 38.6038 94.3795 38.6038ZM81.4817 29.3778C78.2213 29.3778 75.5704 31.792 75.5704 35.1228C75.5704 38.4266 78.2213 40.866 81.4817 40.866C84.7403 40.866 87.393 38.4266 87.393 35.1228C87.393 31.792 84.7403 29.3778 81.4817 29.3778ZM81.4817 38.6038C79.6948 38.6038 78.1538 37.1672 78.1538 35.1228C78.1538 33.0514 79.6948 31.64 81.4817 31.64C83.2668 31.64 84.8027 33.0514 84.8027 35.1228C84.8027 37.1672 83.2668 38.6038 81.4817 38.6038ZM66.1338 31.1386V33.5798H72.1126C71.9378 34.9438 71.4703 35.9466 70.7534 36.6455C69.8808 37.4896 68.5215 38.4266 66.1338 38.4266C62.4544 38.4266 59.5732 35.5313 59.5732 31.9439C59.5732 28.3565 62.4544 25.4612 66.1338 25.4612C68.1233 25.4612 69.5708 26.2192 70.6391 27.2018L72.4035 25.4815C70.9093 24.0904 68.9215 23.0218 66.1338 23.0218C61.0883 23.0218 56.8479 27.0245 56.8479 31.9439C56.8479 36.8633 61.0883 40.866 66.1338 40.866C68.8609 40.866 70.9093 39.9949 72.5195 38.3607C74.1696 36.7519 74.6839 34.4897 74.6839 32.6631C74.6839 32.0958 74.6354 31.5742 74.5488 31.1386H66.1338ZM128.893 33.0311C128.407 31.7464 126.905 29.3778 123.848 29.3778C120.817 29.3778 118.295 31.7059 118.295 35.1228C118.295 38.3405 120.791 40.866 124.138 40.866C126.845 40.866 128.407 39.2572 129.049 38.3202L127.04 37.0152C126.37 37.9708 125.458 38.6038 124.138 38.6038C122.828 38.6038 121.888 38.018 121.285 36.8633L129.165 33.6844L128.893 33.0311ZM120.859 34.9438C120.792 32.7289 122.623 31.5944 123.936 31.5944C124.964 31.5944 125.837 32.0958 126.128 32.8133L120.859 34.9438ZM114.454 40.5165H117.045V23.6346H114.454V40.5165ZM110.212 30.6575H110.126C109.544 29.9856 108.434 29.3778 107.028 29.3778C104.078 29.3778 101.38 31.9034 101.38 35.1413C101.38 38.3607 104.078 40.866 107.028 40.866C108.434 40.866 109.544 40.2532 110.126 39.561H110.212V40.3849C110.212 42.5812 109.009 43.7613 107.068 43.7613C105.485 43.7613 104.503 42.647 104.098 41.7101L101.846 42.6268C102.495 44.1495 104.214 46.0234 107.068 46.0234C110.105 46.0234 112.667 44.2812 112.667 40.0422V29.7273H110.212V30.6575ZM107.25 38.6038C105.464 38.6038 103.97 37.1469 103.97 35.1413C103.97 33.1172 105.464 31.64 107.25 31.64C109.009 31.64 110.396 33.1172 110.396 35.1413C110.396 37.1469 109.009 38.6038 107.25 38.6038ZM141.02 23.6346H134.825V40.5165H137.409V34.12H141.02C143.889 34.12 146.703 32.0958 146.703 28.8765C146.703 25.6588 143.883 23.6346 141.02 23.6346ZM141.088 31.7717H137.409V25.9829H141.088C143.017 25.9829 144.118 27.5445 144.118 28.8765C144.118 30.1831 143.017 31.7717 141.088 31.7717ZM157.057 29.3458C155.191 29.3458 153.25 30.1493 152.452 31.9304L154.744 32.8673C155.238 31.9304 156.145 31.6265 157.104 31.6265C158.444 31.6265 159.803 32.4115 159.824 33.7975V33.9748C159.357 33.7114 158.356 33.3215 157.125 33.3215C154.656 33.3215 152.14 34.6467 152.14 37.1199C152.14 39.3821 154.162 40.839 156.436 40.839C158.174 40.839 159.133 40.0742 159.736 39.1846H159.824V40.4895H162.319V34.0136C162.319 31.0205 160.027 29.3458 157.057 29.3458ZM156.746 38.5971C155.901 38.5971 154.723 38.1885 154.723 37.1672C154.723 35.8605 156.192 35.3591 157.463 35.3591C158.6 35.3591 159.133 35.6039 159.824 35.9263C159.622 37.4896 158.242 38.5971 156.746 38.5971ZM171.41 29.7155L168.44 37.0338H168.352L165.282 29.7155H162.496L167.109 39.9426L164.477 45.6335H167.176L174.284 29.7155H171.41ZM148.123 40.5165H150.713V23.6346H148.123V40.5165Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_97_6459" x1="30.1966" y1="42.2601" x2="7.53829" y2="19.0208" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00A0FF" />
                  <stop offset="0.0066" stopColor="#00A1FF" />
                  <stop offset="0.2601" stopColor="#00BEFF" />
                  <stop offset="0.5122" stopColor="#00D2FF" />
                  <stop offset="0.7604" stopColor="#00DFFF" />
                  <stop offset="1" stopColor="#00E3FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_97_6459" x1="46.8666" y1="27.0102" x2="13.3494" y2="27.0102" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE000" />
                  <stop offset="0.4087" stopColor="#FFBD00" />
                  <stop offset="0.7754" stopColor="#FFA500" />
                  <stop offset="1" stopColor="#FF9C00" />
                </linearGradient>
                <linearGradient id="paint2_linear_97_6459" x1="34.3899" y1="23.9102" x2="3.66343" y2="-7.60418" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF3A44" />
                  <stop offset="1" stopColor="#C31162" />
                </linearGradient>
                <linearGradient id="paint3_linear_97_6459" x1="10.1081" y1="53.7849" x2="23.8288" y2="39.7124" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#32A071" />
                  <stop offset="0.0685" stopColor="#2DA771" />
                  <stop offset="0.4762" stopColor="#15CF74" />
                  <stop offset="0.8009" stopColor="#06E775" />
                  <stop offset="1" stopColor="#00F076" />
                </linearGradient>
              </defs>
            </svg>
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="188" height="55" viewBox="0 0 188 55" fill="none">
              <path d="M186.956 48.0483C186.956 50.9426 184.562 53.287 181.602 53.287H6.40497C3.44613 53.287 1.04443 50.9426 1.04443 48.0483V6.27098C1.04443 3.37804 3.44613 1.02539 6.40497 1.02539H181.601C184.562 1.02539 186.954 3.37804 186.954 6.27098L186.956 48.0483Z" fill="#27005D" />
              <path d="M181.037 1.08736C184.261 1.08736 186.884 3.64507 186.884 6.78833V47.5217C186.884 50.6649 184.261 53.2226 181.037 53.2226H6.96296C3.73911 53.2226 1.11581 50.6649 1.11581 47.5217V6.78833C1.11581 3.64507 3.73911 1.08736 6.96296 1.08736H181.037ZM181.037 -0.00056076H6.96296C3.13507 -0.00056076 0 3.05614 0 6.78833V47.5217C0 51.2538 3.13507 54.3105 6.96296 54.3105H181.037C184.865 54.3105 188 51.2538 188 47.5217V6.78833C188 3.05614 184.865 -0.00056076 181.037 -0.00056076Z" fill="#A6A6A6" />
              <path d="M41.9558 26.8624C41.9155 22.4863 45.6309 20.3573 45.8008 20.2581C43.6966 17.267 40.4351 16.8583 39.289 16.8257C36.5498 16.5446 33.8927 18.4238 32.4974 18.4238C31.0741 18.4238 28.9253 16.8528 26.6095 16.899C23.6293 16.9438 20.8414 18.6261 19.3123 21.2385C16.1567 26.565 18.5102 34.3926 21.5335 38.6981C23.0458 40.8068 24.813 43.1611 27.1261 43.0783C29.3891 42.9873 30.2344 41.6717 32.9653 41.6717C35.6711 41.6717 36.4648 43.0783 38.8239 43.0254C41.2526 42.9873 42.7816 40.9072 44.2411 38.7796C45.9888 36.3627 46.6907 33.9826 46.7185 33.8604C46.6614 33.8414 42.0018 32.1075 41.9558 26.8624Z" fill="white" />
              <path d="M37.4995 13.9934C38.7167 12.5093 39.5494 10.4903 39.3183 8.44141C37.5566 8.51744 35.3536 9.62946 34.0849 11.0809C32.9625 12.36 31.9598 14.4564 32.2188 16.4279C34.1977 16.5718 36.2295 15.4543 37.4995 13.9934Z" fill="white" />
              <path d="M68.3061 13.5915C68.3061 15.1896 67.8145 16.3926 66.8327 17.2005C65.9233 17.9459 64.631 18.3193 62.9571 18.3193C62.1271 18.3193 61.4169 18.284 60.8223 18.2134V9.48153C61.5979 9.35933 62.4335 9.29688 63.3359 9.29688C64.9304 9.29688 66.1322 9.63496 66.9427 10.3111C67.8507 11.0756 68.3061 12.1686 68.3061 13.5915ZM66.7672 13.6309C66.7672 12.5949 66.4859 11.8006 65.9233 11.2466C65.3607 10.694 64.5391 10.417 63.4571 10.417C62.9975 10.417 62.6062 10.4469 62.2817 10.5094V17.1475C62.4613 17.1747 62.79 17.1869 63.2677 17.1869C64.3845 17.1869 65.2465 16.8841 65.8537 16.2786C66.4609 15.673 66.7672 14.7904 66.7672 13.6309Z" fill="white" />
              <path d="M76.4655 14.9867C76.4655 15.971 76.1772 16.7776 75.6007 17.4103C74.9963 18.0607 74.1956 18.3852 73.1957 18.3852C72.232 18.3852 71.4647 18.0742 70.8923 17.4497C70.3214 16.8264 70.0359 16.0403 70.0359 15.0926C70.0359 14.1014 70.3297 13.2881 70.9202 12.6567C71.5106 12.0253 72.3044 11.709 73.3043 11.709C74.268 11.709 75.0423 12.0199 75.6285 12.6431C76.1856 13.2487 76.4655 14.0308 76.4655 14.9867ZM74.9517 15.0328C74.9517 14.4422 74.8208 13.9357 74.5604 13.5135C74.2541 13.0029 73.8182 12.7477 73.2514 12.7477C72.6651 12.7477 72.2195 13.0029 71.9131 13.5135C71.6513 13.9357 71.5218 14.4503 71.5218 15.0586C71.5218 15.6493 71.6527 16.1557 71.9131 16.578C72.2292 17.0885 72.6693 17.3438 73.2375 17.3438C73.7945 17.3438 74.2318 17.0844 74.5465 16.5644C74.8167 16.134 74.9517 15.6235 74.9517 15.0328Z" fill="white" />
              <path d="M87.4054 11.8398L85.3514 18.2404H84.0145L83.1636 15.461C82.9478 14.7672 82.7723 14.0775 82.6358 13.3931H82.6094C82.4826 14.0965 82.3072 14.7849 82.0816 15.461L81.1778 18.2404H79.8256L77.894 11.8398H79.3939L80.1361 14.8826C80.3158 15.6022 80.4634 16.2879 80.5817 16.9369H80.6082C80.7168 16.402 80.8965 15.7204 81.1499 14.8962L82.0816 11.8412H83.2708L84.1635 14.831C84.3793 15.5602 84.5548 16.2621 84.6899 16.9383H84.7303C84.8292 16.2798 84.9782 15.5778 85.1759 14.831L85.9725 11.8412H87.4054V11.8398Z" fill="white" />
              <path d="M94.9715 18.2401H93.512V14.5741C93.512 13.4444 93.072 12.8796 92.1891 12.8796C91.756 12.8796 91.4064 13.0343 91.1349 13.3453C90.8661 13.6562 90.7296 14.0228 90.7296 14.4424V18.2387H89.2702V13.6684C89.2702 13.1063 89.2521 12.4967 89.2173 11.8368H90.4999L90.5681 12.8375H90.6085C90.7784 12.5265 91.0318 12.2699 91.3647 12.0649C91.7602 11.8259 92.203 11.7051 92.6876 11.7051C93.3004 11.7051 93.81 11.8979 94.2153 12.2848C94.7194 12.7587 94.9715 13.4661 94.9715 14.4057V18.2401Z" fill="white" />
              <path d="M98.9959 18.2398H97.5378V8.90234H98.9959V18.2398Z" fill="white" />
              <path d="M107.589 14.9867C107.589 15.971 107.3 16.7776 106.724 17.4103C106.119 18.0607 105.317 18.3852 104.319 18.3852C103.354 18.3852 102.586 18.0742 102.015 17.4497C101.444 16.8264 101.159 16.0403 101.159 15.0926C101.159 14.1014 101.453 13.2881 102.043 12.6567C102.634 12.0253 103.427 11.709 104.426 11.709C105.391 11.709 106.164 12.0199 106.752 12.6431C107.309 13.2487 107.589 14.0308 107.589 14.9867ZM106.073 15.0328C106.073 14.4422 105.942 13.9357 105.682 13.5135C105.377 13.0029 104.94 12.7477 104.374 12.7477C103.787 12.7477 103.341 13.0029 103.036 13.5135C102.774 13.9357 102.645 14.4503 102.645 15.0586C102.645 15.6493 102.776 16.1557 103.036 16.578C103.352 17.0885 103.792 17.3438 104.361 17.3438C104.918 17.3438 105.353 17.0844 105.668 16.5644C105.94 16.134 106.073 15.6235 106.073 15.0328Z" fill="white" />
              <path d="M114.652 18.2399H113.341L113.232 17.5026H113.192C112.744 18.0905 112.104 18.3852 111.274 18.3852C110.655 18.3852 110.153 18.191 109.776 17.8054C109.434 17.4551 109.262 17.0193 109.262 16.5019C109.262 15.7199 109.596 15.1238 110.269 14.711C110.94 14.2983 111.884 14.096 113.1 14.1055V13.986C113.1 13.1428 112.646 12.7219 111.737 12.7219C111.089 12.7219 110.518 12.8807 110.025 13.1958L109.729 12.2616C110.339 11.8936 111.092 11.709 111.981 11.709C113.696 11.709 114.557 12.5915 114.557 14.3567V16.7138C114.557 17.3533 114.589 17.8624 114.652 18.2399ZM113.136 16.0403V15.0532C111.527 15.026 110.722 15.4565 110.722 16.3431C110.722 16.6771 110.814 16.9269 111.002 17.0939C111.19 17.2609 111.429 17.3438 111.715 17.3438C112.035 17.3438 112.334 17.2446 112.607 17.0478C112.882 16.8495 113.05 16.5983 113.113 16.2901C113.128 16.2209 113.136 16.1367 113.136 16.0403Z" fill="white" />
              <path d="M122.945 18.2398H121.65L121.581 17.2119H121.541C121.127 17.994 120.423 18.3851 119.433 18.3851C118.642 18.3851 117.983 18.0823 117.461 17.4767C116.938 16.8711 116.678 16.085 116.678 15.1196C116.678 14.0836 116.961 13.2445 117.529 12.6036C118.079 12.0062 118.753 11.7075 119.555 11.7075C120.437 11.7075 121.053 11.9967 121.404 12.5765H121.432V8.90234H122.893V16.5154C122.893 17.1386 122.91 17.713 122.945 18.2398ZM121.432 15.5405V14.4733C121.432 14.2886 121.418 14.1393 121.392 14.0252C121.31 13.6831 121.133 13.3952 120.864 13.1631C120.593 12.9309 120.265 12.8141 119.888 12.8141C119.343 12.8141 118.917 13.0246 118.604 13.4468C118.293 13.8691 118.136 14.4081 118.136 15.0667C118.136 15.6994 118.285 16.2126 118.584 16.6077C118.901 17.0286 119.327 17.2391 119.86 17.2391C120.339 17.2391 120.722 17.0639 121.013 16.7123C121.294 16.3878 121.432 15.9967 121.432 15.5405Z" fill="white" />
              <path d="M135.427 14.9867C135.427 15.971 135.138 16.7776 134.562 17.4103C133.957 18.0607 133.158 18.3852 132.157 18.3852C131.195 18.3852 130.427 18.0742 129.854 17.4497C129.283 16.8264 128.997 16.0403 128.997 15.0926C128.997 14.1014 129.291 13.2881 129.881 12.6567C130.472 12.0253 131.266 11.709 132.267 11.709C133.229 11.709 134.005 12.0199 134.59 12.6431C135.147 13.2487 135.427 14.0308 135.427 14.9867ZM133.914 15.0328C133.914 14.4422 133.783 13.9357 133.523 13.5135C133.215 13.0029 132.781 12.7477 132.213 12.7477C131.628 12.7477 131.182 13.0029 130.874 13.5135C130.612 13.9357 130.483 14.4503 130.483 15.0586C130.483 15.6493 130.614 16.1557 130.874 16.578C131.19 17.0885 131.63 17.3438 132.199 17.3438C132.756 17.3438 133.194 17.0844 133.509 16.5644C133.778 16.134 133.914 15.6235 133.914 15.0328Z" fill="white" />
              <path d="M143.273 18.2401H141.815V14.5741C141.815 13.4444 141.375 12.8796 140.491 12.8796C140.058 12.8796 139.708 13.0343 139.438 13.3453C139.168 13.6562 139.033 14.0228 139.033 14.4424V18.2387H137.572V13.6684C137.572 13.1063 137.555 12.4967 137.521 11.8368H138.802L138.87 12.8375H138.91C139.082 12.5265 139.335 12.2699 139.666 12.0649C140.063 11.8259 140.505 11.7051 140.991 11.7051C141.602 11.7051 142.112 11.8979 142.517 12.2848C143.023 12.7587 143.273 13.4661 143.273 14.4057V18.2401Z" fill="white" />
              <path d="M153.095 12.906H151.488V16.0153C151.488 16.8055 151.773 17.2006 152.339 17.2006C152.601 17.2006 152.818 17.1789 152.989 17.1341L153.027 18.2135C152.739 18.3194 152.36 18.3724 151.893 18.3724C151.317 18.3724 150.868 18.2013 150.544 17.8592C150.218 17.517 150.056 16.9413 150.056 16.1334V12.906H149.097V11.8401H150.056V10.667L151.487 10.2461V11.8388H153.094V12.906H153.095Z" fill="white" />
              <path d="M160.822 18.2398H159.361V14.6009C159.361 13.4536 158.921 12.8793 158.039 12.8793C157.363 12.8793 156.9 13.2119 156.647 13.8772C156.604 14.0171 156.579 14.1882 156.579 14.3891V18.2384H155.121V8.90234H156.579V12.7598H156.607C157.066 12.0578 157.725 11.7075 158.578 11.7075C159.183 11.7075 159.683 11.9003 160.08 12.2873C160.574 12.7693 160.822 13.4862 160.822 14.4339V18.2398Z" fill="white" />
              <path d="M168.792 14.7373C168.792 14.9926 168.772 15.2071 168.738 15.3823H164.361C164.38 16.015 164.589 16.497 164.994 16.831C165.365 17.1297 165.842 17.2791 166.427 17.2791C167.075 17.2791 167.665 17.1786 168.197 16.9763L168.426 17.9648C167.803 18.2282 167.071 18.3599 166.223 18.3599C165.206 18.3599 164.405 18.068 163.826 17.4841C163.244 16.9003 162.956 16.1168 162.956 15.1338C162.956 14.1684 163.224 13.3646 163.766 12.7237C164.331 12.0394 165.096 11.6973 166.061 11.6973C167.005 11.6973 167.722 12.0394 168.207 12.7237C168.598 13.2669 168.792 13.939 168.792 14.7373ZM167.399 14.3694C167.41 13.9471 167.314 13.5832 167.117 13.2764C166.863 12.8812 166.477 12.683 165.955 12.683C165.479 12.683 165.09 12.8758 164.794 13.2628C164.551 13.571 164.408 13.939 164.361 14.3694H167.399Z" fill="white" />
              <path d="M74.7056 42.7763H71.543L69.8106 37.4688H63.7891L62.1388 42.7763H59.0598L65.0257 24.707H68.7105L74.7056 42.7763ZM69.2884 35.242L67.7217 30.5238C67.556 30.0417 67.2455 28.9066 66.7873 27.1198H66.7316C66.5492 27.8883 66.2553 29.0234 65.8515 30.5238L64.3127 35.242H69.2884Z" fill="white" />
              <path d="M90.0474 36.1004C90.0474 38.3163 89.4333 40.0678 88.205 41.3536C87.1049 42.4982 85.7387 43.0699 84.108 43.0699C82.3478 43.0699 81.0833 42.4534 80.3132 41.2206H80.2575V48.0841H77.2885V34.0352C77.2885 32.6421 77.2509 31.2124 77.1785 29.746H79.7896L79.9553 31.8112H80.011C81.0011 30.2552 82.5037 29.4785 84.5202 29.4785C86.0966 29.4785 87.4126 30.0854 88.4654 31.3007C89.521 32.5172 90.0474 34.1167 90.0474 36.1004ZM87.0227 36.2063C87.0227 34.9381 86.7303 33.8927 86.1426 33.0698C85.5006 32.2117 84.6386 31.7827 83.5579 31.7827C82.8254 31.7827 82.1598 32.0216 81.5651 32.4928C80.9691 32.968 80.5792 33.5885 80.3967 34.357C80.3048 34.7155 80.2589 35.0087 80.2589 35.2396V37.412C80.2589 38.3597 80.5569 39.1595 81.1529 39.8126C81.749 40.4657 82.5232 40.7915 83.4758 40.7915C84.594 40.7915 85.4644 40.3706 86.0869 39.5315C86.7108 38.691 87.0227 37.5831 87.0227 36.2063Z" fill="white" />
              <path d="M105.418 36.1004C105.418 38.3163 104.804 40.0678 103.574 41.3536C102.475 42.4982 101.109 43.0699 99.4784 43.0699C97.7182 43.0699 96.4537 42.4534 95.685 41.2206H95.6293V48.0841H92.6603V34.0352C92.6603 32.6421 92.6227 31.2124 92.5503 29.746H95.1614L95.3271 31.8112H95.3828C96.3716 30.2552 97.8742 29.4785 99.892 29.4785C101.467 29.4785 102.783 30.0854 103.839 31.3007C104.89 32.5172 105.418 34.1167 105.418 36.1004ZM102.393 36.2063C102.393 34.9381 102.099 33.8927 101.512 33.0698C100.87 32.2117 100.01 31.7827 98.9284 31.7827C98.1945 31.7827 97.5302 32.0216 96.9342 32.4928C96.3381 32.968 95.9496 33.5885 95.7672 34.357C95.6767 34.7155 95.6293 35.0087 95.6293 35.2396V37.412C95.6293 38.3597 95.9273 39.1595 96.5206 39.8126C97.1166 40.4643 97.8909 40.7915 98.8462 40.7915C99.9645 40.7915 100.835 40.3706 101.457 39.5315C102.081 38.691 102.393 37.5831 102.393 36.2063Z" fill="white" />
              <path d="M122.602 37.7083C122.602 39.2453 122.055 40.4958 120.956 41.4612C119.749 42.5161 118.068 43.043 115.908 43.043C113.914 43.043 112.315 42.6682 111.105 41.9174L111.793 39.5046C113.097 40.2731 114.527 40.6587 116.085 40.6587C117.203 40.6587 118.074 40.4116 118.699 39.9201C119.322 39.4286 119.632 38.7687 119.632 37.9459C119.632 37.2127 119.376 36.5949 118.862 36.0939C118.351 35.5928 117.497 35.1271 116.305 34.6967C113.06 33.5168 111.439 31.7883 111.439 29.5154C111.439 28.03 112.008 26.8121 113.145 25.8644C114.279 24.9153 115.791 24.4414 117.682 24.4414C119.369 24.4414 120.77 24.7279 121.888 25.2995L121.146 27.6593C120.101 27.1054 118.92 26.8284 117.599 26.8284C116.554 26.8284 115.738 27.0796 115.153 27.5792C114.659 28.0259 114.411 28.5704 114.411 29.2154C114.411 29.9295 114.694 30.5202 115.262 30.9845C115.756 31.4136 116.655 31.878 117.958 32.379C119.553 33.0049 120.724 33.7368 121.477 34.5759C122.228 35.4123 122.602 36.4591 122.602 37.7083Z" fill="white" />
              <path d="M132.419 31.9189H129.146V38.2448C129.146 39.8537 129.723 40.6575 130.879 40.6575C131.409 40.6575 131.849 40.6127 132.198 40.5231L132.28 42.7214C131.695 42.9345 130.925 43.0418 129.971 43.0418C128.798 43.0418 127.882 42.6929 127.221 41.9963C126.562 41.2984 126.23 40.128 126.23 38.4837V31.9162H124.281V29.7437H126.23V27.3581L129.146 26.5V29.7437H132.419V31.9189Z" fill="white" />
              <path d="M147.185 36.1539C147.185 38.1567 146.597 39.8009 145.424 41.0868C144.195 42.4106 142.563 43.0705 140.528 43.0705C138.567 43.0705 137.006 42.4364 135.842 41.1682C134.678 39.9001 134.096 38.2992 134.096 36.3698C134.096 34.3508 134.695 32.697 135.896 31.4112C137.095 30.1241 138.714 29.4805 140.748 29.4805C142.709 29.4805 144.287 30.1146 145.477 31.3841C146.616 32.6156 147.185 34.2055 147.185 36.1539ZM144.104 36.2476C144.104 35.046 143.841 34.0154 143.308 33.156C142.685 32.1159 141.795 31.5972 140.642 31.5972C139.449 31.5972 138.542 32.1173 137.92 33.156C137.386 34.0168 137.123 35.0637 137.123 36.3019C137.123 37.5036 137.386 38.5341 137.92 39.3922C138.562 40.4323 139.459 40.951 140.616 40.951C141.749 40.951 142.639 40.4214 143.281 39.3651C143.829 38.4893 144.104 37.4479 144.104 36.2476Z" fill="white" />
              <path d="M156.835 32.2918C156.541 32.2389 156.228 32.2117 155.899 32.2117C154.855 32.2117 154.047 32.596 153.479 33.3658C152.985 34.0447 152.737 34.9028 152.737 35.9388V42.7752H149.769L149.797 33.8492C149.797 32.3475 149.759 30.9802 149.686 29.7474H152.272L152.38 32.2402H152.462C152.776 31.3835 153.27 30.6937 153.947 30.1764C154.608 29.7107 155.323 29.4785 156.093 29.4785C156.367 29.4785 156.615 29.4975 156.835 29.5315V32.2918Z" fill="white" />
              <path d="M170.113 35.6452C170.113 36.1639 170.079 36.6011 170.005 36.9582H161.098C161.133 38.2453 161.563 39.2297 162.39 39.9086C163.141 40.5155 164.111 40.8197 165.303 40.8197C166.622 40.8197 167.825 40.6146 168.907 40.2032L169.372 42.2128C168.108 42.7504 166.615 43.0179 164.892 43.0179C162.82 43.0179 161.194 42.4232 160.01 41.2352C158.829 40.0471 158.237 38.4517 158.237 36.4503C158.237 34.4856 158.787 32.8495 159.889 31.5447C161.042 30.1516 162.6 29.4551 164.561 29.4551C166.487 29.4551 167.945 30.1516 168.935 31.5447C169.719 32.6513 170.113 34.0199 170.113 35.6452ZM167.282 34.8943C167.302 34.0362 167.108 33.2949 166.706 32.6689C166.192 31.8638 165.402 31.4619 164.34 31.4619C163.369 31.4619 162.579 31.8543 161.976 32.6418C161.482 33.2677 161.188 34.0186 161.098 34.893H167.282V34.8943Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}