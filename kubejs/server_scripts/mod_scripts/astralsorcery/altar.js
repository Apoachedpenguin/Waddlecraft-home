onEvent('recipes', event => {
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 2,
        "duration": 400,
        "starlight": 3200,
        "pattern": [
            "AB_BA",
            "CGDGC",
            "_FEF_",
            "CGFGC",
            "AB_BA"
        ],
        "key": {
            "A": {
                "item": "astralsorcery:marble_runed"
            },
            "B": {
                "item": "astralsorcery:black_marble_raw"
            },
            "C": {
                "item": "astralsorcery:resonating_gem"
            },
            "D": {
                "item": "astralsorcery:glass_lens"
            },
            "E": {
                "type": "astralsorcery:crystal",
                "hasToBeAttuned": false,
                "hasToBeCelestial": true,
                "canBeAttuned": true,
                "canBeCelestialCrystal": true
            },
            "F": {
                "item": "botania:blacker_lotus"
            },
            "G": {
                "item": "botania:livingrock"
            }
        },
        "recipe_class": "astralsorcery:trait_upgrade",
        "output": [
            {
                "item": "astralsorcery:altar_radiance",
                "count": 1
            }
        ],
        "effects": [
            "astralsorcery:built_in_effect_constellation_finish",
            "astralsorcery:pillar_sparkle",
            "astralsorcery:luminescence_flare",
            "astralsorcery:built_in_effect_discovery_central_beam",
            "astralsorcery:upgrade_altar",
            "astralsorcery:altar_default_sparkle",
            "astralsorcery:built_in_effect_constellation_lines",
            "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    }).id("astralsorcery:altar/altar_radiance")
    
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 1,
        "duration": 200,
        "starlight": 1400,
        "pattern": [
            "A___A",
            "_E_E_",
            "_DFD_",
            "_BCB_",
            "D___D"
        ],
        "key": {
            "A": {
                "tag": "astralsorcery:stardust"
            },
            "B": {
                "item": "astralsorcery:marble_pillar"
            },
            "C": {
                "tag": "astralsorcery:starmetal"
            },
            "D": {
                "item": "botania:livingrock"
            },
            "E": {
                "item": "botania:mana_diamond"
            },
            "F": {
                "type": "astralsorcery:crystal",
                "hasToBeAttuned": false,
                "hasToBeCelestial": false,
                "canBeAttuned": true,
                "canBeCelestialCrystal": true
            }
        },
        "recipe_class": "astralsorcery:constellation_upgrade",
        "output": [
            {
                "item": "astralsorcery:altar_constellation",
                "count": 1
            }
        ],
        "effects": [
            "astralsorcery:built_in_effect_discovery_central_beam",
            "astralsorcery:upgrade_altar",
            "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    }).id("astralsorcery:altar/altar_constellation")
})