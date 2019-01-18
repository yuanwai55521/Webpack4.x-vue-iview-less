<template lang="pug">
  div.intro.absolute.pos-fit.flex.items-center
    iframe.absolute.h-100p.z1(src="http://www.17sucai.com/preview/494364/2016-03-23/vector/demo.html" frameborder="0" style="width:100%")
    div.info.center.flex-auto.z2
      img(src="~@/assets/logo.png" alt="")
      div.h2.mt1 Webpack4.x基础架构
</template>
<script>
import api from 'store/intro/api';
export default {
  data() {
    return {
      data: []
    };
  },
  async mounted() {
    this.data = await api.get();
  }
};
</script>
<style lang="less">
.intro {
  color: white;
}
.pos-fit {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.absolute {
  position: absolute;
}
.items-center {
  align-items: center;
}
.flex {
  display: flex;
}
.h-100p,
.h100 {
  height: 100%;
}
.z1 {
  z-index: 1;
}
.z2 {
  z-index: 2;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
}
.center {
  text-align: center;
}
.h2 {
  font-size: 20px;
}
</style>
