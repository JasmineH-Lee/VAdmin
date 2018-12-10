<template>
    <div>
        <div>
            <div class="table-wrap">
                <div class="table-header" ref="tableHead">
                    <table>
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
                    <table>
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
<style>
.table-wrap {
}
.table-header {
    width: 1000px;
    overflow: hidden;
}
.table-body {
    width: 1000px;
    overflow: scroll;
}
table {
    width: 100%;
    max-width: 100%;
    background: 0 0;
    border: none;
    table-layout: fixed;
}
</style>
