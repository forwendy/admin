<template>
  <div class="main">
    <div class="login">
        <h1>运营平台</h1>
        <el-form ref="form" :model="form" label-width="70px">
            <el-form-item class="form-group">
                <span slot="label" class="form-label el-icon-user"></span>
                <el-input clearable class="form-input" v-model="form.name" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item class="form-group">
                <span slot="label" class="form-label el-icon-lock"></span>
                <el-input show-password clearable type="password" class="form-input" v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item class="form-group">
                <span slot="label" class="form-label el-icon-key"></span>
                <el-input class="form-input" v-model="form.code" placeholder="验证码">
                    <div slot="suffix" class="code-pic">
                        <img class="img-cover">
                    </div>
                </el-input>
            </el-form-item>
        </el-form>
        <el-button class="btn" type="primary" @click="login">登录</el-button>
    </div>
    <p class="copyright"></p>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return {
        form: {

        }
      }
    },
    methods:{
      login(){
	      this.$router.replace({path: '/'})
        this.$notify.success({title: '成功',message: '登录成功'})
      }
    }
  }
</script>

<style lang="scss" scoped>
.login{
  width: 400px;
  height: 400px;
  left: 0;
  right: 0;
  bottom: 0;
  top: -150px;
  margin: auto;
  position: absolute;
  padding: 30px;
  box-sizing: border-box;

  background: rgba(255,255,255,1);
  box-shadow: 0px 0px 4px 0px rgba(51,51,51,0.15);
  border-radius: 4px;

  h1{
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 40px;
  }
  .form-group {
    width: 300px;
  }
  .form-label{
    font-size: 20px;
    line-height: 40px;
    margin-right: 10px;
  }
  .btn{
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 300px;
  }
}
</style>
