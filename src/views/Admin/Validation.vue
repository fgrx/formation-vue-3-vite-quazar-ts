<script lang="ts" setup>
import { dateInFrench, mediaInFrench } from "@/composables/useRessource";
import useAdmin from "@/composables/useAdmin";

const { invalidRessources, deleteRessourceAction, validRessourceAction } =
  useAdmin();
</script>

<template>
  <el-card>
    <h2>Validation</h2>

    <el-table :data="invalidRessources">
      <el-table-column>
        <template #default="scope">
          {{ dateInFrench(scope.row.date) }}
        </template>
      </el-table-column>
      <el-table-column prop="title" />
      <el-table-column>
        <template #default="scope">
          {{ mediaInFrench(scope.row.media) }}
        </template>
      </el-table-column>
      <el-table-column>
        <template #default="scope">
          <a :href="scope.row.url" target="blank">
            <el-button>Voir</el-button>
          </a>
        </template>
      </el-table-column>
      <el-table-column>
        <template #default="scope">
          <el-button @click="validRessourceAction(scope.row)" type="success"
            >Valider</el-button
          >
          <el-button @click="deleteRessourceAction(scope.row)" type="danger"
            >Supprimer</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
