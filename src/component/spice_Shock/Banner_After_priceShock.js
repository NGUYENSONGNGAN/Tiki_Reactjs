
import "../css/grid.css"
import "./banner_After_priceShock.css";
import "../css/responsive.css"
import "../css/global.css"


const Banner_After_priceShock = () => {

    return (
        <section className="Banner_after_price_shock">
        <div className="grid wide">
            <div className="row no-gutters">
                <div className="container_banner_item">
                    <div className="col l-2 m-0 c-0 banner_item">
                        <img src="image/home-brand/1.png" alt=""/>
                    </div>
                    <div className="col l-8 m-12 c-12 banner_item">
                        <img src="image/home-brand/2.png" alt=""/>
                    </div>
                    <div className="col l-2 m-0 c-0 banner_item">
                        <img src="image/home-brand/3.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
 );
};

export default Banner_After_priceShock;
