<template>
    <el-submenu :index="index" v-if="hasChildren">
      <template slot="title">
        <i :class="iconCls" v-if="hasIcon"></i>
        <span slot="title">{{title}}</span>
      </template>
      <gaf-menu-item v-for="(item, idx) in children" :key="idx" :index="index+'-'+idx" 
        :title="item.title" :children="item.children" :options="item.options">
      </gaf-menu-item>
    </el-submenu>
    <el-menu-item :index="index" @click="menuClick" v-else><i :class="iconCls"></i>
      <span slot="title">{{title}}</span>
    </el-menu-item>
</template>
<script type="text/x-template" id="hello-world-template">
  <p>Hello hello hello</p>
</script>
<script>
export default {
  name: 'gaf-menu-item',
  props: {
    'title': String, 
    'index': String,
    'options': Object,
    'children': Array,
  },
  methods: {
    menuClick(){
      console.log('click menu item....')
      if(this.options.url){
        window.open(this.options.url, this.options.target);
      }else if(this.options.path){
        this.$router.push(this.options.path);
      }
    },
  },
  computed: {
    hasChildren(){
      return this.children && this.children.length > 0
    },
    hasIcon(){
      return this.options.icon && this.options.icon.length > 0
    },
    iconCls(){
      if(this.options.icon && !(this.options.icon.indexOf('el-') == 0))
        return 'gaf-icons gaf-icon-' + this.options.icon  
      else
        return this.options.icon
    }
  }
}
</script>


