<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true">
          <el-menu-item index="home">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">个人中心</template>
            <el-menu-item index="2-1">账号设置</el-menu-item>
            <el-menu-item index="2-2">意见反馈</el-menu-item>
            <el-menu-item index="2-3">退出</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="shop">购物车<el-badge :value="100" :max="10" class="item"></el-badge></el-menu-item>
          <el-menu-item index="coures">更多</el-menu-item>
         
        </el-menu>

      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
          版权所有 2006 - 2019 传智专修学院
      </el-footer>
    </el-container>
  </div>
</template>

<style>


 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
 
</style>


