<template>
  <a-layout class="my-layout" id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" >
        <a-icon type="dropbox" />
        我的应用
      </div>
      <a-menu theme="dark" mode="inline" v-model="currentMenu" @select="selectMenu">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>Ant Design Vue 树穿梭框示例</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>树公共组件实例</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "basicLayout",
  data() {
    return {
      collapsed: false,
      currentMenu: ['1']
    };
  },
  methods: {
    selectMenu({ item, key, selectedKeys }) {
      console.log(item);
      console.log(key);
      this.currentMenu = selectedKeys
      console.log(this.currentMenu.join(), 'this.currentMenu.join()===');
      switch (this.currentMenu.join()) {
        case "1":
          this.$router.push({
            name: 'TransferOptions'
          })
          break
          // TreeDemo
        case "2":
          this.$router.push({
            name: 'TreeDemo'
          })
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-layout {
  width: 100%;
  height: 100%;
  /deep/.ant-layout-sider {
    flex: 0 0 250px !important;
    max-width: 300px !important;
  }
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  line-height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #ffffff;
  text-align: center;
  white-space:nowrap;/*设置不折行*/
  text-overflow:ellipsis;/*这就是省略号喽*/
  -o-text-overflow:ellipsis;/*兼容opera*/
  overflow: hidden;/*设置超过的隐藏*/
}
</style>
