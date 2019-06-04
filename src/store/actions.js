// export const openFirstMenus = ({commit, state}) => {
//   const fold = state.menus.arr[0].id
//   const active = state.menus.arr[1].id
//   commit('menus/unfoldMenu', fold)
//   commit('menus/addTab', active)
//   commit('menus/showTab', active)
// }
//
// export const addFirstMenus = ({commit, state}) => {
//   const active = state.menus.arr[1].id
//   const obj = state.menus.tabIds.find(obj => obj === active)
//   if(!obj){
//     state.menus.tabIds.unshift(active)
//   }
// }
