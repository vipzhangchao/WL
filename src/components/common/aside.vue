<template>
  <div class="asideBox">
    <!-- 系统 Logo -->
    <div class="header-logo">
      <div class="logo" @click="$router.push({ name: 'Home' })">
        <img src="@/assets/img/logo.jpeg" alt="">
      </div>
    </div>
    <div class="menuBox">
       <el-menu
        :default-active="this.$route.path" 
        router
        unique-opened
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">


      <el-menu-item index="/main/sub21">
        <i class="el-icon-s-custom"></i>
        <span slot="title">白事管理</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>挽联管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/sub1">葬礼挽联管理列表</el-menu-item>
          <el-menu-item index="/main/sub2">重大葬礼挽联管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-menu-item index="/main/relation">
        <i class="el-icon-s-custom"></i>
        <span slot="title">关系管理</span>
      </el-menu-item>

      <el-menu-item index="/main/user">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>

    </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
foldAside: true,
      // 保存当前选中的菜单
      menuActiveName: 'home',
      // 保存当前侧边栏的宽度

    }
  },
  mounted() {
   
  
  },

  methods: {
 handleOpen(key, keyPath) {
                // console.log(key, keyPath);
                // console.log(this.$router)
                // this.$router.push(key)
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },

  }
}
</script>

<style lang="scss">
.asideBox {
  width: 200px;
  height: 100%;
  background: #001529;
  display: flex;
  flex-direction: column;
  .header-logo {
    width: 100%;
  }
  .logo {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #524c4c;
    img {
      width:50px;
      height:50px;
      border-radius: 50%;
    }
  }
  .menuBox {
    width: 100%;
    flex: 1;
  }
}
</style>
