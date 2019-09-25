<template>
<a id='widget-blank' @click='clicked()'>
  <div class='plus-vert'></div>
  <div class='plus-horz'></div>
</a>
</template>
<script src='./widget-blank.ts'></script>
<style lang='scss'>

#widget-blank {
  position: relative;

  cursor: pointer;
  user-select: none;

  display: block;
  height: 100%;
  width: 100%;

  > div {
    background-color: #cccccc;
  }

  > .plus-vert {
    position: absolute;

    left: calc(50% - 3px);
    width: 6px;

    height: 48px;
    top: calc(50% - 24px);
  }
  > .plus-horz {
    position: absolute;

    top: calc(50% - 3px);
    height: 6px;

    width: 48px;
    left: calc(50% - 24px);
  }
}
</style>
