<template>
	<div class="left">
		<el-menu
			:default-active="active"
			router
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			@select="select"
			:collapse="leftCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
		  <el-menu-item index="home">
				<i class="el-icon-s-home"></i>
				<span slot="title">首页</span>
		  </el-menu-item>
		  <el-menu-item index="staff">
				<i class="el-icon-user-solid"></i>
				<span slot="title">员工管理</span>
		  </el-menu-item>
		  <!-- <el-submenu index="2">
		    <template slot="title">
		      <i class="el-icon-user-solid"></i>
		      <span slot="title">员工管理</span>
		    </template>
		    <el-menu-item-group>
		      <el-menu-item index="staff">员工列表</el-menu-item>
		    </el-menu-item-group>
		  </el-submenu> -->
		</el-menu>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
  export default {
    data() {
      return {
      }
    },
		watch: {
			'$route' (to, from) {
				console.log(to,from)
			}
		},
	  computed: mapState({
	    leftCollapse: state => state.leftCollapse,
		  active: state => state.activeMenu,
	  }),
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
			select(path, keyPath) {
        console.log(path, keyPath);
	      this.$store.commit('changeMenu', path)
      },
    }
  }
</script>

<style>
.el-menu-vertical-demo{
	height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
