<template>
   <el-container class="container" v-loading="false" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.8)" element-loading-spinner="el-icon-loading">
      <!-- 侧边栏 -->
      <Aside :foldAside="foldAside" />
       <el-container direction="vertical" class="main">
      <!-- 头部 -->
      <el-header> <Header /></el-header>
      <!-- 内容 -->
        <Content />
      <!-- 底部 -->
        <Footer />
      </el-container>
   </el-container>
</template>

<script>
import Header from '@/components/common/header.vue';
import Aside from '@/components/common/aside.vue';
import Footer from '@/components/common/footer.vue';
import Content from '@/components/common/content.vue';
export default {
  components: {
    Header,
    Aside,
    Footer,
    Content,
  },

  data() {
    return {
      foldAside: true,
    }
  },
  computed: {
   
  },
  watch: {
    $route(to, from) {
     
    }
  },
  created() {
   
  },
  mounted() {
   
  },
  methods: {
   
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  background: #f0f2f5;
  .main {
    display: flex;
    flex-direction: column;
  }
}
</style>
