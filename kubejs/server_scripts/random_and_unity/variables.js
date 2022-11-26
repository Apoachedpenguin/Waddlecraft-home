// priority: 1
const colours = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]
const woods = [
    'minecraft:oak_log',
    'minecraft:spruce_log',
    'minecraft:birch_log',
    'minecraft:acacia_log',
    'minecraft:jungle_log',
    'minecraft:dark_oak_log',
    'minecraft:crimson_stem',
    'minecraft:warped_stem',
    'abundance:jacaranda_log',
    'autumnity:maple_log',
    'bayou_blues:cypress_log',
    'environmental:willow_log',
    'environmental:cherry_log',
    'environmental:wisteria_log',
    'silentgear:netherwood_log'
]

onEvent('recipes', event => {
    
    colours.forEach(colour => {
        event.shaped(`16x minecraft:${colour}_dye`, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'resourcefulbees:rgbee_honeycomb',
            B: 'minecraft:' + colour + '_dye'
        })
    })

    woods.forEach(wood => {
        event.shaped(`16x ${wood}`, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'resourcefulbees:wood_honeycomb',
            B: '' + wood + ''
        })
    })
})