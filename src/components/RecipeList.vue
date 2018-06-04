<template>
  <div>
    <md-subheader>Recipees</md-subheader>
    <md-list>
      <draggable :list="recipes">
        <md-list-item v-for="recipe of recipes" :key=recipe.id>
          <span class="md-list-item-text">{{ recipe.title }}</span>
        </md-list-item>
      </draggable>
    </md-list>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import { mapGetters } from 'vuex'

  export default {
    components: { draggable },
    computed: mapGetters({
      recipes: 'allRecipes'
    }),
    created() {
      this.$store.dispatch('checkoutRecipes')
    }
  }
</script>

<style lang="scss" scoped>
  $list-width: 320px;

  .list {
    width: $list-width;
  }

  .full-control > .md-list {
    width: $list-width;
    max-width: 100%;
    height: 400px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
  }

  .control {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
</style>
