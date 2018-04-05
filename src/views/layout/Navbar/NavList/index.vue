<template>
  <div class="nav-list">
    <ul>
      <li v-for="(item, index) of this.types" :key="index">
        <router-link :to="`/timeline/${item.type_id}`">{{ item.type_name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NavList',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'types'
    ])
  },
  mounted () {
    this.getTypes()
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
        position: relative;
        align-self: center;
        height: 100%;
        display: flex;
        align-items: center;
        &::after {
          content: '';
          transition: all 0.5s ease-in-out;
          transform: scaleX(0);
          position: absolute;
          width: 100%;
          height: 4px;
          bottom: 0;
          left: 0;
          background: #fbe592;
        }
        &:hover, &:focus{
          color: #fbe592;
          &::after {
            transform: scaleX(1);
          }
        }
      }
    }
  }
</style>
