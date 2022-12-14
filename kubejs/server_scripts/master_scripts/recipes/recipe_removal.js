//priority 1

//removal for ALL recipes (in crafting table)
const removeRecipes = [
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
    'projecte:repair_talisman',
    'immersiveengineering:plate_uranium',
    'mekanism:metallurgic_infuser',
    '/cyclic:emerald_.*/',
    '/cyclic:apple_.*/',
    '/cyclic:crystal_.*/',
    'cyclic:mattock',
    'rftoolsdim:dimension_builder',
    'powersuits:powerarmor_head',
    'powersuits:powerarmor_torso',
    'powersuits:powerarmor_legs',
    'powersuits:powerarmor_feet',
    'powersuits:powerfist',
    'cyclic:generator_fuel',
    'cyclic:generator_food',
    'cyclic:generator_fluid',
    'cyclic:generator_item',
    'cyclic:peat_generator',
    'enchantinginfuser:enchanting_infuser',
    'enchantinginfuser:advanced_enchanting_infuser',
    'cyclic:battery',
    'stevesicbm:gold_wire',
    'envirocore:item_output',
    '/extrastorage:storagepart_.*/',
    '/extrastorage:disk_.*/',
    '/extrastorage:block_.*/'
]

//Remove any recipe USING an item (all)
const removebyinput = [
    'gobber2:gobber2_ore_end',
    'gobber2:gobber2_ore',
    'gobber2:gobber2_ore_nether'
]
//Remove any recipe WHICH OUTPUTS an item (all)
const removebyoutput = [
    'rats:raw_plastic',
    '/upgradednetherite_ultimate.*/',
]

//Remove by recipe ID.
const removeById = [
    'projecte:dark_matter',
    'projecte:red_matter_alt',
    'projecte:red_matter',
    '/immersiveengineering:metalpress\/plate.*/',
    '/thermal:parts\/.*gear/',
    'botania:pure_daisy/livingrock',
    'botania:pure_daisy/livingwood',
    'createadditions:pressing/zinc_ingot',
    'pneumaticcraft:compressed_iron_gear',
    '/immersiveengineering:crafting\/(raw_hammercrushing.*|hammercrushing.*|plate.*)/',
    'gobber2:gobber2_helmet_dragon_smithing',
    'gobber2:gobber2_chestplate_dragon_smithing',
    'gobber2:gobber2_leggings_dragon_smithing',
    'gobber2:gobber2_boots_dragon_smithing',
    'materialis:smeltery/casting/metal/draconium/block',
    'materialis:smeltery/casting/metal/draconium/nugget_gold_cast',
    'materialis:smeltery/casting/metal/draconium/nugget_sand_cast',
    'materialis:smeltery/casting/metal/draconium/ingot_gold_cast',
    'materialis:smeltery/casting/metal/draconium/ingot_sand_cast',
    'draconicevolution:draconium_ingot',
    'draconicevolution:components/draconium_ingot',
    'stevesicbm:light_compressed_gunpowder_recipe',
    'quark:building/crafting/compressed/gunpowder_sack',
    'silentgear:nether_star_from_fragments',
    'cyclic:solidifier_obs',
]
//recipe removal
