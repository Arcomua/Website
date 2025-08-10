<script setup lang="ts">
useHead({
  title: 'Arcomua Cloth'
})
</script>

<template>
  <div class="home-container">

    <VParallax class="first-block" :height="600" src="https://i0.hdslb.com/bfs/new_dyn/2c8c54087bed6fad081cd2aaf527a80b291344932.png@2560w.webp">
      <div class="d-flex flex-column fill-height justify-center align-center text-white float-in-up">
        <div class="home-logo d-flex flex-column">
          <img width="200" height="200" class="home-logo-image" src="/cloth_logo.png" />
          <!-- <NuxtImg :width="200" :height="200" src="/cloth_logo.png"></NuxtImg> -->
        </div>
        <div class="d-flex flex-column justify-center align-center py-8 text-shadow">
          <h2 class="subheading">Arcomua Cloth</h2>
          <p>版本: 1.14.4 - 最新</p>
        </div>
      </div>
    </VParallax>

    <VContainer class="second-block">
      <div class="page-container">
        <div class="page-section-color">
          <h1 class="text-primary float-in-right">整合介绍</h1>
          <p class="subheading my-4 float-in-left">Arcomua Cloth是 Arcomua Modpack的Fabric/Quilt移植版，该整合包以优化游戏性能为主要目标，同时对原版进行美化和增加许多小工具的整合包，适合原版生存和服务器玩家。在丰富玩家体验的同时，也追求着更好的性能表现。</p>
          <h2 class="text-primary mt-8 float-in-right">内容概览</h2>
          <p class="subheading my-4 float-in-left">包含多项性能优化、错误修复；对部分游戏界面进行了美化；内置多种生电相关工具。</p>
        </div>
        <VDivider></VDivider>
        <div>
          <h2 class="text-primary float-in-right">下载链接</h2>
          <div class="float-in-left">
            <!-- <h3 class="mt-8 mb-2">推荐下载</h3> -->
            <VBtn color="green-lighten-1" hover href="https://modrinth.com/modpack/arcomua">Modrinth</VBtn>
            <VBtn color="blue-lighten-1" hover href="https://dl.arcomua.com/Cloth">下载中心</VBtn>
          </div>
        </div>
      </div>
    </VContainer>

  </div>
</template>

<style lang="scss" scoped>
h1,
h2,
p,
th {
  user-select: text;
}

.page-section-color {
  display: flex;
  flex-direction: column;
}

.first-block {
  &:deep(.v-img__img) {
    filter: brightness(0.8) blur(2px);
  }

  p,
  h4 {
    user-select: text;
  }
}

.second-block,
.second-block-line {
  gap: 2em;
  max-width: 80%;
}

.third-block {
  &.v-parallax--active>.v-img__img {
    filter: blur(32px);
  }

  h2 {
    user-select: text;
  }
}

.home-logo {
  gap: 8px;
  filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 30%));
}

.text-shadow {
  text-shadow: 0 3px 6px rgba(0, 0, 0, 30%);
}

</style>