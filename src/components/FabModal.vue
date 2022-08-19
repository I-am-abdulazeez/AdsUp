<template>
  <ion-fab @click="onOpen" vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button>Create Ads</ion-fab-button>
  </ion-fab>

  <!-- Modal -->
  <ion-modal :is-open="isOpen">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="white-text">Workspace</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="onClose">
            <ion-icon :icon="closeOutline" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <form>
        <div class="upload">
          <ion-label class="white-text upload-label">Upload Image</ion-label>
          <ion-input type="file" accept="image/png, image/jpeg image/jpg" />
        </div>

        <ion-item :counter="true" mode="ios" lines="inset">
          <ion-label position="floating" class="white-text"
            >Description</ion-label
          >
          <ion-textarea
            type="text"
            :maxlength="200"
            class="white-text text-area"
          />
        </ion-item>
        <div class="btn-send">
          <ion-button>Create</ion-button>
        </div>
      </form>
    </ion-content>
  </ion-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonFab,
  IonButtons,
  IonFabButton,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButton,
  IonModal,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
} from '@ionic/vue';

import { closeOutline } from 'ionicons/icons';

import { useDisclosure } from '@/composables/index';

export default defineComponent({
  name: 'FabModal',
  components: {
    IonFab,
    IonFabButton,
    IonButtons,
    IonTitle,
    IonButton,
    IonModal,
    IonContent,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonTextarea,
  },
  setup: () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return {
      isOpen,
      onOpen,
      onClose,
      closeOutline,
    };
  },
});
</script>

<style scoped>
ion-fab-button {
  --border-radius: 50px;
  --background: #3b3b3b;
  --color: white;
  font-weight: 500;
  font-size: 16px;
  width: 120px;
  --box-shadow: none;
  height: 40px;
}

ion-icon {
  color: white;
  font-size: 30px;
}

.upload {
  --background: #323232;
  border-radius: 10px;
  --color: #e2e2e2;
  font-size: 13px;
  border: none;
  padding-inline: 20px;
}

.upload-label {
  font-size: 13.6px;
}

.text-area {
  font-size: 13.6px;
  --height: 300px;
}

.btn-send {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
}

.btn-send ion-button {
  --background: #3b3b3b;
  --color: white;
  font-weight: 500;
  font-size: 16px;
  width: 120px;
  --box-shadow: none;
  height: 40px;
}
</style>
