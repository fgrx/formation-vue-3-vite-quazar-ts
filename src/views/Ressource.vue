<script setup lang="ts">
import { useRoute } from "vue-router";
import ressourceService from "@/services/ressourceService";
import defaultImage from "@/assets/default-image.png";
import { ref } from "vue";
import { ElLoading } from "element-plus";

import type IRessource from "@/interfaces/iRessource";

const id = useRoute().params.id;

const ressource = ref<IRessource>();
const rating = ref<number>(0);

const loading = ElLoading.service({
  lock: true,
  text: "Chargement",
  background: "rgba(0, 0, 0, 0.7)",
});

ressourceService.getRessourceById(id as string).then((result) => {
  ressource.value = result;
  rating.value = result.rating;
});

loading.close();
</script>

<template>
  <el-row :gutter="20" v-if="ressource">
    <el-col :xs="24" :md="10">
      <el-image
        style="width: 100%"
        fit="scale-down"
        :src="ressource.image || defaultImage"
        class="ressource-image"
    /></el-col>
    <el-col :xs="24" :md="14"
      ><h1>{{ ressource.title }}</h1>
      <p><el-rate v-model="rating" disabled> </el-rate></p>
      <p>{{ ressource.description }}</p>

      <p>
        <a :href="ressource.url" target="blank">
          <el-button type="primary">Voir la ressource</el-button>
        </a>
      </p>
    </el-col>
  </el-row>
</template>

<style>
a {
  text-decoration: none;
}
</style>
