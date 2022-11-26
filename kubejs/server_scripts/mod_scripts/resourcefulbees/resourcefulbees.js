//priority 0
//See Variables.js for the list of woods and colors.
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