<template>
  <div class="top-menu">
    <div class="left">
   	  <i v-if="!leftCollapse" class="icon el-icon-s-fold" @click="fold"></i>
   	  <i v-else-if="leftCollapse" class="icon el-icon-s-unfold" @click="fold"></i>
   	  <p>欢迎进入，运营平台。</p>
    </div>
    <div class="right">
    	<p class="user-name">{{user.name}}</p>
	    <el-tooltip effect="dark" content="用户头像" placement="bottom">
      	<el-image class="user-avatar" :src="user.avatar">
	      	<div slot="error" class="image-slot">
	      	  <i class="el-icon-picture-outline-round"></i>
	      	</div>
	    	</el-image>
    	</el-tooltip>
    	<el-dropdown @command="set">
    		<i class="icon el-icon-setting"></i>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item command="1">修改密码</el-dropdown-item>
			    <el-dropdown-item command="2">退出登录</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
    </div>

		<!-- 修改密码 -->
    <el-dialog title="修改密码" width="500px" :visible.sync="dialogVisible" :before-close="beforeCloseDialog" append-to-body>
      <set-password v-if="dialogVisible" @close="dialogVisible=false"></set-password>
    </el-dialog>
  </div>
</template>

<script>
  import SetPassword from '../views/common/SetPassword'
	import { mapState } from 'vuex'
  export default {
	  components: {
	    SetPassword
	  },
    data() {
      return {
        dialogVisible: false, // 模态窗
        user:{
					// avatar: 'https://hbimg.huabanimg.com/7360969fe90aecc01b9dc1aa2c52bbc5c3ab29822fe09-wnvbWH_fw658',
					name: 'Wendy'
        }
      };
    },
	  computed: mapState({
	    leftCollapse: state => state.leftCollapse,
	  }),
    methods: {
	    // 关闭模态窗
	    beforeCloseDialog(done){
	      done()
	    },
	    exit(){

        // 清除全局缓存数据
        localStorage.removeItem('messageStore')
        const init = this.$store.getters.reset
        this.$store.replaceState(init)
	      this.$router.replace({path: '/login'})
	    },
    	fold(){
      	this.$store.commit('changeLeft')
    	},
	    set(command){
	      console.log(command)
	      if(command == 1){
	        this.dialogVisible = true
	      }

	      if(command == 2){
	        this.exit()
	      }
	    }
    }
  }
</script>

<style scoped>
.top-menu{
	justify-content: space-between;
	height: 40px;
	border-bottom: 1px solid #ddd;
	color: #333;
}
.top-menu,
.left,
.right {
	display: flex;
	align-items: center;
}
.top-menu p{
	font-size: 14px;
	line-height: 1;
	margin: 0;
	padding: 0 15px;
}
.icon {
	font-size: 20px;
	color: #666;
	padding: 10px 15px;
	cursor: pointer;
}
.icon:hover{
	background: #f9f9f9;
}
.user-avatar{
	width: 22px;
	height: 22px;
	border-radius: 50%;
	margin-right: 10px;
}
.top-menu .user-name{
	padding-right: 10px;
}
.el-icon-picture-outline-round{
	font-size: 22px;
}
</style>
