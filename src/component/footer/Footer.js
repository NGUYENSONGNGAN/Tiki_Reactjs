
import "../css/grid.css"
import "./footer.css";
import "../css/responsive.css"
import "../css/global.css"


const Footer = () => {
    return (
        <section className="footer">
            <div className="grid wide">
                <div className="infomation" style={{padding:"16px 0" }}>
                    <ul className="list_container_infomation">
                        <li className="container_infomation_item">
                            <h3 className="heading">
                                Hỗ trợ khách hàng
                            </h3>
                            <p className="hot-line">
                                Hotline:
                                <a href="#">1900-6035</a> <br />
                                (1000 đ/phút, 8-21h kể cả T7, CN)
                            </p>
                            <a href="#" className="footer_links">Các câu hỏi thường gặp</a>
                            <a href="#" className="footer_links">Gửi yêu cầu hỗ trợ</a>
                            <a href="#" className="footer_links">Hướng dẫn đặt hàng</a>
                            <a href="#" className="footer_links">Phương thức vận chuyển</a>
                            <a href="#" className="footer_links">Chính sách đổi trả</a>
                            <a href="#" className="footer_links">Hướng dẫn trả góp</a>
                            <a href="#" className="footer_links">Chính sách hàng nhập khẩu</a>
                            <p className="footer_links_title">
                                Hỗ trợ khách hàng:
                                <a className="footer_links" href="#" style={{padding:"2px" }}>hotro@tiki.vn</a>
                            </p>
                            <p className="footer_links_title">
                                Báo lỗi bảo mật:
                                <a className="footer_links" href="#" style={{padding:"2px" }}>security@tiki.vn</a>
                            </p>
                        </li>
                        <li className="container_infomation_item">
                            <h3 className="heading">Về Tiki</h3>
                            <a href="#" className="footer_links">Giới thiệu Tiki</a>
                            <a href="#" className="footer_links">Tuyển dụng</a>
                            <a href="#" className="footer_links">Chính sách bảo mật thanh toán</a>
                            <a href="#" className="footer_links">Chính sách bảo mật thông tin cá nhân</a>
                            <a href="#" className="footer_links">Chính sách giải quyết khiếu nại</a>
                            <a href="#" className="footer_links">Điều khoản sử dụng</a>
                            <a href="#" className="footer_links">Giới thiệu Tiki Xu</a>
                            <a href="#" className="footer_links">Tiếp thị liên kết cùng Tiki</a>
                            <a href="#" className="footer_links">Bán hàng doanh nghiệp</a>
                        </li>
                        <li className="container_infomation_item">
                            <h3 className="heading">Hợp tác và liên kết</h3>
                            <a href="" className="footer_links">Quy chế hoạt động Sàn GDTMĐT</a>
                            <a href="" className="footer_links">Bán hàng cùng Tiki</a>
                            <h3 className="heading sub-title">Chứng nhận bởi</h3>
                            <div className="img_certification">
                                <a href="" className="footer_certification">
                                    <img className="certification-img" src="image/footer/bo-cong-thuong-2.png" alt="" />
                                </a>
                                <a href="" className="footer_certification">
                                    <img className="certification-img" src="image/footer/bo-cong-thuong.svg" alt="" />
                                </a>
                            </div>
                        </li>

                        <li className="container_infomation_item">
                            <h3 className="heading">Phương thức thanh toán</h3>
                            <div className="payment">
                                <img src="image/footer/pay.png" alt="" className="pay" />
                            </div>

                            <h3 className="heading sub-title">Dịch vụ giao hàng</h3>
                            <a href="#" className="tiki_now">
                                <img src="image/footer/tikinow.png" alt="" />
                            </a>
                        </li>
                        <li className="container_infomation_item">
                            <h3 className="heading">Kết nối với chúng tôi</h3>
                            <a href="#" className="tiki_now">
                                <img src="image/footer/fb-ytb.png" alt="" />
                            </a>
                            <h3 className="heading sub-title">Tải ứng dụng trên điện thoại</h3>
                            <div className="download">
                                <img src="image/footer/qrcode.png" alt="" className="download_qr" />
                                <div className="download_link">
                                    <a href="" className="apps">
                                        <img src="image/footer/appstore.png" alt="" className="app" />
                                    </a>
                                    <a href="" className="apps">
                                        <img src="image/footer/playstore.png" alt="" className="app" />
                                    </a>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div >
            </div >

        </section >
    );
};

export default Footer;
