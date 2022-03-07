<script setup lang="ts">
import VideoModal from "./components/VideoModal.vue";
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
          <router-view />
        </el-main>
      </el-container>
      <VideoModal />
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
