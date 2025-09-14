<script setup lang="ts">
useHead({
  title: 'Arcomua Anvil'
})
</script>

<template>
  <div class="home-container">
    
    <VParallax class="first-block" :height="600" src="https://i0.hdslb.com/bfs/new_dyn/2495a42ceca402bd2292f89d6bd35131291344932.png@2560w.webp">
      <div class="d-flex flex-column fill-height justify-center align-center text-white float-in-up">
        <div class="home-logo d-flex flex-column">
          <img width="200" height="200" class="home-logo-image" src="/anvil_logo.png" />
          <!-- <NuxtImg :width="200" :height="200" src="/anvil_logo.png"></NuxtImg> -->
        </div>
        <div class="d-flex flex-column justify-center align-center py-8 text-shadow">
          <h2 class="subheading">Arcomua Anvil</h2>
          <p>版本: 1.7.10 - 1.21.4</p>
        </div>
      </div>
    </VParallax>

    <VContainer class="second-block">
      <div class="page-container">
        <div class="page-section-color">
          <h1 class="text-primary float-in-right">整合介绍</h1>
          <p class="subheading my-4 float-in-left">Arcomua Anvil是 Arcomua Modpack 的Forge/NeoForge移植版，该整合包的以更好的性能优化为目标，带给玩家舒适的游戏体验。</p>
          <h2 class="text-primary mt-8 float-in-right">内容概览</h2>
          <p class="subheading my-4 float-in-left">包含多项性能优化、错误修复；对部分游戏界面进行了美化；内置多种生电相关工具。</p>
        </div>
        <VDivider class="my-6"></VDivider>
        <div>
          <h2 class="text-primary float-in-right">下载链接</h2>
          <div class="my-4 float-in-left d-flex">
            <VBtn 
              color="green-lighten-1" 
              hover 
              href="https://modrinth.com/modpack/arcomua-anvil"
              class="mr-3">
            Modrinth
            </VBtn>
            <VBtn 
              color="blue-lighten-1" 
              hover 
              href="https://dl.arcomua.com/Anvil">
            下载中心
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