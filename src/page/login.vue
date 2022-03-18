<template>
  <div class="login-box">
    <div class="box headBox">
      <img src="@/assets/img/background.jpg" alt="" class="bg">
    </div>
    <div class="box footBox"></div>
    <div class="loginBox">
      <div class="loginTitle">
        <img src="@/assets/img/logo.png" alt="" class="logo">
        <div class="logoInfo">
          <span class="name">智能打印系统1 </span>
          <span class="describe">挽联</span>
          <span class="enTitle">INTELLIGENT PRINTING SYSTEM</span>
        </div>
      </div>
      <div class="formBox">
         <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
      >
        <el-form-item prop="account" class="inputItem">
          <el-input v-model="ruleForm.account" type="text" placeholder="请输入账号">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="inputItem">
          <el-input v-model="ruleForm.checkPass" type="password" placeholder="请输入密码">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button :loading="logining" type="danger" style="width:100%;" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
      </div>
      <div class="describeInfo">甲乙猫独家版权</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      logining: false,
      ruleForm: {
        account: '',
        checkPass: ''
      },
      rules: {
        account: [
          {
            required: true,
            message: '账号不能为空!',
            trigger: 'blur'
          }
        ],
        checkPass: [
          {
            required: true,
            message: '密码不能为空!',
            trigger: 'blur'
          }
        ]
      },
    }
  },
  created() {

  },
  methods: {
    login() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.logining = true
          // 模拟登录
          setTimeout(() => {
            const params = {
              userName: this.ruleForm.account,
              password: this.ruleForm.checkPass
            }
            sessionStorage.setItem('user', JSON.stringify(params)) // session存储用户信息
            this.logining = false
            this.$message({
              message: '登录成功',
              center: true,
              type: 'success'
            });
            this.$router.push({ path: '/main/sub1' }) // 去主页
          }, 1000)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  }
}
</script>

<style lang="scss">
// @import "../assets/css/them.scss";
.login-box {
  width: 100%;
  height: 100%;
  position: relative;
  .box {
    width:100%;
    height: 50%;
    float: left;
    .bg {
      width: 100%;
      height: 100%;
    }
  }
  .loginBox {
    position: absolute;
    width: 544px;
    height: 440px;
    position: absolute;
    left: 50%;
    top: 50%;
    padding-left: 20px;
    transform: translate(-50%, -50%);
    box-shadow: 0px 6px 15px 0px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.68);
    padding: 20px 40px 0 40px;
    box-sizing: border-box;
    .loginTitle {
      width: 100%;
      height: 100px;
      display: flex;
      .logo {
        height: 88px;
        width: 92px;
        margin-top: 12px;
        margin-right: 20px;
      }
      .logoInfo {
        flex: 1;
        position: relative;
        font-size: 40px;
        font-weight: 700;
        color: #303666;
        line-height: 74px;
        letter-spacing: 4px;
        position: relative;
        text-align: left;
        font-family: MF-LiHeiNoncommercial-Regular, MF-LiHeiNoncommercial;
        -webkit-text-stroke: 1px #ffffff;
        .describe {
          font-size: 30px;
          font-weight: 700;
          color: #303666;
          line-height: 99px;
        }
        .enTitle {
          position: absolute;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0;
          left: 4px;
          bottom: 0;
          line-height: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          -webkit-text-stroke: 0;
        }
      }
    }
    .formBox {
      margin-top: 48px;
      .inputItem {
        margin-bottom: 44px;
      }
    }
    .describeInfo {
      position: absolute;
      color: #000;
      font-weight: 700;
      letter-spacing: 2px;
      font-size: 12px;
      right:40px;
      bottom: 10px;
    }
  }
}
.el-input__inner {
  height: 50px;
}
.el-button {
  height: 50px;
}
</style>
