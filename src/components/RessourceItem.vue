<script setup lang="ts">
import type IRessource from "@/interfaces/iRessource";

import defaultImage from "@/assets/default-image.png";
import frenchFlag from "@/assets/frenchFlag.svg";
import { computed } from "vue";

interface IProps {
  ressource: IRessource;
}
const props = defineProps<IProps>();

const dateInFrench = computed(() => {
  const ressourceDate = new Date(props.ressource.date);
  return ressourceDate.toLocaleDateString();
});

const mediaInFrench = computed(() => {
  switch (props.ressource.media) {
    case "video":
      return "Vidéo";
    case "post":
      return "Article";
    case "book":
      return "Livre";
    default:
      return "Autre";
  }
});
</script>

<template>
  <el-card
    :class="ressource.isTop ? 'ressource-item-top-card' : ''"
    class="ressource-item"
    :body-style="{ padding: '0px' }"
  >
    <el-image
      style="height: 300px"
      fit="scale-down"
      :src="ressource.image || defaultImage"
      class="ressource-image"
    />
    <div style="padding: 14px">
      <h3 class="ressource-item-title">
        <el-image
          v-if="ressource.lang === 'fr'"
          style="height: 20px"
          fit="cover"
          :src="frenchFlag"
          class="image"
        />
        {{ ressource.title }}
      </h3>
      <div class="ressource-item-infos bottom">
        {{ mediaInFrench }} ajouté le
        {{ dateInFrench }}
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.ressource-item {
  margin-bottom: 20px;
}

.ressource-item-title {
  font-size: 1.3em;
}

.ressource-item-infos {
  color: grey;
}

.ressource-item-top-card {
  background-color: rgb(242, 249, 207);
}

.ressource-image {
  text-align: center;
  display: block;
}
</style>
