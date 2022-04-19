
import "../css/grid.css"
import "./list_featured.css";
import "../css/responsive.css"
import "../css/global.css"


const List_featured = () => {
    var btn_next = document.querySelector(".icon_next_slide_auth");
    var btn_prev = document.querySelector(".icon_prav_slide_auth");

    function btnNextClick() {
        document.querySelector(".container_slide_after_brand_auth").style.transform = "translateX(-24%)";
        btn_next.style.display = "none";
        btn_prev.style.display = "block";
    }
    function btnPrevClick() {
        document.querySelector(".container_slide_after_brand_auth").style.transform = "translateX(0%)";
        btn_next.style.display = "block";
        btn_prev.style.display = "none";
    }


    return (
        <section className="list_featured">
            <div className="grid wide">
                <div className="container_list_featured">
                    <div className="list_featured_top">
                        <span className="main_title">
                            Danh mục nổi bật
                        </span>
                    </div>
                    <div className="list_featured_bottom">

                        <ul className="list_featured_item">
                            <li className="item_list_featured">
                                <img src="image/Featured/1.png" alt="" />
                                <span className="tittle">Tiki ngon</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/2.jpg" alt="" />
                                <span className="tittle">rau củ quả</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/3.jpg" alt="" />
                                <span className="tittle">Giày thể thao nam</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/4.jpg" alt="" />
                                <span className="tittle">balo</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/5.jpg" alt="" />
                                <span className="tittle">Điện thoại smartphone</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/6.jpg" alt="" />
                                <span className="tittle">Nồi chiên</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/7.jpg" alt="" />
                                <span className="tittle">Sách tư duy - kĩ năng sống</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/8.jpg" alt="" />
                                <span className="tittle">Tiểu thuyết</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/9.jpg" alt="" />
                                <span className="tittle">Hộp đựng thực phẩm</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/10.jpg" alt="" />
                                <span className="tittle">Bình giữ nhiệt</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/11.png" alt="" />
                                <span className="tittle">Bia nội địa</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/12.jpg" alt="" />
                                <span className="tittle">Kem và sữa dưỡng da</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/13.jpg" alt="" />
                                <span className="tittle">kệ nhà bếp</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/14.jpg" alt="" />
                                <span className="tittle">bàn ghế làm việc</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/15.jpg" alt="" />
                                <span className="tittle">tai nghe</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/16.jpg" alt="" />
                                <span className="tittle">nồi các loại</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/17.png" alt="" />
                                <span className="tittle">khẩu trang y tế</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/18.jpg" alt="" />
                                <span className="tittle">Tủ</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/19.jpg" alt="" />
                                <span className="tittle">Truyện và tản văn</span>
                            </li>
                            <li className="item_list_featured">
                                <img src="image/Featured/20.jpg" alt="" />
                                <span className="tittle">chảo chiên các loại</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default List_featured;
