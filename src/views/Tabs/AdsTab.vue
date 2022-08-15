<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="white-text">Ads</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <AdsCard :adsCard="adsCard" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue';
import AdsCard from '@/components/AdsCard.vue';
import { adsCard } from '@/data/index';
export default defineComponent({
  name: 'AdsPage',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    // custom component
    AdsCard,
  },
  setup: () => {
    return {
      adsCard,
    };
  },
});
</script>
