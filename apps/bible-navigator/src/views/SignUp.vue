<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Lightscape - SignUp</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
    
      <div class="flex h-full justify-center items-center">
        <p>
          <ion-item>
            <ion-label position="fixed">Email</ion-label>
            <ion-input v-model="email" placeholder="Email" />
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Password</ion-label>
            <ion-input v-model="password" placeholder="Password" type="password" />
          </ion-item>
          <ion-item>
            <ion-button @click="signUp">Sign Up</ion-button>
          </ion-item>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonItem, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import useFirebase from '../composables/firebase';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonInput,
    IonItem,
    IonButton
  },

  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const { signUpWithEmailPassword } = useFirebase();
    const { push } = useRouter();

    const signUp = async () => {
      await signUpWithEmailPassword(email.value, password.value);
      push({ name: 'Home' });
    };

    return {
      email,
      password,
      signUp
    }
  }
});
</script>