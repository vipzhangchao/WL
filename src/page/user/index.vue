
<template>
  <div class="containerBox">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
          <el-form  :inline="true" size="small" class="demo-form-inline">
            <el-form-item label="序列号">
                <el-input placeholder="请输入序列号"></el-input>
            </el-form-item>
            <el-form-item label="账号">
             <el-input placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="small" type="primary">查询</el-button>
                <el-button size="small" type="primary" plain>清空</el-button>
            </el-form-item>
            </el-form> 
      </div>
                <el-button type="primary">新增</el-button>

           <el-table
            :data="tableData"
            style="width: 100%;"
            :max-height="tableHeight"
            >
            <el-table-column
              prop="serialNumber"
              label="序列号">
            </el-table-column>
            <el-table-column
              prop="userCode"
              label="账号">
            </el-table-column>
            <el-table-column
              prop="userName"
              label="账号姓名">
            </el-table-column>
            <el-table-column
              prop="quanxian"
              label="所属人机构">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-link :underline="false" type="primary">编辑</el-link>
                <el-link :underline="false" type="primary">删除</el-link>
                <el-link :underline="false" type="primary">重置密码</el-link>
              </template>
            </el-table-column>
          </el-table>
           <!-- 分页 -->
          <pagination
            @sendPageSize="receivePageSize"
            @sendCurrentPage="receiveCurrentPage"
            :totalPage="totalPage"
          ></pagination>
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
       tableData:[
         {
           serialNumber: 'qwe',
           userCode: 'admin',
           userName: 'admin',
           quanxian: '1',
         }
       ],
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
