//priority: 0
console.info('Hello, World! (You will see this line every time server resources reload)')
onEvent('recipes', event => {

	shapedRecipes.forEach(recipe => {
		event.shaped(recipe.output, recipe.pattern, recipe.key)
	})
	shapelessRecipes.forEach(recipe => {
		event.shapeless(recipe.output, recipe.input)
	})
	IEmetalpress.forEach(recipe => {
		event.recipes.immersiveengineeringMetalPress(recipe.output, recipe.input, recipe.mold)
	})
	IEcrusher.forEach(recipe => {
		event.recipes.immersiveengineeringCrusher(recipe.output, recipe.input)
	})
	removeRecipes.forEach(item => {
		event.remove({ output: item, type: 'minecraft:crafting_shaped' })
		event.remove({ output: item, type: 'minecraft:crafting_shapeless' })
	})
	removeById.forEach(recipe => {
		event.remove({ id: recipe })
	})
	removebyoutput.forEach(recipe => {
		event.remove({ output: recipe })
	})
	removebyinput.forEach(recipe => {
		event.remove({ input: recipe })
	})
	extendedshapedrecipes.forEach(recipe => {
		event.recipes.extendedcrafting.shaped_table(recipe.output, recipe.pattern, recipe.key)
	})
	extendedshapelessrecipes.forEach(recipe => {
		event.recipes.extendedcrafting.shapeless_table(recipe.output, recipe.input)
	})
	createPressing.forEach(recipe => {
		event.recipes.createPressing(recipe.output, recipe.input)
	})
	thermalpressing.forEach(recipe => {
		event.recipes.thermal.press(recipe.output, recipe.input, recipe.die)
	})
	MekanismCombiner.forEach(recipe => {
	event.recipes.mekanismCombining(recipe.output, recipe.input1, recipe.input2)
	})
	furnace.forEach(recipe => {
		event.smelting(recipe.output, recipe.input)
	})
})



onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})