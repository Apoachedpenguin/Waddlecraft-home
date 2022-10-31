//priority 1
const extendedshapedrecipes = [
    //ProjectE
    {
        output: 'projecte:alchemical_chest',
        pattern: [
            ' A  A BB ',
            'B AA B  A',
            'B  CB  A ',
            ' B CCCCA ',
            'A BCDCB A',
            ' ACCCC B ',
            ' A  BC  B',
            'A  B AA B',
            ' BB A  A '
        ],
        key: {
            A: 'projecte:low_covalence_dust',
            B: 'projecte:medium_covalence_dust',
            C: 'projecte:high_covalence_dust',
            D: 'ironchest:obsidian_chest'
        }
    },
    {
        output: 'projecte:collector_mk1',
        pattern: [
            'ABBBBBBBA',
            'ACCCCCCCA',
            'ACCCCCCCA',
            'ADEFFFEDA',
            'ADEFGFEDA',
            'ADEFFFEDA',
            'ADEHHHEDA',
            'ADDHIHDDA',
            'AAAHHHAAA'
        ],
        key: {
            A: 'minecraft:glowstone',
            B: 'thermal:obsidian_glass',
            C: 'compressium:quartz_1',
            D: 'projecte:high_covalence_dust',
            E: 'projecte:medium_covalence_dust',
            F: 'projecte:aeternalis_fuel',
            G: 'compressium:quartz_3',
            H: 'mekanism:block_refined_glowstone',
            I: Item.of('extendedcrafting:singularity', '{Id:\'extendedcrafting:glowstone\'}')
        }
    },
    {
        output: 'projecte:collector_mk2',
        pattern: [
            'ABBBBBBBA',
            'ACCCCCCCA',
            'ACCCCCCCA',
            'ADEFFFEDA',
            'ADEFGFEDA',
            'ADEFFFEDA',
            'ADEHIHEDA',
            'ADDIIIDDA',
            'AAAHIHAAA'
        ],
        key: {
            A: 'minecraft:glowstone',
            B: 'industrialforegoing:dark_glass',
            C: 'projecte:aeternalis_fuel',
            D: 'psi:psimetal',
            E: 'psi:psigem',
            F: 'projecte:dark_matter',
            G: 'projecte:collector_mk1',
            H: 'mekanism:block_refined_glowstone',
            I: Item.of('extendedcrafting:singularity', '{Id:\'extendedcrafting:glowstone\'}')
        }
    },
    {
        output: 'projecte:collector_mk3',
        pattern: [
            'ABBBBBBBA',
            'ACCCCCCCA',
            'ACCCCCCCA',
            'ADEFFFEDA',
            'ADEFGFEDA',
            'ADEFHFEDA',
            'ADEIIIEDA',
            'ADDIIIDDA',
            'AAAIIIAAA'
        ],
        key: {
            A: 'minecraft:glowstone',
            B: 'thermal:signalum_glass',
            C: 'compressium:redstone_2',
            D: 'draconicevolution:awakened_draconium_ingot',
            E: 'draconicevolution:large_chaos_frag',
            F: 'projecte:red_matter',
            G: 'projecte:collector_mk2',
            H: 'draconicevolution:dragon_heart',
            I: Item.of('extendedcrafting:singularity', '{Id:\'extendedcrafting:glowstone\'}')
        }
    },
    {
        output: 'projecte:relay_mk1',
        pattern: [
            'ABBBBBBBA',
            'ACCCCCCCA',
            'ACCCCCCCA',
            'ADDFFFDDA',
            'ADDFEFDDA',
            'ADDFFFDDA',
            'ADDGGGDDA',
            'ADDGGGDDA',
            'AAAGGGAAA'
        ],
        key: {
            A: 'minecraft:obsidian',
            B: 'minecraft:black_stained_glass',
            C: 'compressium:obsidian_1',
            D: 'envirocore:aethium_crystal',
            E: 'minecraft:diamond_block',
            F: 'projecte:aeternalis_fuel',
            G: 'mekanism:block_refined_obsidian'
        }
    },
    {
        output: 'projecte:relay_mk2',
        pattern: [
            'ABBBBBBBA',
            'ACCCCCCCA',
            'ACCCCCCCA',
            'ADDFFFDDA',
            'ADDFEFDDA',
            'ADDFFFDDA',
            'ADDGGGDDA',
            'ADDGGGDDA',
            'AAAGGGAAA'
        ],
        key: {
            A: 'compressium:obsidian_1',
            B: 'darkutils:dark_glass',
            C: 'compressium:obsidian_2',
            D: 'envirocore:nanorite_crystal',
            E: 'projecte:relay_mk1',
            F: 'projecte:dark_matter',
            G: 'mekanism:block_refined_obsidian'
        }
    },
    {
        output: 'projecte:relay_mk3',
        pattern: [
            'ABBBBBBBA',
            'ACCCCCCCA',
            'ACCCCCCCA',
            'ADDFFFDDA',
            'ADDFEFDDA',
            'ADDFFFDDA',
            'ADDGGGDDA',
            'ADDGGGDDA',
            'AAAGGGAAA'
        ],
        key: {
            A: 'compressium:obsidian_2',
            B: 'glassential:glass_dark_ethereal',
            C: 'compressium:obsidian_3',
            D: 'envirocore:xerothium_crystal',
            E: 'projecte:relay_mk2',
            F: 'projecte:red_matter',
            G: 'mekanism:block_refined_obsidian'
        }
    },
    {
        output: 'projecte:condenser_mk1',
        pattern: [
            '   AAA   ',
            '  BCCCA  ',
            '  BCDEFD ',
            '  DBBEFD ',
            ' DFEGEFD ',
            ' DFEBBD  ',
            ' DFEDCB  ',
            '  ACCCB  ',
            '   AAA   '
        ],
        key: {
            A: 'projecte:medium_covalence_dust',
            B: 'projecte:low_covalence_dust',
            C: 'minecraft:netherite_ingot',
            D: 'projecte:high_covalence_dust',
            E: 'mekanism:pellet_antimatter',
            F: 'botania:quartz_mana',
            G: 'projecte:alchemical_chest'
        }
    },
    {
        output: 'projecte:condenser_mk2',
        pattern: [
            '   AAA   ',
            '  BCCCA  ',
            '  BCDEFD ',
            '  DBBEFD ',
            ' DFEGEFD ',
            ' DFEBBD  ',
            ' DFEDCB  ',
            '  ACCCB  ',
            '   AAA   '
        ],
        key: {
            A: 'projecte:medium_covalence_dust',
            B: 'projecte:low_covalence_dust',
            C: 'minecraft:netherite_block',
            D: 'projecte:high_covalence_dust',
            E: 'projecte:dark_matter',
            F: 'botania:quartz_elven',
            G: 'projecte:condenser_mk1'
        }
    },
    {
        output: 'projecte:transmutation_table',
        pattern: [
            'AAABBAAAA',
            'AAACCBAAA',
            'AADDCBDAA',
            'ABBDEDDCB',
            'BCCEFECCB',
            'BCDDEDBBA',
            'AADBCDDAA',
            'AAABCCAAA',
            'AAAABBAAA'
        ],
        key: {
            A: 'minecraft:netherite_ingot',
            B: 'industrialforegoing:pink_slime_ingot',
            C: 'botania:dragonstone',
            D: 'botania:pixie_dust',
            E: 'mekanism:ultimate_control_circuit',
            F: 'projecte:philosophers_stone'
        }
    },
    {
        output: 'projecte:philosophers_stone',
        pattern: [
            '  AAAAA  ',
            ' AADDDAA ',
            'AADEFEDAA',
            'ADEGGGEDA',
            'BDFGHGFDB',
            'BDEGGGEDB',
            'BCDEFEDCB',
            ' BCDDDCB ',
            '  BCCCB  '
        ],
        key: {
            A: 'thermal:basalz_powder',
            B: 'thermal:blitz_powder',
            C: 'thermal:blizz_powder',
            D: 'bloodmagic:largebloodstonebrick',
            E: 'projecte:high_covalence_dust',
            F: 'draconicevolution:awakened_core',
            G: 'extendedcrafting:the_ultimate_ingot',
            H: 'extendedcrafting:ultimate_singularity'
        }
    },
    {
        output: 'projecte:klein_star_ein',
        pattern: [
            '  ABA  ',
            '   ABA ',
            '   ABA ',
            '  ACA  ',
            ' ABA   ',
            ' ABA   ',
            '  ABA  '
        ],
        key: {
            A: 'projecte:mobius_fuel',
            B: 'extendedcrafting:black_iron_ingot',
            C: 'minecraft:netherite_ingot'
        }
    },
    {
        output: 'projecte:alchemical_coal',
        pattern: [
            'A A A',
            ' A A ',
            'AABAA',
            ' A A ',
            'A A A'
        ],
        key: {
            A: 'minecraft:coal',
            B: 'projecte:philosophers_stone'
        }
    },
    {
        output: 'projecte:dark_matter',
        pattern: [
            '  AAA  ',
            ' ABCBA ',
            'ABDEDBA',
            'ACECECA',
            'ABDEDBA',
            ' ABCBA ',
            '  AAA  '
        ],
        key: {
            A: 'psi:ebony_substance',
            B: 'envirocore:aethium_crystal',
            C: 'minecraft:diamond_block',
            D: 'projecte:aeternalis_fuel',
            E: 'projecte:aeternalis_fuel_block'
        }
    },
    {
        output: 'projecte:red_matter',
        pattern: [
            '   AAA   ',
            ' AABBBAA ',
            ' ABBCBBA ',
            'ABBDEDBBA',
            'ABCEFECBA',
            'ABBDEDBBA',
            ' ABBCBBA ',
            ' AABBBAA ',
            '   AAA   '
        ],
        key: {
            A: 'draconicevolution:awakened_draconium_ingot',
            B: 'compressium:redstone_2',
            C: 'projecte:dark_matter',
            D: 'compressium:diamond_1',
            E: 'projecte:aeternalis_fuel_block',
            F: 'draconicevolution:awakened_core'
        }
    },
    {
        output: 'projecte:watch_of_flowing_time',
        pattern: [
            'EAAA ',
            'ABCBA',
            'ACDCA',
            'ABCBA',
            ' AAA '
        ],
        key: {
            A: 'projecte:dark_matter',
            B: 'minecraft:clock',
            C: 'envirocore:xerothium_boule',
            D: 'tiab:timeinabottle',
            E: 'projecte:dark_matter_block'
        }
    },
    //blood magic
    {
        output: 'bloodmagic:altar',
        pattern: [
            '     ',
            ' A A ',
            'BC CB',
            'BCDCB',
            'BCCCB'
        ],
        key: {
            A: Item.of('botania:incense_stick', '{brewKey:"botania:bloodthirst"}'),
            B: 'powah:crystal_nitro',
            C: 'botania:livingrock',
            D: Item.of('botania:brew_flask', '{brewKey:"botania:bloodthirst"}')
        }
    }
]

const extendedshapelessrecipes = [
    {
        output: 'extendedcrafting:the_ultimate_ingot',
        input: [
            'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:netherite_ingot', 'botania:manasteel_ingot', 'botania:terrasteel_ingot', 'botania:elementium_ingot', 'botania:gaia_ingot', 'create:zinc_ingot', 'create:brass_ingot',
            'immersiveengineering:ingot_aluminum', 'immersiveengineering:ingot_hop_graphite', 'industrialforegoing:pink_slime_ingot', 'mekanism:ingot_refined_obsidian', 'mekanism:ingot_refined_glowstone', 'mekanism:ingot_steel', 'mekanism:ingot_osmium', 'mekanism:ingot_uranium', 'thermal:copper_ingot',
            'thermal:tin_ingot', 'thermal:lead_ingot', 'thermal:silver_ingot', 'thermal:nickel_ingot', 'thermal:bronze_ingot', 'thermal:electrum_ingot', 'thermal:invar_ingot', 'thermal:constantan_ingot', 'thermal:signalum_ingot',
            'thermal:lumium_ingot', 'thermal:enderium_ingot', 'astralsorcery:starmetal_ingot', 'draconicevolution:draconium_ingot', 'draconicevolution:awakened_draconium_ingot', 'extendedcrafting:black_iron_ingot', 'extendedcrafting:ender_ingot', 'extendedcrafting:redstone_ingot', 'extendedcrafting:enhanced_ender_ingot',
            'extendedcrafting:crystaltine_ingot', 'pneumaticcraft:ingot_iron_compressed', 'psi:psimetal', 'psi:ebony_psimetal', 'psi:ivory_psimetal', 'mythicbotany:alfsteel_ingot', 'iceandfire:dragonsteel_fire_ingot', 'iceandfire:dragonsteel_ice_ingot', 'iceandfire:dragonsteel_lightning_ingot',
            'iceandfire:ghost_ingot', 'eidolon:pewter_ingot', 'eidolon:arcane_gold_ingot', 'materialis:fairy_ingot', 'tconstruct:cobalt_ingot', 'tconstruct:slimesteel_ingot', 'tconstruct:queens_slime_ingot', 'tconstruct:manyullyn_ingot', 'tconstruct:hepatizon_ingot',
            'cagedmobs:star_infused_netherite_ingot', 'elementalcraft:swift_alloy_ingot', 'elementalcraft:drenched_iron_ingot', 'elementalcraft:fireite_ingot', 'gildedingot:gilded_ingot', 'enigmaticlegacy:etherium_ingot', 'tconstruct:pig_iron_ingot', 'woot:si_ingot', 'mana-and-artifice:vinteum_ingot',
            'gobber2:gobber2_ingot', 'gobber2:gobber2_ingot_nether', 'gobber2:gobber2_ingot_end', 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot', 'mana-and-artifice:superheated_vinteum_ingot', 'mana-and-artifice:purified_vinteum_ingot', 'mana-and-artifice:superheated_purified_vinteum_ingot', 'silentgear:crimson_iron_ingot', 'silentgear:crimson_steel_ingot',
            'silentgear:blaze_gold_ingot', 'silentgear:azure_silver_ingot', 'silentgear:azure_electrum_ingot', 'silentgear:tyrian_steel_ingot', 'bigreactors:yellorium_ingot', 'bigreactors:cyanite_ingot', 'bigreactors:inanite_ingot', 'bigreactors:magentite_ingot', 'tconstruct:rose_gold_ingot'
        ]
    },
    {
        output: 'kubejs:ultimate_honeycomb',
        input: [
            'resourcefulbees:catnip_honeycomb','resourcefulbees:starry_honeycomb','resourcefulbees:alfsteel_honeycomb','resourcefulbees:aluminium_honeycomb','resourcefulbees:aquamarine_honeycomb','resourcefulbees:awakened_draconium_honeycomb','resourcefulbees:beelitz_honeycomb','resourcefulbees:beelizz_honeycomb','resourcefulbees:beesalz_honeycomb',
            'resourcefulbees:black_iron_honeycomb','resourcefulbees:blaze_honeycomb','resourcefulbees:blazing_honeycomb','resourcefulbees:brass_honeycomb','resourcefulbees:bronze_honeycomb','resourcefulbees:chaos_honeycomb','resourcefulbees:cheesy_honeycomb','resourcefulbees:coal_honeycomb','resourcefulbees:constantan_honeycomb',
            'resourcefulbees:copper_honeycomb','resourcefulbees:creeper_honeycomb','resourcefulbees:diamond_honeycomb','resourcefulbees:dielectric_honeycomb','resourcefulbees:draconium_honeycomb','resourcefulbees:dragon_honeycomb','resourcefulbees:electrum_honeycomb','resourcefulbees:elementium_honeycomb','resourcefulbees:emerald_honeycomb',
            'resourcefulbees:ender_honeycomb','resourcefulbees:enderium_honeycomb','resourcefulbees:end_stone_honeycomb','resourcefulbees:energized_steel_honeycomb','resourcefulbees:fire_dragonsteel_honeycomb','resourcefulbees:fluorite_honeycomb','resourcefulbees:gaia_honeycomb','resourcefulbees:ghast_honeycomb','resourcefulbees:gold_honeycomb',
            'resourcefulbees:gravel_honeycomb','resourcefulbees:ice_dragonsteel_honeycomb','resourcefulbees:icy_honeycomb','resourcefulbees:invar_honeycomb','resourcefulbees:iron_honeycomb','resourcefulbees:lapis_honeycomb','resourcefulbees:lead_honeycomb','resourcefulbees:lightning_dragonsteel_honeycomb','resourcefulbees:lumium_honeycomb',
            'resourcefulbees:manasteel_honeycomb','resourcefulbees:netherite_honeycomb','resourcefulbees:netherrack_honeycomb','resourcefulbees:nether_quartz_honeycomb','resourcefulbees:nickel_honeycomb','resourcefulbees:niotic_honeycomb','resourcefulbees:obsidian_honeycomb','resourcefulbees:osmium_honeycomb','resourcefulbees:pigman_honeycomb',
            'resourcefulbees:psimetal_honeycomb','resourcefulbees:quartz_iron_honeycomb','resourcefulbees:rainbow_glass_honeycomb','resourcefulbees:redstone_honeycomb','resourcefulbees:rgbee_honeycomb','resourcefulbees:signalum_honeycomb','resourcefulbees:silicon_honeycomb','resourcefulbees:silver_honeycomb','resourcefulbees:skeleton_honeycomb',
            'resourcefulbees:slimy_honeycomb','resourcefulbees:snow_honeycomb','resourcefulbees:spirited_honeycomb','resourcefulbees:starmetal_honeycomb','resourcefulbees:steel_honeycomb','resourcefulbees:stone_honeycomb','resourcefulbees:sulfur_honeycomb','resourcefulbees:terrasteel_honeycomb','resourcefulbees:tin_honeycomb',
            'resourcefulbees:uraninite_honeycomb','resourcefulbees:uranium_honeycomb','resourcefulbees:water_honeycomb','resourcefulbees:wither_honeycomb','resourcefulbees:wood_honeycomb','resourcefulbees:yellorium_honeycomb','resourcefulbees:zinc_honeycomb','resourcefulbees:zombie_honeycomb','resourcefulbees:nitro_honeycomb'
        ]
    }
]
