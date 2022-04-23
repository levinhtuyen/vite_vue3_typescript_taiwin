<script setup lang="ts">
</script>

<template>
  <router-view />
</template>

<style scoped lang="scss">
.flag {
  width: 1.5rem;
}
.logo-3d {
  height: 2rem;
}
.logo-letter {
  height: 1rem;
  margin-left: 0.5rem;
}
.logo {
  // max-width: 60px;
  @media only screen and (max-width: 600px) {
    flex: 2;
    max-width: 150px;
  }
}
.hotel-name {
  @media only screen and (max-width: 600px) {
    display: none;
  }
}
.q-router-link--exact-active {
  color: #ff6400;
}
.drawer__item--active :deep(.q-expansion-item__toggle-icon) {
  color: #ff6400;
}
</style>
