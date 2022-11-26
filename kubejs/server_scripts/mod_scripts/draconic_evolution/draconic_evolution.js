onEvent('recipes', event => {
    //Draconic fusion recipes here
    event.custom({
        "type": 'draconicevolution:fusion_crafting',
        "result": {
            "item": 'draconicevolution:wyvern_chestpiece'
        },
        "catalyst": {
            "item": 'gobber2:gobber2_chestplate_dragon'
        },
        "total_energy": 50000000,
        "tier": "WYVERN",
        "ingredients": [
            {
                "item": "draconicevolution:wyvern_energy_core"
            },
            {
                "item": "draconicevolution:draconium_ingot"
            },
            {
                "item": "draconicevolution:draconium_ingot"
            },
            {
                "item": "draconicevolution:draconium_core"
            },
            {
                "item": "draconicevolution:basic_relay_crystal"
            },
            {
                "item": "draconicevolution:basic_relay_crystal"
            }
        ]
    }).id('draconicevolution:tools/wyvern_chestpiece')
})
//see "create.js" for draconic ingot recipe