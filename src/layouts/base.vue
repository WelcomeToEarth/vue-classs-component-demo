<template>
<div class="base">
  <Top />
  <router-view />
</div>
</template>

<script lang="ts">
import {
  Vue,
  Options,
} from 'vue-class-component';
import Top from '/@/layouts/top.vue';

@Options({
  components: { Top },
})
export default class Base extends Vue {
};
</script>

<style lang="scss" scoped>
.base {
  display: flex; flex-direction: column;
  height: 100vh;
  > * { flex: 1; }
  > .top { flex: none; }
}
</style>
