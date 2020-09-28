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
      <van-tab title="推荐">待开发......</van-tab>
      <van-tab title="标签 2">暂无更多内容</van-tab>
      <van-tab title="标签 3">暂无更多内容</van-tab>
      <van-tab title="标签 4">暂无更多内容</van-tab>
      <van-tab title="标签 5">暂无更多内容</van-tab>
      <van-tab title="标签 6">暂无更多内容</van-tab>
      <van-tab title="标签 7">暂无更多内容</van-tab>
      <van-tab title="标签 8">暂无更多内容</van-tab>
      <van-tab title="标签 9">暂无更多内容</van-tab>
      <van-tab title="标签 10">暂无更多内容</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getUserChannels } from "@/api/user";

export default {
  name: "HomeIndex",
  data: function () {
    return {
      active: 0,
    };
  },
  created() {
    this.loadChannels();
  },
  methods: {
    async loadChannels() {
      const { data } = await getUserChannels();
      console.log(data);
    },
  },
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