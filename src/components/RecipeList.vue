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

  export default {
    components: { draggable },
    data () {
      return {
        recipes : [
          { id: 1, title: 'Tartiflette' },
          { id: 2, title: 'Saumon mariné & nouilles sautées' },
          { id: 3, title: 'Cake Bannane Chocolat' },
          { id: 4, title: 'Côtelettes de porc avec compote de figues' },
          { id: 5, title: 'Truite poêlée & salsa aux herbes' },
          { id: 6, title: 'Salade aux pois chiches buffalo' },
          { id: 7, title: 'Poulet tandoori aux épices' },
          { id: 8, title: 'Hamburgers de porc BBQ avec oignons frits' },
          { id: 9, title: 'Aiglefin avec salsa aux agrumes' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  $list-width: 320px;

  .full-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

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
