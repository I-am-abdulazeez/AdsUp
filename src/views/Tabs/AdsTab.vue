<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar class="ads-toolbar">
        <div class="wrap">
          <ion-img :src="Logo" class="logo" />
          <ion-input class="search-input" placeholder="Search Ads" />
          <div class="avatar" @click="onOpen">A</div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <AdsCard :ads="adsArray" />
      <FabModal />
      <ProfileModal :isOpen="isOpen" :onClose="onClose" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonInput,
  IonImg,
} from '@ionic/vue';
import AdsCard from '@/components/Ads.vue';
import FabModal from '@/components/FabModal.vue';
import ProfileModal from '@/components/ProfileModal.vue';

import { adsArray } from '@/data/index';

import Logo from '@/assets/images/logo.svg';
import { closeOutline } from 'ionicons/icons';

import { useDisclosure } from '@/composables';

export default defineComponent({
  name: 'AdsPage',
  components: {
    IonHeader,
    IonToolbar,
    IonContent,
    IonPage,
    IonInput,
    IonImg,

    AdsCard,
    FabModal,
    ProfileModal,
  },
  setup: () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return {
      adsArray,
      Logo,
      closeOutline,
      isOpen,
      onOpen,
      onClose,
    };
  },
});
</script>

<style scoped>
.ads-toolbar {
  --background: #121212;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row !important;
}

.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding-inline: 20px;
}

.logo {
  width: 25px;
  height: 25px;
}

.search-input {
  --background: #323232;
  border-radius: 10px;
  --color: #e2e2e2;
  font-size: 13px;
}

.avatar {
  width: 28.7px;
  height: 28.7px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #121212;
  font-weight: 600;
}
</style>
