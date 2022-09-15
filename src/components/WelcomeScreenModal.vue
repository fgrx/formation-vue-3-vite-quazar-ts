<script setup lang="ts">
import { ref, watch } from "vue";
import partyImage from "@/assets/party.svg";
import { useAuthStore } from "@/stores/auth";

import { storeToRefs } from "pinia";

const isOpen = ref(false);

const authStore = useAuthStore();

const { user } = storeToRefs(authStore);

watch(user, (newUser, oldUser) => {
  isOpen.value = true;
  console.log(`Connexion ${newUser.email}`);
});
</script>

<template>
  <el-dialog v-model="isOpen">
    <p class="welcome">
      <img :src="partyImage" height="100" width="100" /><br />
      Bienvenue
    </p>
    <div class="action-buttons">
      <el-button @click="isOpen = false" type="primary">Fermer</el-button>
    </div>
  </el-dialog>
</template>

<style lang="scss">
.welcome {
  font-size: 3em;
  text-align: center;
}
</style>
