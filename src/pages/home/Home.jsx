import './home.css';

import Header from '../../components/Header/Header';
import LargeImage from '../../components/LargeImage/LargeImage';
import MainSection from '../../components/MainSection/MainSection';
import MainSection2 from '../../components/MainSection2/MainSection2';
import MainSection3 from '../../components/MainSection3/MainSection3';
import MainSection4 from '../../components/MainSection4/MainSection4';
import ForSale from '../../components/ForSale/ForSale';
import DifferentProducts from '../../components/DifferentProducts/DifferentProducts';
import InstagramProducts from '../../components/InstagramProduct/InstagramProduct';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="homePage">
        <Header />
        <LargeImage />
        <MainSection />
        <MainSection2 />
        <MainSection3 />
        <MainSection4 />
        <ForSale />
        <DifferentProducts />
        <InstagramProducts />
        <Footer />
    </div>
  )
}

export default Home