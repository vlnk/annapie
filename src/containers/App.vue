<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="app-title">{{ appTitle }}</span>
    </md-app-toolbar>

    <md-app-content>
      <RecipeList/>
    </md-app-content>
  </md-app>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }
</style>


<script>
import RecipeList from '~/components/RecipeList.vue'

export default {
  components: { RecipeList },
  data: () => Object.assign({
    appTitle: process.env.APP_TITLE
  })
}
</script>
