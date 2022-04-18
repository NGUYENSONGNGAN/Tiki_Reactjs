
import "../css/grid.css"
import "./header.css";
import "../css/responsive.css"
import "../css/global.css"
import Logo from "../image/logo-tiki.png"
import LogoFreeShip from "../image/logo-freeship.png"

const Header = () => {
  return (
    <div className="header">
    <div className="grid wide container">
        <div className="row header__container">
            <div className="col l-1 m-1 c-0 logo__container">
                <div className="logo-tiki">
                    <img className="logo-img" src={Logo} alt="" />
                </div>
                <a href="#">
                    <img className="freeship-img" src={LogoFreeShip} alt="" />
                </a>
                <div className="mobile__cart">
                    <i className="far fa-bell"></i>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div className="col l-8 m-10 c-12">
                <div className="search-box">
                    <div className="search__container">
                        <div className="input-box">
                            <div className="search-img">
                                <i className="fas fa-search"></i>
                            </div>
                            <input className="box" type="text"
                                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..." />
                        </div>
                        <div className="search-btn">
                            <button className="btn" type="submit">
                                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                Tìm Kiếm
                            </button>
                        </div>
                    </div>
                    <div className="food-bar">
                        <a className="food" href="#"> trái cây </a>
                        <a className="food" href="#"> thịt,trứng </a>
                        <a className="food" href="#"> rau củ quả </a>
                        <a className="food" href="#"> sữa,bơ,phô mai </a>
                        <a className="food" href="#"> hải sản </a>
                        <a className="food" href="#"> gạo,mì ăn liền </a>
                        <a className="food" href="#"> đồ uống,bia rượu </a>
                        <a className="food" href="#"> bánh kẹo </a>
                    </div>
                </div>
            </div>
            <div className="col l-2 m-0 c-0">
                <div className="login">
                    <div className="user-icon">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <span className="users">
                        <span className="log-in">Đăng Nhập / Đăng Ký</span>
                        <span className="user">Tài khoản <i className="fa-solid fa-caret-down"></i></span>
                    </span>
                </div>
            </div>
            <div className="col l-1 m-0 c-0">
                <div className="carts">
                    <i className="fa-solid fa-cart-shopping cart-icon"></i>
                    <span className="cart"> Giỏ Hàng</span>
                    <span className="carts__item">0</span>
                </div>
            </div>
            <div className="col l-2 m-0 c-0 seller">
                <a href="#" className="sell">
                    <i className="fa-solid fa-store store-icon"></i> Bán hàng cùng Tiki
                </a>
            </div>
           
        </div>
    </div>
    <div className="grid wide">
        <div className="row">
    <div className="header_mobile_container">
        <div className="header_mobile_container_top">
            <div className="header_mobile_logo img_freeShip_top"><img src={LogoFreeShip} alt=""/></div> 
            <div className=" header_mobile_logo img_logo_top"><img src={Logo} alt=""/></div>   
            <div className="icon_mobile_logo_top">
                <div className="bell_home"><i className="fa-solid fa-bell"></i></div>
            <div className="cart_home_top"><i className="fa-solid fa-cart-shopping"></i></div>
            </div>
            </div>
        <div class="header_mobile_container_bottom">
            <input type="text" placeholder="Bạn tìm gì hôm nay ?"/>
        </div>
    </div>
    </div>
    </div>
</div>
  );
};

export default Header;
