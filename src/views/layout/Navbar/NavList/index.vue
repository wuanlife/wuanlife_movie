<template>
  <div class="nav-list">
    <ul>
      <li v-for="(item, index) of list" :key="index">
        <router-link to="">{{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  data () {
    return {
      list: ['首页', '电影', '国产/港台剧', '欧美剧', '日韩剧', '综艺']
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .nav-list{
    display: flex;
    flex: 1;
    > ul{
      font-size: 22px;
      color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: stretch;
      flex: 1;
      padding: 0 80px;
      li{
        display: block;
        align-self: center;
        height: 100%;
        display: flex;
        align-items: center;
        &:hover, &:focus{
          border-bottom: 4px solid #fbe592;
          color: #fbe592;
        }
      }
    }
  }
</style>
