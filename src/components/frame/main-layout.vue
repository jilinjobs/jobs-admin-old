<template>
  <el-container class="layout">
  <el-aside :width="asideWidth" class="sider">
    <el-container>
      <el-header class="logo" :height="layout.headerHeight" >
        <router-link to="/">
          <img src="~/assets/logo1.svg" alt="logo" style="height:32px;width:32px;" />
        </router-link>
        <h1>{{name}}</h1>
      </el-header>    
      <el-main><my-menu theme="light" :is-collapse="menuCollapse"></my-menu></el-main>
    </el-container>
  </el-aside>
  <el-container>
    <el-header class="header" :height="layout.headerHeight">
      <i class="gaf-icons" :class="{'gaf-icon-unfold': menuCollapse, 'gaf-icon-fold': !menuCollapse,}" @click="toggleMenu"></i>
      <el-dropdown class="right">
        <span class="el-dropdown-link">
          <i class="gaf-icons gaf-icon-avatar"></i>
          <span class="name">管理員</span>
        </span>
        <el-dropdown-menu class="action-menu" slot="dropdown">
          <el-dropdown-item><i class="gaf-icons gaf-icon-user"></i><span>个人中心</span></el-dropdown-item>
          <el-dropdown-item><i class="gaf-icons gaf-icon-setting"></i>设置</el-dropdown-item>
          <el-dropdown-item divided><i class="gaf-icons gaf-icon-quit"></i>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>            
    </el-header>
    <el-main>
      <el-container class="content">
        <el-header :height="layout.breadHeight">
          <my-bread></my-bread>
        </el-header>
        <el-main>
          <transition>
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-main>
    <el-footer class="footer" height="layout.footerHeight"><my-footer></my-footer></el-footer>
  </el-container>
</el-container>
</template>
<script>
import MyHeader from "./header.vue";
import MyFooter from "./footer.vue";
import MyMenu from "./menu-pane.vue";
import MyBread from "./bread.vue";
import config from '~/utils/config'
const {layout} = config
export default {
  components: {
    MyHeader,
    MyFooter,
    MyMenu,
    MyBread,
  },
  data() {
    return {
      menuCollapse: false,
      name: config.shortName,
      layout
    };
  },
  methods: {
    toggleMenu() {
      this.menuCollapse = !this.menuCollapse;
    }
  },
  computed: {
    asideWidth() {
      return this.menuCollapse ? layout.asideCollapseWidth : layout.asideExpandWidth;
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
    .gaf-icon-avatar{
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
  .content {
    height: 100%;
  }
}
.action-menu{
  .gaf-icons{
    margin-right: 4px;
  }
}
</style>
