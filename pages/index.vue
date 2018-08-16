<template>
  <div class="index">
    <div class="tp-banner-container">
      <div class="tp-banner">
        <ul>
          <li data-transition="fade" data-slotamount="1" data-masterspeed="1500">
            <!-- MAIN IMAGE -->
            <img src="../assets/images/slider/main-img-1.jpg" alt="" data-bgfit="cover" data-bgposition="center bottom"
                 data-bgrepeat="no-repeat">
          </li>
          <li data-transition="fade" data-slotamount="2" data-masterspeed="1500">
            <!-- MAIN IMAGE -->
            <img src="../assets/images/slider/main-img-2.jpg" alt="" data-bgfit="cover" data-bgposition="center bottom"
                 data-bgrepeat="no-repeat">
          </li>
          <li data-transition="fade" data-slotamount="2" data-masterspeed="1500">
            <!-- MAIN IMAGE -->
            <img src="../assets/images/slider/main-img-3.jpg" alt="" data-bgfit="cover" data-bgposition="center bottom"
                 data-bgrepeat="no-repeat">
          </li>
        </ul>
        <!-- Banner Timer -->
        <div class="tp-bannertimer"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    transition: 'slide',
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/settings.css' },
        { rel: 'stylesheet', href: '/css/flexslider.css' },
      ],
      script: [
        { src: '/js/jquery.themepunch.tools.min.js'},
        { src: '/js/jquery.themepunch.revolution.min.js'},
        { src: '/js/jquery.flexslider-min.js'}
      ]
    },
    name: 'index',
    mounted() {
      /* ******************************************** */
      /*  JS for SLIDER REVOLUTION  */
      /* ******************************************** */
      jQuery(document).ready(function() {
        jQuery('.tp-banner').revolution(
          {
            delay:9000,
            startheight:500,

            hideThumbs:10,

            navigationType:"bullet",

            hideArrowsOnMobile:"on",

            touchenabled:"on",
            onHoverStop:"on",

            navOffsetHorizontal:0,
            navOffsetVertical:20,

            stopAtSlide:-1,
            stopAfterLoops:-1,

            shadow:0,

            fullWidth:"on",
            fullScreen:"off"
          });
      });
      /* ******************************************** */
      /*  JS for FlexSlider  */
      /* ******************************************** */

      $(window).load(function(){
        $('.flexslider-recent').flexslider({
          animation:		"fade",
          animationSpeed:	1000,
          controlNav:		true,
          directionNav:	false
        });
        $('.flexslider-testimonial').flexslider({
          animation: 		"fade",
          slideshowSpeed:	5000,
          animationSpeed:	1000,
          controlNav:		true,
          directionNav:	false
        });
      });

      /* Gallery */

      jQuery(".gallery-img-link").prettyPhoto({
        overlay_gallery: false, social_tools: false
      });
    }
  }
</script>

<style lang="scss" scoped>
  .index {
  }

</style>
