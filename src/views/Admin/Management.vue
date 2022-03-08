<script lang="ts" setup>
import type IRessource from "@/interfaces/iRessource";
import { useRessourceStore } from "@/stores/ressource";
import { computed } from "vue";

const ressourceStore = useRessourceStore();

const ressources = computed(() => ressourceStore.validRessources);

const deleteRessourceAction = (ressource: IRessource) =>
  ressourceStore.deleteRessource(ressource);
</script>

<template>
  <el-card>
    <h2>Management</h2>

    <el-table :data="ressources">
      <el-table-column prop="date" />
      <el-table-column prop="title" />
      <el-table-column prop="media" />
      <el-table-column>
        <template #default="scope">
          <a :href="scope.row.url" target="blank">
            <el-button>Voir</el-button>
          </a>
        </template>
      </el-table-column>
      <el-table-column>
        <template #default="scope">
          <el-button @click="deleteRessourceAction(scope.row)" type="danger"
            >Supprimer</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style>
.el-card {
  margin-top: 2em;
}
</style>
