
import "../css/grid.css"
import "./banner_after_info_product.css";
import "../css/responsive.css"
import "../css/global.css"


const Banner_after_info_product = () => {

    return (
        <section className="banner_after_info_product">
        <div className="grid wide">
            <div className="row no-gutters">
                <div className="container_banner_item">
                    <div className="col l-3 m-6 c-6 banner_item">
                        <img src="image/Primary/1.png" alt=""/>
                    </div>
                    <div className="col l-3 m-6 c-6 banner_item">
                        <img src="image/Primary/2.png" alt=""/>
                    </div>
                    <div className="col l-3 m-0 c-0 banner_item">
                        <img src="image/Primary/3.png" alt=""/>
                    </div>
                    <div className="col l-3 m-0 c-0 banner_item">
                        <img src="image/Primary/4.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
 );
};

export default Banner_after_info_product;
