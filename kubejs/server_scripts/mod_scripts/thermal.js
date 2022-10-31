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
//reminders for self Item.of items DO NOT REQUIRE QUOTES. even in an array ['item1', item.of('item2').withChance(~)]
const thermalsmelting = [ 
    {
        input: ['thermal:machine_frame', 'mekanism:block_steel', 'industrialforegoing:plastic'],
        output: 'mekanism:steel_casing',
        energy: '1000'
    },
    {
        input: ['thermal:diamond_gear','4x thermal:invar_ingot'],
        output: 'thermal:press_gear_die',
        energy: '2000'
    }
]
const thermalpulverizer = [
    {
        output: Item.of('mekanism:dust_fluorite').withChance(1),
        input: 'mekanism:fluorite_gem',
        energy: '3000'
    },
    {
        output: Item.of('industrialforegoing:dryrubber').withChance(2.5),
        input: 'rats:plastic_waste',
        energy: '4000'
    }
]