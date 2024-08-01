<template>
  <div class="side">
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="items"
      @select="selectMenu"
    ></a-menu>
  </div>
</template>

<script setup lang='ts'>
import { reactive, watch, h } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

const router = useRouter();

const items = [
  {
    key: 'webgl',
    icon: () => h(MailOutlined),
    label: 'webgl',
    title: 'webgl',
    children: [
      {
        key: 'home',
        label: '坐标系',
        title: 'home',
      },
      {
        key: 'about',
        label: '旋转',
        title: 'about',
      }
    ],
  },
  {
    key: 'threejs',
    icon: () => h(AppstoreOutlined),
    label: 'threejs',
    title: 'threejs',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
        ],
      },
    ],
  },
];
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);

function selectMenu(e) {
    console.log("我的点击事件", e)
    router.push(`/${e.keyPath.join('/')}`)
}
</script>


<style lang='scss' scoped>
.side {
    width: 260px;
    height: calc(100vh - 70px);
    overflow: auto;

    :deep(ul) {
        height: 100%;
    }
}
</style>