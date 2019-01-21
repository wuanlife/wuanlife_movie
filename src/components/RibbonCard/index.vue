<template>
  <el-card class="ribbon-card">
    <div class="ribbon-card-header" slot="header">
      <span>{{title}}</span>
      <slot name="header"></slot>
    </div>
    <div class="ribbon-card-body">
      <slot>
      </slot>
    </div>
  </el-card>
</template>

<script >
export default {
  props: {
    title: String
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.ribbon-card {
  background-color: #ffffff;
  border-radius: 4px;
  line-height: 1.5;
  /deep/ .el-card__header {
    padding: 0;
    border-bottom: none;
  }
  &-header {
    position: relative;
    margin-top: 36px;
    padding: 0 29px;
    font-size: 18px;
    font-weight: 600;
    &::before {
      content: '';
      height: 100%;
      width: 4px;
      position: absolute;
      left: 0;
      top: 0;
      background: #f32941;
    }
  }
}
</style>
