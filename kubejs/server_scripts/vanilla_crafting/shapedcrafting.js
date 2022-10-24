//priority 1

const shapedRecipes = [
	//industrialforegoing
	{
		output: '2x industrialforegoing:machine_frame_pity',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:oak_wood',
			B: 'thermal:iron_gear',
			C: 'immersiveengineering:rs_engineering'
		}
	},
	//immersiveengineering
	{
		output: '6x immersiveengineering:blastbrick',
		pattern: [
			'KJK',
			'JLJ',
			'KJK'
		],
		key: {
			K: 'minecraft:nether_brick',
			J: 'thermal:iron_plate',
			L: 'minecraft:magma_block'
		}
	},
	//thermal
	{
		output: 'thermal:machine_frame',
		pattern: [
			'KJK',
			'JLJ',
			'KJK'
		],
		key: {
			K: 'immersiveengineering:sheetmetal_steel',
			J: 'immersiveengineering:sheetmetal_silver',
			L: 'minecraft:iron_block'
		}
	},
	//bloodmagic
	{
		output: 'bloodmagic:sacrificialdagger',
		pattern: [
			'  B',
			' B ',
			'A  '
		],
		key: {
			A: 'botania:manasteel_ingot',
			B: 'botania:mana_glass'
		}
	},
	//rftools
	{
		output: 'rftoolsbase:machine_frame',
		pattern: [
			'AAA',
			'BCB',
			'AAA'
		],
		key: {
			A: 'rftoolsbase:dimensionalshard',
			B: 'mekanism:ingot_steel',
			C: 'thermal:machine_frame'
		}
	},
	{
		output: 'rftoolsbase:machine_base',
		pattern: [
			'   ',
			'AAA',
			'BBB'
		],
		key: {
			A: 'rftoolsbase:dimensionalshard',
			B: 'mekanism:ingot_steel'
		}
	},
	//draconicevolution
	{
		output: 'draconicevolution:draconium_core',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'draconicevolution:draconium_ingot',
			B: 'botania:manasteel_ingot',
			C: 'minecraft:diamond_block'
		}
	},
	{
		output: 'draconicevolution:wyvern_core',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'draconicevolution:draconium_ingot',
			B: 'draconicevolution:draconium_core',
			C: 'envirocore:xerothium_crystal'
		}
	},
	//PSI
	{
		output: 'psi:cad_assembly_iron',
		pattern: [
			'   ',
			'AAB',
			'AC '
		],
		key: {
			A: 'minecraft:iron_ingot',
			B: 'immersiveengineering:gunpart_barrel',
			C: 'pneumaticcraft:air_canister'
		}
	},
	{
		output: 'psi:cad_assembly_gold',
		pattern: [
			'   ',
			'AAB',
			'AC '
		],
		key: {
			A: 'minecraft:gold_ingot',
			B: 'immersiveengineering:gunpart_barrel',
			C: 'pneumaticcraft:air_canister'
		}
	},
	{
		output: 'psi:cad_assembly_psimetal',
		pattern: [
			'   ',
			'AAB',
			'AC '
		],
		key: {
			A: 'psi:psimetal',
			B: 'immersiveengineering:gunpart_barrel',
			C: 'pneumaticcraft:air_canister'
		}
	},
	{
		output: 'psi:cad_assembly_ebony_psimetal',
		pattern: [
			'   ',
			'ABC',
			'BD '
		],
		key: {
			A: 'psi:psigem',
			B: 'psi:ebony_psimetal',
			C: 'pneumaticcraft:pneumatic_cylinder',
			D: 'pneumaticcraft:advanced_pcb'
		}
	},
	{
		output: 'psi:cad_assembly_ivory_psimetal',
		pattern: [
			'   ',
			'ABC',
			'BD '
		],
		key: {
			A: 'psi:psigem',
			B: 'psi:ivory_psimetal',
			C: 'pneumaticcraft:pneumatic_cylinder',
			D: 'pneumaticcraft:advanced_pcb'
		}
	},
	{
		output: 'psi:cad_assembler',
		pattern: [
			'ABA',
			'CDC',
			'CCC'
		],
		key: {
			A: 'pneumaticcraft:air_canister',
			B: 'pneumaticcraft:capacitor',
			C: 'pneumaticcraft:ingot_iron_compressed',
			D: 'pneumaticcraft:compressed_iron_block'
		}
	},
	{
		output: 'psi:programmer',
		pattern: [
			'ABA',
			'ACA',
			'DDD'
		],
		key: {
			A: 'pneumaticcraft:network_node',
			B: 'pneumaticcraft:capacitor',
			C: 'pneumaticcraft:compressed_iron_block',
			D: 'pneumaticcraft:ingot_iron_compressed'
		}
	},
	//flux
	{
		output: '4x fluxnetworks:flux_dust',
		pattern: [
			' B ',
			'BAB',
			' B '
		],
		key: {
			A: 'minecraft:redstone',
			B: 'psi:ebony_substance'
		}
	},
	//extendedcrafting
	{
		output: '2x extendedcrafting:black_iron_ingot',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'rats:little_black_squash_balls',
			B: 'minecraft:black_dye',
			C: 'minecraft:iron_ingot'
		}
	},
	//ProjectE
	{
		output: '20x projecte:low_covalence_dust',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:charcoal',
			B: 'minecraft:cobblestone',
			C: 'minecraft:slime_ball'
		}
	},
	{
		output: '20x projecte:medium_covalence_dust',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:redstone',
			B: 'thermal:iron_dust',
			C: 'minecraft:lapis_lazuli'
		}
	},
	{
		output: '20x projecte:high_covalence_dust',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:coal',
			B: 'thermal:diamond_dust',
			C: 'botania:mana_powder'
		}
	},
	{
		output: 'projecte:repair_talisman',
		pattern: [
			'ABC',
			'DDD',
			'CBA'
		],
		key: {
			A: 'projecte:low_covalence_dust',
			B: 'projecte:medium_covalence_dust',
			C: 'botania:mana_powder',
			D: Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1)
		}
	},
	{
		output: 'projecte:transmutation_tablet',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'projecte:dark_matter_block',
			B: 'botania:dragonstone_block',
			C: 'projecte:transmutation_table'
		}
	},
	{
		output: 'projecte:transmutation_tablet',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'projecte:dark_matter_block',
			B: 'botania:dragonstone_block',
			C: 'projecte:transmutation_table'
		}
	},
	//mekanism
	{
		output: 'mekanism:metallurgic_infuser',
		pattern: [
			'ABA',
			'CDC',
			'ABA'
		],
		key: {
			A: 'thermal:iron_plate',
			B: 'minecraft:furnace',
			C: 'minecraft:redstone',
			D: 'mekanism:ingot_osmium'
		}
	},
	//Cyclic
	{
		output: 'cyclic:emerald_chestplate',
		pattern: [
			'A A',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:emerald',
			B: 'minecraft:emerald_block',
			C: 'minecraft:diamond_chestplate'
		}
	},
	{
		output: 'cyclic:emerald_leggings',
		pattern: [
			'BCB',
			'A A',
			'A A'
		],
		key: {
			A: 'minecraft:emerald',
			B: 'minecraft:emerald_block',
			C: 'minecraft:diamond_leggings'
		}
	},
	{
		output: 'cyclic:emerald_boots',
		pattern: [
			'   ',
			'ACA',
			'B B'
		],
		key: {
			A: 'minecraft:emerald',
			B: 'minecraft:emerald_block',
			C: 'minecraft:diamond_boots'
		}
	},
	{
		output: 'cyclic:emerald_helmet',
		pattern: [
			'   ',
			'BAB',
			'ACA'
		],
		key: {
			A: 'minecraft:emerald',
			B: 'minecraft:emerald_block',
			C: 'minecraft:diamond_helmet'
		}
	},
	{
		output: 'cyclic:emerald_axe',
		pattern: [
			'AB ',
			'AC ',
			' D '
		],
		key: {
			A: 'minecraft:emerald',
			B: 'minecraft:emerald_block',
			C: 'minecraft:diamond_axe',
			D: 'minecraft:stick'
		}
	},
	{
		output: 'cyclic:emerald_pickaxe',
		pattern: [
			'ABA',
			' C ',
			' D '
		],
		key: {
			A: 'minecraft:emerald',
			B: 'minecraft:emerald_block',
			C: 'minecraft:diamond_pickaxe',
			D: 'minecraft:stick'
		}
	},
	{
		output: 'cyclic:emerald_shovel',
		pattern: [
			' B ',
			' C ',
			' D '
		],
		key: {
			B: 'minecraft:emerald_block',
			C: 'minecraft:diamond_shovel',
			D: 'minecraft:stick'
		}
	},
	{
		output: 'cyclic:emerald_hoe',
		pattern: [
			'AB ',
			' C ',
			' D '
		],
		key: {
			A: 'minecraft:emerald',
			B: 'minecraft:emerald_block',
			C: 'minecraft:diamond_hoe',
			D: 'minecraft:stick'
		}
	},
	{
		output: 'cyclic:emerald_sword',
		pattern: [
			' A ',
			' B ',
			' C '
		],
		key: {
			A: 'minecraft:emerald',
			B: 'minecraft:emerald_block',
			C: 'minecraft:diamond_sword'
		}
	},
	{
		output: 'cyclic:crystal_chestplate',
		pattern: [
			'A A',
			'ABA',
			'AAA'
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_chestplate'
		}
	},
	{
		output: 'cyclic:crystal_leggings',
		pattern: [
			'ABA',
			'A A',
			'A A'
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_leggings'
		}
	},
	{
		output: 'cyclic:crystal_boots',
		pattern: [
			'   ',
			'ABA',
			'A A'
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_boots'
		}
	},
	{
		output: 'cyclic:crystal_helmet',
		pattern: [
			'   ',
			'AAA',
			'ABA'
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_helmet'
		}
	},
	{
		output: 'cyclic:crystal_axe',
		pattern: [
			'AA ',
			'AB ',
			' C '
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_axe',
			C: 'minecraft:diamond'
		}
	},
	{
		output: 'cyclic:crystal_pickaxe',
		pattern: [
			'AAA',
			' B ',
			' C '
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_pickaxe',
			C: 'minecraft:diamond'
		}
	},
	{
		output: 'cyclic:crystal_shovel',
		pattern: [
			' A ',
			' B ',
			' C '
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_shovel',
			C: 'minecraft:diamond'
		}
	},
	{
		output: 'cyclic:crystal_hoe',
		pattern: [
			'AA ',
			' B ',
			' C '
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_hoe',
			C: 'minecraft:diamond'
		}
	},
	{
		output: 'cyclic:crystal_sword',
		pattern: [
			' A ',
			' B ',
			' C '
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_sword',
			C: 'minecraft:diamond'
		}
	},
	{
		output: 'cyclic:mattock',
		pattern: [
			'BAA',
			' DA',
			'D C'
		],
		key: {
			A: 'cyclic:gem_obsidian',
			B: 'cyclic:emerald_pickaxe',
			C: 'cyclic:emerald_shovel',
			D: 'minecraft:diamond'
		}
	},
	{
		output: 'cyclic:generator_fuel',
		pattern: [
			'ADA',
			'BCB',
			'ADA'
		],
		key: {
			A: 'minecraft:blaze_rod',
			B: 'mekanism:ingot_steel',
			C: 'industrialforegoing:machine_frame_pity',
			D: 'immersiveengineering:wirecoil_copper'
		}
	},
	{
		output: 'cyclic:generator_food',
		pattern: [
			'ADA',
			'BCB',
			'ADA'
		],
		key: {
			A: 'minecraft:cake',
			B: 'mekanism:ingot_steel',
			C: 'industrialforegoing:machine_frame_pity',
			D: 'immersiveengineering:wirecoil_copper'
		}
	},
	{
		output: 'cyclic:generator_fluid',
		pattern: [
			'ADA',
			'BCB',
			'ADA'
		],
		key: {
			A: 'minecraft:lava_bucket',
			B: 'mekanism:ingot_steel',
			C: 'industrialforegoing:machine_frame_pity',
			D: 'immersiveengineering:wirecoil_copper'
		}
	},
	{
		output: 'cyclic:generator_item',
		pattern: [
			'ADA',
			'BCB',
			'ADA'
		],
		key: {
			A: 'minecraft:ender_eye',
			B: 'mekanism:ingot_steel',
			C: 'industrialforegoing:machine_frame_pity',
			D: 'immersiveengineering:wirecoil_copper'
		}
	},
	{
		output: 'cyclic:peat_generator',
		pattern: [
			'ADA',
			'BCB',
			'ADA'
		],
		key: {
			A: 'cyclic:peat_fuel',
			B: 'mekanism:ingot_steel',
			C: 'industrialforegoing:machine_frame_pity',
			D: 'immersiveengineering:wirecoil_copper'
		}
	},
	//RFtools
	{
		output: 'rftoolsdim:dimension_builder',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'extendedcrafting:ultimate_singularity',
			B: 'extendedcrafting:the_ultimate_ingot',
			C: 'extendedcrafting:the_ultimate_block'
		}
	},
	//Powersuits
	{
		output: 'powersuits:powerarmor_head',
		pattern: [
			'   ',
			'AAA',
			'C B'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'mekanism:mekasuit_helmet',
			C: 'pneumaticcraft:pneumatic_helmet'
		}
	},
	{
		output: 'powersuits:powerarmor_torso',
		pattern: [
			'A A',
			'CAB',
			'AAA'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'mekanism:mekasuit_bodyarmor',
			C: 'pneumaticcraft:pneumatic_chestplate'
		}
	},
	{
		output: 'powersuits:powerarmor_legs',
		pattern: [
			'AAA',
			'C B',
			'A A'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'mekanism:mekasuit_pants',
			C: 'pneumaticcraft:pneumatic_leggings'
		}
	},
	{
		output: 'powersuits:powerarmor_feet',
		pattern: [
			'A A',
			'C B',
			'   '
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'mekanism:mekasuit_boots',
			C: 'pneumaticcraft:pneumatic_boots'
		}
	},
	{
		output: 'powersuits:powerfist',
		pattern: [
			' A ',
			'ABA',
			'CDC'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'mekanism:meka_tool',
			C: 'pneumaticcraft:advanced_pressure_tube',
			D: 'pneumaticcraft:advanced_pcb'
		}
	},
	//Enchanting infuser
	{
		output: 'enchantinginfuser:enchanting_infuser',
		pattern: [
			' A ',
			'BBB',
			'BCB'
		],
		key: {
			A: 'minecraft:book',
			B: 'minecraft:netherite_ingot',
			C: 'minecraft:enchanting_table'
		}
	},
	{
		output: 'enchantinginfuser:advanced_enchanting_infuser',
		pattern: [
			'DDD',
			'BAB',
			'ACA'
		],
		key: {
			A: 'powah:crystal_blazing',
			B: 'minecraft:netherite_block',
			C: 'enchantinginfuser:enchanting_infuser',
			D: 'minecraft:enchanted_book'
		}
	},
	//ultimate netherite
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_sword',
		pattern: [
			' A ',
			' A ',
			' B '
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_pickaxe',
		pattern: [
			'AAA',
			' B ',
			' B '
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_shovel',
		pattern: [
			' A ',
			' B ',
			' B '
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_axe',
		pattern: [
			'AA ',
			'AB ',
			' B '
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_bow',
		pattern: [
			' AB',
			'A B',
			' AB'
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'silentgear:fine_silk'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_crossbow',
		pattern: [
			'ABA',
			'DCD',
			' A '
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot',
			C: 'minecraft:tripwire_hook',
			D: 'silentgear:fine_silk'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_shield',
		pattern: [
			'ABA',
			'BAB',
			' A '
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_helmet',
		pattern: [
			'AAA',
			'ABA',
			'   '
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_chestplate',
		pattern: [
			'ABA',
			'AAA',
			'AAA'
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_leggings',
		pattern: [
			'AAA',
			'ABA',
			'A A'
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_boots',
		pattern: [
			'B B',
			'A A',
			'A A'
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:netherite_ingot'
		}
	},
	{
		output: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_horse_armor',
		pattern: [
			' BA',
			'AAA',
			'A A'
		],
		key: {
			A: 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot',
			B: 'minecraft:red_carpet'

		}
	}

]
