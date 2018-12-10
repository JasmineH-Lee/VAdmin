<template>
<div>
    <div>表格</div>
    <div>
        <VTable
          :table-options="tableOptions"
          :table-data="tableData">
          <!-- <template slot-scope="data">
              <td>{{ data.item.id }}</td>
              <td>{{ data.item.name }}</td>
              <td>{{ data.item.age }}</td>
              <td>{{ data.item.works }}</td>
              <td>{{ data.item.city }}</td>
              <td>45jdieg</td>
          </template> -->
        </VTable>
       <!-- <div class="table-wrap">
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
                        <tr>
                            <th>11111</th>
                            <th>11111</th>
                            <th>11111</th>
                            <th>11111</th>
                            <th>11111</th>
                            <th>11111</th>
                        </tr>
                    </tbody>
                </table>
            </div>
       </div> -->
    </div>
</div>
</template>
<script>
import VTable from '@/components/VTable'
export default {
  props: {
    // tableOptions: {
    //   default: () => {
    //     return {
    //       cloumns: [
    //         {title: '标题', filed: '', width: ''},
    //         {title: '标题', filed: '', width: ''},
    //         {title: '标题', filed: '', width: ''},
    //         {title: '标题', filed: '', width: ''},
    //         {title: '标题', filed: '', width: ''}
    //       ]
    //     }
    //   },
    //   type: Object
    // }
  },
  data () {
    return {
      tableOptions: {
        columns: [
          {title: 'ID', field: 'id', width: ''},
          {title: '姓名', field: 'name', width: ''},
          {title: '年龄', field: 'age', width: ''},
          {title: 'works', field: 'works', width: ''},
          {title: '城市', field: 'city', width: ''},
          {title: 'Home', field: 'home', width: ''}
        ]
      },
      tableData: [
        {id: '13', name: 'ljh', age: '24', works: 'fe', city: 'bj', home: 'sy'},
        {id: '15', name: 'ljh2', age: '14', works: 'be', city: 'bj', home: 'sy'},
        {id: '17', name: 'ljh4', age: '20', works: 're', city: 'bj', home: 'sy'},
        {id: '19', name: 'ljh6', age: '26', works: 'pm', city: 'bj', home: 'sy'},
        {id: '21', name: 'ljh8', age: '29', works: 'fm', city: 'bj', home: 'sy'},
        {id: '23', name: 'ljh0', age: '22', works: 'fe', city: 'bj', home: 'sy'}
      ]
    }
  },
  components: {
    VTable
  },
  //   mounted () {
  //     // console.log(this.$refs)
  //     this.tableObj = this.$refs.tableBody
  //     this.tableObj.addEventListener('scroll', () => {
  //     //   console.log(this.$refs)
  //     //   console.log(this.$refs.tableBody.scrollLeft)
  //       this.$refs.tableHead.scrollLeft = this.$refs.tableBody.scrollLeft
  //     }, false)
  //   },
  created () {
    console.log(this.tableOptions)
  },
  methods: {

  }
}
</script>
<style lang="">
</style>
