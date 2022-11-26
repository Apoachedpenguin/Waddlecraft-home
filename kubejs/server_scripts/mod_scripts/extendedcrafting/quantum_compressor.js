onEvent('recipes', event => {
    event.custom({
        type: "extendedcrafting:compressor",
        powerCost: 2250,
        inputCount: 16,
        ingredient: {
            "item": 'elementalcraft:earth_shard'
        },
        catalyst: {
            "item": "waddlecraft:greater_earth_core"
        },
        result: {
            "item": "waddlecraft:compressed_earth"
        }
    })
})