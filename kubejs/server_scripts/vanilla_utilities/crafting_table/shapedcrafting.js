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
	//botania / mythicbotany
	{
		output: 'botania:runic_altar',
		pattern: [
			'   ',
			'AAA',
			'BCB'
		],
		key: {
			A: Item.of('elementalcraft:pure_ore', '{elementalcraft:{ore:{id:"astralsorcery:rock_crystal_ore",Count:1b}}}'),
			B: 'botania:livingrock',
			C: 'botania:mana_pearl'

		},
		id: 'botania:runic_altar'
	},
	{
		output: 'mythicbotany:mana_infuser',
		pattern: [
			'AAA',
			'BCD',
			'EFG'
		],
		key: {
			A: 'botania:elementium_ingot',
			B: 'botania:rune_spring',
			C: 'bloodmagic:masterritualstone',
			D: 'botania:rune_winter',
			E: 'botania:rune_summer',
			F: 'mythicbotany:asgard_rune',
			G: 'botania:rune_autumn'

		},
		id: 'mythicbotany:mana_infuser'
	
	},
	//bloodmagic
	{
		output: 'bloodmagic:alchemytable',
		pattern: [
			'AAA',
			'BCB',
			'DED'
		],
		key: {
			A: 'botania:livingrock',
			B: 'astralsorcery:infused_wood',
			C: 'astralsorcery:resonating_gem',
			D: 'astralsorcery:starmetal_ingot',
			E: 'bloodmagic:blankslate'

		},
		id: 'bloodmagic:alchemytable'
	},
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
	{
		output: 'waddlecraft:chaos_block',
		pattern: [
			'ABA',
			'BBB',
			'ABA'
		],
		key: {
			A: 'draconicevolution:chaos_shard',
			B: 'compressium:obsidian_3'
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
			'ADA',
			'BCB',
			'ADA'
		],
		key: {
			A: 'minecraft:coal',
			B: 'thermal:diamond_dust',
			C: 'botania:mana_powder',
			D: 'gobber2:gobber2_glob'
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
		output: 'cyclic:heart',
		pattern: [
			'FAF',
			'BCD',
			'FEF'
		],
		key: {
			A: 'iceandfire:fire_dragon_heart',
			B: 'iceandfire:ice_dragon_heart',
			C: 'enigmaticlegacy:earth_heart',
			D: 'iceandfire:lightning_dragon_heart',
			E: 'iceandfire:hydra_heart',
			F: 'quark:diamond_heart'

		},
		id: 'cyclic:heart'
	},
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
	{
		output: 'cyclic:battery',
		pattern: [
			'ABA',
			'CDC',
			'ABA'
		],
		key: {
			A: '#minecraft:planks',
			B: 'mekanism:ingot_steel',
			C: 'minecraft:redstone',
			D: 'immersiveengineering:coil_lv'

		},
		id: 'cyclic:battery'
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
	{
		output: 'powersuits:tinkertable',
		pattern: [
			' A ',
			'BCB',
			' D '
		],
		key: {
			A: 'minecraft:emerald_block',
			B: 'extendedcrafting:the_ultimate_ingot',
			C: 'industrialforegoing:machine_frame_supreme',
			D: 'mekanism:alloy_atomic'

		},
		id: 'powersuits:tinkertable'
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
	},
	//bees and centrifuge! (see resourceful bees for more!)
	{
		output: 'resourcefulbees:t1_beehive',
		pattern: [
			'ABA',
			'DCD',
			'ABA'
		],
		key: {
			A: 'minecraft:iron_ingot',
			B: '#minecraft:planks',
			C: 'minecraft:beehive',
			D: '#resourcefulbees:resourceful_honeycomb'
		},
		id: 'resourcefulbees:t1_beehive'
	},
	{
		output: 'resourcefulbees:t2_beehive',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: '#resourcefulbees:resourceful_honeycomb',
			B: 'resourcefulbees:wax',
			C: 'resourcefulbees:t1_beehive',
		},
		id: 'resourcefulbees:t2_beehive_nests'
	},
	{
		output: 'resourcefulbees:t3_beehive',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: '#resourcefulbees:resourceful_honeycomb_block',
			B: 'resourcefulbees:wax_block',
			C: 'resourcefulbees:t2_beehive',
		},
		id: 'resourcefulbees:t3_beehive_nests'
	},
	{
		output: 'resourcefulbees:t4_beehive',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: '#resourcefulbees:resourceful_honeycomb_block',
			B: '#resourcefulbees:resourceful_honey_block',
			C: 'resourcefulbees:t3_beehive',
		},
		id: 'resourcefulbees:t4_beehive_nests'
	},
	{
		output: 'ctiers:centrifuge_casing_tier_creative',
		pattern: [
			'ABA',
			'CDE',
			'AFA'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'compressium:netherite_4',
			C: 'compressium:diamond_4',
			D: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:ultimate_honeycomb"}'),
			E: 'compressium:emerald_4',
			F: 'compressium:gold_4'
		}
	},
	{
		output: 'resourcefulbees:t1_apiary',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: '#resourcefulbees:resourceful_honeycomb_block',
			B: 'resourcefulbees:t4_beehive',
			C: 'minecraft:nether_star',
		},
		id: 'resourcefulbees:t1_apiary'
	},
	{
		output: 'ctiers:centrifuge_controller_tier_creative',
		pattern: [
			'ABA',
			'CDC',
			'AEA'
		],
		key: {
			A: 'extendedcrafting:ultimate_singularity',
			B: 'ctiers:centrifuge_casing_tier_creative',
			C: 'minecraft:ender_eye',
			D: 'ctiers:centrifuge_controller_tier_5',
			E: 'minecraft:ender_pearl',
		}
	},
	//mekanism
	{
		output: 'mekanismgenerators:heat_generator',
		pattern: [
			'BBB',
			'ACA',
			'ADA'
		],
		key: {
			A: 'mekanism:ingot_steel',
			B: 'minecraft:iron_ingot',
			C: 'mekanism:ingot_osmium',
			D: 'minecraft:blast_furnace'

		},
		id: 'mekanismgenerators:generator/heat'
	},
	{
		output: 'mekanism:jetpack_armored',
		pattern: [
			'ABA',
			'DED',
			'C C'
		],
		key: {
			A: 'thermal:netherite_plate',
			B: 'mekanism:jetpack',
			C: 'thermal:bronze_ingot',
			D: 'mekanism:elite_chemical_tank',
			E: 'immersiveengineering:armor_steel_chest'

		},
		id: 'mekanism:jetpack_armored'
	},
	{
		output: 'mekanism:jetpack',
		pattern: [
			'EDE',
			'ACA',
			'B B'
		],
		key: {
			A: 'mekanism:basic_chemical_tank',
			B: 'thermal:bronze_ingot',
			C: 'quark:rope',
			D: 'mekanism:alloy_reinforced',
			E: 'immersiveengineering:component_steel'

		},
		id: 'mekanism:jetpack'
	},
	{
		output: 'mekanism:electrolytic_core',
		pattern: [
			'ABA',
			'CDE',
			'ABA'
		],
		key: {
			A: 'immersiveengineering:wirecoil_electrum',
			B: 'mekanism:dust_osmium',
			C: 'thermal:iron_dust',
			D: 'mekanism:alloy_reinforced',
			E: 'thermal:gold_dust'

		},
		id: 'mekanism:electrolytic_core'
	},
	{
		output: 'envirocore:item_output',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:iron_ingot',
			B: 'botania:quartz_dark',
			C: 'minecraft:hopper',

		},
		id: 'waddlecraft:item_output'
	},
	{
		output: 'waddlecraft:fe_input_node',
		pattern: [
			'ABB',
			'ACA',
			'BBA'
		],
		key: {
			A: 'envirocore:obsidian_plate',
			B: 'minecraft:gold_ingot',
			C: 'botania:quartz_red',

		},
		id: 'waddlecraft:energy_input'
	},
	{
		output: 'waddlecraft:fe_output_node',
		pattern: [
			'BAA',
			'BCB',
			'AAB'
		],
		key: {
			A: 'envirocore:obsidian_plate',
			B: 'minecraft:gold_ingot',
			C: 'botania:quartz_red',

		},
		id: 'waddlecraft:energy_output'
	},
	//item collectors
	{
		output: 'itemcollectors:basic_collector',
		pattern: [
			' A ',
			' B ',
			'CCC'
		],
		key: {
			A: 'minecraft:ender_pearl',
			B: 'minecraft:hopper',
			C: 'minecraft:obsidian',

		},
		id: 'itemcollectors:basic_collector'
	},
	//masterful machinery blocks
	{
		output: 'masterfulmachinery:psi_reactor_controller',
		pattern: [
			'AAA',
			'ABA',
			'AAA'
		],
		key: {
			A: 'psi:lit_white_psimetal_plate',
			B: 'computercraft:computer_advanced'

		},
		id: 'waddlecraft:psi_reactor_controller'
	},
	{
		output: 'masterfulmachinery:psi_reactor_rl_port_items_input',
		pattern: [
			'AAA',
			'ABA',
			'AAA'
		],
		key: {
			A: 'psi:lit_white_psimetal_plate',
			B: 'minecraft:hopper'

		},
		id: 'waddlecraft:psi_item_input'
	},
	{
		output: 'masterfulmachinery:psi_reactor_rl_port_items_output',
		pattern: [
			'AAA',
			'ABA',
			'ACA'
		],
		key: {
			A: 'psi:lit_white_psimetal_plate',
			B: 'minecraft:hopper',
			C: 'minecraft:chest'

		},
		id: 'waddlecraft:psi_item_output'
	},
	{
		output: 'masterfulmachinery:psi_reactor_b_port_energy_input',
		pattern: [
			'AAA',
			'ABA',
			'AAA'
		],
		key: {
			A: 'psi:lit_white_psimetal_plate',
			B: 'waddlecraft:fe_input_node'

		},
		id: 'waddlecraft:psi_energy_input'
	},
	{
		output: 'masterfulmachinery:waddle_ultima_controller',
		pattern: [
			'AAA',
			'ABA',
			'AAA'
		],
		key: {
			A: 'projecte:dark_matter_block',
			B: 'computercraft:computer_advanced'

		},
		id: 'waddlecraft:waddle_ultima_controller'
	},
	{
		output: 'masterfulmachinery:waddle_ultima_the_god_creator_port_items_input',
		pattern: [
			'AAA',
			'ABA',
			'AAA'
		],
		key: {
			A: 'projecte:dark_matter_block',
			B: 'minecraft:hopper'

		},
		id: 'waddlecraft:waddle_item_input'
	},
	{
		output: 'masterfulmachinery:waddle_ultima_the_god_creator_port_items_output',
		pattern: [
			'AAA',
			'ABA',
			'ACA'
		],
		key: {
			A: 'projecte:dark_matter_block',
			B: 'minecraft:hopper',
			C: 'minecraft:chest'

		},
		id: 'waddlecraft:waddle_item_output'
	},
	{
		output: 'masterfulmachinery:waddle_ultima_reactor_go_brrrr_port_energy_input',
		pattern: [
			'AAA',
			'ABA',
			'AAA'
		],
		key: {
			A: 'projecte:dark_matter_block',
			B: 'waddlecraft:fe_input_node'

		},
		id: 'waddlecraft:waddle_energy_input'
	},
	{
		output: 'masterfulmachinery:waddle_ultima_big_port_fluids_input',
		pattern: [
			'AAA',
			'ABA',
			'AAA'
		],
		key: {
			A: 'projecte:dark_matter_block',
			B: 'mekanism:advanced_fluid_tank'

		},
		id: 'waddlecraft:waddle_fluid_input'
	},
	//applied energistics
	{
		output: '5x appliedenergistics2:sky_stone_block',
		pattern: [
			'AAA',
			'ABA',
			'AAA'
		],
		key: {
			A: 'minecraft:stone',
			B: 'envirocore:erodium_crystal'

		},
		id: 'appliedenergistics2:sky_stone_block'
	},
	//silentgear
	{
		output: '8x silentgear:glittery_dust',
		pattern: [
			'ABA',
			'DCD',
			'ABA'
		],
		key: {
			A: 'minecraft:popped_chorus_fruit',
			B: Item.of('silentgear:custom_gem', '{Material:"dimerald"}'),
			C: 'cagedmobs:nether_star_fragment',
			D: 'minecraft:glowstone_dust'

		},
		id: 'silentgear:glittery_dust'
	},
	//cabletiers / refined storage
	{
		output: 'cabletiers:elite_importer',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:iron_block',
			B: 'refinedstorage:importer',
			C: 'extrastorage:neural_processor'

		},
		id: 'cabletiers:elite_importer'
	},
	{
		output: 'cabletiers:ultra_importer',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:diamond_block',
			B: 'cabletiers:elite_importer',
			C: 'minecraft:netherite_ingot'

		},
		id: 'cabletiers:ultra_importer'
	},
	{
		output: 'cabletiers:creative_importer',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'cabletiers:ultra_importer',
			C: 'minecraft:dragon_head'

		},
		id: 'cabletiers:creative_importer'
	},
	{
		output: 'cabletiers:elite_exporter',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:iron_block',
			B: 'refinedstorage:exporter',
			C: 'extrastorage:neural_processor'

		},
		id: 'cabletiers:elite_exporter'
	},
	{
		output: 'cabletiers:ultra_exporter',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:diamond_block',
			B: 'cabletiers:elite_exporter',
			C: 'minecraft:netherite_ingot'

		},
		id: 'cabletiers:ultra_exporter'
	},
	{
		output: 'cabletiers:creative_exporter',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'cabletiers:ultra_exporter',
			C: 'minecraft:dragon_head'

		},
		id: 'cabletiers:creative_exporter'
	},
	{
		output: 'cabletiers:elite_constructor',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:iron_block',
			B: 'refinedstorage:constructor',
			C: 'extrastorage:neural_processor'

		},
		id: 'cabletiers:elite_constructor'
	},
	{
		output: 'cabletiers:ultra_constructor',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:diamond_block',
			B: 'cabletiers:elite_constructor',
			C: 'minecraft:netherite_ingot'

		},
		id: 'cabletiers:ultra_constructor'
	},
	{
		output: 'cabletiers:creative_constructor',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'cabletiers:ultra_constructor',
			C: 'minecraft:dragon_head'

		},
		id: 'cabletiers:creative_constructor'
	},
	{
		output: 'cabletiers:elite_destructor',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:iron_block',
			B: 'refinedstorage:destructor',
			C: 'extrastorage:neural_processor'

		},
		id: 'cabletiers:elite_destructor'
	},
	{
		output: 'cabletiers:ultra_destructor',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:diamond_block',
			B: 'cabletiers:elite_destructor',
			C: 'minecraft:netherite_ingot'

		},
		id: 'cabletiers:ultra_destructor'
	},
	{
		output: 'cabletiers:creative_destructor',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'cabletiers:ultra_destructor',
			C: 'minecraft:dragon_head'

		},
		id: 'cabletiers:creative_destructor'
	},
	{
		output: 'cabletiers:elite_disk_manipulator',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:iron_block',
			B: 'refinedstorage:disk_manipulator',
			C: 'extrastorage:neural_processor'

		},
		id: 'cabletiers:elite_disk_manipulator'
	},
	{
		output: 'cabletiers:ultra_disk_manipulator',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:diamond_block',
			B: 'cabletiers:elite_disk_manipulator',
			C: 'minecraft:netherite_ingot'

		},
		id: 'cabletiers:ultra_disk_manipulator'
	},
	{
		output: 'cabletiers:creative_disk_manipulator',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'cabletiers:ultra_disk_manipulator',
			C: 'minecraft:dragon_head'

		},
		id: 'cabletiers:creative_disk_manipulator'
	},
	{
		output: 'cabletiers:elite_requester',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:iron_block',
			B: 'rsrequestify:requester',
			C: 'extrastorage:neural_processor'

		},
		id: 'cabletiers:elite_requester'
	},
	{
		output: 'cabletiers:ultra_requester',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'minecraft:diamond_block',
			B: 'cabletiers:elite_requester',
			C: 'minecraft:netherite_ingot'

		},
		id: 'cabletiers:ultra_requester'
	},
	{
		output: 'cabletiers:creative_requester',
		pattern: [
			'ABA',
			'BCB',
			'ABA'
		],
		key: {
			A: 'extendedcrafting:the_ultimate_ingot',
			B: 'cabletiers:ultra_requester',
			C: 'minecraft:dragon_head'

		},
		id: 'cabletiers:creative_requester'
	},
	//mana and artifice
	{
		output: '2x waddlecraft:chimerite_dust',
		pattern: [
			' A ',
			'BCD',
			' E '
		],
		key: {
			A: 'thermal:diamond_dust',
			B: 'thermal:emerald_dust',
			C: 'waddlecraft:compressed_earth',
			D: 'mekanism:dust_coal',
			E: 'mana-and-artifice:purified_vinteum_dust'

		},
		id: 'waddlecraft:chimerite_dust'
	}
]