<script setup lang="ts">
import type IRessource from "@/interfaces/iRessource";
//import RessourceItem from "@/components/RessourceItem.vue";
import RessourceItem from "@/components/RessourceItemOptionApi.vue";
import { useRessourceStore } from "@/stores/ressource";

import { computed, ref } from "vue";

const ressourceStore = useRessourceStore();

const bookmarks = ref<IRessource[]>([]);

const ressources = computed(() => ressourceStore.validRessources);

const addToBookmarksAction = (ressource: IRessource) => {
  if (!bookmarks.value.includes(ressource)) bookmarks.value.push(ressource);
};

const removeFromBookmarksAction = (ressourceToRemove: IRessource) => {
  bookmarks.value = bookmarks.value.filter(
    (ressource) => ressource.id !== ressourceToRemove.id
  );
};
</script>

<template>
  <div>
    <transition name="fade">
      <el-card v-if="bookmarks.length">
        <h2>Liste de lecture</h2>

        <TransitionGroup tag="div" class="el-row" name="fade-down">
          <el-col
            v-for="ressource in bookmarks"
            :key="ressource.id"
            :xs="24"
            :md="8"
            :lg="6"
            style="padding-left: 20px; padding-right: 20px"
          >
            <RessourceItem
              @remove-from-bookmarks="removeFromBookmarksAction(ressource)"
              :ressource="ressource"
              :isBookmark="true"
            />
          </el-col>
        </TransitionGroup>
      </el-card>
    </transition>

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
  </div>
</template>

<style scoped>
.fade-down-enter-from {
  opacity: 0;
}

.fade-down-leave-to {
  opacity: 0;
  transform: translatey(100px);
}

.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.5s ease-out;
}
</style>
