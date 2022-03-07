<script setup lang="ts">
import eventBus from "@/plugins/eventBus";

import type IRessource from "@/interfaces/iRessource";
import { computed, ref } from "vue";

const isOpen = ref(false);

const ressource = ref();

eventBus.on("open-video-modal", (ressourceSent) => {
  isOpen.value = true;
  ressource.value = ressourceSent as IRessource;
});

const embedVideo = computed(() =>
  ressource.value.url.replace(".com/watch?v=", ".com/embed/")
);
</script>

<template>
  <el-dialog v-if="ressource" v-model="isOpen" :title="ressource.title">
    <iframe
      width="560"
      height="315"
      :src="embedVideo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="action-buttons">
      <el-button @click="isOpen = false" type="primary">Fermer</el-button>
    </div>
  </el-dialog>
</template>

<style>
.action-buttons {
  margin-top: 1em;
  text-align: center;
}
</style>
