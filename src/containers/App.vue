<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="app-title">{{ appTitle }}</span>
    </md-app-toolbar>

    <md-app-content>
      <RecipeList/>
      <md-button class="md-fab md-primary" @click="addRecipe()">
        <md-icon>add</md-icon>
      </md-button>
    </md-app-content>
  </md-app>
</template>

<style lang="scss" scoped>
  .md-fab {
    position: fixed;
    bottom: 8px;
    right: 8px;
  }
</style>


<script>
  import RecipeList from '~/components/RecipeList.vue'
  import { mapActions } from 'vuex'

  export default {
    components: { RecipeList },
    data: () => Object.assign({
      appTitle: process.env.APP_TITLE
    }),
    methods: mapActions(['addRecipe']),
  }
</script>
