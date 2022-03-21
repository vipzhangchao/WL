<template>
  <div class="tableContent">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
          <el-form  :inline="true" size="small" class="demo-form-inline">
            <el-form-item label="逝者姓名">
                <el-input placeholder="请输入逝者姓名"></el-input>
            </el-form-item>
            <el-form-item label="举办日期">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="请选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button size="small" type="primary">查询</el-button>
                <el-button size="small" type="primary" plain>取消</el-button>
            </el-form-item>
            </el-form> 
      </div>
      <div class="main">
        <div class="operate">
          <div class="leftBox">已选择 <span class="number">{{chooseNumber}}</span></div>
          <div class="rightBox">
            <el-button size="small" type="primary" plain icon="el-icon-plus">新建</el-button>
            <el-button size="small" type="danger" plain>归档</el-button>
          </div>
        </div>
        <div>
           <el-table
            :data="tableData"
            style="width: 100%;"
            :max-height="tableHeight"
            @selection-change="handleSelectionChange"
            >
              <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="funeralCode"
              label="编号">
            </el-table-column>
            <el-table-column
              prop="funeralName"
              label="逝者姓名">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄">
            </el-table-column>
            <el-table-column
              prop="funeralTime"
              label="葬礼举办时间">
            </el-table-column>
            <el-table-column
              prop="funeralAddress"
              label="葬礼举办地点">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="备注">
            </el-table-column>
            <el-table-column
              label="导入挽联">
              <template slot-scope="scope">
                <el-button size="small" type="success" plain icon="el-icon-plus">
                  批量导入
                </el-button>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-link :underline="false" type="primary">编辑</el-link>
              </template>
            </el-table-column>
          </el-table>
           <!-- 分页 -->
          <pagination
            @sendPageSize="receivePageSize"
            @sendCurrentPage="receiveCurrentPage"
            :totalPage="totalPage"
            :pageSize="pageSize"
          ></pagination>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import pagination from "@/components/common/pagination";
export default {
  data() {
    return {
     value1: '',
     chooseNumber: 0,
     tableHeight:0,
      totalPage: 1,
      pageSize: [10,30,60,100],
      tableData: [
      {
        funeralCode: '123',
        funeralName: '王小虎',
        age: 25,
        funeralTime:"2020-03-13",
        funeralAddress: '上海市普陀区金沙江路 1518 弄',
        remark:"123",
      },{
        funeralCode: '235',
        funeralName: '王小虎',
        age: 25,
        funeralTime:"2020-03-13",
        funeralAddress: '上海市普陀区金沙江路 1517 弄',
        remark:"456",
      },
      {
        funeralCode: '123',
        funeralName: '王小虎',
        age: 25,
        funeralTime:"2020-03-13",
        funeralAddress: '上海市普陀区金沙江路 1518 弄',
        remark:"123",
      }, {
        funeralCode: '235',
        funeralName: '王小虎',
        age: 25,
        funeralTime:"2020-03-13",
        funeralAddress: '上海市普陀区金沙江路 1517 弄',
        remark:"456",
      },
      {
        funeralCode: '123',
        funeralName: '王小虎',
        age: 25,
        funeralTime:"2020-03-13",
        funeralAddress: '上海市普陀区金沙江路 1518 弄',
        remark:"123",
      }, {
        funeralCode: '235',
        funeralName: '王小虎',
        age: 25,
        funeralTime:"2020-03-13",
        funeralAddress: '上海市普陀区金沙江路 1517 弄',
        remark:"456",
      },
       {
        funeralCode: '123',
        funeralName: '王小虎',
        age: 25,
        funeralTime:"2020-03-13",
        funeralAddress: '上海市普陀区金沙江路 1518 弄',
        remark:"123",
      }, {
        funeralCode: '235',
        funeralName: '王小虎',
        age: 25,
        funeralTime:"2020-03-13",
        funeralAddress: '上海市普陀区金沙江路 1517 弄',
        remark:"456",
      }
      ]
    };
  },
  components: {
    pagination
  },
  mounted () {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 350;      
    })
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    receivePageSize(val) {
      console.log(val);
    },
    receiveCurrentPage(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped lang="scss">
.tableContent {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  .main {
    .operate {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .number {
      color: orange;
    }
  }
}
</style>
