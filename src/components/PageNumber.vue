<template>
  <el-pagination class="pagination" :class="{fixed:fixed}"
    background
    :page-count="8"
    :hide-on-single-page="true"
    @current-change="change"
    :current-page="query.currentPage"
    :page-size="query.pageSize"
    :total="query.totalNum"
    layout="slot, prev, pager, next, jumper">
    <span class="total">共{{query.totalPage}}页/{{query.totalNum}}条数据</span>
  </el-pagination>
</template>

<script>
export default {
  props: {
    fixed: Boolean,
    query: Object
  },
  methods:{
    change(val){
      this.$emit('change', val)
    }
  }
}
</script>

<style>
.pagination{
  padding: 10px;
  text-align: right;
}
.el-pagination span:not([class*=suffix]), .el-pagination button,
.el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next, .el-pagination.is-background .el-pager li
{
  font-size: 14px;
  color: #333;
  font-weight: 500;
}
</style>
