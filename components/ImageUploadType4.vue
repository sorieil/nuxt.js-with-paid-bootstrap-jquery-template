<template>
  <div class="image-upload-type-4">
    <div class="container">
      <div id="fileBox" class="file-box" :class="{'before-file-upload': previewNames.length <= 0}">
        <label class="input-click-box" for="files">
          <input type="file" ref="fileInput" id="files" class="files"
                 :multiple="limitedFileUploadCount > 1? true: false"
                 :accept="acceptType" @change="fileChange">
        </label>
      </div>
      <div class="preview">
        <!--{{previewImages}}-->
        <div class="image" v-for="(item, index) in previewImages" :key="index">
          <button v-on:click.once="removeImage(index)">삭제</button>
          <img :src="item.url">
        </div>
      </div>
      <div @click="clickAddFile" class="file-select-button">
        UPLOAD
      </div>
    </div>
  </div>
</template>

<script>
  import {defaultStore, firebase} from '../library/firebase'

  const Hash = require('object-hash')
  export default {
    name: 'image-upload-type-4',
    props: {
      limitedFileUploadCount: {
        default: 100,
        type: Number
      },
      acceptType: {
        default: 'image/*',
        type: String
      },
      message: {
        default: '클릭 또는 드래그하여 이미지를 올려주세요.',
        type: String
      },
      size: {
        default: 200,
        type: Number
      },
      standard: {
        default: 'width',
        type: String
      },

      directory: {
        default: 'images',
        type: String
      },
      importPreviewImages: {
        default: () => [],
        type: Array
      }
    },
    data () {
      return {
        files: '',
        acceptLists: {
          image: 'image/*',
          excel: ''
        },
        tempSize: this.size,
        previewNames: [],
        previewImages: [],
        previewsProgress: [],
        uploadedImagesId: [], // 이미지 삭제하기 위해서 필요
        previewNotLoadImage: require('../assets/images/baseline-burst_mode-24px.svg'),
        result: {
          originals: []
        },
        tempMessage: this.message,
        uniqueFileNumber: 0,
        returnSavedImages: [],
        selectedMainSaveImage: 0, // 인덱스 값
        tempImportPreviewImages: {}
      }
    },
    created () {
      // console.log(this.importPreviewImages)
      defaultStore.collection('images').where('status', '==', true).get().then(snap => {
        if (snap.size) {
          console.log(snap)
          this.tempImportPreviewImages = snap
          // snap.forEach(doc => {
          //   console.log(doc.data())
          //   // this.importPreviewImages.push(doc.data())
          //   // this.uploadedImagesId.push(doc.id)
          // })
          this.setImportPreviews()
        }
      })
    },
    mounted () {
      this.files = this.$refs.fileInput
      document.addEventListener('dragover', this.dragOverHandler)
      document.addEventListener('drop', this.dragDropHandler)
      document.addEventListener('dragleave', this.dragDropLeave)
      this.clickAddFile()



    },
    destroyed () {
      document.removeEventListener('dragover', this.dragOverHandler)
      document.removeEventListener('drop', this.dragDropHandler)
      document.removeEventListener('dragleave', this.dragDropLeave)
    },
    updated () {
    },
    methods: {
      clickAddFile () {
        this.files.click()
      },
      dragOverHandler (e) {
        e.stopPropagation()
        e.preventDefault()
        // console.log('image drag sensor', e.buttons)
        // e.dataTransfer.dropEffect = 'move'
        if (e.buttons === 0) {
          this.tempMessage = '이미지를 드롭하세요.'
        }
      },
      dragDropHandler (e) {
        e.stopPropagation()
        e.preventDefault()
        const data = e.dataTransfer
        const files = data.files
        const count = files.length
        // console.log(`File Count: ${count}`)
        this.fileProcess(files, 0)
        this.tempMessage = '클릭 또는 이미지를 드래그 해주세요.'
      },
      dragDropLeave (e) {
        this.tempMessage = '클릭 또는 이미지를 드래그 해주세요.'
      },
      bindDeleteImage () {
        //  TODO: 비동기로 이미지 추가 하기
        // const images = document.querySelectorAll('.item')
        // images.forEach((element) => {
        // console.log('elements:', element)
        // element.addEventListener('click', console.log('el'))
        // const target = getComputedStyle(element, ':before')
        // console.log(target)
        // target.addEventListener('click', console.log('ddd'))
        // })

      },
      // Recursion Function
      fileProcess (files, i) {
        console.log('this.limitedFileUploadCount:', this.uniqueFileNumber, this.limitedFileUploadCount, files.length)
        // 조건
        // image 가  null 로 되어 있으면, 순서대로 저장한다.
        // 만약 선택한 이미지가 있는경우 선택한 이미지만 저장한다. (선택한 이미지중 이미 있는 경우에는 업데이트를 한다.)

        if (files && this.uniqueFileNumber < this.limitedFileUploadCount) {
          const file = files[i]
          // console.log(file)
          this.filePreview(file).then(result => {
            console.log('file preview: ', result)
            if (result) {
              i++ // increase array key value
              this.fileProcess(files, i)
            } else {
              console.log('Finish the Image files add.')
            }
          })
        } else {
          console.log('업로드 끝')
        }
      },
      fileChange (e) {
        // 여기에서 셀렉트 인지 아닌지 체크
        //여기에서 이미지로 저장할 데이터들의 값을 배열로 만들어서 취합한다.
        console.log(e.target.files)
        console.log('uniqueFileNumber:', this.uniqueFileNumber)
        this.fileProcess(e.target.files, 0)
      },
      fileAdd (file) {
        return new Promise((resolve, reject) => {
          const files = new FileReader
          let progressPercentage = 0

          files.addEventListener('loadstart', (e) => {
            // 이미지가 업로드 중이면, 계속 인터벌을 돌면서 업로드 진행 상태를 가시적으로 보여준다. (즉 업로드 상태 피싱)
            this.$set(this.previewImages, this.uniqueFileNumber, {id: null, url: this.previewNotLoadImage})
            this.previewsProgress.push(0)
            this.previewNames.push(file.name)
            const progress = setInterval(() => {
              progressPercentage += 1
              if (progressPercentage <= 100) {
                this.previewsProgress[this.uniqueFileNumber] = progressPercentage
              } else {
                clearInterval(progress)
              }
            }, 100)
          })

          files.addEventListener('load', () => {
            const image = new Image()
            image.onload = () => {
              setTimeout(() => {
                return this.fileUpload(file, image).then((res) => {
                  // 프리뷰를 위해서 미리 더비데이터 업로드
                  this.$set(this.previewImages, this.uniqueFileNumber, {
                    id: null,
                    url: this.previewNotLoadImage
                  })
                  return res
                }).then((r) => {
                  if (r) {
                    // 리미지 리사이징 만들기
                    return this.reSize(image).then((reSizeImage) => {
                      return new Promise(resolve => {
                        console.log('upload:', r)
                        this.$set(this.previewImages, this.uniqueFileNumber, {
                          id: null,
                          url: reSizeImage
                        })  // 미리보기 이미지
                        this.$set(this.previewsProgress, this.uniqueFileNumber, 100) // 업로드 상태 완료
                        progressPercentage = 100
                        resolve(true)
                      }).then((result) => {
                        // console.log('마지막 큐 : ', result)
                        // console.log('저정된 이미지 : ', this.returnSavedImages)
                        setTimeout(() => {
                          // 스토어에 저장
                          this.uniqueFileNumber++
                          resolve(true)
                        }, 0)
                      })
                    })
                  } else {
                    console.log('이미지 업로드 실패')
                    resolve(false)
                  }
                })
              }, 0)
            }
            image.src = files.result
          })

          files.addEventListener('progress', (e) => {
            console.log('progress', e)
          })

          files.readAsDataURL(file)

          files.onabort = () => {
            reject('error')
            console.error('The upload was aborted.')
          }

          files.onerror = () => {
            reject('error')
            console.error('An error occured while reading the file.')
          }
        })
      },
      async filePreview (file) {
        if (typeof file !== 'undefined') {
          if (/\.(jpe?g|png)$/i.test(file.name)) {
            return await this.fileAdd(file)
          } else {
            console.log('이미지 중복이거나, 이미지가 아닌 파일')
            return new Promise(resolve => resolve(true))
          }
        } else {
          console.log('이미지 중복이거나, 이미지가 아닌 파일')
          return new Promise(resolve => resolve(false))
        }
      },
      async fileUpload (file, image) {
        console.log('image metadata info:', image.width)
        const direction = image.width > image.height ? 'width' : 'height'
        // let formData = new FormData()
        // formData.append('file', file) 일반 request http 업로드 할땐 필요함
        const fileName = Hash(new Date().getTime() + file.name)
        return await
          firebase.storage().ref().child(this.directory).child(fileName).put(file).then(res => {
            // 이미지 관리를 위해서 이미지만 따로 저장
            return this.thumbnail(image, fileName).then((thumb) => {

              const obj1 = Object.assign({}, {
                status: true,
                direction: direction,
                thumbnailUrl: thumb.downloadURL
              }, res.metadata)


              delete obj1.cacheControl
              delete obj1.contentLanguage
              delete obj1.customMetadata
              return defaultStore.collection('images').add(obj1).then(doc => {
                this.returnSavedImages.push({
                  direction: direction,
                  imageUid: doc.id,
                  fileName: fileName,
                  url: res.downloadURL,
                  thumbnailUrl: thumb.downloadURL
                })
                // console.log('image saved', doc)
                this.uploadedImagesId.push(doc.id)
                this.$emit('model', this.returnSavedImages)
                return res
              })
            })
          })
      },
      async thumbnail (image, fileName) {
        this.tempSize = 300
        const convertImage = await this.reSize(image)
        return new Promise((resolve) => {
          this.tempSize = this.size
          firebase.storage().ref().child(this.directory).child('thumbnail').child(fileName).putString(convertImage, 'data_url').then(res => {
            resolve(res)
          })
        })
      },
      reSize (image) {
        return new Promise(resolve => {
          const canvas = document.createElement('canvas')
          if (this.standard === 'width') {
            if (image.width > this.tempSize) {
              image.height *= this.tempSize / image.width
              image.width = this.tempSize
            }
          } else {
            if (image.height > this.tempSize) {
              image.width *= this.tempSize / image.height
              image.height = this.tempSize
            }
          }
          const ctx = canvas.getContext('2d')
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          canvas.width = image.width
          canvas.height = image.height
          ctx.drawImage(image, 0, 0, image.width, image.height)
          resolve(canvas.toDataURL('image/png'))
        })
      },
      removeImage (index) {
        // 기존 방식
        // console.log('index:', index)
        // 파이어베이스에서는 웹에서 삭제를 권고 하지 않는다. 그래서 파일만 지우고 레코드를 삭제 하지 못하기 때문에
        // 우선 삭제는 하지 않는걸로~
        if (index < this.previewImages.length) {
          defaultStore.collection('images').doc(this.uploadedImagesId[index]).update({
            status: false
          }).then(res => {
            // console.log('updated file', res)
            this.uniqueFileNumber--
            this.previewNames.splice(index, 1)
            this.previewImages.splice(index, 1)
            this.previewsProgress.splice(index, 1)
            this.files.value = null
            this.returnSavedImages.splice(index, 1)
            this.uploadedImagesId.splice(index, 1)
            this.$emit('model', this.returnSavedImages)
          })

        }
      },
      setImportPreviews () {
        console.log('this.tempImportPreviewImages.length:', this.tempImportPreviewImages.size)
        this.uniqueFileNumber = parseInt(this.tempImportPreviewImages.size, 10)
        this.tempImportPreviewImages.forEach(v => {
          console.log('v:',v.data())
          this.previewNames.push(v.data().filename)
          this.previewImages.push({id: v.data().imageUid, url: v.data().thumbnailUrl})
          this.previewsProgress.push(100)
          this.returnSavedImages.push(v.data())
          this.uploadedImagesId.push(v.id)
        })
        this.$forceUpdate()
      },
      randomIndex () {
        return Math.floor(Math.random() * 100)
      }
    },
    watch: {
      importPreviewImages: function (val) {
        this.tempImportPreviewImages = val
        console.log('watch: ',val)
        this.setImportPreviews()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image-upload-type-4 {
    .container {
      max-width: 1024px;
      min-height: 800px;
      width: 100%;
      background-color: #f5f5f5;
      border: solid 1px #e7e7e7;
      margin: 20px auto;
      position: relative;
      .preview {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        flex-wrap: wrap;
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: start;
        .image {
          margin: 4px;
          img {
            object-fit: contain;
            width: 100px;
          }
          position: relative;

          button {
            cursor: pointer;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            content: '삭제';
            text-align: center;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 50px;
            height: 30px;
            font-size: 14px;
            font-weight: bold;
            margin: auto;
            background-color: #ffffff;
            color: #ff0000;
            opacity: 0;
            visibility: hidden;
            border: 0;
          }

          &:hover {
            button {
              animation: deleteButton 1s ease-in-out forwards;
            }
          }
        }
      }

      @keyframes deleteButton {
        from {
          opacity: 0;
          visibility: hidden;
        }

        to {
          opacity: 1;
          visibility: visible;
        }
      }

      .file-box {
        z-index: 0;
        position: relative;
        width: inherit;
        height: inherit;
        display: block;
        .input-click-box {
          position: absolute;
          width: inherit;
          height: inherit;
        }
        .files {
          opacity: 0;
        }
      }
      .before-file-upload {
        z-index: 30;
      }
      .file-select-button {
        color: #000;
        width: 150px;
        height: 50px;
        font-size: 14px;
        font-weight: 300;
        background-color: white;
        border: 1px solid #c8c8c8;
        position: absolute;
        right: 10px;
        bottom: 10px;
        z-index: 100;
        cursor: pointer;
        text-align: center;
        line-height: 50px;
      }
    }
  }
</style>
