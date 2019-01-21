<template>
  <div class="nav-list">
    <ul>
      <li>
        <router-link :to="`/timeline`">首页</router-link>
      </li>
      <li v-for="(item, index) of this.types" :key="index">
        <router-link :to="`/timeline/${item.type_id}`">{{ item.type_name }}</router-link>
      </li>
      <li v-if="isLogined" class="nav-user-find">
        <router-link to="/find" tag="span">添加影视</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'NavList',
  data () {
    return {
      isLogined: false
    }
  },
  computed: {
    ...mapGetters([
      'types'
    ])
  },
  mounted () {
    this.getTypes()
    console.log(this)
    if (this.$store.state.user.userInfo) {
      this.name = this.$store.state.user.userInfo.uname
      this.isLogined = true
    }
  },
  methods: {
    ...mapActions([
      'getTypes'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .nav-list{
    display: flex;
    flex: 1;
    background-color: #fff;
    box-shadow:0px 2px 10px rgba(0, 0, 0, 0.07);
    > ul{
      max-width: 1260px;
      font-size: 20px;
      color: #666666;
      display: flex;
      justify-content: space-around;
      align-items: stretch;
      flex: 1;
      margin: 0 auto;
      li{
        font-weight: 400;
        display: block;
        position: relative;
        align-self: center;
        height: 100%;
        display: flex;
        align-items: center;
        &::after {
          content: '';
          transition: all 0.4s ease-in-out;
          transform: scaleX(0);
          position: absolute;
          width: 100%;
          height: 4px;
          bottom: 0;
          left: 0;
          background: #fbe592;
        }
        &:hover, &:focus{
          font-weight: 600;
          &::after {
            transform: scaleX(1);
          }
        }
        &.nav-user-find{
           &::after {
            transform: scaleX(0);
          }

          &>span{
            display: block;
            text-align: center;
            border-radius: 4px;
            color: #fff;
            background-color: #f55467;
            font-size: 18px;
            width: 90px;
            line-height: 40px;
            cursor: pointer;
              &:hover, &:focus{
                background-color: #f32941;
              }
          }
        }
      }
    }
  }
</style>
