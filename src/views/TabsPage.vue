<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="tab-bar">
        <ion-tab-button tab="shorts" href="/tabs/shorts">
          <ion-icon :icon="currentRoute === '/tabs/shorts' ? tv : tvOutline" />
          <ion-label>Shorts</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="ads" href="/tabs/ads">
          <ion-icon :icon="currentRoute === '/tabs/ads' ? copy : copyOutline" />
          <ion-label>Ads</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import { tvOutline, tv, copy, copyOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'TabsPage',
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup: () => {
    const currentRoute = computed(() => {
      const router = useRouter();
      console.log(router.options.routes);
      return router.currentRoute.value.path;
    });
    return {
      tvOutline,
      tv,
      copy,
      copyOutline,
      currentRoute,
    };
  },
});
</script>

<style scoped>
ion-icon {
  font-size: 25px;
}
.tab-bar {
  --box-shadow: none;
  height: 80px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  --background: #222222;
}
</style>
