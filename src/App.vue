<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  useIonRouter,
  useBackButton,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { App } from '@capacitor/app';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup: () => {
    const ionRouter = useIonRouter();
    useBackButton(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });
    return {};
  },
});
</script>

<style>
@import url('./theme/global.css');
</style>
