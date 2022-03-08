<script lang="ts">
import type IRessource from "@/interfaces/iRessource";
import { defineComponent } from "vue";
import type { PropType } from "vue";

import defaultImage from "@/assets/default-image.png";
import frenchFlag from "@/assets/frenchFlag.svg";
import { VideoPlay } from "@element-plus/icons-vue";

import eventBus from "@/plugins/eventBus";

export default defineComponent({
  props: {
    ressource: {
      type: Object as PropType<IRessource>,
      default: {},
    },
    isBookmark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      VideoPlay,
      frenchFlag,
      defaultImage,
    };
  },
  methods: {
    playVideoAction(ressource: IRessource) {
      eventBus.emit("open-video-modal", ressource);
    },
    addToBookmarksAction(ressource: IRessource) {
      this.$emit("add-to-bookmarks", ressource);
    },
    removeFromBookmarksAction(ressource: IRessource) {
      this.$emit("remove-from-bookmarks", ressource);
    },
  },
});
</script>

<template>
  <el-card
    :class="ressource.isTop ? 'ressource-item-top-card' : ''"
    class="ressource-item"
    :body-style="{ padding: '0px' }"
  >
    <router-link :to="{ name: 'Ressource', params: { id: ressource.id } }">
      <el-image
        style="height: 300px"
        fit="scale-down"
        :src="ressource.image || defaultImage"
        class="ressource-image"
      />
    </router-link>
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
      <el-row class="ressource-action-buttons">
        <el-button
          @click="addToBookmarksAction(ressource)"
          type="primary"
          v-if="!isBookmark"
          >+ liste</el-button
        >
        <el-button
          v-if="isBookmark"
          @click="removeFromBookmarksAction(ressource)"
          type="default"
          >- liste</el-button
        >

        <el-button
          v-if="ressource.media === 'video'"
          @click="playVideoAction(ressource)"
          type="primary"
          :icon="VideoPlay"
          circle
        ></el-button>
      </el-row>
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

.ressource-action-buttons {
  margin-top: 1em;
}
</style>
