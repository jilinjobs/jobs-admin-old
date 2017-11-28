<template>
  <el-container class="layout">
  <el-aside :width="asideWidth" class="sider">
    <el-container>
      <el-header class="logo" height="64px" >
        <router-link to="/">
          <img src="~/assets/logo.png" alt="logo" style="height:32px;width:32px;" />
        </router-link>
        <h1>GAF Framework</h1>
      </el-header>    
      <el-main><my-menu theme="light" :is-collapse="menuCollapse"></my-menu></el-main>
    </el-container>
  </el-aside>
  <el-container class="content">
    <el-header class="header" height="64px">
      <i class="iconfont" :class="{'icon-unfold': menuCollapse, 'icon-fold': !menuCollapse,}" @click="toggleMenu"></i>
      <el-dropdown class="right">
        <span class="el-dropdown-link">
          <i class="iconfont icon-avatar"></i>
          <span class="name">管理員</span>
        </span>
        <el-dropdown-menu class="action-menu" slot="dropdown">
          <el-dropdown-item><i class="iconfont icon-user"></i><span>个人中心</span></el-dropdown-item>
          <el-dropdown-item><i class="iconfont icon-setting"></i>设置</el-dropdown-item>
          <el-dropdown-item divided><i class="iconfont icon-quit"></i>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>            
    </el-header>
    <el-main>
      <el-container>
        <el-header height="24px">
          <my-bread></my-bread>
        </el-header>
        <el-main>
          <transition>
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-main>
    <el-footer class="footer" height="48px"><my-footer></my-footer></el-footer>
  </el-container>
</el-container>
</template>
<script>
import MyHeader from "./header.vue";
import MyFooter from "./footer.vue";
import MyMain from "./main.vue";
import MyMenu from "./menu.vue";
import MyBread from "./bread.vue";
export default {
  components: {
    MyHeader,
    MyFooter,
    MyMain,
    MyMenu,
    MyBread,
  },
  data() {
    return {
      menuCollapse: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuCollapse = !this.menuCollapse;
    }
  },
  computed: {
    asideWidth() {
      return this.menuCollapse ? "64px" : "256px";
    }
  }
};
</script>

<style scoped lang="less">
.layout {
  height: 100%;
  .logo{
    border-bottom: solid 1px #e6e6e6;
  }
  .header {
    border-bottom: solid 1px #e6e6e6;
    line-height: 64px;
    background: #20a0ff;
    color: #fff;
    .icon-avatar{
      margin-right: 4px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 20px;
      border-radius: 14px;
      background: grey;
      padding: 4px;      
    }
    .name {
      color: #fff;
    }
  }
  .footer {
    border-top: solid 1px #e6e6e6;
  }
  .sider {
    background: #20a0ff; /*#545c64;*/
    height: 100%;
    overflow: initial;
    .el-container {
      height: 100%;
    }
    .el-main {
      padding: 0;
      overflow: inherit;
      .el-menu {
        height: 100%;
      }
    }
    .el-header {
      border-right: solid 1px #e6e6e6;
      padding: 0 16px;
      height: 64px;
      line-height: 64px;
      overflow: hidden;
      vertical-align: middle;
      img {
        vertical-align: middle;
      }
      h1 {
        color: #fff;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 12px;
        line-height: 64px;
      }
    }
  }
  .right {
    float: right;
  }
}
.action-menu{
  .iconfont{
    margin-right: 4px;
  }
}
</style>
