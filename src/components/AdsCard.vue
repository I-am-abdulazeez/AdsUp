<template>
  <ion-card v-for="(ads, index) in adsCardProp" :key="index">
    <ion-img :src="ads.image" class="card-image" />
    <ion-card-header>
      <ion-card-title class="card-title">{{ ads.name }}</ion-card-title>
      <ion-card-subtitle class="card-sub">{{
        ads.timestamp
      }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content class="card-desc">{{ ads.description }}</ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/vue';

import { AdsCardType } from '@/types/index';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AdsCard',
  props: {
    adsCard: {
      required: true,
      type: Array as PropType<AdsCardType[]>,
    },
  },
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg,
  },
  setup: (props) => {
    const router = useRouter();
    const { adsCard: adsCardProp } = toRefs(props);

    return {
      adsCardProp,
      router,
    };
  },
});
</script>

<style scoped>
.card-image {
  width: auto;
  height: 200px;
  object-fit: cover;
}
.card-title {
  font-size: 1.2rem;
  color: #fff;
}
.card-sub {
  font-size: 12px;
  color: #dadada;
  margin-top: 3px;
}

.card-desc {
  color: #e4e4e4;
}

ion-card {
  box-shadow: none;
  border-radius: 10px;
  border: 1px solid #474747;
  margin-bottom: 20px;
  margin-top: 0px;
  margin-inline: 0px;
}
</style>
