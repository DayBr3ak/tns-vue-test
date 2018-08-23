<template>
  <GridLayout columns="200, *, 200" rows="auto">
    <Button row="0" col="0" class="btn btn-primary"  @tap="$emit('tap1') ">Prev</Button>
    <Label row="0" col="1" />
    <Button row="0" col="2" class="btn btn-primary"  @tap="$emit('tap2')">Next</Button>
  </GridLayout>
</template>

