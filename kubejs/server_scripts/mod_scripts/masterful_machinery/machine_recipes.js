const psiMachine = [
    {
        ticks: 10,
        energy: 800,
        item: "minecraft:coal",
        count: 5,
        output: "psi:ebony_substance"
    },
    {
        ticks: 10,
        energy: 800,
        item: "minecraft:quartz",
        count: 5,
        output: "psi:ivory_substance"
    },
    {
        ticks: 6,
        energy: 400,
        item: "minecraft:redstone",
        count: 3,
        output: "psi:psidust"
    },
    {
        ticks: 8,
        energy: 700,
        item: "minecraft:gold_ingot",
        count: 4,
        output: "psi:psimetal"
    },
    {
        ticks: 12,
        energy: 1200,
        item: "minecraft:diamond",
        count: 6,
        output: "psi:psigem"
    }
]


onEvent('recipes', event => {
    event.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "ultima_pengu",
        "controllerId": "waddle_ultima",
        "ticks": 20000,
        "inputs": [
            {
                'type': 'masterfulmachinery:energy',
                'perTick': 'true',
                'data': { 'amount': 10000000 }
            },
            {
                "type": "masterfulmachinery:items",
                "data": {
                    "item": 'projecte:red_matter',
                    "count": 100000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data": {
                    "item": 'extendedcrafting:the_ultimate_ingot',
                    "count": 100000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "data": {
                    "item": 'extendedcrafting:ultimate_singularity',
                    "count": 100000
                }
            },
            {
                "type": "masterfulmachinery:items",
                "perTick": "true",
                "data": {
                    "item": 'waddlecraft:ultimate_honeycomb',
                    "count": 100000
                }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_aluminum", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_tinkers_bronze", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_brass", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_cobalt", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_queens_slime", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_steel", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_slimesteel", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_uranium", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_obsidian", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_manyullyn", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_netherite", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "tconstruct:molten_gold", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "materialis:molten_alfsteel", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "materialis:molten_draconium", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "materialis:molten_draconium_awakened", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "materialis:molten_ebony_psimetal", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "materialis:molten_ivory_psimetal", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "materialis:molten_starmetal", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "minecraft:water", "amount": 10000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "minecraft:lava", "amount": 10000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "resourcefulbees:honey", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "pneumaticcraft:gasoline", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "pneumaticcraft:plastic", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "pneumaticcraft:etching_acid", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "pneumaticcraft:lpg", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "bigreactors:redfrigium", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "thermal:redstone", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "thermal:ender", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "bloodmagic:life_essence_fluid", "amount": 1000000 }
            },
            {
                "type": "masterfulmachinery:fluids",
                "data": { "fluid": "minecraft:milk", "amount": 1000000 }
            }
        ],
        "outputs": [
            {
                "type": "masterfulmachinery:items",
                "data": {
                    "item": "waddles:adelie_penguin_spawn_egg",
                    "count": 1
                }
            }
        ]
    })
})