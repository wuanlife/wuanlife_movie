<template>
    <!-- Search bar -->
    <div class="search-container">
        <el-input
            class="search"
            placeholder="搜索电影、剧集、综艺"
            v-model="searchContent"
            @keyup.enter.native="handleGoSearch">
            <icon-svg @click.native="handleGoSearch" slot="suffix" id="icon-search" icon-class="search" class="el-input__icon el-icon-search"></icon-svg>
        </el-input>
    </div>
</template>

<script>
export default {
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    handleGoSearch () {
      if (this.searchContent !== '') {
        this.$router.push({
          path: '/search',
          query: { search: this.searchContent }
        })
      } else {
        alert('请输入要搜索的内容')
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.search-container {
  flex: 0 0 600px;
  min-width: 300px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex: 0.8;
  }
  .search /deep/ input {
    height: 40px;
    padding: 13px 20px 12px 19px;
    font-size: 14px;
    color: #fcced2;
    background-color: rgba(255, 255, 255, 0.2);
    border: 0;
    &::placeholder {
      color: #fcced2;
    }
  }
  #icon-search {
    cursor: pointer;
    margin-right: 20px;
    font-size: 18px;
    color: #fcced2;
    margin-top: 10px;
  }
}
</style>
