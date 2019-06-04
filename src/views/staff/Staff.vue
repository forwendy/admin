<template>
  <div class="staff" v-fixed>
    <staff-filter class="chunk"></staff-filter>

    <staff-table class="chunk"></staff-table>
  </div>
</template>

<script>
import StaffFilter from './StaffFilter'
import StaffTable from './StaffTable'
export default {
  components: {
    StaffFilter,
    StaffTable
  },
  directives: {
    fixed: {
      inserted: function (el,binding,vnode,oldVnode) {
        console.log(el,binding,vnode,oldVnode)
        const vm = vnode.context
        const wh = window.innerHeight
        el.style.height = wh - 70 + 'px'
        window.onresize = function () {
          const wh = window.innerHeight
          el.style.height = wh - 70 + 'px'
        }
      }
    }
  },
}
</script>

<style scoped>
.chunk{
  margin: 15px;
}
</style>
