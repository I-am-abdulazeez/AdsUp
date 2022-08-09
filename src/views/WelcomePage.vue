<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="welcome-wrapper">
        <div>
          <ion-img alt="logo" :src="Logo" class="logo" />
          <ion-text color="light" class="ion-text-center">
            <h5>AdsUp</h5>
          </ion-text>
        </div>
        <div>
          <h5 class="text-white">WelcomePage</h5>
        </div>
        <div>
          <ion-button class="btn" color="light" shape="round" expand="block">
            Get Started
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonImg, IonText, IonButton } from '@ionic/vue';

import Logo from '@/assets/images/logo.svg';

export default defineComponent({
  name: 'WelcomePage',
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
.welcome-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 15px;
}

.logo {
  width: 55px;
  height: 55px;
}

.btn {
  width: 300px;
}
</style>
