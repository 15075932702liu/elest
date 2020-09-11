<template>
  <div class="home">
    <van-search v-model="searchire" placeholder="请输入搜索关键词" />
    <div v-show="loading">加载中....</div>
    <ul v-show="!loading">
      <div v-for="(item) in list" :key="item.id">
        <van-card
          :title="item.name"
          :thumb="item.img"
          @click="app(item.id)"
        />
      </div>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      searchire:""
    }
  },
  computed: {
    ...mapState(["loading", "list"]),
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapActions(["getList"]),
    app(id){
      this.$router.push(`/del/${id}`)
    },
    setlist(){
      this.list.filter(item=>{
        console.log(item);
      })
    }
  },
};
</script>
