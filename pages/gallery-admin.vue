<template>
  <div class="gallery-admin">
    <image-upload-type-4></image-upload-type-4>
  </div>
</template>

<script>
  import ImageUploadType4 from "../components/ImageUploadType4";

  export default {
    name: 'gallery-admin',
    components: {ImageUploadType4},
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  .gallery-admin {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
