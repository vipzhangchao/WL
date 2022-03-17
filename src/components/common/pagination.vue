<template>
  <div class="pagination-content">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSize"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalPage"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    totalPage: {
      type: Number,
      default: 200
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Array,
      default: [10, 20, 30, 40]
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("sendPageSize", val);
    },
    handleCurrentChange(val) {
      this.$emit("sendCurrentPage", val);
    }
  }
};
</script>

<style scoped lang="scss">

.pagination-content {
  // text-align: right;
  // margin-right: 50px;
  margin-top: 10px;
  margin-left: 10px;
}
</style>