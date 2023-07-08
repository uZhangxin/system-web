<template>
  <!--登录模块-->
  <div class="login-box">
    <el-form class="login-form" :model="loginForm" ref="loginForm" :rules="loginRules">
      <h3 class="title">我的管理系统</h3>

      <!--用户名-->
      <el-form-item prop="userName">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.userName" placeholder="请输入账号"></el-input>
      </el-form-item>

      <!--密码-->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
        <el-input v-model="loginForm.password" placeholder="请输入密码"
                  show-password></el-input>
      </el-form-item>

      <!--验证码-->
      <el-form-item prop="code">
        <el-input prefix-icon="iconfont icon-yanzhengma" class="login-code-input" v-model="loginForm.code"
                  placeholder="请输入验证码"></el-input>
        <div class="login-code-div">
          <img :src="codeUrl" @click="getCode" class="login-code-img"/>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="loginBtn" :disabled="loading">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request.js'
import {getModal} from "@/utils/modal.js";
import {CONSTANT} from "@/utils/constant.js";
import {login} from "@/api/user";

export default {
  name: "ZLogin",
  data() {
    return {
      //登录信息
      loginForm: {
        // 用户名
        userName: 'zhang',
        // 密码
        password: '1234',
        // 验证码
        code: '',
        // 随机数，用于获取redis中code
        uuid: '',
      },
      // 验证码图片流地址
      codeUrl: "",

      loginRules: {
        userName: [
          {required: true, trigger: "blur", message: "请输入您的账号"}
        ],
        password: [
          {required: true, trigger: "blur", message: "请输入您的密码"}
        ],
        code: [
          {required: true, trigger: "change", message: "请输入验证码"}
        ]
      },

      loading: false,
    }
  },

  created() {
    this.getCode();
  },

  methods: {
    // 点击登录按钮
    loginBtn() {
      this.$refs.loginForm.validate(valid => {
        // 验证不符合格式
        if (!valid) {
          return;
        }
        this.loading = true;
        login(this.loginForm).then(res => {
          getModal(res.data.code, CONSTANT.MODAL_TYPE.MESSAGE, res.data.msg);
          //登录失败，刷新验证码
          if (res.data.code === CONSTANT.HTTP_CODE.SUCCESS) {
            this.$store.dispatch('userInfo/login', {
              [CONSTANT.TOKEN]: res.data.token,
              [CONSTANT.USER_INFO]: res.data.userInfo
            })
            this.$router.push({path: '/index'})
          } else {
            this.loading = false;
            this.getCode();
          }
        })
      })
    },

    //获取验证码
    getCode() {
      request({url: '/captchaImage', params: {'codeType': 0}, method: 'GET'}).then(res => {
        this.codeUrl = "data:image/gif;base64," + res.data.img;
        this.loginForm.uuid = res.data.uuid;
      })
    }
  }
}
</script>

<style lang="scss">
.el-input {
  display: inline-block;
  height: 47px;
  width: 100%;
}

.el-form-item {
  width: 85%;
  margin: 0px auto 20px auto;
}

.el-input__inner{
  padding: 0px 15px 0px 36px;
}
</style>

<style lang="scss" scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url("../assets/images/login-bg.jpg");
  background-size: cover;

  h3 {
    margin-bottom: 24px;
    font-weight: normal;
  }

  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 360px;
    padding: 25px 25px 5px 25px;

    .svg-container{
      padding: 0px 5px 0px 8px;
      vertical-align: middle;
      width: 35px;
      height: 38px;
      position: absolute;
      left: 1px;
      top: 2px;
      z-index: 99;
      font-size: 18px;
      cursor: pointer;
      border-radius: 5px;
      background-color: #F5F5F5;
    }

    .login-code-input {
      float: left;
      width: 63%;
    }

    .login-code-div {
      float: right;
      width: 33%;
      padding-top: 5px;

      .login-code-img {
        height: 100%;
        width: 100%;
        cursor: pointer;
      }
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>
