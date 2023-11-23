import Footer from "@/components/Header_Footer/Footer";
import AppInfo from "@/components/Landing_Page_Section/AppInfo";
import Article from "@/components/Landing_Page_Section/Article";
import BodyNewsletter from "@/components/Landing_Page_Section/BodyNewsletter";
import Hero from "@/components/Landing_Page_Section/Hero";
import InfoMitra from "@/components/Landing_Page_Section/InfoMitra";
import MainBody from "@/components/Landing_Page_Section/MainBody";

export default function Home1() {
  return (
    <>
      <MainBody/>
      <Hero/>
      <Article/>
      <InfoMitra/>
      <AppInfo/>
      <BodyNewsletter/>
      <Footer/>
    </>
  );
}
