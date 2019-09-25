<template>
<div id='timeline-view'>
  <ejs-splitter orientation='Vertical' separatorSize='5'>
    <e-panes>
      <e-pane :content='widgetsPane' size='196px'></e-pane>
      <e-pane :content='timelinePane'></e-pane>
    </e-panes>
  </ejs-splitter>
</div>
</template>
<script src='./timeline-view.ts'></script>
<style lang='scss'>

#timeline-view {
  height: 100%;
}
</style>
