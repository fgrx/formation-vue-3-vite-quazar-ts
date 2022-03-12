<script setup lang="ts"></script>

<template>
  <div class="desription-livre">
    <h2><slot name="title"></slot></h2>
    <slot></slot>
  </div>
</template>

<style>
.desription-livre {
  padding: 1em;
  border: 1px solid gray;
}
</style>
