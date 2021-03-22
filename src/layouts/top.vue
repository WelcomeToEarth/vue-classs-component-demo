<template>
<div class="top">
  <img src="../assets/top/logo.png" />
  <span>您好，{{name}}</span>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Options,
} from 'vue-class-component';
import { namespace } from 'vuex-class';

const userVuex = namespace('user');

@Options({})
export default class Top extends Vue {
  @userVuex.Getter('name') name!: string;
};
</script>

<style lang="scss" scoped>
.top {
  position: relative;
  display: flex; align-items: center;
  height: 6vh; min-height: 50px; padding: 0 3%;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05);
  > img { height: 80%; }
  > span { position: absolute; right: 3%; }
}
</style>
