<template>
  <div class="set-password">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="旧密码">
        <el-input class="form-input" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input class="form-input" v-model="form.name""></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input class="form-input" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item class="but-group">
        <el-button class="submit" type="primary" @click="save">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {

      }
    }
  },

  methods:{
    save(){
      const data = this.form
      this.close()
    },
    close(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.submit{
  width: 150px;
}
.form-input{
  width: 210px;
}
</style>
