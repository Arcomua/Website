<script setup lang="ts">
useHead({
  title: 'Arcomua Lite'
})
</script>

<template>
  <div class="home-container">

    <VParallax class="first-block" :height="600" src="https://i0.hdslb.com/bfs/new_dyn/1aee4f4865aec280d3732ce28f413a37291344932.png@2560w.webp">
      <div class="d-flex flex-column fill-height justify-center align-center text-white float-in-up">
        <div class="home-logo d-flex flex-column">
          <img width="200" height="200" class="home-logo-image" src="/lite_logo.png" />
          <!-- <NuxtImg :width="200" :height="200" src="/lite_logo.png"></NuxtImg> -->
        </div>
        <div class="d-flex flex-column justify-center align-center py-8 text-shadow">
          <h2 class="subheading">Arcomua Lite</h2>
          <p>版本: 1.20.1 - 1.20.4</p>
        </div>
      </div>
    </VParallax>

    <VContainer class="second-block">
      <div class="page-container">
        <div class="page-section-color">
          <h1 class="text-primary float-in-right">整合介绍</h1>
          <p class="subheading my-4 float-in-left">该整合包现已停更。</p>
          <p class="subheading my-4 float-in-left">Arcomua Lite是一个对原版进行高度性能优化的整合包，适合追求极致的原版生存和服务器玩家。在追求着更好的性能表现的同时，尽可能保持原版游戏性不变并带给玩家舒适的游戏体验。</p>
          <h2 class="text-primary mt-8 float-in-right">内容概览</h2>
          <p class="subheading my-4 float-in-left">包含多项性能优化、错误修复；内置多种生电相关工具。</p>
        </div>
        <VDivider></VDivider>
        <div>
          <h2 class="text-primary float-in-right">下载链接</h2>
          <div class="float-in-left d-flex">
            <VBtn 
              color="green-lighten-1" 
              hover 
              href="https://modrinth.com/modpack/arcomua-lite"
              class="mr-3">
            Modrinth
            </VBtn>
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