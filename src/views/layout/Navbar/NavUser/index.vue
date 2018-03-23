<template>
  <div class="nav-user">
    <div class="nav-user-logined">
      <router-link to="" tag="span" class="nav-user-find">发现影视</router-link>
      <div>
        <span @click="show()">
          淘淘<icon-svg icon-class="triangle1" class="nav-user-triangle"></icon-svg>
        </span>
        <router-link v-if="isShow" to="" tag="span" class="logout">退出登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavUser',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.nav-user{
  padding-top: 11px;
  .nav-user-logined{
    display: flex;
    justify-content: flex-start;
    height: 40px;
    .nav-user-find{
      background-color: rgba(255, 255, 255, 0.2);
      text-align: center;
      border-radius: 4px;
      color: #fff;
      font-size: 18px;
      width: 90px;
      line-height: 40px;
      cursor: pointer;
    }
    >div{
      position: relative;
      text-align: center;
      width: 100px;
      span{
        color: #fff;
        cursor: pointer;
        font-size: 18px;
        border-radius: 4px;
        display: block;
        line-height: 40px;
      }
      .logout{
        position: absolute;
        top: 40px;
        width: 100%;
        font-size: 14px;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>
