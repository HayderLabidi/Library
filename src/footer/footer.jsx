import React from 'react'

const footer = () => {
  return (
    <div>
        <footer class="footer-area bg-gray pt-100 pb-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-4 col-sm-4">
                            <div class="copyright mb-30">
                                <div class="footer-logo">

                                    <img alt="" src="assets/img/logo/logo.webp" />

                                </div>
                                <p>© 2024 Jassa.<br /> All Rights Reserved</p>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4">
                            <div class="footer-widget mb-30 ml-30">
                                <div class="footer-title">
                                    <h3>ABOUT US</h3>
                                </div>
                                <div class="footer-list">
                                    <ul>
                                        <li>About us</li>
                                        <li>Store location</li>
                                        <li>Contact</li>
                                        <li>Orders tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4">
                            <div class="footer-widget mb-30 ml-50">
                                <div class="footer-title">
                                    <h3>USEFUL LINKS</h3>
                                </div>
                                <div class="footer-list">
                                    <ul>
                                        <li>Returns</li>
                                        <li>Support Policy</li>
                                        <li>Size guide</li>
                                        <li>FAQs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <div class="footer-widget mb-30 ml-75">
                                <div class="footer-title">
                                    <h3>FOLLOW US</h3>
                                </div>
                                <div class="footer-list">
                                    <ul>
                                        <li>Facebook</li>
                                        <li>Twitter</li>
                                        <li>Instagram</li>
                                        <li>Youtube</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="footer-widget mb-30 ml-70">
                                <div class="footer-title">
                                    <h3>SUBSCRIBE</h3>
                                </div>
                                <div class="subscribe-style">
                                    <p>Get E-mail updates about our latest shop and special offers.</p>
                                    <div id="mc_embed_signup" class="subscribe-form">
                                        <form id="mc-embedded-subscribe-form" class="validate" novalidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="#">
                                            <div id="mc_embed_signup_scroll" class="mc-form">
                                                <input class="email" type="email" required="" placeholder="Enter your email here.." name="EMAIL" value="" />
                                                <div class="mc-news" aria-hidden="true">
                                                    <input type="text" value="" tabindex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                                </div>
                                                <div class="clear">
                                                    <input id="mc-embedded-subscribe" class="button" type="submit" name="subscribe" value="Subscribe" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default footer