
import "../css/grid.css"
import "./spiceShock.css";
import "../css/responsive.css"
import "../css/global.css"


const Spice_Shock = () => {
    var btn_prev_shockbottom = document.querySelector(".icon_prav_shockbottom");
    var btn_next_shockbottom = document.querySelector(".icon_next_shockbottom");
    
       
        function btnRight_Click(){
                document.querySelector(".slide_priceShock_bottom").style.transform = "translateX(-104%)";
                btn_next_shockbottom.style.display = "none";
                btn_prev_shockbottom.style.display = "block";

        }
        function btnLeft_Click(){
            document.querySelector(".slide_priceShock_bottom").style.transform = "translateX(0%)";
            btn_next_shockbottom.style.display = "block";
            btn_prev_shockbottom.style.display = "none";

    }
    return (
        <section className="container_price_shork">
        <div className="grid wide">
            <div className="container_priceShock_top">
                <div className="tittel">
                    <img src="image/giasoc.svg" alt="" className="priceShock"/>
                    <img src="image/dealFlashIcon.svg" alt="" className="dealFlashIcon"/>
                    <img src="image/homnay.svg" alt="" className="today"/>
                </div>
                <div className="time_flashSale">
                    <span className="hour">00</span>:
                    <span className="second">00</span>:
                    <span className="milisecond">00</span>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <div className="col l-12">
                <div className="container_priceShock_bottom">
                    <ul className="slide_priceShock_bottom">
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/1.jpg" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/2.jpg" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/3.jpg" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/4.JPG" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/5.jpg" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/6.png" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/7.jpg" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/8.jpg" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/10.jpg" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/11.jpg" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/12.jpg" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                        <li className="price_Shok_Item">
                            <div className="image_shock_item">
                                <img src="image/produit-flashSale/6.png" alt=""/>
                                <img src="image/produit-flashSale/tiki-freeship.png" className="image_freeship_shock_item"
                                    alt=""/>
                            </div>

                            <div className="price">
                                <span className="priceItem">120.000 ₫</span>
                                <span className="percent_discount">65%</span>
                            </div>
                            <div className="deal_discount">
                                <div className="deals_progress"></div>
                                <span>Vừa mở bán</span>
                            </div>
                        </li>
                    </ul>
                    <div className="icon_gesture_price_shock icon_prav_shockbottom" onClick={btnLeft_Click}><i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="icon_gesture_price_shock icon_next_shockbottom" onClick={btnRight_Click}><i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

                );
};

                export default Spice_Shock;
