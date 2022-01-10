<template>
  <CommonTree
    :tree-data="treeData"
    :expanded-keys.sync="expandedKeys"
    :checked-keys="checkedKeys"
    :selected-keys.sync="selectedKeys"
    :check-able="checkAble"
  />
</template>

<script>
import CommonTree from "../components/CommonTree"
export default {
  name: "TreeDemo",
  components: {
    CommonTree
  },
  data() {
    return {
      treeData: [
        {
          title: '0-0',
          key: '0-0',
          children: [
            {
              title: '0-0-0',
              key: '0-0-0',
              children: [
                { title: '0-0-0-0', key: '0-0-0-0' },
                { title: '0-0-0-1', key: '0-0-0-1' },
                { title: '0-0-0-2', key: '0-0-0-2' }
              ]
            },
            {
              title: '0-0-1',
              key: '0-0-1',
              children: [
                { title: '0-0-1-0', key: '0-0-1-0' },
                { title: '0-0-1-1', key: '0-0-1-1' },
                { title: '0-0-1-2', key: '0-0-1-2' }
              ]
            },
            {
              title: '0-0-2',
              key: '0-0-2'
            }
          ]
        },
        {
          title: '0-1',
          key: '0-1',
          children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' }
          ]
        },
        {
          title: '0-2',
          key: '0-2'
        }
      ],
      expandedKeys: ['0-0-0', '0-0-1'],
      checkedKeys: ['0-0-0'],
      selectedKeys: [],
      checkAble: true
    }
  }
}
</script>

<style scoped>

</style>
