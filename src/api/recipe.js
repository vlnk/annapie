import * as uuidv4 from 'uuid/v4'

const recipes = [
  'Tartiflette',
  'Saumon mariné & nouilles sautées',
  'Cake Bannane Chocolat',
  'Côtelettes de porc avec compote de figues',
  'Truite poêlée & salsa aux herbes',
  'Salade aux pois chiches buffalo',
  'Poulet tandoori aux épices',
  'Hamburgers de porc BBQ avec oignons frits',
  'Aiglefin avec salsa aux agrumes'
].map(r => {
  return {
    id: uuidv4(),
    title: r
  }
})

export default {
  async getAllRecipes () {
    const allRecipes = await new Promise(
      resolve => setTimeout(() => { resolve(recipes) }, 2000)
    )

    return allRecipes
  }
}
