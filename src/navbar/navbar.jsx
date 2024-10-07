import React from 'react'
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div>
            <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-2 col-lg-2 col-md-6 col-4">
                            <div class="logo">
                                <img alt="" src="assets/img/logo/logo.webp" />
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-8 d-none d-lg-block">
                            <div class="main-menu">
                                <nav>
                                    <ul>
                                        <li className="a"><Link to="/">Home</Link></li>
                                        <li className="a"><Link to="/shop">Shop</Link></li>
                                        <li className='a'><Link to="/about">About</Link></li>
                                        <li className="a"><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-6 col-8">
                            <div class="header-right-wrap">
                                <div class="same-style header-search">
                                    <div class="search-active" href="#"><i class="pe-7s-search"></i></div>
                                    <div class="search-content">
                                        <form action="#">
                                            <input type="text" placeholder="Search" />
                                            <button class="button-search"><i class="pe-7s-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div class="same-style account-satting">
                                    <div class="account-satting-active" href="#"><i class="pe-7s-user-female"></i></div>
                                    <div class="account-dropdown">
                                        <ul>
                                            <li>Login</li>
                                            <li>Register</li>
                                            <li>Wishlist  </li>
                                            <li>my account</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="same-style header-wishlist">
                                    <i class="pe-7s-like"></i>
                                </div>
                                <div class="same-style cart-wrap">
                                    <button class="icon-cart">
                                        <i class="pe-7s-shopbag"></i>
                                        <span class="count-style">02</span>
                                    </button>
                                    <div class="shopping-cart-content">
                                        <ul>
                                            <li class="single-shopping-cart">
                                                <div class="shopping-cart-img">
                                                    <img alt="" src="assets/img/cart/cart-1.webp" />
                                                </div>
                                                <div class="shopping-cart-title">
                                                    <h4>T- Shart & Jeans </h4>
                                                    <h6>Qty: 02</h6>
                                                    <span>$260.00</span>
                                                </div>
                                                <div class="shopping-cart-delete">
                                                    <i class="fa fa-times-circle"></i>
                                                </div>
                                            </li>
                                            <li class="single-shopping-cart">
                                                <div class="shopping-cart-img">
                                                    <img alt="" src="assets/img/cart/cart-2.webp" />
                                                </div>
                                                <div class="shopping-cart-title">
                                                    <h4>T- Shart & Jeans </h4>
                                                    <h6>Qty: 02</h6>
                                                    <span>$260.00</span>
                                                </div>
                                                <div class="shopping-cart-delete">
                                                    <i class="fa fa-times-circle"></i>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="shopping-cart-total">
                                            <h4>Shipping : <span>$20.00</span></h4>
                                            <h4>Total : <span class="shop-total">$260.00</span></h4>
                                        </div>
                                        <div class="shopping-cart-btn btn-hover text-center">
                                            <div class="default-btn" href="#">view cart</div>
                                            <div class="default-btn" href="#">checkout</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-menu-area">
                        <div class="mobile-menu">
                            <nav id="mobile-menu-active">
                                <ul class="menu-overflow">
                                    <li>HOME
                                        <ul>
                                            <li>Demo Group 01
                                                <ul>
                                                    <li>Home 1 – Fashion</li>
                                                    <li>Home 2 – Fashion</li>
                                                    <li>Home 3 – Fashion</li>
                                                    <li>Home 4 – Fashion</li>
                                                    <li>Home 5 – Fashion</li>
                                                    <li>Home 6 – Fashion</li>
                                                    <li>Home 7 – Fashion</li>
                                                    <li>Home 8 – Minimal</li>
                                                    <li>Home 9 – Electronics</li>
                                                    <li>Home 10 – Furniture</li>
                                                    <li>Home 11 - showcase slider</li>
                                                </ul>
                                            </li>


                                        </ul>
                                    </li>
                                    <li>Shop
                                        <ul>
                                            <li>shop layout
                                                <ul>
                                                    <li>standard style</li>
                                                    <li>Grid filter style</li>
                                                    <li>Grid 2 column</li>
                                                    <li>Grid No sidebar</li>
                                                    <li>Grid full wide </li>
                                                    <li>Grid right sidebar</li>
                                                    <li>list 1 column box </li>
                                                    <li>list 1 column full wide </li>
                                                    <li>list 2 column  full wide</li>
                                                </ul>
                                            </li>
                                            <li>product details
                                                <ul>
                                                    <li>tab style 1</li>
                                                    <li>tab style 2</li>
                                                    <li>tab style 3</li>
                                                    <li>sticky style</li>
                                                    <li>gallery style </li>
                                                    <li>Slider style</li>
                                                    <li>affiliate style</li>
                                                    <li>fixed image style </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Collection</li>
                                    <li>Pages
                                        <ul>
                                            <li>about us</li>
                                            <li>cart page</li>
                                            <li>checkout </li>
                                            <li>wishlist </li>
                                            <li>my account</li>
                                            <li>login / register </li>
                                            <li>contact us </li>
                                            <li>404 page </li>
                                        </ul>
                                    </li>
                                    <li>Blog
                                        <ul>
                                            <li>blog standard</li>
                                            <li>blog no sidebar</li>
                                            <li>blog right sidebar</li>
                                            <li>blog details 1</li>
                                            <li>blog details 2</li>
                                            <li>blog details 3</li>
                                        </ul>
                                    </li>
                                    <li>About us</li>
                                    <li>Contact</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default navbar