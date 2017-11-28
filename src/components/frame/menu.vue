<template>
  <el-menu default-active="2" class="nav-menu" v-bind="themeStyles"
     :collapse="isCollapse" :router="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </template>
      <el-menu-item index="/page1"><i class="el-icon-menu"></i>页面1</el-menu-item>
      <el-menu-item index="/page2"><i class="el-icon-menu"></i>页面2</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">错误页</span>
      </template>
      <el-menu-item index="/403"><i class="el-icon-menu"></i>403</el-menu-item>
      <el-menu-item index="/404"><i class="el-icon-menu"></i>404</el-menu-item>
      <el-menu-item index="/500"><i class="el-icon-menu"></i>500</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  props: {
    'theme': String, 
    'isCollapse': Boolean,
  },
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
  computed: {
    // 计算属性的 getter
    themeStyles: function () {
      // `this` 指向 vm 实例
      if (this.theme == 'dark') {
        //dark styles
        return {
          backgroundColor: "#545c64",
          textColor: "#fff",
          activeTextColor: "#ffd04b",
        };
      }else{
        // default styles
        return {
          backgroundColor: undefined,
          textColor: undefined,
          activeTextColor: undefined,
        };
      }
    },
  }
}
</script>
<style lang="less" scoped>
</style>


