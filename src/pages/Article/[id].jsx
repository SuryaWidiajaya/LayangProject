  import { useEffect, useState } from 'react';
  import { useRouter } from 'next/router';
  import BlogDataJSON from '@/JSON/Article.json';
  import Layout from '@/components/Layout';

  export default function Article() {
    const [blogData, setBlogData] = useState(null);
    const router = useRouter();

    useEffect(() => {
      if (router.isReady) {
        const id = router.query.id;
        const getData = BlogDataJSON.find((value) => value.post_id === parseInt(id));
        if (getData) {
          setBlogData(getData);
        }
      }
    }, [router.query.id, router.isReady]);

    return (
      <Layout>
        <div className="flex justify-center ">
        </div>
          <div>
            <div className="flex flex-col items-center text-justify mt-[69px]">
              <div className="w-[744px]">
                <div className="isiArticle flex gap-[28px] pt-[16px]">
                  <div className="date flex items-center font-Poppins gap-[5px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.6103 0C10.9288 0 11.1873 0.258461 11.1873 0.576921L11.1876 1.22908C12.3108 1.30608 13.2436 1.6908 13.9038 2.35238C14.6246 3.07622 15.0038 4.11698 15 5.36544V12.3831C15 14.9462 13.3723 16.5385 10.753 16.5385H4.24691C1.62769 16.5385 0 14.9239 0 12.3246V5.3639C0 2.94637 1.45158 1.39456 3.81897 1.22934L3.81945 0.576921C3.81945 0.258461 4.07791 0 4.39637 0C4.71483 0 4.97329 0.258461 4.97329 0.576921L4.97306 1.21461H10.033L10.0334 0.576921C10.0334 0.258461 10.2919 0 10.6103 0ZM13.8461 6.84921H1.15384V12.3246C1.15384 14.2985 2.2523 15.3846 4.24691 15.3846H10.753C12.7476 15.3846 13.8461 14.3185 13.8461 12.3831L13.8461 6.84921ZM10.924 11.6894C11.2424 11.6894 11.5009 11.9479 11.5009 12.2663C11.5009 12.5848 11.2424 12.8433 10.924 12.8433C10.6055 12.8433 10.344 12.5848 10.344 12.2663C10.344 11.9479 10.5986 11.6894 10.917 11.6894H10.924ZM7.51051 11.6894C7.82897 11.6894 8.08743 11.9479 8.08743 12.2663C8.08743 12.5848 7.82897 12.8433 7.51051 12.8433C7.19205 12.8433 6.93051 12.5848 6.93051 12.2663C6.93051 11.9479 7.18513 11.6894 7.50359 11.6894H7.51051ZM4.08991 11.6894C4.40837 11.6894 4.66683 11.9479 4.66683 12.2663C4.66683 12.5848 4.40837 12.8433 4.08991 12.8433C3.77145 12.8433 3.50914 12.5848 3.50914 12.2663C3.50914 11.9479 3.76452 11.6894 4.08298 11.6894H4.08991ZM10.924 8.69966C11.2424 8.69966 11.5009 8.95812 11.5009 9.27658C11.5009 9.59504 11.2424 9.8535 10.924 9.8535C10.6055 9.8535 10.344 9.59504 10.344 9.27658C10.344 8.95812 10.5986 8.69966 10.917 8.69966H10.924ZM7.51051 8.69966C7.82897 8.69966 8.08743 8.95812 8.08743 9.27658C8.08743 9.59504 7.82897 9.8535 7.51051 9.8535C7.19205 9.8535 6.93051 9.59504 6.93051 9.27658C6.93051 8.95812 7.18513 8.69966 7.50359 8.69966H7.51051ZM4.08991 8.69966C4.40837 8.69966 4.66683 8.95812 4.66683 9.27658C4.66683 9.59504 4.40837 9.8535 4.08991 9.8535C3.77145 9.8535 3.50914 9.59504 3.50914 9.27658C3.50914 8.95812 3.76452 8.69966 4.08298 8.69966H4.08991ZM10.033 2.36845H4.97306L4.97329 3.10845C4.97329 3.42691 4.71483 3.68537 4.39637 3.68537C4.07791 3.68537 3.81945 3.42691 3.81945 3.10845L3.81904 2.38592C2.09579 2.53068 1.15384 3.57526 1.15384 5.3639V5.69536H7.49997H13.8461L13.8461 5.3639C13.8492 4.41391 13.5938 3.67545 13.0869 3.16776C12.6419 2.72146 11.9914 2.45491 11.1879 2.38628L11.1873 3.10845C11.1873 3.42691 10.9288 3.68537 10.6103 3.68537C10.2919 3.68537 10.0334 3.42691 10.0334 3.10845L10.033 2.36845Z"
                        fill="#303030"
                      />
                    </svg>
                    <p className="text-[16px]">{blogData?.date_published}</p>
                  </div>
                  <div className="admin items-center font-Poppins flex gap-[5px]">
                    <svg xmln s="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.5 10.7372C9.29024 10.7372 13 11.0514 13 13.7697C13 16.6332 8.67732 16.805 6.82312 16.8153L6.14992 16.8153C4.17289 16.805 0 16.6342 0 13.7868C0 10.9201 4.32268 10.7481 6.17688 10.7378L6.39965 10.7372C6.43437 10.7372 6.46784 10.7372 6.5 10.7372ZM6.5 12.0214C4.12072 12.0214 1.28425 12.3271 1.28425 13.7868C1.28425 14.9443 3.03938 15.5317 6.5 15.5317C9.96062 15.5317 11.7158 14.9384 11.7158 13.7697C11.7158 12.6096 9.96062 12.0214 6.5 12.0214ZM6.5 0.5C8.9238 0.5 10.8964 2.4726 10.8964 4.8964C10.9015 6.06421 10.4486 7.16695 9.62329 7.99743C8.79966 8.82877 7.69949 9.28853 6.52911 9.29281H6.5C4.07534 9.29281 2.10274 7.32021 2.10274 4.8964C2.10274 2.4726 4.07534 0.5 6.5 0.5ZM6.5 1.78425C4.78339 1.78425 3.38699 3.18065 3.38699 4.8964C3.38699 6.61216 4.78339 8.00856 6.5 8.00856H6.52654C7.35188 8.00514 8.12928 7.68065 8.71233 7.09247C9.29623 6.50599 9.61558 5.72603 9.61219 4.89897C9.61219 3.18065 8.21575 1.78425 6.5 1.78425Z"
                        fill="#303030"
                      />
                    </svg>
                    <p className="text-[16px]">{blogData?.author}</p>
                  </div>
                </div>
                <h1 className="text-[44px] font-bold mb-[27px] text-left text-[#27005D]">{blogData?.title}</h1>
                <p className="text-[20px] font-normal my-[27px] text-slate-500 ">{blogData?.content1}</p>

                <p className="text-[20px] font-normal my-[27px] text-slate-500 ">{blogData?.content2}</p>

                <img src={blogData?.imgUrl} alt="" className="w-[744px] h-[558px] rounded-[30px] object-cover my-[27px]" />
                <p className="text-[20px] font-normal my-[27px] text-slate-500 ">Dengan upaya ini, Desa Kecamatan {blogData?.content3}</p>
              </div>
            </div>
          </div>
        </Layout>
    );
  }