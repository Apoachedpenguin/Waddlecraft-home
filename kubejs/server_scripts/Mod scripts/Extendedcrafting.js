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
    }
]

