<template>
<div class="work">
  <Navs />
  <router-view />
</div>
</template>

<script lang="ts">
import {
  Vue,
  Options,
} from 'vue-class-component';
import Navs from '/@/layouts/navs.vue';

@Options({
  components: { Navs },
})
export default class Work extends Vue {
};
</script>

<style lang="scss" scoped>
.work {
  display: flex;
  > * { flex: 1; }
  > .navs { flex: none; }
}
</style>
