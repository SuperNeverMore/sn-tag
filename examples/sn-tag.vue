<template>
  <div class="demo">
    <Demo closable :tagClickEvt="tagClick" :iconClickEvt="clickFun">tag1</Demo>
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
    components: {
      Demo
    },
    methods: {
      clickFun() {
        alert('delete');
      },
      tagClick() {
        alert('tag-click');
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
        margin-top: 100px;
    }
</style>