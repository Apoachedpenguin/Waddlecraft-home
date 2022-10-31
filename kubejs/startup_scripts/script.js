// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('ultimate_honeycomb').displayName('Ultimate Honeycomb').food(food => {
		food
			.hunger(16)
			.saturation(16)
			.eaten(ctx => {//runs code upon consumption
				ctx.player.tell('delicious! but.. was it worth it?')
			})
	})
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
event.create('chaos_block').material('glass').hardness(4.0).displayName('Chaos Block')
})