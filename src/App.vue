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
import { defineComponent, onMounted } from 'vue';

import { App } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup: () => {
    const ionRouter = useIonRouter();
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
      await StatusBar.setBackgroundColor({ color: '#121212' });
    };
    useBackButton(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });
    onMounted(() => {
      setStatusBarStyleDark();
    });
    return {};
  },
});
</script>

<style>
@import url('./theme/global.css');
</style>
