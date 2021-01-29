<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lightscape - Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    
      <ExploreContainer name="Home page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Home',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>