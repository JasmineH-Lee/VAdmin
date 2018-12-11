<template>
  <div>
    <div>
      <div class="table-wrap">
        <div class="table table-header" ref="tableHead">
          <table width="600" cellpadding="5px 8px;" rules="none">
            <colgroup>
              <col style="width: 300px;">
              <col style="width: 300px;">
              <col style="width: 300px;">
              <col style="width: 300px;">
              <col style="width: 300px;">
              <col style="width: 300px;">
            </colgroup>
            <thead>
              <tr>
                <th
                v-for="(col, index) in tableOptions.columns"
                :key="index">{{ col.title }}</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="table-body" ref="tableBody">
          <table class="table table-hover" cellpadding="5px 8px;" cellspacing="0" border="1" rules="rows">
            <colgroup>
              <col style="width: 300px;">
              <col style="width: 300px;">
              <col style="width: 300px;">
              <col style="width: 300px;">
              <col style="width: 300px;">
              <col style="width: 300px;">
            </colgroup>
            <tbody>
              <tr v-for="data in tableData" :key="data.id">
                  <slot :item="data">
                      <td
                        v-for="(col, index) in tableOptions.columns"
                        :key="index">
                          {{ data[col.field] }}
                      </td>
                  </slot>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-footer">
          <!-- 分页 -->
          <div class="pagination-block">
            <div class="refresh-btn">刷新按钮</div>
            <div class="pager">
              <ul class="pager-ul">
                <li>上一页</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>下一页</li>
              </ul>
            </div>
            <div class="page-index">
              <span>第</span>
              <input type="number" :value="p">
              <span>页</span>
            </div>
            <div class="page-sizes">
              <span>每页</span>
              <select v-model="size">
                <option v-for="(size, index) in sizes" :key="index">{{ size }}</option>
              </select>
              <span>条</span>
            </div>
            <div class="page-total">共{{ total }}条</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tableOptions: {
      default: _ => {
        return {}
      },
      type: Object
    },
    tableData: {
      default: _ => {
        return []
      },
      type: Array
    }
  },
  data () {
    return {
      p: '1',
      size: '30',
      total: '32',
      sizes: [20, 30, 50, 80, 100]
    }
  },
  mounted () {
    // console.log(this.$refs)
    this.tableObj = this.$refs.tableBody
    this.tableObj.addEventListener('scroll', () => {
    //   console.log(this.$refs)
    //   console.log(this.$refs.tableBody.scrollLeft)
      this.$refs.tableHead.scrollLeft = this.$refs.tableBody.scrollLeft
    }, false)
  }
}
</script>
<style lang="less">
table {
  color: #606060;
}
.table th,
.table td {
  padding: 0.45rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-striped tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover{
  background-color: rgba(0, 0, 0, 0.075);
}

.table-header {
    width: 1000px;
    overflow: hidden;
    table {
      color: #333;
      border-color: #ddd;
      thead tr {
        border-top: 1px solid #ddd;
        border-bottom: none;
      }
    }
}
.table-body {
    width: 1000px;
    overflow: scroll;
    table {
      tbody tr {
        border-top: none;
        border-bottom: 1px solid #ddd;
      }
    }
}
.table-footer {
  margin-top: 30px;
}
table {
    width: 100%;
    max-width: 100%;
    background: 0 0;
    border: none;
    table-layout: fixed;
    th,td {
      text-align: center;
    }
}
.pagination-block {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  .pager {
    flex-grow: 3;
  }
  .pager-ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
}
</style>
