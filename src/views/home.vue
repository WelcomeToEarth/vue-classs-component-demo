<template>
<div class="home">
  <p>{{info.state.name}}</p>
  <p>{{info.state.count}}</p>
  <button @click="info.increment">increment</button>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Options,
  setup,
} from 'vue-class-component';
import homeInfo from '/@/composables/home/home-info';

@Options({})
export default class Home extends Vue {
  private info = setup(() => homeInfo());
  public created (): void {
    this.info.request();
  }
};
</script>

<style lang="scss" scoped>
$purple: #6c02d6;
.home {
  > p {
    &:nth-child(1) { color: $purple; }
    &:nth-child(2) { color: $blue; }
  }
}
</style>
