<script setup lang="ts">
import eventBus from "@/plugins/eventBus";

import type IRessource from "@/interfaces/iRessource";
import type { lang, media } from "@/interfaces/iRessource";

import ressourceService from "@/services/ressourceService";

import { computed, ref } from "vue";

const isOpen = ref(false);
const successMessage = ref("");

const titleForm = ref<string>("");
const urlForm = ref<string>("");
const imageForm = ref<string>("");
const descriptionForm = ref<string>("");
const ratingForm = ref(3);
const langForm = ref<lang>("en");
const mediaForm = ref<media>("post");

eventBus.on("open-Ressource-Form-modal", () => {
  isOpen.value = true;
  successMessage.value = "";
  reinitForm();
});

const isDisabled = computed(
  () => titleForm.value.length < 4 || !urlForm.value.includes("http")
);

const reinitForm = () => {
  titleForm.value = "";
  urlForm.value = "";
  imageForm.value = "";
  descriptionForm.value = "";
  ratingForm.value = 3;
  langForm.value = "en";
  mediaForm.value = "post";
};

const closeFormAction = () => {
  isOpen.value = false;
  successMessage.value = "";
  reinitForm();
};

const addRessourceAction = async () => {
  const currentDate = new Date();

  const ressource: IRessource = {
    title: titleForm.value,
    description: descriptionForm.value,
    url: urlForm.value,
    rating: ratingForm.value,
    lang: langForm.value,
    media: mediaForm.value,
    date: currentDate.toISOString(),
    isTop: false,
    isValid: false,
  };

  const newRessource = await ressourceService.addRessource(ressource);

  if (newRessource) {
    successMessage.value = "Nouvelle ressource ajoutée avec succès";
  }
};
</script>

<template>
  <el-dialog v-model="isOpen" title="Ajout d'une nouvelle ressource">
    <el-alert
      v-if="successMessage"
      title="Opération réalisée avec succès"
      type="success"
      effect="dark"
    >
      {{ successMessage }}
    </el-alert>

    <form v-show="!successMessage">
      <el-form-item label="Titre">
        <el-input v-model="titleForm"></el-input>
      </el-form-item>

      <el-form-item label="Ressource URL">
        <el-input v-model="urlForm"></el-input>
      </el-form-item>

      <el-form-item label="Image URL">
        <el-input v-model="imageForm"></el-input>
      </el-form-item>

      <el-form-item label="Description">
        <el-input v-model="descriptionForm" type="textarea"></el-input>
      </el-form-item>

      <el-form-item label="Note">
        <el-rate v-model="ratingForm"></el-rate>
      </el-form-item>

      <el-form-item label="Langue">
        <el-select v-model="langForm">
          <el-option label="Français" value="fr"></el-option>
          <el-option label="Anglais" value="en"></el-option>
          ></el-select
        >
      </el-form-item>

      <el-form-item label="Type de média">
        <el-select v-model="mediaForm">
          <el-option label="Livre" value="book"></el-option>
          <el-option label="Article" value="post"></el-option>
          <el-option label="Vidéo" value="video"></el-option>
          ></el-select
        >
      </el-form-item>

      <el-button
        @click="addRessourceAction"
        type="success"
        :disabled="isDisabled"
        >Ajouter</el-button
      >
      <el-button @click="closeFormAction">Fermer</el-button>
    </form>
  </el-dialog>
</template>

<style>
.action-buttons {
  margin-top: 1em;
  text-align: center;
}
</style>
