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
import { SplashScreen } from '@capacitor/splash-screen';
import { modalController } from '@ionic/core';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup: () => {
    const ionRouter = useIonRouter();
    const modalCtrl = modalController;
    const router = useRoute();
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
      await StatusBar.setBackgroundColor({ color: '#121212' });
    };

    useBackButton(0, () => {
      if (router.path === '/tab/reels') {
        ionRouter.back();
      } else {
        App.exitApp();
      }
    });

    useBackButton(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });

    useBackButton(100, async () => {
      const modal = await modalCtrl.getTop();
      if (modal) {
        await modal.dismiss();
      }
    });
    onMounted(() => {
      StatusBar.setOverlaysWebView({
        overlay: false,
      });
      SplashScreen.hide({
        fadeOutDuration: 500,
      });
      setStatusBarStyleDark();
    });
    return {};
  },
});
</script>

<style>
@import url('./theme/global.css');
</style>
