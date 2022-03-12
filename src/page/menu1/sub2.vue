<template>
  <div class="container-box">
    <div class="form-box">
      <el-row :gutter="20" class="input-box">
        <el-col :span="6" class="input-label">
          <el-col :span="8" class="label">电商企业：</el-col>
          <el-col :span="16">
            <el-select v-model="value" size="mini" placeholder="请选择电商企业">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="6" class="input-label">
          <el-col :span="8" class="label">仓库名称：</el-col>
          <el-col :span="16">
            <el-select v-model="value" size="mini" placeholder="请选择仓库名称">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="6" class="input-label">
          <el-col :span="8" class="label">订单状态：</el-col>
          <el-col :span="16">
            <el-select v-model="value" size="mini" placeholder="请选择订单状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="6" class="input-label">
          <el-col :span="8" class="label">推送状态：</el-col>
          <el-col :span="16">
            <el-select v-model="value" size="mini" placeholder="请选择推送状态">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="input-box">
        <el-col :span="6" class="input-label">
          <el-col :span="8" class="label">运单号：</el-col>
          <el-col :span="16">
            <el-input v-model="input2" placeholder="请输入运单号" size="mini"/>
          </el-col>
        </el-col>
        <el-col :span="6" class="input-label">
          <el-col :span="8" class="label">推送日期：</el-col>
          <el-col :span="16">
            <el-date-picker
              v-model="DateValue"
              size="mini"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy 年 MM 月 dd 日 HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              align="right"
            />
          </el-col>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" class="input-label">
          <el-col :span="8" class="label">订单编号：</el-col>
          <el-col :span="16">
            <el-input
              :rows="1"
              v-model="input2"
              type="textarea"
              placeholder="请输入运单号，多个订单号之间用逗号隔开"
              size="mini"
              style="width:500px"
            />
          </el-col>
        </el-col>
      </el-row>
    </div>
    <el-table
      :header-cell-style="tableHeaderColor"
      :data="tableData"
      size="mini"
      border
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180"/>
      <el-table-column prop="name" label="姓名" width="180"/>
      <el-table-column prop="address" label="地址"/>
    </el-table>
    <!-- <pagination
      :total-page="totalPage"
      @sendPageSize="receivePageSize"
      @sendCurrentPage="receiveCurrentPage"
    /> -->
  </div>
</template>
<script>
// import pagination from 'common/pagination'
export default {
  components: {
    // pagination
  },
  data() {
    return {
      totalPage: 300,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      input2: '',
      DateValue: ''
    }
  },
  watch: {
    DateValue(newval, oldval) {
      console.log(newval)
      console.log(oldval)
    }
  },
  methods: {
    receivePageSize(val) {
      console.log(val)
    },
    receiveCurrentPage(val) {
      console.log(val)
    },
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #F7F6Fd;color: #B6B5C2;font-weight: 500;'
      }
    }
  }
}
</script>

<style scoped lang="scss">
// @import "../../assets/css/them.scss";
.container-box {
  .form-box {
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    .input-box {
      margin-bottom: 20px;
    }
    .input-label div {
      padding: 0px !important;
    }
    .input-label .label {
      margin-top: 4px;
    }
  }
  .button-box {
    margin: 50px;
  }
}
</style>
