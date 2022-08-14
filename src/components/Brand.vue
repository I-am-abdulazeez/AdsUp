<template>
  <div>
    <ion-img alt="logo" :src="Logo" class="logo" />
    <ion-text color="light">
      <h6 class="mt-0 white-text ion-text-center">AdsUp</h6>
    </ion-text>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonImg, IonText } from '@ionic/vue';

import Logo from '@/assets/images/logo.svg';

export default defineComponent({
  name: 'BrandComponent',
  props: {
    title: String,
    heading: String,
  },
  components: {
    IonImg,
    IonText,
  },
  setup: () => {
    return {
      Logo,
    };
  },
});
</script>

<style scoped>
.logo {
  width: 51px;
  height: 51px;
  margin: 0 auto;
}
</style>
