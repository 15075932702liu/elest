<template>
  <div>
        <img :src="obj.img" alt="">
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data() {
        return {
            obj:{}
        }
    },
  computed: {
      ...mapState(["list"])
  },
  created() {
      let data = this.list.find(item=>{
          return item.id == this.$route.params.id
      })
      this.obj = data
  },
}
</script>

<style>

</style>