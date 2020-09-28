<template>
  <div class="my-container">
    <van-cell-group class="my-info">
      <van-cell
        :border="false"
        class="base-info"
        title="单元格"
        value="内容"
        center
      >
        <van-image
          @click="pre"
          class="avatar"
          :showIndex="false"
          round
          src="https://pic.downk.cc/item/5f65ac41160a154a678b5731.jpg"
          slot="icon"
        />
        <div class="name" slot="title">我变秃了就变强了</div>
        <van-button to="/edit" class="update-btn" size="small" round="true"
          >编辑资料</van-button
        >
      </van-cell>
      <van-grid class="data-info" :border="false">
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">0</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">99</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">999</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">1.2亿</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <van-grid :column-num="2" class="nav-grid">
      <van-grid-item
        to="/collect"
        icon="star-o"
        text="收藏"
        class="nav-grid-item mt-1"
      />
      <van-grid-item
        icon-prefix="lsongtao"
        icon="lishi"
        text="历史"
        class="nav-grid-item"
        to="/history"
      />
    </van-grid>
    <van-cell title="消息通知" is-link to="/info" />
    <van-cell class="mt-2" title="AI客服" is-link to="/ai" />
    <van-cell class="go-out mt-1" title="退出登录" to="/login" />
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  name: "MyIndex",
  methods: {
    pre() {
      ImagePreview({images:["https://pic.downk.cc/item/5f65ac41160a154a678b5731.jpg"],showIndex:false});
    },
  },
};
</script>

<style scoped lang="less">
.my-container {
  .my-info {
    background-image: url(./1f7a7cb31c58fc8a52512d0eb83b6417.jpg);
    background-size: cover;
    .base-info {
      background-color: unset;
      box-sizing: border-box;
      height: 115px;
      padding: 38px 20px 0 20px;
      .avatar {
        height: 66px;
        width: 66px;
        border: 1px solid white;
        margin-right: 11px;
      }
      .name {
        color: white;
        font-size: 15px;
        font-weight: 700;
        opacity: 0.8;
      }
      .update-btn {
        height: 16px;
        font-size: 10px;
        color: #666666;
        opacity: 0.5;
      }
    }

    .data-info {
      .data-info-item {
        height: 65px;
        color: white;
        .text-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .count {
            font-size: 18px;
          }
          .text {
            font-size: 11px;
          }
        }
      }
    }
    /deep/ .van-grid-item__content {
      background-color: unset;
    }
  }
  .nav-grid {
    .nav-grid-item {
      height: 70px;
      /deep/ .van-icon {
        font-size: 22px;
        color: red;
      }
      /deep/ .lsongtao {
        font-size: 22px;
        color: orange;
      }
    }
  }
  .go-out {
    text-align: center;
    color: #d86262;
  }
  .mt-1 {
    margin-top: 4.5px;
  }
  .mt-2 {
    margin-top: 1.5px;
  }
}
</style>