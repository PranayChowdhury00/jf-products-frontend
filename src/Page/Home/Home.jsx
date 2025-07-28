
import AgriculturalProducts from './AgriculturalProducts';
import Banner from './Banner';
import Customers from './Customers';
import LandscapeProducts from './landscapeproducts';
import WhyUs from './WhyUs';

const Home = () => {
 return (
  <div>
   <Banner></Banner>
   <AgriculturalProducts></AgriculturalProducts>
   <LandscapeProducts></LandscapeProducts>
   <Customers></Customers>
   <WhyUs></WhyUs>
  </div>
 );
};

export default Home;