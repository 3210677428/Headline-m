<template>
  <div class="login-container">
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="$router.back()"
      class="app-nav-bar"
    />
    <!-- $router.back()从哪来，回哪去，上一次地址 -->

    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.phone"
        icon-prefix="lsongtao"
        left-icon="shouji"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="lsongtao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
      >
        <!-- 自定义插槽 -->
        <template #button>
          <!-- mini,small,large round圆角 -->
          <van-button class="send-bg" size="small" round>发送验证码</van-button>
        </template>
        <!-- 另外给闭合标签 -->
      </van-field>
    </van-cell-group>
    <!-- 尽量不给组件标签，不影响 -->
    <div class="login-btn-wrap">
      <van-button to="/my" type="info" block class="login-btn" @click="onLogin"
        >登录</van-button
      >
    </div>
    <van-tabbar :border="false">
      <van-tabbar-item style="background-color: unset" @click="showPopup">隐私条款</van-tabbar-item>
    </van-tabbar>
    <van-popup
     v-model="show" 
     position="center" 
     closeable 
     close-icon="cross"
     :close-on-click-overlay="false"
     >
     我是<span>隐私</span><br>你不能看</van-popup>
  </div>
</template>

<script>
import { login } from "@/api/user";

export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        phone: "",
        code: "",
      },
     show:false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    async onLogin() {
      const res = await login(this.user);
      console.log(res);
    },
  },
};
</script>
<style scoped lang="less">
.login-btn-wrap {
  padding: 26.5px 16.5px;
  .login-btn {
    background: #6db4fb;
    border: none;
  }
  .van-button__text {
    font-size: 15px;
  }
}
.send-bg {
  widows: 76px;
  height: 23px;
  background: #ededed;
  .van-button__text {
    font-size: 11px;
    color: #666666;
  }
}
.van-tabbar {
  background: transparent;
  margin-bottom: 50px;
}
/deep/ .van-popup__close-icon{
  color: black;
  top: 4px;
  right:4px;
}
.van-popup--center{
  padding:30px;
  span{
    color: red;
  }
}
</style>