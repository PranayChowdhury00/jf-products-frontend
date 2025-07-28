
import AgriculturalProducts from './AgriculturalProducts';
import Banner from './Banner';
import Customers from './Customers';
import LandscapeProducts from './landscapeproducts';

const Home = () => {
 return (
  <div>
   <Banner></Banner>
   <AgriculturalProducts></AgriculturalProducts>
   <LandscapeProducts></LandscapeProducts>
   <Customers></Customers>
  </div>
 );
};

export default Home;