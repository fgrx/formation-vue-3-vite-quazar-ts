<script setup lang="ts">
import eventBus from "@/plugins/eventBus";
import VideoModal from "@/components/VideoModal.vue";
import RessourceFormModal from "@/components/RessourceFormModal.vue";

import { useRessourceStore } from "@/stores/ressource";

import { ElLoading } from "element-plus";

import ressourceService from "@/services/ressourceService";

const loading = ElLoading.service({
  lock: true,
  text: "Chargement",
  background: "rgba(0, 0, 0, 0.7)",
});

const ressourceStore = useRessourceStore();
ressourceStore.loadRessources().then(() => loading.close());

const openRessourceFormAction = () => {
  eventBus.emit("open-Ressource-Form-modal");
};
</script>

<template>
  <header>
    <el-menu
      id="top-menu"
      background-color="#3b0187"
      mode="horizontal"
      text-color="#fff"
    >
      <el-menu-item
        ><span class="title-site"
          ><router-link :to="{ name: 'Home' }"> DevWall </router-link></span
        ></el-menu-item
      >

      <el-menu-item
        ><router-link :to="{ name: 'Admin' }"
          >Administration</router-link
        ></el-menu-item
      >

      <el-menu-item
        ><router-link :to="{ name: 'About' }"
          >A propos</router-link
        ></el-menu-item
      >

      <el-menu-item>
        <el-button
          style="margin-top: 1em"
          @click="openRessourceFormAction"
          type="success"
          >Ajouter</el-button
        >
      </el-menu-item>
    </el-menu>
  </header>
  <main>
    <div class="common-layout">
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <VideoModal />
      <RessourceFormModal />
    </div>
  </main>
</template>

<style lang="scss">
@import "./assets/base.css";

.el-menu-item a {
  color: white;
  text-decoration: none;
  font-size: 1.3em;
}

.router-link-exact-active {
  background: rgb(95, 47, 191);
}

.title-site {
  font-size: 1.5em;
  text-transform: uppercase;
  .router-link-exact-active {
    background: #3b0187;
  }
}

.el-menu a {
  color: white !important;
}
</style>
