<template>
  <div class="gallery">
    <div class="inner-page padd">
      <!-- Gallery Start -->
      <div class="gallery">
        <div class="container">
          <!-- Gallery elements with pretty photo -->
          <div class="gallery-content">
            <!--<div class="row" ref="row">-->
            <div v-for="(item, index) in images" :key="index">
              <!-- Separate gallery element -->
              <div class="element">
                <!-- Image -->
                <img class="img-responsive img-thumbnail" :src="item.thumbnailUrl" alt=""/>
                <!-- Gallery Image Hover Effect -->
                <span class="gallery-img-hover"></span>
                <!-- Gallery Image Hover Icon -->
                <a :href="item.url" class="gallery-img-link" target="_blank">
                  <i class="fa fa-search-plus hover-icon icon-left"></i>
                </a>
                <!--<a href="#">-->
                  <!--<i class="fa fa-link hover-icon icon-right"></i>-->
                <!--</a>-->
              </div>
            </div>
            <!--</div>-->
          </div><!-- Separate gallery element --><!--/ End Gallery content class -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {defaultStore} from '../library/firebase'

  export default {
    name: 'gallery',
    data () {
      return {
        images: []
      }
    },
    mounted () {
      jQuery(".gallery-img-link").prettyPhoto({
        overlay_gallery: false, social_tools: false
      });

      defaultStore.collection('images').where('status', '==', true).get().then(snap => {
        if (snap.size) {
          snap.forEach(v => {
            this.images.push({url: v.data().downloadURLs[0], thumbnailUrl: v.data().thumbnailUrl})
          })
        }
      })

    }
  }
</script>

<style lang="scss" scoped>
  .gallery {
    .gallery-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .element {
        margin: 10px;
      }
    }
  }

</style>
