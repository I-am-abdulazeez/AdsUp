<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="login-wrapper">
        <div>
          <brand-component />
          <ion-text color="light">
            <h6 class="h-text">
              The platform for all the ads you are looking for.
            </h6>
          </ion-text>
        </div>
        <div>
          <ion-img alt="choice" :src="Watch" class="watch-svg" />
        </div>
        <div class="mt-sm btn-group">
          <ion-button
            @click="router.push('/tabs/')"
            class="btn"
            expand="full"
            shape="round"
          >
            <ion-icon size="small" slot="start" :icon="logoGoogle" />
            Continue with Google</ion-button
          >
          <ion-button class="btn" expand="full" shape="round">
            <ion-icon size="small" slot="start" :icon="logoLinkedin" />
            Continue with Linkedin</ion-button
          >
          <ion-button class="btn" expand="full" shape="round">
            <ion-icon size="small" slot="start" :icon="logoTwitter" />
            Continue with Twitter</ion-button
          >
          <ion-text class="ion-text-center" color="light">
            <p class="white-text text-sm">Login to view ads of your choice.</p>
          </ion-text>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  IonImg,
  IonText,
  useIonRouter,
} from '@ionic/vue';

import { logoGoogle, logoLinkedin, logoTwitter } from 'ionicons/icons';

import Watch from '@/assets/images/swipe-watch.svg';

import BrandComponent from '@/components/Brand.vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    IonPage,
    IonContent,
    BrandComponent,
    IonButton,
    IonIcon,
    IonImg,
    IonText,
  },
  setup: () => {
    const router = useIonRouter();
    return {
      logoGoogle,
      logoLinkedin,
      logoTwitter,
      Watch,
      router,
    };
  },
});
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 0.7rem;
  padding-top: 25px;
  padding-bottom: 25px;
}
.btn {
  width: 250px;
  --background: white;
  --color: #000;
}
.btn-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;
}

.watch-svg {
  width: 200px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
