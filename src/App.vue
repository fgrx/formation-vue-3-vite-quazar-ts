<script setup lang="ts">
import type IRessource from "@/interfaces/iRessource";
import RessourceItem from "@/components/RessourceItem.vue";

import data from "./data/db";

const ressources = data as Array<IRessource>;
</script>

<template>
  <header>
    <el-menu background-color="#3b0187" mode="horizontal" text-color="#fff">
      <el-menu-item><span class="title-site">DevWall</span></el-menu-item>
    </el-menu>
  </header>

  <main>
    <div class="common-layout">
      <el-container>
        <el-main>
          <el-row :gutter="40">
            <el-col
              v-for="ressource in ressources"
              :key="ressource.id"
              :xs="24"
              :md="8"
              :lg="6"
            >
              <RessourceItem :ressource="ressource" />
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

.title-site {
  font-size: 1.5em;
  text-transform: uppercase;
}
</style>
