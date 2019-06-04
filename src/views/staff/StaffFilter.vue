<template>
  <div class="staff-filter">
    <el-form :inline="true" :model="form" ref="staffFilter" label-width="80px" size="small">
      <el-row>
        <el-col :span="20">
          <el-form-item label="员工姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入员工姓名" clearable></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="tel">
            <el-input v-model="form.tel" placeholder="请输入手机号" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="submit">查询</el-button>
            <el-button @click="reset('staffFilter')">重置</el-button>

            <el-button type="success">新增</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        tel: ''
      }
    }
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    submit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.staff-filter{
  padding-top: 10px;
  padding-left: 10px;
}
.el-form-item--small.el-form-item{
  margin-bottom: 10px;
}
</style>
