<template>
  <div class="main">
   <left-menu></left-menu>
   <div class="right">
    <top-menu class="top"></top-menu>
    <div class="table">
      <el-scrollbar style="width: 100%;height: 100%;">
        <router-view></router-view>
      </el-scrollbar>
    </div>
   </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu'
import TopMenu from '@/components/TopMenu'
export default {
  name: 'home',
  components: {
    LeftMenu,
    TopMenu
  }
}
</script>

<style scoped>
.main{
  display: flex;
}
.left,
.right{
	height: 100vh;
}
.left{
	flex-shrink: 0;
}
.right{
	width: 100%;
  position: relative;
}
.top{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.table{
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #F2F2F2;
}
</style>
