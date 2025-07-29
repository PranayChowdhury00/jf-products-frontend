import AgriculturalProducts from "./AgriculturalProducts";
import Banner from "./Banner";
import ContactPage from "./ContactPage";

import Customers from "./Customers";
import LandscapeProducts from "./LandscapeProducts";


import LogoMarquee from "./LogoMarquee";
import TestimonialSection from "./testimonials";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AgriculturalProducts></AgriculturalProducts>
      <LandscapeProducts></LandscapeProducts>
      <Customers></Customers>
      <WhyUs></WhyUs>
      <LogoMarquee></LogoMarquee>
      <TestimonialSection></TestimonialSection>
      <ContactPage></ContactPage>
    </div>
  );
};

export default Home;
