<template>
  <div class="demo">
    <Demo v-sn-loading.fullScreen="loading" :loading-text="loaddingText" closable :tagClickEvt="tagClick" :iconClickEvt="clickFun">tag1</Demo>
    <Demo :closable="false">tag2</Demo>
    <Demo :closable="false" type="danger">tag按钮</Demo>
    <Demo :closable="false" type="info">tag按钮</Demo>
    <Demo :closable="false" type="warning">tag按钮</Demo>
    <Demo :closable="false" type="primary">tag按钮</Demo>
    <Demo :closable="false" type="accessory">tag按钮</Demo>
  </div>
</template>
<script>
  import Demo from '../src/sn-tag/sn-tag';
  export default {
    name: 'app',
    data: function() {
      return {
        loading: false,
        loaddingText: '正在加载中'
      };
    },
    components: {
      Demo
    },
    methods: {
      clickFun() {
        alert('delete');
      },
      tagClick() {
        this.openFullScreen();
      },
      openFullScreen() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      }
    }
  };
</script>
<style lang="less" >
  @import url(../static/styles/sn-tag.less);
    body {
        background: #987077;
    }
    .demo {
        text-align: center;
    }
</style>