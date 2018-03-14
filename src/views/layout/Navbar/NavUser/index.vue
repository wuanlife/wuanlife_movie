<template>
  <div class="nav-user">
    <div class="nav-user-logined">
      <router-link to="" tag="span" class="nav-user-find">发现影视</router-link>
      <span>淘淘<icon-svg icon-class="triangle1" class="nav-user-triangle"></icon-svg></span>
      <router-link to="" tag="span" class="nav-user-find">退出登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavUser',
  data () {
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.nav-user{
  .nav-user-logined{
    .nav-user-find{
      background-color: rgba(255, 255, 255, 0.2);
      padding: 12px 10px;
      border-radius: 4px;
    }
    >span{
      color: #fff;
      cursor: pointer;
      font-size: 18px;
    }
  }
}
</style>
