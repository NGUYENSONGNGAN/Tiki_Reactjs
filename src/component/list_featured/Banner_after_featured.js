
import "../css/grid.css"
import "./banner_after_featured.css";
import "../css/responsive.css"
import "../css/global.css"


const Banner_after_featured = () => {
   


    return (
        <section className="banner_after_featured">
        <div className="grid wide">
            <div className="row">
                <div className="col l-4 m-6 c-6  banner_after_featured_item">
                    <img src="image/baner_after_list_featured1.webp" alt=""/>
                </div>
                <div className="col l-4 m-6 c-6 banner_after_featured_item">
                    <img src="image/baner_after_list_featured2.webp" alt=""/>
                </div>
                <div className="col l-4 m-0 c-0 banner_after_featured_item">
                    <img src="image/baner_after_list_featured3.webp" alt=""/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner_after_featured;
