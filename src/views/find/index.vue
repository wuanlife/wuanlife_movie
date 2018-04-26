<template>
  <div class="index-container view-container find">
    <section>
      <ribbon-card :title="`发现影视`">
        <div  class="form-item">
          <span>分类：</span>
          <el-radio-group v-model="type" @change.native="movieTypeChange">
            <el-radio class="radio" v-for="movieType in types" :key="movieType.type_id" :label="movieType.type_id">{{movieType.type_name}}</el-radio>
          </el-radio-group>
        </div>
        <div class="form-item">
           <span>豆瓣链接：</span>
            <el-input v-model="url" class="movie-url"  placeholder="https://movie.douban.com/subject/xxxxxx/"></el-input>
        </div>

        <div class="form-item">
           <span></span>
          <el-button class="submit" @click.native="handleSubmit">提交</el-button>
        </div>
        <div class="form-item">
          <p>豆瓣链接即该影视在豆瓣电影的链接，链接格式为：https://movie.douban.com/subject/xxxxxx/ ，豆瓣电影官网：<a href="https://movie.douban.com/" target="_blank">传送门</a></p>
        </div>

      </ribbon-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { postMovies } from 'api/movies'

export default {
  name: 'Find',
  data () {
    return {
      type: '',
      url: ''
    }
  },
  computed: {
    ...mapGetters(['types'])
  },
  methods: {
    movieTypeChange (val) {
      val = this.type
      console.log(val)
    },
    handleSubmit () {
      const type = this.type
      const url = this.url
      postMovies(type, url).then(res => {
        console.log(res)
        this.$router.push({ path: `/movie/${res.id}` })
      }, err => {
        console.log(err)
        this.$router.push({ path: `/movie/${err.response.data.id}` })
      })
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.index-container {
  margin-top: 70px;
  section {
     .form-item{
      display: flex;
      min-height: 45px;
      align-items: center;
      font-size: 14px;
      color: #444444;
      margin-bottom: 0px;
      &:last-child{
          margin-bottom:0px;
      }
        span{
          display: block;
          width:86px;
          margin-right: 32px;
          text-align:right;
          font-size: 14px;
          font-weight: bold;
          color: #434343;
      }
      &>.submit{
          font-size: 14px;
          color: #fff;
          padding: 9px 32px 9px 33px;
          background: #f32941;
          border: solid 1px #f32941;
          border-radius: 4px;
      }
      &>p{
          font-size: 12px;
          color: #444444;
          padding-top:35px;
      }
    }
  }
}
</style>

<style lang="scss">
    .find {
      .movie-url{
        width: 393px;
        &>input{
          color: #444444;
          background-color: rgba(209, 209, 209, 0.3);
          border-radius: 4px;
          border: solid 2px rgba(209, 209, 209, 0.3);
          padding: 0 16px;
        }
        &>input:focus{
          color:#444444;
          background-color: rgba(209, 209, 209, 0);
        }
      }
      .radio{
        & .el-radio__input.is-checked .el-radio__inner{
          background: #ffffff;
          border-color:#f32941;
        }
         & .el-radio__inner:hover{
          border-color:#ff5f3b;
        }
        & .el-radio__inner:after{
          background-color: #f32941;
          width: 8px;
          height: 8px;
        }
        & .el-radio__input.is-checked+.el-radio__label {
          color:#444444;
        }
    }
  }
</style>
