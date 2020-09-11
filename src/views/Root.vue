<template>
  <div>
    <van-tabbar  route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/about">列表</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="find">我的</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>