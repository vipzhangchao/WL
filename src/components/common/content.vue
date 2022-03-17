
<template>
  <div class="contentBox">
   <keep-alive>
      <router-view />
    </keep-alive>
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
.contentBox {
  flex: 1;
  margin: 20px 20px 0 20px;
  // overflow: hidden;
}
</style>
