
import "../css/grid.css"
import "./brand_auth.css";
import "../css/responsive.css"
import "../css/global.css"


const Brand_auth = () => {
    var btn_next = document.querySelector(".icon_next_slide_auth");
   var btn_prev = document.querySelector(".icon_prav_slide_auth");

  function btnNextClick(){
    document.querySelector(".container_slide_after_brand_auth").style.transform = "translateX(-24%)";
    btn_next.style.display = "none";
    btn_prev.style.display = "block";
  }
  function btnPrevClick(){
    document.querySelector(".container_slide_after_brand_auth").style.transform = "translateX(0%)";
    btn_next.style.display = "block";
    btn_prev.style.display = "none";
}


    return (
        <section className="brand_auth">
            <div className="grid wide">
                <div className="container_brand_auth">
                    <div className="brand_auth_top">
                        <div className="main_title">
                            <img src="image/Trademark/arrow-down.png" alt="" />
                            <span>Thương hiệu chính hãng</span>
                        </div>
                        <a href="#" className="see_more_link">Xem thêm</a>
                    </div>

                    <div className=" swiper mySwiper brand_auth_bottom">
                        <div className="swiper-wrapper">
                            <ul className=" swiper-slide  container_banner_item">
                                <li className="banner_item">
                                    <div className="banner_item_left">
                                        <img src="image/Trademark/1.png" alt="" />
                                    </div>
                                </li>
                                <li className="banner_item">
                                    <div className=" banner_item_right">
                                        <img src="image/Trademark/2.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                            <ul className=" swiper-slide  container_banner_item">
                                <li className="banner_item">
                                    <div className="banner_item_left">
                                        <img src="image/Trademark/3.png" alt="" />
                                    </div>
                                </li>
                                <li className="banner_item">
                                    <div className=" banner_item_right">
                                        <img src="image/Trademark/4.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                            <ul className=" swiper-slide  container_banner_item">
                                <li className="banner_item">
                                    <div className="banner_item_left">
                                        <img src="image/Trademark/5.png" alt="" />
                                    </div>
                                </li>
                                <li className="banner_item">
                                    <div className=" banner_item_right">
                                        <img src="image/Trademark/6.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                            <ul className=" swiper-slide  container_banner_item">
                                <li className="banner_item">
                                    <div className="banner_item_left">
                                        <img src="image/Trademark/7.png" alt="" />
                                    </div>
                                </li>
                                <li className="banner_item">
                                    <div className=" banner_item_right">
                                        <img src="image/Trademark/8.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                            <ul className=" swiper-slide  container_banner_item">
                                <li className="banner_item">
                                    <div className="banner_item_left">
                                        <img src="image/Trademark/9.png" alt="" />
                                    </div>
                                </li>
                                <li className="banner_item">
                                    <div className=" banner_item_right">
                                        <img src="image/Trademark/10.png" alt="" />
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-pagination"></div>

                    </div>
                </div>

                <div className="row">
                    <div className="col l-12 ">
                        <div className="container_slide_after_brand_auth_main">
                            <div className="container_slide_after_brand_auth">
                                <div className="slide_after_brand_auth_item">
                                    <img src="image/Trademark/Discount/1.png" alt="" />
                                    <span>Mua một tặng một</span>
                                </div>
                                <div className="slide_after_brand_auth_item">
                                    <img src="image/Trademark/Discount/2.png" alt="" />
                                    <span>Coupon 65k</span>
                                </div>
                                <div className="slide_after_brand_auth_item">
                                    <img src="image/Trademark/Discount/3.png" alt="" />
                                    <span>Quà tặng đơn 99k</span>
                                </div>
                                <div className="slide_after_brand_auth_item">
                                    <img src="image/Trademark/Discount/4.png" alt="" />
                                    <span>Coupon 1tr</span>
                                </div>
                                <div className="slide_after_brand_auth_item">
                                    <img src="image/Trademark/Discount/5.png" alt="" />
                                    <span>mua 3 giảm 30%</span>
                                </div>
                                <div className="slide_after_brand_auth_item">
                                    <img src="image/Trademark/Discount/6.png" alt="" />
                                    <span>coupon 600k</span>
                                </div>
                                <div className="slide_after_brand_auth_item">
                                    <img src="image/Trademark/Discount/7.png" alt="" />
                                    <span>Ưu đãi đến 50%</span>
                                </div>
                                <div className="slide_after_brand_auth_item">
                                    <img src="image/Trademark/Discount/1.png" alt="" />
                                    <span>Mua một tặng một</span>
                                </div>
                            </div>
                            <div className="discount__icon icon_prav_slide_auth" onClick={btnPrevClick}><i className="fa-solid fa-angle-left"></i></div>
                            <div className="discount__icon icon_next_slide_auth" onClick={btnNextClick}><i className="fa-solid fa-angle-right"></i></div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Brand_auth;
