// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	const removeRecipes = [
		'cyclic:heart',
		'cyclic:charm_creeper',
		'cyclic:soulstone',
		'psi:cad_assembler',
		'psi:programmer',
		'psi:cad_assembly_iron',
		'psi:cad_assembly_gold',
		'psi:cad_assembly_psimetal',
		'psi:cad_assembly_ebony_psimetal',
		'psi:cad_assembly_ivory_psimetal',
		'thermal:machine_frame',
		'industrialforegoing:machine_frame_pity',
		'mekanism:steel_casing',
		'powah:dielectric_paste',
		'tiab:timeinabottle',
		'immersiveengineering:component_iron',
		'immersiveengineering:component_steel',
		'draconicevolution:draconium_core',
		'draconicevolution:wyvern_core',
		'ctiers:centrifuge_casing_tier_creative',
		'ctiers:centrifuge_controller_tier_creative',
		'extendedcrafting:black_iron_ingot',
		'rats:rat_whistle',
		'refinedstorage:processor_binding',
		'immersiveengineering:blastbrick',
		'bloodmagic:sacrificialdagger',
		'bloodmagic:altar',
		'rftoolsbase:machine_base',
		'rftoolsbase:machine_frame',
		'projecte:alchemical_chest',
		'projecte:collector_mk1',
		'projecte:collector_mk2',
		'projecte:collector_mk3',
		'projecte:condenser_mk1',
		'projecte:condenser_mk2',
		'projecte:transmutation_table',
		'projecte:relay_mk1',
		'projecte:relay_mk2',
		'projecte:relay_mk3',
		'projecte:philosophers_stone',
		'projecte:klein_star_ein',
		'projecte:alchemical_coal',
		'projecte:low_covalence_dust',
		'projecte:medium_covalence_dust',
		'projecte:high_covalence_dust',
		'projecte:watch_of_flowing_time',
		'projecte:transmutation_tablet',
		'projecte:repair_talisman'
	]

	const removeById = [
		'projecte:dark_matter',
		'projecte:red_matter',
	]

	removeRecipes.forEach(item => {
		event.remove({ output: item, type: 'minecraft:crafting_shaped' })
		event.remove({ output: item, type: 'minecraft:crafting_shapeless' })
	})

	removeById.forEach(recipe => {
		event.remove({ id: recipe })
	})

	onEvent('recipes', event => {
		const shapedRecipes = [
			{
				output: 'minecraft:stone',
				pattern: [
					'ABA',
					'A A',
					'ABA'
				],
				key: {
					A: '',
					B: ''
				}
			},
			{
				output: '',
				pattern: [
					'KJK',
					'JKJ',
					'KJK'
				],
				key: {
					K: '',
					J: ''
				}
			}
		]
	
		shapedRecipes.forEach(recipe => {
			event.shaped(recipe.output, recipe.pattern, recipe.key)
		})
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})