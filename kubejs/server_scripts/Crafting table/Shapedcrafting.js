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
			B: 'pneumaticcraft:pneumatic_cylinder',
			C: 'pneumaticcraft:printed_circuit_board'
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
]