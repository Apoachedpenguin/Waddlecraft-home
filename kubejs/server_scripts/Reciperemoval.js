//priority 1

//removal for ALL recipes (in crafting table)
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
    'projecte:repair_talisman',
    'itemcollectors:basic_collector'
]

//Remove any recipe USING an item (all)
const removebyinput = [
    'immersiveengineering:hammer.ignoreNBT()'
]
//Remove any recipe WHICH OUTPUTS an item (all)
const removebyoutput = [
    'rats:raw_plastic'
]

//Remove by recipe ID.
const removeById = [
    'projecte:dark_matter',
    'projecte:red_matter',
    'bloodmagic:altar/slate',
    'bloodmagic:altar/earth_tool',
    'bloodmagic:altar/air_tool',
    'bloodmagic:altar/water_tool',
    'bloodmagic:altar/fire_tool',
    'bloodmagic:altar/dusk_tool',
    'bloodmagic:altar/masterbloodorb',
    'bloodmagic:altar/weakbloodorb',
    'bloodmagic:altar/apprenticebloodorb',
    'bloodmagic:altar/magicianbloodorb',
    'bloodmagic:altar/daggerofsacrifice',
    'bloodmagic:altar/soul_snare',
    '/immersiveengineering:metalpress\/plate.*/',
    '/thermal:parts\/.*gear/',
    'botania:pure_daisy/livingrock',
    'botania:pure_daisy/livingwood',
    'create:pressing/brass_ingot',
    'createadditions:pressing/zinc_ingot',
    'pneumaticcraft:compressed_iron_gear'
]
