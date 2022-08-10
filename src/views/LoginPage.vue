<template>
  <ion-page>
    <ion-content>
      <div class="wrapper">
        <div>
          <ion-img alt="logo" :src="Logo" class="logo" />
          <ion-text color="light" class="ion-text-center">
            <h6 class="ion-no-margin white-text">AdsUp</h6>
          </ion-text>
          <ion-text class="ion-text-center" color="light">
            <p class="white-text">Login to view ads of your choice.</p>
          </ion-text>
        </div>
        <ion-button expand="full" shape="round" color="primary"
          >Continue with Google</ion-button
        >
        <ion-button expand="full" shape="round" color="tertiary"
          >Continue with Linkedin</ion-button
        >
        <ion-button expand="full" shape="round" color="secondary"
          >Continue with Twitter</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonImg, IonText, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

import Logo from '@/assets/images/logo.svg';

export default defineComponent({
  name: 'LoginPage',
  components: {
    IonPage,
    IonContent,
    IonImg,
    IonText,
    IonButton,
  },
  setup() {
    return {
      Logo,
    };
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 0.7rem;
}
.logo {
  width: 53px;
  height: 53px;
  margin: 0 auto;
}

.white-text {
  color: white !important;
}
</style>
