//priority 1
const thermalpressing = [
    {
        input: 'mekanism:ingot_steel',
        output: 'immersiveengineering:plate_steel'
    },
    {
        input: '4x minecraft:lapis_lazuli',
        output: 'thermal:lapis_gear',
        die: 'thermal:press_gear_die'
    },
    {
        input: '4x minecraft:diamond',
        output: 'thermal:diamond_gear',
        die: 'thermal:press_gear_die'
    },
    {
        input: '4x minecraft:emerald',
        output: 'thermal:emerald_gear',
        die: 'thermal:press_gear_die'
    },
    {
        input: '4x minecraft:quartz',
        output: 'thermal:quartz_gear',
        die: 'thermal:press_gear_die'
    },
    {
        input: 'pneumaticcraft:ingot_iron_compressed',
        output: 'pneumaticcraft:compressed_iron_gear',
        die: 'thermal:press_gear_die'
    },
]

onEvent('recipes', event => {
event.recipes.thermal.pulverizer(Item.of('industrialforegoing:dryrubber').withChance(2.5), 'rats:plastic_waste').energy(3000)
event.recipes.thermal.pulverizer(Item.of('mekanism:dust_fluorite').withChance(1), 'mekanism:fluorite_gem').energy(4000)
})
