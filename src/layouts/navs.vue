<template>
<ul class="navs">
  <li
    v-for="(item, i) of list"
    :key="i"
    :class="$route.name === item.name ? 'checked' : ''"
    @click="redirect(item.name)">
    <img :src="item.img" />
    <span>{{item.text}}</span>
  </li>
  <button @click="add">
    <img src="../assets/navs/add.png" />
    <span>创建项目</span>
  </button>
</ul>
</template>

<script lang="ts">
import {
  Vue,
  Options,
} from 'vue-class-component';
import myPng from '/@/assets/navs/my.png';
import libPng from '/@/assets/navs/lib.png';

@Options({})
export default class Navs extends Vue {
  protected list = [{
    name: 'my',
    text: '我的工作台',
    img: myPng,
  }, {
    name: 'lib',
    text: '海报',
    img: libPng,
  }];
  protected redirect (name: string): void {
    if (this.$route.name === name) return;
    this.$router.push({ name });
  }
  protected add (): void {
    // todo
    this.$router.push({
      name: 'editor',
    });
  }
};
</script>

<style lang="scss" scoped>
.navs {
  width: 20vw; max-width: 200px; padding-top: 30px;
  > li {
    display: flex;
    justify-content: center; align-items: center;
    height: 42px;
    border-left: 3px solid transparent;
    color: #666;
    cursor: pointer;
    transition: 0.2s background, 0.2s border-color;
    &.checked {
      border-color: $blue;
      color: black;
      background: $liteblue;
      cursor: auto;
    }
    &:hover { background: $liteblue; }
    > span {
      display: inline-block;
      width: 6em; margin-left: 1em;
    }
  }
  > button {
    display: flex;
    justify-content: center; align-items: center;
    width: 70%; margin: 40px 15%;
    transition: 0.2s transform;
    &:hover { transform: scale(1.05); }
    > span { margin-left: 0.5em; }
  }
  img { height: 50%; }
}
</style>
