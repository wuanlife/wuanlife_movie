<template>
  <div class="navbar">
    <div class="navbar-header-wrap">
      <div class="navbar-header">
        <div class="logo" @click="$router.push({path: '/'})">午安影视</div>
        <search-bar></search-bar>
        <nav-user></nav-user>
      </div>
    </div>
    <div class="navber-menu">
      <nav-list></nav-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchBar from './SearchBar'
import NavUser from './NavUser'
import NavList from './NavList'

export default {
  components: {
    'search-bar': SearchBar,
    'nav-user': NavUser,
    'nav-list': NavList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    logout () {
      this.$store.dispatch('Logout').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    visibleChange () {
      this.isShowDrop = !this.isShowDrop
    },
    handleIconClick () {
      if (this.input2 !== '') {
        this.$store.commit('SET_SEARCHTEXT', this.searchContent)
        this.$router.push({ path: '/search' })
      } else {
        alert('请输入要搜索的内容')
      }
    },
    clickDot () {
      this.dotShow = false
    }
  },
  mounted () {
    // this.toWs();
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// @import '../../../styles/theme-default/global/site.scss';

.navbar {
  z-index: 100;
  // height: $nav-height;
  width: 100%;
  display: flex;
  flex-direction: column;
  .navbar-header-wrap{
    z-index: 100;
    background-color: #f32941;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
  .navbar-header{
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: stretch;
    width: 1260px;
    height: 72px;
    margin: 0 auto;
    .logo{
      cursor: pointer;
      color: #fff;
      font-size: 30px;
      display: flex;
      align-items: center;
    }
  }
  .navber-menu{
    width: 100%;
    height: 56px;
    display: flex;
  }
}
</style>
