onEvent('worldgen.remove', event => {
    event.removeFeatureById('gobber2:gobber2_ore', 'gobber2:gobber2_ore_nether', 'gobber2:gobber2_ore_end', 'stevesicbm:sulfur_deposit')

    event.removeOres(ores => {
        ores.blocks = ['gobber2:gobber2_ore', 'gobber2:gobber2_ore_nether','gobber2:gobber2_ore_end', 'stevesicbm:sulfur_deposit'] // Removes coal and iron ore
        ores.biomes.values = ['minecraft:the_end','minecraft:the_nether','minecraft:overworld','minecraft:end_barrens','minecraft:end_highlands','minecraft:end_midlands','minecraft:small_end_islands'] // Removes it only from plains biomes
    })
});