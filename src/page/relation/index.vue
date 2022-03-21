
<template>
  <div class="containerBox">
    <el-card class="box-card">
      <el-tabs type="border-card">
        <el-tab-pane label="亲属">
          <el-button type="primary" plain>添加子分类</el-button>
          <el-table
            :data="tableData"
            style="width: 100%;"
            :max-height="tableHeight"
            @selection-change="handleSelectionChange"
            >
            <el-table-column
              prop="relationName"
              label="被称谓名称">
            </el-table-column>
            <el-table-column
              prop="relationCode"
              label="被称谓编码">
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="生成时间">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="备注">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-link :underline="false" type="primary">编辑</el-link>
                <el-link :underline="false" type="primary">删除</el-link>
              </template>
            </el-table-column>
          </el-table>
           <!-- 分页 -->
          <pagination
            @sendPageSize="receivePageSize"
            @sendCurrentPage="receiveCurrentPage"
            :pageSize="pageSize"
          ></pagination>
        </el-tab-pane>
        <el-tab-pane label="单位"><el-button type="primary" plain>添加子分类</el-button></el-tab-pane>
        <el-tab-pane label="个人"><el-button type="primary" plain>添加子分类</el-button></el-tab-pane>
      </el-tabs>
      
    </el-card>
    
  </div>
</template>
<script>
import pagination from "@/components/common/pagination";
export default {
  components: {
    pagination
  },
  data() {
    return {
      tableHeight:0,
      totalPage: 1,
      tableData: [
        {
          relationName: 'zc',
          relationCode: '12',
          remark:'1213',
          createTime:'2021-12-31',
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 350;      
    })
  },

  methods: {
    handleSelectionChange (val) {
    },
    receivePageSize(val) {
      console.log(val);
    },
    receiveCurrentPage(val) {
      console.log(val);
    },
  }
}
</script>

<style lang="scss" scoped>
.containerBox {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>
