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
    > ul{}
  }
</style>
