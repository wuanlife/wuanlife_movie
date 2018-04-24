<template>
  <div class="nav-user">
    <div class="nav-user-logined">
      <router-link v-if="isLogined" to="/find" tag="span" class="nav-user-find">发现影视</router-link>
      <div>
        <span v-if="!isLogined" @click="gotoAuth">登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册</span>
        <span v-if="isLogined" @click="show()">
          {{ name }}<icon-svg icon-class="triangle1" class="nav-user-triangle"></icon-svg>
        </span>
        <span @click="logout" v-if="isShow" class="logout">退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import { logout } from 'api/user'
export default {
  name: 'NavUser',
  data () {
    return {
      isLogined: false,
      isShow: false,
      name: ''
    }
  },
  methods: {
    show () {
      this.isShow = !this.isShow
    },
    gotoAuth () {
      window.location = `${process.env.SSO_SITE}/authorize?client_id=wuan&redirect_uri=${window.location.origin + '/callback'}&response_type=code&state=maye&nonce=random `
    },
    logout () {
      console.log('commit')
      logout().then(res => {
        this.$store.commit('CLEAR_USER')
        this.$nextTick(() => {
          this.isLogined = false
          this.isShow = false
          this.name = ''
        })
        console.log(this.$store)
      })
    }
  },
  mounted () {
    console.log(this.$store)
    if (this.$store.state.user.userInfo) {
      this.name = this.$store.state.user.userInfo.uname
      this.isLogined = true
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
