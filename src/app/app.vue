<template>
<div id='app'>
  <h1>Aegeria Mockup</h1>
  <div style='flex-grow: 1; width: 100%'>
    <ejs-splitter separatorSize='5'>
      <e-panes>
        <e-pane content='projectSelector' size='256px'></e-pane>
        <e-pane :content='timelineView'></e-pane>
      </e-panes>
    </ejs-splitter>
  </div>
</div>
</template>
<script src='./app.ts'></script>
<style lang='scss'>

#app {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  align-items: center;
}
</style>
