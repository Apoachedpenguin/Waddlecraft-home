//priority: 0
console.info("Fluff line go brrr)")

onEvent('recipes', event => {
	//vanilla ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	shapedRecipes.forEach(recipe => {
		if (recipe.id == null) { event.shaped(recipe.output, recipe.pattern, recipe.key) }
		else { event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id) }
	})
	shapelessRecipes.forEach(recipe => {
		event.shapeless(recipe.output, recipe.input).id(recipe.id)
	})
	removeRecipes.forEach(item => {
		event.remove({ output: item, type: 'minecraft:crafting_shaped' })
		event.remove({ output: item, type: 'minecraft:crafting_shapeless' })
	})
	removebyinput.forEach(recipe => {
		event.remove({ input: recipe })
	})
	removeById.forEach(recipe => {
		event.remove({ id: recipe })
	})
	removebyoutput.forEach(recipe => {
		event.remove({ output: recipe })
	})
	furnace.forEach(recipe => {
		event.smelting(recipe.output, recipe.input)
	})

	//create ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	createPressing.forEach(recipe => {
		event.recipes.createPressing(recipe.output, recipe.input)
	})
	createEmptying.forEach(recipe => {
		event.recipes.createEmptying([
			recipe.output,
			Fluid.of(recipe.fluid, recipe.amount)
		], recipe.input)
	})


	//Immersive engineering -------------------------------------------------------------------------------------------------------------------------------------------------------------------

	IEmetalpress.forEach(recipe => {
		event.recipes.immersiveengineeringMetalPress(recipe.output, recipe.input, recipe.mold)
	})
	IEcrusher.forEach(recipe => {
		event.recipes.immersiveengineeringCrusher(recipe.output, recipe.input)
	})

	//extended crafting -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

	extendedshapedrecipes.forEach(recipe => {
		event.recipes.extendedcrafting.shaped_table(recipe.output, recipe.pattern, recipe.key)
	})
	extendedshapelessrecipes.forEach(recipe => {
		event.recipes.extendedcrafting.shapeless_table(recipe.output, recipe.input)
	})

	//pneumaticcraft --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	assembly.forEach(recipe => {
		event.custom({
			type: recipe.type,
			input: {
				"item": recipe.input,
				"count": recipe.count1
			},
			result: {
				"item": recipe.output,
				"count": recipe.count2
			},
			program: recipe.program
		})
	})

	pressurechamber.forEach(recipe => {
		event.custom({
			type: "pneumaticcraft:pressure_chamber",
			inputs: recipe.inputs,
			pressure: recipe.pressure,
			results: recipe.output
		})
	})
	explosioncrafting.forEach(recipe => {
		event.custom({
			type: "pneumaticcraft:explosion_crafting",
			input: {
				item: recipe.input
			},
			results: [
				{
					item: recipe.output
				}
			],
			loss_rate: recipe.loss
		}).id(recipe.ID)
	})


	//thermal ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	thermalpulverizer.forEach(recipe => {
		if (recipe.energy == null) { event.recipes.thermal.pulverizer(recipe.output, recipe.input) }
		else { event.recipes.thermal.pulverizer(recipe.output, recipe.input).energy(recipe.energy) }
	})
	thermalpressing.forEach(recipe => {
		if (recipe.die == null) { event.recipes.thermal.press(recipe.output, recipe.input) }
		else { event.recipes.thermal.press(recipe.output, [recipe.input, recipe.die]) }
	})
	thermalsmelting.forEach(recipe => {
		event.recipes.thermal.smelter(recipe.output, recipe.input).energy(recipe.energy)
	})

	//mekanism ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	mekanismCompressor.forEach(recipe => {
		event.recipes.mekanismCompressing(recipe.output, recipe.inputItem, recipe.inputGas)
	})
	mekanismCrusher.forEach(recipe => {
		event.recipes.mekanismCrushing(recipe.output, recipe.input)
	})
	mekanismEnricher.forEach(recipe => {
		event.recipes.mekanismEnriching(recipe.output, recipe.input)
	})
	mekanismCombiner.forEach(recipe => {
		event.recipes.mekanismCombining(recipe.output, recipe.input1, recipe.input2)
	})
	nucleosynthesizing.forEach(recipe => {
		event.custom({
			type: "mekanism:nucleosynthesizing",
			itemInput: { "ingredient": { "item": recipe.input } },
			gasInput: { "amount": recipe.antiamount, "gas": "mekanism:antimatter" },
			output: { "item": recipe.output },
			duration: recipe.duration
		})
	})

	//cyclic --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	solidifier.forEach(recipe => {
		event.custom({
			type: "cyclic:solidifier",
			inputTop:
				recipe.top
			,
			inputMiddle: {
				item: recipe.middle
			},
			inputBottom: {
				item: recipe.bottom
			},
			mix: {
				fluid: recipe.fluid,
				tag: recipe.fluidtag,
				count: recipe.amount
			},
			result: {
				item: recipe.output,
				count: recipe.count
			}
		}).id(recipe.ID)
	})


	//botania -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	daisy.forEach(recipe => {
		event.custom({
			type: 'botania:pure_daisy',
			input: {
				type: 'block',
				block: recipe.input
			},
			output: { name: recipe.output }
		})
	})

	//blood magic --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	BloodAltar.forEach(recipe => {
		event.recipes.bloodmagic.altar(recipe.output, recipe.input).upgradeLevel(recipe.tier).altarSyphon(recipe.drain).consumptionRate(recipe.speed).drainRate(recipe.drainrate).id(recipe.ID)
	}),
		alchemytable.forEach(recipe => {
			event.recipes.bloodmagic.alchemytable(recipe.output, recipe.input).syphon(recipe.syphon).ticks(recipe.ticks).upgradeLevel(recipe.level)
		})

	//tconstruct ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	melting.forEach(recipe => {
		event.custom({
			type: 'tconstruct:melting',
			ingredient: {
				item: recipe.input
			},
			result: {
				fluid: recipe.output,
				amount: recipe.amount
			},
			temperature: recipe.temperature,
			time: recipe.time
		})
	})

	//masterful machinery -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	psiMachine.forEach(recipe => {
		event.custom({
			type: "masterfulmachinery:machine_process",
			structureId: "psi_structure",
			controllerId: "psi_reactor",
			ticks: recipe.ticks,
			inputs: [
				{
					'type': 'masterfulmachinery:energy',
					'perTick': 'true',
					'data': { 'amount': recipe.energy }
				},
				{
					"type": "masterfulmachinery:items",
					"data": {
						"item": recipe.item,
						"count": recipe.count
					}
				}
			],
			outputs: [
				{
					"type": "masterfulmachinery:items",
					"data": {
						"item": recipe.output,
						"count": 1
					}
				}
			]
		})
	})

	//industrialforegoing ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	dissolution.forEach(recipe => {
		event.custom({
			input: recipe.input,
			inputFluid: recipe.fluidandamount,
			processingTime: recipe.time,
			output: {
				item: recipe.output,
				count: recipe.count
			},
			type: "industrialforegoing:dissolution_chamber"
		})
	})
	//extra scripts i didn't have time nor care to seperate ------------------------------------------------------------------------------------------------------------------------------------------

	event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:honeycomb', '#resourcefulbees:resourceful_honeycomb')
	event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:honeycomb', '#resourcefulbees:resourceful_honeycomb')
})