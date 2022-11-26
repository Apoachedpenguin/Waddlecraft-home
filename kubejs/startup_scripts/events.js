// priority: 0

onEvent('item.registry', event => {
	//NEW ITEMS
	newItem.forEach(item => {
		event.create(item.item).displayName(item.name)
	})

	//NEW FOODS
	newFood.forEach(foodvalue => {

		if (foodvalue.eatencode == null) {
			event.create(foodvalue.ID).displayName(foodvalue.foodname).food(food => {
				newFood.forEach(foodvalue => {
					food
						.hunger(foodvalue.hunger)
						.saturation(foodvalue.saturation)
				})
			})
		}
		else {
			event.create(foodvalue.ID).displayName(foodvalue.foodname).food(food => {
				food
					.hunger(foodvalue.hunger)
					.saturation(foodvalue.saturation)
					.eaten(ctx => {
						foodvalue.eatencode
					})
			})
		}
	})
})
onEvent('block.registry', event => {
	newBlocks.forEach(blockvalue => {
		event.create(blockvalue.ID).material(blockvalue.material).hardness(blockvalue.hardness).displayName(blockvalue.blockname)
	})
})