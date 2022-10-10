println("hey, Thanks for checking out my modpack");
//imports
import mods.botania.PureDaisy;
import crafttweaker.api.item.IItemStack;

//recipe removal
craftingTable.removeByRegex(".*_gear.*");
craftingTable.removeRecipeByInput(<item:immersiveengineering:hammer>);
<recipetype:immersiveengineering:metal_press>.removeByRegex(".*plate_.*");
furnace.removeRecipe(<item:rats:raw_plastic>);
furnace.removeRecipe(<item:draconicevolution:draconium_ingot>);
blastFurnace.removeRecipe(<item:rats:raw_plastic>);
<recipetype:thermal:press>.removeRecipe(<item:immersiveengineering:plate_uranium>);

//thermal mod

<recipetype:thermal:press>.addRecipe("plate_steel", [<item:immersiveengineering:plate_steel> % 100], <fluid:minecraft:empty>, [<item:mekanism:ingot_steel>], 500);
<recipetype:thermal:press>.addRecipe("lapis_gear", [<item:thermal:lapis_gear> % 100], <fluid:minecraft:empty>, [<item:minecraft:lapis_lazuli> *4, <item:thermal:press_gear_die>], 500);
<recipetype:thermal:press>.addRecipe("diamond_gear", [<item:thermal:diamond_gear> % 100], <fluid:minecraft:empty>, [<item:minecraft:diamond> *4, <item:thermal:press_gear_die>], 500);
<recipetype:thermal:press>.addRecipe("emerald_gear", [<item:thermal:emerald_gear> % 100], <fluid:minecraft:empty>, [<item:minecraft:emerald> *4, <item:thermal:press_gear_die>], 500);
<recipetype:thermal:press>.addRecipe("quartz_gear", [<item:thermal:quartz_gear> % 100], <fluid:minecraft:empty>, [<item:minecraft:quartz> *4, <item:thermal:press_gear_die>], 500);
<recipetype:thermal:press>.addRecipe("compressed_iron_gear", [<item:pneumaticcraft:compressed_iron_gear> % 100], <fluid:minecraft:empty>, [<item:pneumaticcraft:ingot_iron_compressed> *4, <item:thermal:press_gear_die>], 500);
<recipetype:thermal:pulverizer>.addRecipe("dryrubber", [<item:industrialforegoing:dryrubber> *2 %100] , <item:rats:plastic_waste>, 2, 500);
<recipetype:thermal:pulverizer>.addRecipe("dust_fluorite", [<item:mekanism:dust_fluorite> %100] , <item:mekanism:fluorite_gem>, 1, 500);
<recipetype:thermal:smelter>.addRecipe("steel_casing", [<item:mekanism:steel_casing> %100], [<item:mekanism:block_steel>, <item:thermal:machine_frame>, <item:industrialforegoing:plastic> *4], 25, 1000);
<recipetype:thermal:smelter>.addRecipe("press_gear_die", [<item:thermal:press_gear_die> %100], [<item:thermal:diamond_gear>, <item:thermal:invar_plate> *4], 25, 1000);
craftingTable.addShaped("thermal_machine_frame", <item:thermal:machine_frame>, [

//Psi mod

//pneumaticcraft mod
<recipetype:pneumaticcraft:explosion_crafting>.addRecipe("dielectric_paste", <item:psi:ebony_substance>, [<item:powah:dielectric_paste>], 25);

<recipetype:pneumaticcraft:pressure_chamber>.addRecipe("timeinabottle", 
[<item:minecraft:glass_bottle>, <item:minecraft:clock>, <item:astralsorcery:liquid_starlight_bucket>, <item:powah:dielectric_paste> *2], [<item:tiab:timeinabottle>], 3.5);
<recipetype:pneumaticcraft:pressure_chamber>.addRecipe("dielectric_paste",
[<item:psi:ebony_substance>], [<item:powah:dielectric_paste> *2], 1.5);

//Flux mod

craftingTable.addShaped("flux_dust", <item:fluxnetworks:flux_dust> *4, [
	[<item:minecraft:air>, <item:psi:ebony_substance>, <item:minecraft:air>],
	[<item:psi:ebony_substance>, <item:minecraft:redstone>, <item:psi:ebony_substance>],
	[<item:minecraft:air>, <item:psi:ebony_substance>, <item:minecraft:air>]]);

//botania mod

<recipetype:botania:pure_daisy>.addRecipe("livingwood", <blockstate:botania:livingwood>, <blockstate:astralsorcery:infused_wood>, 20);
<recipetype:botania:pure_daisy>.addRecipe("livingrock", <blockstate:botania:livingrock>, <blockstate:minecraft:end_stone>, 20);

//Extended crafting mod
craftingTable.addShaped("black_iron_ingot", <item:extendedcrafting:black_iron_ingot> *2, [
	[<item:rats:little_black_squash_balls>, <item:minecraft:black_dye>, <item:rats:little_black_squash_balls>],
	[<item:minecraft:black_dye>, <item:minecraft:iron_ingot>, <item:minecraft:black_dye>],
	[<item:rats:little_black_squash_balls>, <item:minecraft:black_dye>, <item:rats:little_black_squash_balls>]]);

mods.extendedcrafting.TableCrafting.addShaped("draconium_ingot", <item:draconicevolution:draconium_ingot>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>],
	[<item:draconicevolution:draconium_dust>, <item:mythicbotany:alfsteel_ingot>, <item:psi:psimetal>, <item:psi:psimetal>, <item:psi:psimetal>, <item:mythicbotany:alfsteel_ingot>, <item:draconicevolution:draconium_dust>],
	[<item:draconicevolution:draconium_dust>, <item:mythicbotany:alfsteel_ingot>, <item:psi:psimetal>, <item:bloodmagic:masterbloodorb>, <item:psi:psimetal>, <item:mythicbotany:alfsteel_ingot>, <item:draconicevolution:draconium_dust>],
	[<item:draconicevolution:draconium_dust>, <item:mythicbotany:alfsteel_ingot>, <item:psi:psimetal>, <item:psi:psimetal>, <item:psi:psimetal>, <item:mythicbotany:alfsteel_ingot>, <item:draconicevolution:draconium_dust>],
	[<item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>, <item:draconicevolution:draconium_dust>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);

mods.extendedcrafting.TableCrafting.addShaped("altar", <item:bloodmagic:altar>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:botania:incense_stick>.withTag({brewKey: "botania:bloodthirst" as string}), <item:minecraft:air>, <item:botania:incense_stick>.withTag({brewKey: "botania:bloodthirst" as string}), <item:minecraft:air>],
	[<item:minecraft:redstone_block>, <item:botania:livingrock>, <item:minecraft:air>, <item:botania:livingrock>, <item:minecraft:redstone_block>],
	[<item:minecraft:redstone_block>, <item:botania:livingrock>, <item:botania:brew_vial>.withTag({brewKey: "botania:bloodthirst" as string}), <item:botania:livingrock>, <item:minecraft:redstone_block>],
	[<item:minecraft:redstone_block>, <item:botania:livingrock>, <item:botania:livingrock>, <item:botania:livingrock>, <item:minecraft:redstone_block>]]);

//JEI tweaks

mods.jei.JEI.hideItem(<item:create:copper_sheet>);
mods.jei.JEI.hideItem(<item:create:copper_ingot>);
mods.jei.JEI.hideItem(<item:create:golden_sheet>);
mods.jei.JEI.hideItem(<item:create:iron_sheet>);
mods.jei.JEI.hideItem(<item:mekanism:ingot_copper>);
mods.jei.JEI.hideItem(<item:mekanism:dust_copper>);
mods.jei.JEI.hideItem(<item:mekanism:block_copper>);
mods.jei.JEI.hideItem(<item:mekanism:nugget_copper>);
mods.jei.JEI.hideItem(<item:mekanism:ingot_lead>);
mods.jei.JEI.hideItem(<item:mekanism:nugget_lead>);
mods.jei.JEI.hideItem(<item:mekanism:block_lead>);
mods.jei.JEI.hideItem(<item:mekanism:dust_lead>);
mods.jei.JEI.hideItem(<item:mekanism:ingot_bronze>);
mods.jei.JEI.hideItem(<item:mekanism:nugget_bronze>);
mods.jei.JEI.hideItem(<item:mekanism:block_bronze>);
mods.jei.JEI.hideItem(<item:mekanism:dust_bronze>);
mods.jei.JEI.hideItem(<item:mekanism:ingot_tin>);
mods.jei.JEI.hideItem(<item:mekanism:nugget_tin>);
mods.jei.JEI.hideItem(<item:mekanism:block_tin>);
mods.jei.JEI.hideItem(<item:mekanism:dust_tin>);
mods.jei.JEI.hideItem(<item:immersiveengineering:plate_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:storage_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:slab_storage_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:plate_electrum>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_electrum>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_electrum>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_electrum>);
mods.jei.JEI.hideItem(<item:immersiveengineering:storage_electrum>);
mods.jei.JEI.hideItem(<item:immersiveengineering:slab_storage_electrum>);
mods.jei.JEI.hideItem(<item:immersiveengineering:plate_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:storage_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:slab_storage_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:plate_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:storage_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:slab_storage_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:plate_nickel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_nickel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:storage_nickel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:slab_storage_nickel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_nickel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_nickel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:plate_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:storage_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:slab_storage_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:sheetmetal_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:slab_sheetmetal_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:plate_constantan>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_constantan>);
mods.jei.JEI.hideItem(<item:immersiveengineering:storage_constantan>);
mods.jei.JEI.hideItem(<item:immersiveengineering:slab_storage_constantan>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_constantan>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_constantan>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:storage_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:slab_storage_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:plate_gold>);
mods.jei.JEI.hideItem(<item:immersiveengineering:plate_iron>);
mods.jei.JEI.hideItem(<item:iceandfire:copper_ingot>);
mods.jei.JEI.hideItem(<item:iceandfire:copper_nugget>);
mods.jei.JEI.hideItem(<item:iceandfire:copper_block>);
mods.jei.JEI.hideItem(<item:eidolon:lead_ingot>);
mods.jei.JEI.hideItem(<item:eidolon:lead_nugget>);
mods.jei.JEI.hideMod("quark");
mods.jei.JEI.addInfo(<item:rats:rat_whistle>, ["disabled due to crashing, sorry!"]);

//ProjectE

mods.extendedcrafting.TableCrafting.addShaped("transmutation_table", <item:projecte:transmutation_table>, [
[<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:industrialforegoing:pink_slime_ingot>, <item:industrialforegoing:pink_slime_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
[<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:botania:dragonstone>, <item:botania:dragonstone>, <item:industrialforegoing:pink_slime_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
[<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:botania:pixie_dust>, <item:botania:pixie_dust>, <item:botania:dragonstone>, <item:industrialforegoing:pink_slime_ingot>, <item:botania:pixie_dust>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
[<item:minecraft:netherite_ingot>, <item:industrialforegoing:pink_slime_ingot>, <item:industrialforegoing:pink_slime_ingot>, <item:botania:pixie_dust>, <item:mekanism:ultimate_control_circuit>, <item:botania:pixie_dust>, <item:botania:pixie_dust>, <item:botania:dragonstone>, <item:industrialforegoing:pink_slime_ingot>],
[<item:industrialforegoing:pink_slime_ingot>, <item:botania:dragonstone>, <item:botania:dragonstone>, <item:mekanism:ultimate_control_circuit>, <item:projecte:philosophers_stone>.anyDamage().reuse(), <item:mekanism:ultimate_control_circuit>, <item:botania:dragonstone>, <item:botania:dragonstone>, <item:industrialforegoing:pink_slime_ingot>],
[<item:industrialforegoing:pink_slime_ingot>, <item:botania:dragonstone>, <item:botania:pixie_dust>, <item:botania:pixie_dust>, <item:mekanism:ultimate_control_circuit>, <item:botania:pixie_dust>, <item:industrialforegoing:pink_slime_ingot>, <item:industrialforegoing:pink_slime_ingot>, <item:minecraft:netherite_ingot>],
[<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:botania:pixie_dust>, <item:industrialforegoing:pink_slime_ingot>, <item:botania:dragonstone>, <item:botania:pixie_dust>, <item:botania:pixie_dust>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
[<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:industrialforegoing:pink_slime_ingot>, <item:botania:dragonstone>, <item:botania:dragonstone>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>],
[<item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:industrialforegoing:pink_slime_ingot>, <item:industrialforegoing:pink_slime_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>]]);

mods.extendedcrafting.TableCrafting.addShaped("philosophers_stone", <item:projecte:philosophers_stone>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:thermal:basalz_powder>, <item:thermal:basalz_powder>, <item:thermal:basalz_powder>, <item:thermal:basalz_powder>, <item:thermal:basalz_powder>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:thermal:basalz_powder>, <item:thermal:basalz_powder>, <item:bloodmagic:largebloodstonebrick>, <item:bloodmagic:largebloodstonebrick>, <item:bloodmagic:largebloodstonebrick>, <item:thermal:basalz_powder>, <item:thermal:basalz_powder>, <item:minecraft:air>],
[<item:thermal:basalz_powder>, <item:thermal:basalz_powder>, <item:bloodmagic:largebloodstonebrick>, <item:projecte:high_covalence_dust>, <item:botania:conjuration_catalyst>, <item:projecte:high_covalence_dust>, <item:bloodmagic:largebloodstonebrick>, <item:thermal:basalz_powder>, <item:thermal:basalz_powder>],
[<item:thermal:basalz_powder>, <item:bloodmagic:largebloodstonebrick>, <item:projecte:high_covalence_dust>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:projecte:high_covalence_dust>, <item:bloodmagic:largebloodstonebrick>, <item:thermal:basalz_powder>],
[<item:thermal:blitz_powder>, <item:bloodmagic:largebloodstonebrick>, <item:botania:alchemy_catalyst>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:diamond" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone" as string}), <item:botania:alchemy_catalyst>, <item:bloodmagic:largebloodstonebrick>, <item:thermal:blitz_powder>],
[<item:thermal:blitz_powder>, <item:bloodmagic:largebloodstonebrick>, <item:projecte:high_covalence_dust>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:redstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:projecte:high_covalence_dust>, <item:bloodmagic:largebloodstonebrick>, <item:thermal:blitz_powder>],
[<item:thermal:blitz_powder>, <item:thermal:blizz_powder>, <item:bloodmagic:largebloodstonebrick>, <item:projecte:high_covalence_dust>, <item:draconicevolution:awakened_core>, <item:projecte:high_covalence_dust>, <item:bloodmagic:largebloodstonebrick>, <item:thermal:blizz_powder>, <item:thermal:blitz_powder>],
[<item:minecraft:air>, <item:thermal:blitz_powder>, <item:thermal:blizz_powder>, <item:bloodmagic:largebloodstonebrick>, <item:bloodmagic:largebloodstonebrick>, <item:bloodmagic:largebloodstonebrick>, <item:thermal:blizz_powder>, <item:thermal:blitz_powder>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:thermal:blitz_powder>, <item:thermal:blizz_powder>, <item:thermal:blizz_powder>, <item:thermal:blizz_powder>, <item:thermal:blitz_powder>, <item:minecraft:air>, <item:minecraft:air>]]);

mods.extendedcrafting.TableCrafting.addShaped("klein_star_ein", <item:projecte:klein_star_ein>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:mobius_fuel>, <item:extendedcrafting:black_iron_ingot>, <item:projecte:mobius_fuel>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:mobius_fuel>, <item:extendedcrafting:black_iron_ingot>, <item:projecte:mobius_fuel>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:mobius_fuel>, <item:extendedcrafting:black_iron_ingot>, <item:projecte:mobius_fuel>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:mobius_fuel>, <item:minecraft:netherite_ingot>, <item:projecte:mobius_fuel>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:mobius_fuel>, <item:extendedcrafting:black_iron_ingot>, <item:projecte:mobius_fuel>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:mobius_fuel>, <item:extendedcrafting:black_iron_ingot>, <item:projecte:mobius_fuel>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:mobius_fuel>, <item:extendedcrafting:black_iron_ingot>, <item:projecte:mobius_fuel>, <item:minecraft:air>, <item:minecraft:air>]]);

mods.extendedcrafting.TableCrafting.addShaped("alchemical_coal", <item:projecte:alchemical_coal>, [
[<item:minecraft:coal>, <item:minecraft:air>, <item:minecraft:coal>, <item:minecraft:air>, <item:minecraft:coal>],
[<item:minecraft:air>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:air>],
[<item:minecraft:coal>, <item:minecraft:coal>, <item:projecte:philosophers_stone>.anyDamage().reuse(), <item:minecraft:coal>, <item:minecraft:coal>],
[<item:minecraft:air>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:air>],
[<item:minecraft:coal>, <item:minecraft:air>, <item:minecraft:coal>, <item:minecraft:air>, <item:minecraft:coal>]]);

craftingTable.addShaped("low_covalence_dust", <item:projecte:low_covalence_dust> *20, [
[<item:minecraft:charcoal>, <item:minecraft:cobblestone>, <item:minecraft:charcoal>],
[<item:minecraft:cobblestone>, <item:minecraft:slime_ball>, <item:minecraft:cobblestone>],
[<item:minecraft:charcoal>, <item:minecraft:cobblestone>, <item:minecraft:charcoal>]]);

craftingTable.addShaped("medium_covalence_dust", <item:projecte:medium_covalence_dust> *20, [
[<item:minecraft:redstone>, <item:thermal:iron_dust>, <item:minecraft:redstone>],
[<item:thermal:iron_dust>, <item:minecraft:lapis_lazuli>, <item:thermal:iron_dust>],
[<item:minecraft:redstone>, <item:thermal:iron_dust>, <item:minecraft:redstone>]]);

craftingTable.addShaped("high_covalence_dust", <item:projecte:high_covalence_dust> *20, [
[<item:minecraft:coal>, <item:thermal:diamond_dust>, <item:minecraft:coal>],
[<item:thermal:diamond_dust>, <item:botania:mana_powder>, <item:thermal:diamond_dust>],
[<item:minecraft:coal>, <item:thermal:diamond_dust>, <item:minecraft:coal>]]);

mods.extendedcrafting.TableCrafting.addShaped("dark_matter", <item:projecte:dark_matter>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:psi:ebony_substance>, <item:psi:ebony_substance>, <item:psi:ebony_substance>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:psi:ebony_substance>, <item:envirocore:aethium_crystal>, <item:minecraft:diamond_block>, <item:envirocore:aethium_crystal>, <item:psi:ebony_substance>, <item:minecraft:air>],
[<item:psi:ebony_substance>, <item:envirocore:aethium_crystal>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel_block>, <item:projecte:aeternalis_fuel>, <item:envirocore:aethium_crystal>, <item:psi:ebony_substance>],
[<item:psi:ebony_substance>, <item:minecraft:diamond_block>, <item:projecte:aeternalis_fuel_block>, <item:minecraft:diamond_block>, <item:projecte:aeternalis_fuel_block>, <item:minecraft:diamond_block>, <item:psi:ebony_substance>],
[<item:psi:ebony_substance>, <item:envirocore:aethium_crystal>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel_block>, <item:projecte:aeternalis_fuel>, <item:envirocore:aethium_crystal>, <item:psi:ebony_substance>],
[<item:minecraft:air>, <item:psi:ebony_substance>, <item:envirocore:aethium_crystal>, <item:minecraft:diamond_block>, <item:envirocore:aethium_crystal>, <item:psi:ebony_substance>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:psi:ebony_substance>, <item:psi:ebony_substance>, <item:psi:ebony_substance>, <item:minecraft:air>, <item:minecraft:air>]]);

mods.extendedcrafting.TableCrafting.addShaped("red_matter", <item:projecte:red_matter>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:air>],
[<item:minecraft:air>, <item:draconicevolution:awakened_draconium_ingot>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:projecte:dark_matter>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:air>],
[<item:draconicevolution:awakened_draconium_ingot>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:diamond_1>, <item:projecte:aeternalis_fuel_block>, <item:compressium:diamond_1>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:draconicevolution:awakened_draconium_ingot>],
[<item:draconicevolution:awakened_draconium_ingot>, <item:compressium:redstone_2>, <item:projecte:dark_matter>, <item:projecte:aeternalis_fuel_block>, <item:draconicevolution:awakened_core>, <item:projecte:aeternalis_fuel_block>, <item:projecte:dark_matter>, <item:compressium:redstone_2>, <item:draconicevolution:awakened_draconium_ingot>],
[<item:draconicevolution:awakened_draconium_ingot>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:diamond_1>, <item:projecte:aeternalis_fuel_block>, <item:compressium:diamond_1>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:draconicevolution:awakened_draconium_ingot>],
[<item:minecraft:air>, <item:draconicevolution:awakened_draconium_ingot>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:projecte:dark_matter>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:air>],
[<item:minecraft:air>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);

craftingTable.addShapedMirrored ("repair_talisman", <item:projecte:repair_talisman>, [
[<item:projecte:low_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>],
[<item:minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}), <item:minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}), <item:minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]})],
[<item:projecte:high_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:low_covalence_dust>]]);

mods.extendedcrafting.TableCrafting.addShaped("watch_of_flowing_time", <item:projecte:watch_of_flowing_time>, [
[<item:projecte:dark_matter_block>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:minecraft:air>],
[<item:projecte:dark_matter>, <item:minecraft:clock>, <item:envirocore:xerothium_boule>, <item:minecraft:clock>, <item:projecte:dark_matter>],
[<item:projecte:dark_matter>, <item:envirocore:xerothium_boule>, <item:tiab:timeinabottle>, <item:envirocore:xerothium_boule>, <item:projecte:dark_matter>],
[<item:projecte:dark_matter>, <item:minecraft:clock>, <item:envirocore:xerothium_boule>, <item:minecraft:clock>, <item:projecte:dark_matter>],
[<item:minecraft:air>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:minecraft:air>]]);

craftingTable.addShaped ("transmutation_tablet", <item:projecte:transmutation_tablet>, [
[<item:projecte:dark_matter_block>, <item:botania:dragonstone_block>, <item:projecte:dark_matter_block>],
[<item:botania:dragonstone_block>, <item:projecte:transmutation_table>, <item:botania:dragonstone_block>],
[<item:projecte:dark_matter_block>, <item:botania:dragonstone_block>, <item:projecte:dark_matter_block>]]);

//gobber
