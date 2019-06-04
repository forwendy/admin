<template>
  <div class="staff-table">
    <el-table v-fixed border style="width: 100%"
      :height="height"
      @selection-change="handleSelectionChange"
      :data="tableData">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"   width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <el-button size="medium" type="primary" plain>编辑</el-button>
        <el-button size="medium" type="danger" plain>删除</el-button>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="5">
        <el-select v-model="actionValue"
        @change="changeAction"
        placeholder="请选择批量操作"
        size="mini" style="margin-top: 10px; width: 150px;">
          <el-option
            v-for="item in action"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        &nbsp;
        <el-button type="primary" size="mini" style="margin-top: 10px; display: inline-block;">确定</el-button>
      </el-col>
      <el-col :span="19">
        <page-number :query="query" @change="changePage"></page-number>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PageNumber from '@/components/PageNumber'
export default {
  components: {
    PageNumber
  },
  data() {
    return {
      height: null,
      query: {
        pageSize: 10,
        totalPage: 10,
        totalNum: 30,
        currentPage: 1,
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: [],
      action: [
        {
          value: '0',
          label: '批量删除'
        }
      ],
      actionValue: ''
    }
  },
  directives: {
    fixed: {
      inserted: function (el,binding,vnode,oldVnode) {
        console.log(el,binding,vnode,oldVnode)
        const vm = vnode.context
        const wh = window.innerHeight
        const top = el.getBoundingClientRect().top
        const h = wh - top - 48 - 15
        el.style.height = h + 'px'
        vm.height = h
        console.log(wh, top)
        // todo top偶尔异常
        window.onresize = function () {
          const wh = window.innerHeight
          const top = el.getBoundingClientRect().top
          const h = wh - top - 48 - 15
          el.style.height = h + 'px'
          vm.height = h
          // console.log(wh, top)
        }
      }
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    changePage(val){
      console.log('changePage:',val)
      this.currentPage = val
    },
    changeAction(){
      console.log(this.actionValue)
    }
  }
}
</script>

<style scoped>
.staff-table{
  padding: 10px 10px 0;
}
</style>
