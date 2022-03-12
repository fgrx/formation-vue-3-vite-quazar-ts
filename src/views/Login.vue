<script setup lang="ts">
import { ref } from "vue";
import authService from "@/services/authService";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import type { IUser } from "@/interfaces/IUser";

const router = useRouter();
const authStore = useAuthStore();

const email = ref("admin@gmail.com");
const password = ref("12345");
const message = ref("");

const connectAction = async () => {
  const res = await authService.signIn(email.value, password.value);
  if (!res) {
    message.value = "Mauvais couple email/mot de passe";
  } else {
    const user: IUser = { token: res.accessToken, email: res.user.email };
    authStore.setUser(user);
    router.push({ name: "AdminValidation" });
  }
};
</script>

<template>
  <h1>Connexion</h1>

  <el-alert title="message" v-if="message" type="error" effect="dark">
  </el-alert>
  <el-form>
    <el-form-item label="Adresse email">
      <el-input v-model="email" />
    </el-form-item>

    <el-form-item label="Mot de passe">
      <el-input v-model="password" type="password" />
    </el-form-item>

    <el-button @click="connectAction" type="primary">Connexion</el-button>
  </el-form>
</template>
