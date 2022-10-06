// hiding items
const hideItems = [
    'example:ingredient',
    'create:copper_sheet',
    'create:copper_ingot',
    'create:golden_sheet',
    'create:iron_sheet',
    'mekanism:ingot_copper',
    'mekanism:dust_copper',
    'mekanism:block_copper',
    'mekanism:nugget_copper',
    'mekanism:ingot_lead',
    'mekanism:nugget_lead',
    'mekanism:block_lead',
    'mekanism:dust_lead',
    'mekanism:ingot_bronze',
    'mekanism:nugget_bronze',
    'mekanism:block_bronze',
    'mekanism:dust_bronze',
    'mekanism:ingot_tin',
    'mekanism:nugget_tin',
    'mekanism:block_tin',
    'mekanism:dust_tin',
    'immersiveengineering:plate_copper',
    'immersiveengineering:nugget_copper',
    'immersiveengineering:ingot_copper',
    'immersiveengineering:storage_copper',
    'immersiveengineering:slab_storage_copper',
    'immersiveengineering:plate_electrum',
    'immersiveengineering:dust_electrum',
    'immersiveengineering:nugget_electrum',
    'immersiveengineering:ingot_electrum',
    'immersiveengineering:storage_electrum',
    'immersiveengineering:slab_storage_electrum',
    'immersiveengineering:plate_lead',
    'immersiveengineering:dust_lead',
    'immersiveengineering:storage_lead',
    'immersiveengineering:slab_storage_lead',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:plate_silver',
    'immersiveengineering:dust_silver',
    'immersiveengineering:storage_silver',
    'immersiveengineering:slab_storage_silver',
    'immersiveengineering:ingot_silver',
    'immersiveengineering:nugget_silver',
    'immersiveengineering:plate_nickel',
    'immersiveengineering:dust_nickel',
    'immersiveengineering:storage_nickel',
    'immersiveengineering:slab_storage_nickel',
    'immersiveengineering:ingot_nickel',
    'immersiveengineering:nugget_nickel',
    'immersiveengineering:plate_uranium',
    'immersiveengineering:dust_uranium',
    'immersiveengineering:storage_uranium',
    'immersiveengineering:slab_storage_uranium',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:sheetmetal_uranium',
    'immersiveengineering:slab_sheetmetal_uranium',
    'immersiveengineering:plate_constantan',
    'immersiveengineering:dust_constantan',
    'immersiveengineering:storage_constantan',
    'immersiveengineering:slab_storage_constantan',
    'immersiveengineering:ingot_constantan',
    'immersiveengineering:nugget_constantan',
    'immersiveengineering:dust_steel',
    'immersiveengineering:storage_steel',
    'immersiveengineering:slab_storage_steel',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:plate_gold',
    'immersiveengineering:plate_iron',
    'iceandfire:copper_ingot',
    'iceandfire:copper_nugget',
    'iceandfire:copper_block',
    'eidolon:lead_ingot',
    'eidolon:lead_nugget',

    // hide all quark's items
    /quark.*/

// you can also .forEach in this way instead of calling the array seperately
].forEach(item => {
    onEvent('jei.hide.items', jei => {
        jei.hide(item)
    })
})


// JEI information
onEvent('jei.information', event => {
    event.add('rats:rat_whistle', ['disabled due to crashing, sorry!'])
})