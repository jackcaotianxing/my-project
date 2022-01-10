<template>
  <div class="container">
    <h1>Ant Design Vue 树穿梭框示例</h1>
    <div class="transfer-wrapper">
      <transfer
          ref="transferRef"
          :tree-data="treeData"
          :edit-key="editKey"
      />
    </div>
    <a-space>
      <a-button type="primary" @click="getValue">
        获取值
      </a-button>
      <a-button @click="setValue">
        设置值
      </a-button>
    </a-space>
  </div>
</template>

<script>
import Transfer from '../components/options-transfer'
import data from '../assets/data/index'

export default {
  name: 'Options',
  components: {
    Transfer
  },
  data () {
    return {
      treeData: data.treeData,
      editKey: []
    }
  },
  methods: {
    // 获取值
    getValue () {
      const transferRef = this.$refs.transferRef
      if (transferRef) console.log(transferRef.emitKeys)
    },
    // 设置值
    setValue () {
      // this.editKey = data.editKey
    }
  }
}
</script>

<style scoped lang="less">
.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 80px;
}
.transfer-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 24px;
  text-align: left;
}
</style>
