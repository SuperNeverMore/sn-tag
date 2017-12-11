<template>
  <div>
    <Demo closable :clickEvt="clickFun">tag1</Demo>
    <Demo :closable="false">tag2</Demo>
    <Demo :closable="false">这是一个tag按钮</Demo>
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
      }
    }
  };
</script>
<style lang="less" >
  @import url(../static/styles/sn-tag.less);
</style>