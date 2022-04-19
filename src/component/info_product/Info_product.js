
import "../css/grid.css"
import "./info_product.css";
import "../css/responsive.css"
import "../css/global.css"


const Info_product = () => {

    return (
        <section className="info_product">
        <div className="grid wide">
            <div className="container_info_producct">
                <ul className="info_product_list">
                    <li className="item_info_product">
                        <img src="image/quick links/1.jpg" alt=""/>
                        <span className="tittle">Săn thưởng mỗi ngày</span>
                    </li>
                    <li className="item_info_product">
                        <img src="image/quick links/2.png" alt=""/>
                        <span className="tittle">Đi chợ online</span>
                    </li>
                    <li className="item_info_product">
                        <img src="image/quick links/3.png" alt=""/>
                        <span className="tittle">Mã giảm giá</span>
                    </li>
                    <li className="item_info_product">
                        <img src="image/quick links/4.png" alt=""/>
                        <span className="tittle">Bảo hiểm Tiki360</span>
                    </li>
                    <li className="item_info_product">
                        <img src="image/quick links/5.png" alt=""/>
                        <span className="tittle">Dịch vụ & tiện ích</span>
                    </li>
                    <li className="item_info_product">
                        <img src="image/quick links/6.png" alt=""/>
                        <span className="tittle">Gói hội viên</span>
                    </li>
                    <li className="item_info_product">
                        <img src="image/quick links/7.png" alt=""/>
                        <span className="tittle">Giảm đến 50%</span>
                    </li>
                    <li className="item_info_product">
                        <img src="image/quick links/8.png" alt=""/>
                        <span className="tittle">Hoàn tiền 15%</span>
                    </li>
                    <li className="item_info_product">
                        <img src="image/quick links/9.png" alt=""/>
                        <span className="tittle">Ưu đãi thanh toán</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
 );
};

export default Info_product;
