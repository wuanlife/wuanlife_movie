<template>
  <li class="movie-brief-item">
    <div class="cover">
      <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505925363.webp" />
    </div>
    <div class="brief">
      <header>
        <h1>【电影】肖申克的救赎（1994）</h1>
        <span>豆瓣得分：<strong class="score">9.6</strong></span>
      </header>
      <p class="intro">20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla20世纪blabla</p>
    </div>
  </li>
</template>

<script >
export default {
  props: {
    movies: Array
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
li.movie-brief-item {
  display: flex;
  font-size: 12px;
  color: #444444;
  padding: 24px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdc;
  }
  .cover {
    flex: 0 0 83px;
    overflow: hidden;
    background: #eeeeee;
    margin-right: 17px;
    img {
      width: 100%;
      max-height: 100%;
      transition: all .5s ease-out .1s;
      &:hover {
        transform: matrix(1.04,0,0,1.04,0,0);
        backface-visibility: hidden;
      }
    }
  }
  .brief {
    header {
      margin-bottom: 12px;
      h1 {
        display: inline-block;
        position: relative;
        font-size: 14px;
        font-weight: 600;
        color: #333333;
        transition: all 0.6s ease-in-out;
        &::after {
            content: '';
            transition: all 0.5s ease-in-out;
            transform: scaleX(0);
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background: #333333;
          }
        &:hover {
          cursor: pointer;
          &::after {
            transform: scaleX(1);
          }
        }
      }
      span {
        float: right;
        .score {
          font-size: 14px;
          font-weight: 500;
          color: #f32941;
        }
      }
    }
    p.intro {
      max-height: 96px;
      overflow: hidden;
      word-break: break-all;
    }
  }
}
</style>
