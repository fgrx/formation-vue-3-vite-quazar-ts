<script setup lang="ts">
import type IRessource from "@/interfaces/iRessource";
import RessourceItem from "@/components/RessourceItem.vue";

import { ElLoading } from "element-plus";

import ressourceService from "@/services/ressourceService";

import { ref } from "vue";

const ressources = ref([] as Array<IRessource>);
const bookmarks = ref([] as Array<IRessource>);

const loading = ElLoading.service({
  lock: true,
  text: "Chargement",
  background: "rgba(0, 0, 0, 0.7)",
});
ressourceService.getRessources().then((res) => (ressources.value = res));
loading.close();

const addToBookmarksAction = (ressource: IRessource) => {
  if (!bookmarks.value.includes(ressource)) bookmarks.value.push(ressource);
};

const removeFromBookmarksAction = (ressourceToRemove: IRessource) => {
  bookmarks.value = bookmarks.value.filter(
    (ressource) => ressource.id !== ressourceToRemove.id
  );

  //ou
  // const position = bookmarks.value.indexOf(ressourceToRemove);
  // bookmarks.value.splice(position, 1);
};
</script>

<template>
  <el-card v-if="bookmarks.length">
    <h2>Liste de lecture</h2>

    <el-row :gutter="40">
      <el-col
        v-for="ressource in bookmarks"
        :key="ressource.id"
        :xs="24"
        :md="8"
        :lg="6"
      >
        <RessourceItem
          @remove-from-bookmarks="removeFromBookmarksAction(ressource)"
          :ressource="ressource"
          :isBookmark="true"
        />
      </el-col>
    </el-row>
  </el-card>

  <h2>Toutes les ressources</h2>
  <el-row :gutter="40">
    <el-col
      v-for="ressource in ressources"
      :key="ressource.id"
      :xs="24"
      :md="8"
      :lg="6"
    >
      <RessourceItem
        @add-to-bookmarks="addToBookmarksAction(ressource)"
        :ressource="ressource"
        :isBookmark="false"
      />
    </el-col>
  </el-row>
</template>
