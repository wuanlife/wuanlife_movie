<template>
  <ribbon-card :title="movieData.title">
    <div class="movie-detail">
      <img :src="movieData.poster_url" :alt="movieData.original_title" :title="movieData.original_title">
      <ul class="detail">
        <li><span>原名：</span>{{ movieData.original_title }}</li>
        <li><span>地区：</span>{{ movieData.countries }}</li>
        <li><span>年代：</span>{{ movieData.year }}</li>
        <li><span>类型：</span>{{ movieData.genres | arrToString }}</li>
        <li><span>又名：</span>{{ movieData.aka }}</li>
        <li><span>导演：</span>{{ movieData.directors | arrToString }}</li>
        <li><span>主演：</span>{{ movieData.casts | arrToString }}</li>
        <li><span>豆瓣链接：</span><a :href="movieData.url_douban" class="link">{{ movieData.url_douban | urlToNumber }}</a></li>
      </ul>
      <div class="score">
        <div class="number">
          <span>{{ movieData.rating | integerToDecimal }}</span>
          <icon-svg icon-class="liuamngxing" class="icon"></icon-svg>
        </div>
        <span>豆瓣评分</span>
      </div>
    </div>
  </ribbon-card>
</template>

<script>
export default {
  name: 'MovieDetail',
  props: {
    movieData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  filters: {
    arrToString (value) {
      if (value) {
        const dataArr = value.map(item => {
          return item.name
        })
        return dataArr.join('/')
      }
    },
    urlToNumber (value) {
      if (value) {
        let a = value.split('/')
        return a[a.length - 2]
      }
    },
    integerToDecimal (value) {
      if (value) {
        return value % parseInt(value) > 0 ? value : `${value}.0`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-detail{
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  color: #666;
  > img{
    width: 139px;
    height: 207px;
    display: block;
    background-color: rgb(202, 200, 200);
  }
  .detail{
    font-size: 12px;
    color: #666;
    width: 263px;
    margin-left: 40px;
    margin-right: 120px;
    line-height: 1.2;
    > li{
      margin-bottom: 9px;
      &:last-child{
        margin-bottom: 0;
      }
      > span{
        font-weight: bold;
      }
      .link{
        color: #f32941;
        text-decoration: underline;
        &:hover{
          font-weight: bold;
        }
      }
    }
  }
  .score{
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-left:1px solid #dcdcdc;
    min-width: 330px;
    padding-top: 30px;
    .number{
      width: 58px;
      height: 66px;
      position: relative;
      margin-bottom: 16px;
      >span{
        font-size: 18px;
        color: #fbe592;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        &:first-letter{
          font-size: 30px;
        }
      }
      .icon{
        width: 70px;
        height: 70px;
        color: #f43e54;
      }
    }
    >span{
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>
