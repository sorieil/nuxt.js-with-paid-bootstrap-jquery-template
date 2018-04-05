<template>
  <div>
    <!-- Shopping cart Modal -->
    <div class="modal fade" id="shoppingcart1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Shopping Cart</h4>
          </div>
          <div class="modal-body">
            <!-- Items table -->
            <table class="table table-striped">
              <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><a href="#">Exception Reins Evocative</a></td>
                <td>2</td>
                <td>$200</td>
              </tr>
              <tr>
                <td><a href="#">Taut Mayoress Alias Appendicitis</a></td>
                <td>1</td>
                <td>$190</td>
              </tr>
              <tr>
                <td><a href="#">Sinter et Molests Perfectionist</a></td>
                <td>4</td>
                <td>$99</td>
              </tr>
              <tr>
                <th></th>
                <th>Total</th>
                <th>$489</th>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Continue Shopping</button>
            <button type="button" class="btn btn-info">Checkout</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <div class="wrapper">
      <div class="header">
        <div class="container">
          <!-- Header top area content -->
          <div class="header-top">
            <div class="row">
              <div class="col-md-4 col-sm-4">
                <!-- Header top left content contact -->
                <div class="header-contact">
                  <!-- Contact number -->
                  <span><i class="fa fa-phone red"></i> 888-888-8888</span>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <!-- Header top right content search box -->
                <div class=" header-search">
                  <form class="form" role="form">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search...">
                      <span class="input-group-btn">
											<button class="btn btn-default" type="button">
                        <i class="fa fa-search"></i></button>
										  </span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <!-- Button Kart -->
                <div class="btn-cart-md">
                  <a class="cart-link" href="#">
                    <!-- Image -->
                    <img class="img-responsive" src="../assets/images/etc/cart.png" alt=""/>
                    <!-- Heading -->
                    <h4>Shopping Cart</h4>
                    <span>3 items $489/-</span>
                    <div class="clearfix"></div>
                  </a>
                  <ul class="cart-dropdown" role="menu">
                    <li>
                      <!-- Cart items for shopping list -->
                      <div class="cart-item">
                        <!-- Item remove icon -->
                        <a href="#"><i class="fa fa-times"></i></a>
                        <!-- Image -->
                        <img class="img-responsive img-rounded" src="../assets/images/nav-menu/nav1.jpg" alt=""/>
                        <!-- Title for purchase item -->
                        <span class="cart-title"><a href="#">Exception Reins Evocative</a></span>
                        <!-- Cart item price -->
                        <span class="cart-price pull-right red">$200/-</span>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li>
                      <!-- Cart items for shopping list -->
                      <div class="cart-item">
                        <!-- Item remove icon -->
                        <a href="#"><i class="fa fa-times"></i></a>
                        <!-- Image -->
                        <img class="img-responsive img-rounded" src="../assets/images/nav-menu/nav2.jpg" alt=""/>
                        <!-- Title for purchase item -->
                        <span class="cart-title"><a href="#">Taut Mayoress Alias Appendicitis</a></span>
                        <!-- Cart item price -->
                        <span class="cart-price pull-right red">$190/-</span>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li>
                      <!-- Cart items for shopping list -->
                      <div class="cart-item">
                        <!-- Item remove icon -->
                        <a href="#"><i class="fa fa-times"></i></a>
                        <!-- Image -->
                        <img class="img-responsive img-rounded" src="../assets/images/nav-menu/nav3.jpg" alt=""/>
                        <!-- Title for purchase item -->
                        <span class="cart-title"><a href="#">Sinter et Molests Perfectionist</a></span>
                        <!-- Cart item price -->
                        <span class="cart-price pull-right red">$99/-</span>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li>
                      <!-- Cart items for shopping list -->
                      <div class="cart-item">
                        <a class="btn btn-danger" data-toggle="modal" href="#shoppingcart1">Checkout</a>
                      </div>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-5">
              <!-- Link -->
              <a href="index.html">
                <!-- Logo area -->
                <div class="logo">
                  <img class="img-responsive" src="../assets/images/etc/logo.png" alt=""/>
                  <!-- Heading -->
                  <h1>ChfesTable</h1>
                  <!-- Paragraph -->
                  <p>Facility ester expedite instinct.</p>
                </div>
              </a>
            </div>
            <div class="col-md-8 col-sm-7">
              <!-- Navigation -->
              <nav class="navbar navbar-default navbar-right" role="navigation">
                <div class="container-fluid">
                  <!-- Brand and toggle get grouped for better mobile display -->
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>

                  <!-- Collect the nav links, forms, and other content for toggling -->
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                      <li><a href="index.html"><img src="../assets/images/nav-menu/nav1.jpg" class="img-responsive"
                                                    alt=""/>
                        Home</a>
                      </li>
                      <li class="dropdown hidden-xs">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img
                          src="../assets/images/nav-menu/nav2.jpg"
                          class="img-responsive" alt=""/>
                          Menu <b class="caret"></b></a>
                        <ul class="dropdown-menu dropdown-md">
                          <li>
                            <div class="row">
                              <div class="col-md-4 col-sm-6">
                                <!-- Menu Item -->
                                <div class="menu-item">
                                  <!-- Heading -->
                                  <h3>Vegetarian</h3>
                                  <!-- Image -->
                                  <img src="../assets/images/dish/dish1.jpg" class="img-responsive" alt=""/>
                                  <!-- Paragraph -->
                                  <p>Sea nut perspicacity under omni piste natures mirror of there with consequent.</p>
                                  <!-- Button -->
                                  <a href="menu.html" class="btn btn-danger btn-xs">View Menu</a>
                                </div>
                              </div>
                              <div class="col-md-4 col-sm-6">
                                <!-- Menu Item -->
                                <div class="menu-item">
                                  <!-- Heading -->
                                  <h3>Non-Vegetarian</h3>
                                  <!-- Image -->
                                  <img src="../assets/images/dish/dish2.jpg" class="img-responsive" alt=""/>
                                  <!-- Paragraph -->
                                  <p>Sea nut perspicacity under omni piste natures mirror as precode consequent.</p>
                                  <!-- Button -->
                                  <a href="menu.html" class="btn btn-danger btn-xs">View Menu</a>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <!-- Menu Item -->
                                <div class="menu-item">
                                  <!-- Heading -->
                                  <h3>Special Menu</h3>
                                  <!-- Image -->
                                  <img src="../assets/images/dish/dish3.jpg" class="img-responsive" alt=""/>
                                  <!-- Paragraph -->
                                  <p>Sea nut perspicacity under omni piste natures mirror consequent.</p>
                                  <!-- Button -->
                                  <a href="menu.html" class="btn btn-danger btn-xs">View Menu</a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown visible-xs">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Menu <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                          <li><a href="menu.html">Vegetarian</a></li>
                          <li><a href="menu.html">Non Vegetarian</a></li>
                          <li><a href="menu.html">Special Menu</a></li>
                        </ul>
                      </li>
                      <li><a href="gallery.html"><img src="../assets/images/nav-menu/nav3.jpg" class="img-responsive"
                                                      alt=""/> Gallery</a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img
                          src="../assets/images/nav-menu/nav4.jpg"
                          class="img-responsive" alt=""/>
                          Shop <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                          <li><a href="items.html">Shopping</a></li>
                          <li><a href="item-single.html">Order Now</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="reserve-seats.html">Reservation</a></li>
                          <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img
                          src="../assets/images/nav-menu/nav5.jpg"
                          class="img-responsive" alt=""/>
                          Pages <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                          <li><a href="error.html">404 Error</a></li>
                          <li><a href="0-base.html">Blank Page</a></li>
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog-single.html">Blog Single</a></li>
                          <li><a href="components.html">Components</a></li>
                          <li><a href="general.html">General</a></li>
                          <li><a href="nutrition-info.html">Nutrition Info</a></li>
                          <li><a href="recipe.html">Recipes</a></li>
                        </ul>
                      </li>
                      <li><a href="aboutus.html"><img src="../assets/images/nav-menu/nav6.jpg" class="img-responsive"
                                                      alt=""/>
                        About</a></li>
                    </ul>
                  </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
              </nav>
            </div>
          </div>
        </div> <!-- / .container -->
      </div>
      <nuxt/>
      <div class="footer padd">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <!-- Footer widget -->
              <div class="footer-widget">
                <!-- Logo area -->
                <div class="logo">
                  <img class="img-responsive" src="../assets/logo.png" alt="" />
                  <!-- Heading -->
                  <h1>CakeFactory</h1>
                </div>
                <!-- Paragraph -->
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.</p>
                <hr />
                <!-- Heading -->
                <h6>On-line Payment Clients</h6>
                <!-- Images -->
                <a href="#"><img class="payment img-responsive" src="../assets/images/payment/2co.gif" alt="" /></a>
                <a href="#"><img class="payment img-responsive" src="../assets/images/payment/authorizenet.gif" alt="" /></a>
                <a href="#"><img class="payment img-responsive" src="../assets/images/payment/discover.gif" alt="" /></a>
                <a href="#"><img class="payment img-responsive" src="../assets/images/payment/egold.gif" alt="" /></a>
                <a href="#"><img class="payment img-responsive" src="../assets/images/payment/mastercard.gif" alt="" /></a>
                <a href="#"><img class="payment img-responsive" src="../assets/images/payment/paypal.gif" alt="" /></a>
                <a href="#"><img class="payment img-responsive" src="../assets/images/payment/visa.gif" alt="" /></a>
                <a href="#"><img class="payment img-responsive" src="../assets/images/payment/worldpay.gif" alt="" /></a>
              </div> <!--/ Footer widget end -->
            </div>
            <div class="col-md-3 col-sm-6">
              <!-- Footer widget -->
              <div class="footer-widget">
                <!-- Heading -->
                <h4>Famous Dishes</h4>
                <!-- Images -->
                <a href="#"><img class="dish img-responsive" src="../assets/images/dish/dish1.jpg" alt="" /></a>
                <a href="#"><img class="dish img-responsive" src="../assets/images/dish/dish1.jpg" alt="" /></a>
                <a href="#"><img class="dish img-responsive" src="../assets/images/dish/dish1.jpg" alt="" /></a>
                <a href="#"><img class="dish img-responsive" src="../assets/images/dish/dish1.jpg" alt="" /></a>
                <a href="#"><img class="dish img-responsive" src="../assets/images/dish/dish1.jpg" alt="" /></a>
                <a href="#"><img class="dish img-responsive" src="../assets/images/dish/dish1.jpg" alt="" /></a>
                <a href="#"><img class="dish img-responsive" src="../assets/images/dish/dish1.jpg" alt="" /></a>
                <a href="#"><img class="dish img-responsive" src="../assets/images/dish/dish1.jpg" alt="" /></a>
                <a href="#"><img class="dish img-responsive" src="../assets/images/dish/dish1.jpg" alt="" /></a>
              </div> <!--/ Footer widget end -->
            </div>
            <div class="clearfix visible-sm"></div>
            <div class="col-md-3 col-sm-6">
              <!-- Footer widget -->
              <div class="footer-widget">
                <!-- Heading -->
                <h4>Join Us Today</h4>
                <!-- Paragraph -->
                <p>There is no one who loves pain itself, who seeks after it and wants to have it.</p>
                <!-- Subscribe form -->
                <form role="form">
                  <div class="form-group">
                    <input class="form-control" type="text" placeholder="Your name" />
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="email" placeholder="Your email" />
                  </div>
                  <button class="btn btn-danger" type="button">Subscribe</button>
                </form>
              </div> <!--/ Footer widget end -->
            </div>
            <div class="col-md-3 col-sm-6">
              <!-- Footer widget -->
              <div class="footer-widget">
                <!-- Heading -->
                <h4>Contact Us</h4>
                <div class="contact-details">
                  <!-- Address / Icon -->
                  <i class="fa fa-map-marker br-red"></i> <span>#768, 5th floor, N S Building,<br />Csm Block, Park Road,<br /> Bangalore - 234567</span>
                  <div class="clearfix"></div>
                  <!-- Contact Number / Icon -->
                  <i class="fa fa-phone br-green"></i> <span>+91 88-88-888888</span>
                  <div class="clearfix"></div>
                  <!-- Email / Icon -->
                  <i class="fa fa-envelope-o br-lblue"></i> <span><a href="#">abc@example.com</a></span>
                  <div class="clearfix"></div>
                </div>
                <!-- Social media icon -->
                <div class="social">
                  <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                  <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                  <a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a>
                </div>
              </div> <!--/ Footer widget end -->
            </div>
          </div>
          <!-- Copyright -->
          <div class="footer-copyright">
            <!-- Paragraph -->
            <p>&copy; Copyright 2014 <a href="#">Company Name</a></p>
          </div>
        </div>
      </div>
    </div>
    <span class="totop"><a href="#"><i class="fa fa-angle-up"></i></a></span>
  </div>
</template>

<style>
</style>
