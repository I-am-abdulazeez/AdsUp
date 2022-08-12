<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="welcome-wrapper">
        <div>
          <ion-img alt="logo" :src="Logo" class="logo" />
          <ion-text color="light">
            <h6 class="ion-no-margin white-text">AdsUp</h6>
          </ion-text>
        </div>
        <div class="content-wrapper">
          <ion-text color="light" class="ion-text-center">
            <ion-img alt="choice" :src="Choice" class="choice-svg" />
            <h2 class="primary-text">Welcome to AdsUp</h2>
            <p class="sec-text">
              AdsUp is a platform for advertising and marketing. <br />
              Ads are annoying but AdsUp are engaging, entertaining and
              informative. We do not track viewers, we only show you what you
              choose to watch.
            </p>
          </ion-text>
        </div>
        <div>
          <ion-button
            class="btn"
            href="/login"
            color="light"
            shape="round"
            expand="block"
          >
            Let's Get Started
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
import Choice from '@/assets/images/choice.svg';

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
      Choice,
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
  padding-bottom: 25px;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 53px;
  height: 53px;
  margin: 0 auto;
}

.btn {
  width: 300px;
  font-size: 14.5px;
  font-weight: 600;
}

.sec-text {
  line-height: 1.5;
  font-size: 12px;
  color: white;
  width: 300px;
}

.choice-svg {
  width: 190px;
  height: 190px;
  margin: 0 auto;
}
</style>
