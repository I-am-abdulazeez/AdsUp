<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup: () => {
    return {
      modules: [Pagination],
    };
  },
});
</script>

<style>
@import url('./theme/global.css');
</style>
