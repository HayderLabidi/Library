import React from 'react'
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div>
            <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix">
                <div class="container-fluid">
                    <div class="row row-nav">
                        <div class="col-xl-2 col-lg-2 col-md-6 col-4">
                            <div class="logo">
                                <img alt="" src="assets/img/logo/logo.png" />
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
                                                    <img alt="" src="assets/img/cart/cart-1" />
                                                </div>
                                                <div class="shopping-cart-title">
                                                    <h4>Book 1</h4>
                                                    <h6>Qty: 02</h6>
                                                    <span>$260.00</span>
                                                </div>
                                                <div class="shopping-cart-delete">
                                                    <i class="fa fa-times-circle"></i>
                                                </div>
                                            </li>
                                            <li class="single-shopping-cart">
                                                <div class="shopping-cart-img">
                                                    <img alt="" src="assets/img/cart/cart-2" />
                                                </div>
                                                <div class="shopping-cart-title">
                                                    <h4>BOOK 2</h4>
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
                                    <li className="a"><Link to="/">Home</Link></li>
                                        <li className="a"><Link to="/shop">Shop</Link></li>
                                        <li className='a'><Link to="/about">About</Link></li>
                                        <li className="a"><Link to="/contact">Contact</Link></li>
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