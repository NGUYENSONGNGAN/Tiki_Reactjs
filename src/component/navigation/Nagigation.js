
import "../css/grid.css"
import "./navigation.css";
import "../css/responsive.css"
import "../css/global.css"

const Navigation = () => {
   
function navArrowLeftClick(){
    var navArrowLeft = document.querySelector(".icon-arrow-left");
    var navArrowRight = document.querySelector(".icon-arrow-right");
    document.querySelector(".nav").style.transform = "translateX(-43%)";
    navArrowLeft.style.display = "block";
    navArrowRight.style.display = "none";
}
function navArrowRightClick(){
    var navArrowLeft = document.querySelector(".icon-arrow-left");
    var navArrowRight = document.querySelector(".icon-arrow-right");
    document.querySelector(".nav").style.transform = "translateX(0%)";
  navArrowRight.style.display = "block";
  navArrowLeft.style.display = "none";
}
    return (
        <div className="navigation">
        <div className="grid wide">
            <div className="row">
                <div className="col l-12 m-12 c-12">
                    <div className="content">
                        <span className="icon-arrow-left" onClick={navArrowRightClick}>
                            <i className="fa-solid fa-angle-left arrow-left"></i>
                        </span>
                        <span className="icon-arrow-right" onClick={navArrowLeftClick}>
                            <i className="fa-solid fa-angle-right arrow-right"></i>
                        </span>

                        <div className="nav">
                            <div className="slider-bar">
                                <span className="products">
                                    <a href="#" className="list">
                                        <div className="product">Thịt, rau củ</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Bách hóa</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Nhà cửa</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Thiết bị số</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Điện thoại</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Mẹ & bé</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Làm đẹp</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Gia dụng</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Thời trang nữ</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Thời trang nam</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Giày nữ</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Túi nữ</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Giày nam</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Túi nam</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Balo & vali</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Phụ kiện</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Đồng hồ</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Laptop</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Quốc tế</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Voucher</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Xe</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Sách</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Điện tử</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Thể thao</div>
                                    </a>
                                    <a href="#" className="list">
                                        <div className="product">Máy ảnh</div>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Navigation;
