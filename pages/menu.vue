<template>
  <div class="menu">
    <!-- Banner Start -->

    <div class="banner padd">
      <div class="container">
        <!-- Image -->
        <img class="img-responsive" src="../static/images/etc/crown-white.png" alt="" />
        <!-- Heading -->
        <h2 class="white">Menu</h2>
        <ol class="breadcrumb">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li class="active">Menu</li>
        </ol>
        <div class="clearfix"></div>
      </div>
    </div>

    <!-- Banner End -->
    <!-- Inner Content -->
    <div class="inner-page padd">
      <!-- Inner page menu start -->
      <div class="inner-menu">
        <div class="container">
          <div class="row" style="display: flex; justify-content: center; flex-wrap: wrap">
            <div style="margin: 10px;">
              <!-- Inner page menu list -->
              <div class="menu-list">
                <!-- Menu item heading -->
                <h3>COLD SANDWICHES</h3>
                <!-- Image for menu list -->
                <img class="img-responsive" src="../static/images/menu/menu1.jpg" alt="" />
                <!-- Menu list items -->
                <div class="menu-list-item">
                  <!-- Heading / Dish name -->
                  <h4 class="pull-left">NYC ITALIAN SUB</h4>
                  <!-- Dish price -->
                  <span class="price pull-right">10.5</span>
                  <div class="clearfix"></div>
                </div>
                <!-- Menu list items -->
                <div class="menu-list-item">
                  <!-- Heading / Dish name -->
                  <h4 class="pull-left">CLASSIC DELI HAM & CHEESE</h4>
                  <!-- Dish price -->
                  <span class="price pull-right">11.0</span>
                  <div class="clearfix"></div>
                </div>
                <!-- Menu list items -->
                <div class="menu-list-item">
                  <!-- Heading / Dish name -->
                  <h4 class="pull-left">LONG ISLAND WASABI SHRIMP ROLL</h4>
                  <!-- Dish price -->
                  <span class="price pull-right">11.5</span>
                  <div class="clearfix"></div>
                </div>
                <!-- Menu list items -->
                <div class="menu-list-item">
                  <!-- Heading / Dish name -->
                  <h4 class="pull-left">SUNDAY ROAST BEEF</h4>
                  <!-- Dish price -->
                  <span class="price pull-right">11.5</span>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div style="margin: 10px;">
              <!-- Inner page menu list -->
              <div class="menu-list">
                <!-- Menu item heading -->
                <h3>HOT SANDWICHES</h3>
                <!-- Image for menu list -->
                <img class="img-responsive" src="../assets/images/menu/hot-sandwiches.jpg" alt="" />
                <!-- Menu list items -->
                <div class="menu-list-item">
                  <!-- Heading / Dish name -->
                  <h4 class="pull-left">CLASSIC BLT</h4>
                  <!-- Dish price -->
                  <span class="price pull-right">10.0</span>
                  <div class="clearfix"></div>
                </div>
                <!-- Menu list items -->
                <div class="menu-list-item">
                  <!-- Heading / Dish name -->
                  <h4 class="pull-left">FRIED BUFFALO CHICKEN</h4>
                  <!-- Dish price -->
                  <span class="price pull-right">11.0</span>
                  <div class="clearfix"></div>
                </div>
                <!-- Menu list items -->
                <div class="menu-list-item">
                  <!-- Heading / Dish name -->
                  <h4 class="pull-left">DO CHUA ROAST PORK BELLY</h4>
                  <!-- Dish price -->
                  <span class="price pull-right">11.0</span>
                  <div class="clearfix"></div>
                </div>
                <!-- Menu list items -->
                <div class="menu-list-item">
                  <!-- Heading / Dish name -->
                  <h4 class="pull-left">ITALIAN MEATBALL SUB</h4>
                  <!-- Dish price -->
                  <span class="price pull-right">10.5</span>
                  <div class="clearfix"></div>
                </div>
                <!-- Menu list items -->
                <div class="menu-list-item border-zero">
                  <!-- Heading / Dish name -->
                  <h4 class="pull-left">PAPI'S CHOPPED CHEESE</h4>
                  <!-- Dish price -->
                  <span class="price pull-right">11.5</span>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- / Inner Page Content End -->
  </div>
</template>

<script>
  export default {
    transition: 'slide',
    name: 'menu'
  }
</script>

<style lang="scss" scoped>
  .menu{

  }

</style>
