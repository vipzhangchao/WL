
<template>
  <div class="headBox">
   <div class="systemName">智能打印系统（挽联）</div>
    <el-dropdown>
      <span class="el-dropdown-link">
        TEST<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><i class="el-icon-edit"></i> 修改密码</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-switch-button"></i> 退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
    
    }
  },
  mounted() {
   
  },

  methods: {
 
  }
}
</script>

<style lang="scss">
.headBox {
  height: 64px;
  line-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
  background: #fff;
  padding: 0 20px;
}
</style>
