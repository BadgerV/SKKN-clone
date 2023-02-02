import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <div className="footer_main_left">
                <div className="footer_min_left">
                        
                        <div className="footer_lists">
                            <span className="footer_list_item_special">SUPPORT</span>
                            <span className="footer_list_item">FAQS</span>
                            <span className="footer_list_item">TRACK ORDER</span>
                            <span className="footer_list_item">SHIPPING</span>
                            <span className="footer_list_item">ACCESSIBILITY</span>
                            <span className="footer_list_item">CONTACT US</span>
                        </div>
                
                </div>
                <div className="footer_min_middle">
                    
                        <div className="footer_lists">
                            <span className="footer_list_item_special">SKKN BY KIM</span>
                            <span className="footer_list_item">ABOUT US</span>
                            <span className="footer_list_item">SUBSCRIPTION</span>
                            <span className="footer_list_item">DIGITAL GIFT CARD</span>
                            <span className="footer_list_item">TUTORIALS</span>
                        </div>
                </div>
                <div className="footer_min_right">
                    
                <div className="footer_lists">
                            <span className="footer_list_item_special">CONNECT</span>
                            <span className="footer_list_item">INSTAGRAM</span>
                            <span className="footer_list_item">FACEBOOK</span>
                            <span className="footer_list_item">TWITTER</span>
                            <span className="footer_list_item">YOUTUBE</span>
                            <span className="footer_list_item">TIKTOK</span>
                        </div>
                </div>
            </div>
            <div className="footer_main_right">
                <span className="footer_join">JOIN</span>
                <input type="text" className="footer_email_address" />
                <span className="footer_privacy_text">By submitting your email you agree that SKKN BY KIM may send you promotional e-mail messages with offers, updates and other marketing messages. You understand that SKKN BY KIM may use your information according with its Privacy Policy. </span>
            </div>
        </div>





        <div className="footer_bottom">
            <div className="footer_bottom_left">
                <div className="footer_bottom_list_Left_items">
                    <span className="footer_bottom_list_Left_items">PROVACY POLICY</span>
                    <span className="footer_bottom_list_Left_items">TERMS OF USE</span>
                    <span className="footer_bottom_list_Left_items">TERMS OF SALE</span>
                    <span className="footer_bottom_list_Left_items">COOKIE POLICY</span>
                    <span className="footer_bottom_list_Left_items">COOKIE SETTINGS</span>
                </div>
            </div>
            <div className="footer_bottom_right">
                <span className="fotter_bottom_right_text">© SKKN BY KIM 2023 All rights reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer