<template>
<div id='widgets'>
  <ejs-dashboardlayout :cellSpacing='[20, 20]' :rows='1' :columns='5'>
    <e-panels>
      <e-panel v-for='(widget, i) of widgets' :key='i'
        :row='0' :col='i' :sizeX='1' :sizeY='1' :content='() => ({ template: widget })'>
      </e-panel>
    </e-panels>
  </ejs-dashboardlayout>
</div>
</template>
<script src='./widgets.ts'></script>
<style lang='scss'>

#widgets {

}
</style>
