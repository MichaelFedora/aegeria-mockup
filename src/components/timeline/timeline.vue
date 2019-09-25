<template>
<div id='timeline'>
  <ejs-gantt :dataSource="data" :taskFields="taskFields" :eventMarkers="eventMarkers" :editSettings="editSettings"></ejs-gantt>
</div>
</template>
<script src='./timeline.ts'></script>
<style lang='scss'>

#timeline {
  width: 100%;
  height: 100%;
}
</style>
