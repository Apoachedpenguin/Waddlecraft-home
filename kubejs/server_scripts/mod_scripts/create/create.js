const createPressing = [
    {
        output: 'thermal:copper_plate',
        input: 'thermal:copper_ingot'
    },
    {
        output: 'thermal:netherite_plate',
        input: 'minecraft:netherite_ingot'
    },
    {
        output: 'thermal:iron_plate',
        input: 'minecraft:iron_ingot'
    },
    {
        output: 'thermal:gold_plate',
        input: 'minecraft:gold_ingot'
    },
    {
        output: 'thermal:tin_plate',
        input: 'thermal:tin_ingot'
    },
    {
        output: 'thermal:lead_plate',
        input: 'thermal:lead_ingot'
    },
    {
        output: 'thermal:silver_plate',
        input: 'thermal:silver_ingot'
    },
    {
        output: 'thermal:nickel_plate',
        input: 'thermal:nickel_ingot'
    },
    {
        output: 'thermal:bronze_plate',
        input: 'thermal:bronze_ingot'
    },
    {
        output: 'thermal:electrum_plate',
        input: 'thermal:electrum_ingot'
    },
    {
        output: 'thermal:invar_plate',
        input: 'thermal:invar_ingot'
    },
    {
        output: 'thermal:constantan_plate',
        input: 'thermal:constantan_ingot'
    },
    {
        output: 'thermal:signalum_plate',
        input: 'thermal:signalum_ingot'
    },
    {
        output: 'thermal:lumium_plate',
        input: 'thermal:lumium_ingot'
    },
    {
        output: 'thermal:enderium_plate',
        input: 'thermal:enderium_ingot'
    },
    {
        output: 'immersiveengineering:plate_steel',
        input: 'mekanism:ingot_steel'
    },
    {
        output: 'immersiveengineering:plate_aluminum',
        input: 'immersiveengineering:ingot_aluminum'
    },

]

onEvent('recipes', event => {
    event.recipes.createSequencedAssembly([
        Item.of('draconicevolution:draconium_ingot').withChance(100.0)
    ], 'bloodmagic:masterbloodorb', [
        event.recipes.createDeploying('bloodmagic:masterbloodorb', ['bloodmagic:masterbloodorb', 'mythicbotany:alfsteel_ingot']),
        event.recipes.createPressing('bloodmagic:masterbloodorb', 'bloodmagic:masterbloodorb'),
        event.recipes.createDeploying('bloodmagic:masterbloodorb', ['bloodmagic:masterbloodorb', 'tconstruct:dragon_scale']),
        event.recipes.createPressing('bloodmagic:masterbloodorb', 'bloodmagic:masterbloodorb'),
        event.recipes.createFilling('bloodmagic:masterbloodorb', ['bloodmagic:masterbloodorb', Fluid.of('materialis:molten_draconium', 250)]),
        event.recipes.createCutting('bloodmagic:masterbloodorb', 'bloodmagic:masterbloodorb').processingTime(50)
    ]).transitionalItem('bloodmagic:masterbloodorb').loops(6)
})