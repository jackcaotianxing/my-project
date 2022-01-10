<template>
  <div>
    <a-tree
      v-model="checkedKeysModel"
      :checkable="checkAble"
      :expanded-keys.sync="expandedKeysModel"
      :selected-keys.sync="selectedKeysModel"
      :tree-data="treeData"
      :expand="onExpand"
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  name: "CommonTree",
  props: {
    treeData: {
      type: Array,
      default: () => {
        return []
      }
    },
    checkedKeys: {
      type: Array,
      default: () => {
        return []
      }
    },
    expandedKeys: {
      type: Array,
      default: () => {
        return []
      }
    },
    selectedKeys: {
      type: Array,
      default: () => {
        return []
      }
    },
    checkAble: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      expandedKeysModel: [],
      selectedKeysModel: [],
      checkedKeysModel: []
    }
  },
  created() {
    this.expandedKeysModel = JSON.parse(JSON.stringify(this.expandedKeys))
    this.selectedKeysModel = JSON.parse(JSON.stringify(this.selectedKeys))
    this.checkedKeysModel = JSON.parse(JSON.stringify(this.checkedKeys))
  },
  methods: {
    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys)
      this.expandedKeysModel = expandedKeys
      this.$emit('expandedTreeNode', this.expandedKeysModel)
    },
    onSelect(selectedKeys, info) {
      // console.log('onSelect', info);
      console.log('selectedKeys', selectedKeys)
      const record = info.node.dataRef
      this.selectedKeysModel = [record.key]
      this.$emit('selectedTreeNode', this.selectedKeysModel, info)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
