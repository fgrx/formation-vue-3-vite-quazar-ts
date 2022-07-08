<script setup lang="ts"></script>

<template>
  <div>
    <h1>Administration</h1>

    <el-button-group>
      <router-link :to="{ name: 'AdminManagement' }">
        <el-button type="primary">Gestion</el-button>
      </router-link>

      <router-link :to="{ name: 'AdminValidation' }">
        <el-button type="primary">Validation</el-button>
      </router-link>
    </el-button-group>

    <router-view></router-view>
  </div>
</template>
