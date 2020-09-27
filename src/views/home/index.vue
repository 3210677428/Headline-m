<template>
  <div class="home-container">
    <van-nav-bar class="app-nav-bar">
      <van-button
        type="info"
        size="small"
        class="serch-btn"
        slot="title"
        icon="search"
        round
        >搜索</van-button
      >
    </van-nav-bar>

    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
      <van-tab title="标签 7">内容 7</van-tab>
      <van-tab title="标签 8">内容 8</van-tab>
      <van-tab title="标签 9">内容 9</van-tab>
      <van-tab title="标签 10">内容 10</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "HomeIndex",
  data:function(){
    return {
      active:2
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  /deep/ .van-nav-bar__title {
    max-width: none;
  }
  .serch-btn {
    width: 277px;
    height: 32px;
    border: none;
    background: #5babfb;
    .van-button__text {
      font-size: 14px;
    }
    .van-icon {
      font-size: 16px;
    }
  }
}
</style>