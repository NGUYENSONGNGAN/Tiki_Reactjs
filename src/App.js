import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Navigation from './component/navigation/Nagigation';
import Slide_home from './component/slide_home/Slider_home';
import Spice_Shock from './component/spice_Shock/Spice_Shock';
import Banner_After_priceShock from './component/spice_Shock/Banner_After_priceShock';
import Info_product from './component/info_product/Info_product';
import Banner_after_info_product from './component/info_product/Banner_after_info_product';
import Brand_auth from './component/brand_auth/Brand_auth';
import List_featured from './component/list_featured/List_featured';
import Banner_after_featured from './component/list_featured/Banner_after_featured';
import Suggest_today from './component/suggest_today/Suggest_today';
import Footer from './component/footer/Footer';


function App() {
  return (
    <>
    <Header/>
    <Navigation/>
    <Slide_home/>
    <Spice_Shock/>
    <Banner_After_priceShock/>
    <Info_product/>
    <Banner_after_info_product/>
    <Brand_auth/>
    <List_featured/>
    <Banner_after_featured/>
    <Suggest_today/>
    <Footer/>
    </>
  );
}

export default App;
