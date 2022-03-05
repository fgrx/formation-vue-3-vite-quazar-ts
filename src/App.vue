<script setup lang="ts">
import type IRessource from "./interfaces/iRessource";
import defaultImage from "./assets/default-image.png";
import frenchFlag from "./assets/frenchFlag.svg";

import data from "./data/db";

const ressources: Array<IRessource> = data;
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
              class="ressource-item"
            >
              <el-card
                :class="ressource.isTop ? 'ressource-item-top-card' : ''"
                :body-style="{ padding: '0px' }"
              >
                <el-image
                  style="height: 300px"
                  fit="cover"
                  :src="ressource.image || defaultImage"
                  class="image"
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
                    {{ ressource.media }} ajouté(e) le
                    {{ ressource.date }}
                  </div>
                </div>
              </el-card>
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
</style>
