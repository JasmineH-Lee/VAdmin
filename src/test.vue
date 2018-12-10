<template>
  <div>
    <div>
      <h3>sort</h3>
    </div>
    <div class="items-list">
      <div
        class="item-card"
        v-for="item in dataStore"
        :key="item.id">
        <div
          class="item-show-card"
          draggable="true"
          @dragenter="enterArea($event, 'right', item)"
          @dragstart="dragItem(item)">{{ item.content }}</div>
        <div
          class="item-right-area"
          @drop="dropItem()"/>
      </div>
      <div
        class="item-show-card"
        @dragenter="enterArea($event, 'tail')"
        @drop="dropItem()"/>
    </div>
    <div>
      <div class="help">
        {{ inDragItem.content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataStore: [
        {sort: 1, content: '1-1', id: 11},
        {sort: 2, content: '1-2', id: 13},
        {sort: 3, content: '1-3', id: 15},
        {sort: 4, content: '1-4', id: 17},
        {sort: 5, content: '1-5', id: 19},
        {sort: 6, content: '1-6', id: 21}
      ],
      inDragItem: {},
      inDragIndex: -1,
      isPreview: false,
      isLeaved: true,
      enterItemID: ''
    }
  },
  methods: {
    dragItem (item) {
      console.log('in draging')
      this.inDragItem = item
      this.inDragIndex = this.dataStore.indexOf(item)
      if (this.inDragIndex > -1) {
        this.dataStore.splice(this.inDragIndex, 1)
      }
    },
    cancelDragItem () {
      this.dataStore.splice(this.inDragIndex, 0, this.inDragItem)
      this.inDragItem = {}
      this.inDragIndex = -1
    },
    enterArea (e, position, item) {
      e.preventDefault()
      if (item.id === this.enterItemID) {
        return false
      }
      var isInList = this.dataStore.indexOf(this.inDragItem)
      if (isInList >= 0) {
        this.dataStore.splice(isInList, 1)
      }
      if (position === 'head') {
        this.dataStore.splice(0, 0, this.inDragItem)
      } else if (position === 'right') {
        let insertIndex = this.dataStore.indexOf(item)
        console.log('enter right ' + insertIndex)
        this.dataStore.splice(insertIndex, 0, this.inDragItem)
      } else if (position === 'tail') {
        this.dataStore.push(this.inDragItem)
      }
    },
    leaveArea (e) {
      e.preventDefault()
      let removeIndex = this.dataStore.indexOf(this.inDragItem)
      if (removeIndex > -1 && !this.isLeaved) {
        this.dataStore.splice(removeIndex, 1)
        console.log('leave ' + removeIndex)
        this.isPreview = false
      }
    },
    dropItem () {
      console.log('drop')
    }
  }
}
</script>
<style scoped>
.items-list {
    display: flex;
    flex-flow: row wrap;
}
.item-card {
    display: flex;
    flex-flow: row nowrap;
}
.item-show-card {
    width: 50px;
    line-height: 50px;
    text-align: center;
    margin: 10px 0;
    border: 1px solid #999;
    border-radius: 50%;
}
.item-show-card:hover {
    width: 52px;
    line-height: 50px;
    text-align: center;
    margin: 10px 0;
    border: none;
    background-color: #999;
    border-radius: 50%;
}
.item-left-area, .item-right-area {
    width: 20px;
    height: 50px;
    margin: 10px 0;
}
.help {
    margin-top: 40px;
}
</style>
