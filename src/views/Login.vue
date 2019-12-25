<template>
  <div id="login">
    <section>
      <van-nav-bar
        title="密码登录"
        left-text="返回"
        left-arrow
        bind:click-left="onClickLeft"
        bind:click-right="onClickRight"
      />
    </section>

    <section class="login-form">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <van-field
          v-model="password"
          :type="inputType"
          label="密码"
          placeholder="请输入密码"
          required
        >
          <van-switch
            slot="button"
            v-model="checked"
            size="15px"
            @click="checked = !checked"
            active-color="#07c160"
          />
        </van-field>
        <van-field
          v-model="imgCode"
          required
          center
          clearable
          label="验证码"
          placeholder="请输入验证码"
        >
          <van-button
            slot="button"
            size="small"
            class="imgsty"
            :style="imgCodeStyle"
            @click="toogleImgCode()"
          />
        </van-field>
      </van-cell-group>
    </section>

    <section class="login-button">
      <van-button type="primary" size="large" @click="Login()">登录</van-button>
    </section>
  </div>
</template>

<script>
import { v1Api, v2Api } from "../assets/js/api";
export default {
  data() {
    return {
      checked: false,
      username: "",
      password: "",
      imgCode: "",
      inputType: "password",
      imgCodeStyle: {
        backgroundImage: "",
        backgroundSize: "contain",
        backgroundRepeat: "no-Repeat",
        backgroundPositionY: "center"
      }
    };
  },
  mounted() {
    this.getCaptchas();
  },
  watch: {
    checked(val) {
      if (val) {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    }
  },
  methods: {
    Login() {
      let data = {
        username: this.username,
        password: this.password,
        captcha_code: this.imgCode
      };
      v2Api.accountLogin(data).then(res => {
        console.log(res);
      });
    },
    toogleImgCode() {
      this.getCaptchas();
    },
    getCaptchas() {
      v1Api.getcaptchas().then(res => {
        this.imgCodeStyle.backgroundImage = `url(${res.code})`;
      });
    }
  }
};
</script>

<style lang="less" scoped>
#login {
  .login-form {
    padding: 10px 0;
  }

  .imgsty {
    background-image: url(http://static.runoob.com/images/demo/demo1.jpg);
  }

  .login-button {
    padding: 10px 16px;
  }
}
</style>
