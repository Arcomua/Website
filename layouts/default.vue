<script setup lang="ts">
const drawer = ref();
</script>

<template>
  <VAppBar height="56" color="primary">
    <template v-slot:prepend>
      <VAppBarNavIcon @click.stop="drawer = !drawer"></VAppBarNavIcon>
    </template>
    <VAppBarTitle>
       <NuxtImg preload :width="125" src="fontlogo-white.png"></NuxtImg>
    </VAppBarTitle>
  </VAppBar>

  <VNavigationDrawer v-model="drawer">
    <VList>
      <VListItem prepend-icon="mdi-home" title="首页" to="/" color="primary"></VListItem>
      <!-- <VListItem prepend-icon="mdi-palette" title="颜色" to="color" color="primary"></VListItem> -->
      <!-- <VListItem prepend-icon="mdi-hand-coin" title="捐赠" to="donation" color="primary"></VListItem> -->
    </VList>
    <VDivider />
    <VList>
      <VListSubheader>整合包</VListSubheader>
      <VListItem prepend-icon="mdi-puzzle" title="Cloth" to="packCloth" color="primary"></VListItem>
      <VListItem prepend-icon="mdi-anvil" title="Anvil" to="packAnvil" color="primary"></VListItem>
      <VListItem prepend-icon="mdi-lightning-bolt" title="Lite" to="packLite" color="primary"></VListItem>
    </VList>
    <VDivider />
    <VList>
      <VListSubheader>帮助</VListSubheader>
      <VListItem prepend-icon="mdi-file-document" title="帮助中心" href="https://support.arcomua.com/"></VListItem>
      <VListItem prepend-icon="mdi-router-network" title="服务状态" href="https://status.arcomua.com/status/arcomua"></VListItem>
    </VList>
  </VNavigationDrawer>

  <VMain>
    <slot></slot>
    <Footer />
  </VMain>
</template>

<style scoped lang="scss">
// #region Fix SSR

.v-app-bar {
  width: 100%;
  height: 56px;

  &:deep(.v-toolbar__content, .v-toolbar__extension) {
    position: relative;

    display: flex;
    flex: 0 0 auto;
    align-items: center;

    width: 100%;

    transition: inherit;
  }

  &:deep(.v-toolbar__prepend) {
    margin-inline: 10px auto;
  }

  &:deep(.v-toolbar-title) {
    flex: 1 1;
  }

  &:deep(.v-toolbar__content>.v-toolbar-title) {
    margin-inline-start: 16px;
  }
}

// #endregion

.v-app-bar-title {
  height: 100%;

  &:deep(.v-toolbar-title__placeholder) {
    display: flex;
    align-items: center;
    height: 100%;
  }

  img {
    transform: translateY(-1px);
  }
}
</style>
