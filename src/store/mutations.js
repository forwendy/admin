export default {
	changeLeft(state){
		state.leftCollapse = !state.leftCollapse
	},
	changeMenu(state, path){
		state.activeMenu = path
	}

}
