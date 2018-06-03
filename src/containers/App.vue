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
