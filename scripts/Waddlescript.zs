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
<recipetype:create:pressing>.removeRecipe(<item:create:golden_sheet>);
<recipetype:create:pressing>.removeRecipe(<item:create:copper_sheet>); 
<recipetype:create:pressing>.removeRecipe(<item:create:iron_sheet>);
<recipetype:botania:pure_daisy>.removeRecipe(<blockstate:botania:livingrock>);
<recipetype:botania:pure_daisy>.removeRecipe(<blockstate:botania:livingwood>);
<recipetype:thermal:press>.removeRecipe(<item:immersiveengineering:plate_uranium>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:blankslate>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:daggerofsacrifice>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:soulsnare>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:weakbloodorb>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:apprenticebloodorb>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:magicianbloodorb>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:masterbloodorb>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:firescribetool>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:waterscribetool>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:earthscribetool>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:airscribetool>);
<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:duskscribetool>);

//general recipes

craftingTable.addShaped("sponge", <item:minecraft:sponge>, [
	[<item:rats:treacle>, <item:minecraft:yellow_wool>, <item:rats:treacle>],
	[<item:minecraft:yellow_wool>, <item:rats:plastic_waste>, <item:minecraft:yellow_wool>],
	[<item:rats:treacle>, <item:minecraft:yellow_wool>, <item:rats:treacle>]]);
craftingTable.addShapeless("processor_binding", <item:refinedstorage:processor_binding> *8, 
	[<item:botania:mana_powder>, <item:powah:dielectric_paste>, <item:minecraft:slime_ball>]);
craftingTable.addShapeless("witherbone", <item:iceandfire:witherbone> *2,
	[<item:minecraft:wither_skeleton_skull>]);

//create mod

<recipetype:create:pressing>.addRecipe("create_plate_copper", [<item:thermal:copper_plate>], <item:thermal:copper_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_netherite", [<item:thermal:netherite_plate>], <item:minecraft:netherite_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_iron", [<item:thermal:iron_plate>], <item:minecraft:iron_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_gold", [<item:thermal:gold_plate>], <item:minecraft:gold_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_tin", [<item:thermal:tin_plate>], <item:thermal:tin_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_lead", [<item:thermal:lead_plate>], <item:thermal:lead_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_silver", [<item:thermal:silver_plate>], <item:thermal:silver_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_nickel", [<item:thermal:nickel_plate>], <item:thermal:nickel_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_bronze", [<item:thermal:bronze_plate>], <item:thermal:bronze_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_electrum", [<item:thermal:electrum_plate>], <item:thermal:electrum_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_invar", [<item:thermal:invar_plate>], <item:thermal:invar_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_constantan", [<item:thermal:constantan_plate>], <item:thermal:constantan_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_signalum", [<item:thermal:signalum_plate>], <item:thermal:signalum_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_lumium", [<item:thermal:lumium_plate>], <item:thermal:lumium_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_enderium", [<item:thermal:enderium_plate>], <item:thermal:enderium_ingot>);
<recipetype:create:pressing>.addRecipe("create_plate_steel", [<item:immersiveengineering:plate_steel>], <item:mekanism:ingot_steel>);
<recipetype:create:pressing>.addRecipe("create_plate_aluminum", [<item:immersiveengineering:plate_aluminum>], <item:immersiveengineering:ingot_aluminum>);
craftingTable.addShapeless("vgearbox", <item:create:vertical_gearbox>,
	[<item:create:gearbox>]);

//immersiveengineering mod

<recipetype:immersiveengineering:metal_press>.addRecipe("copper_plate", <item:thermal:copper_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:copper_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("netherite_plate", <item:minecraft:netherite_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:netherite_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("iron_plate", <item:minecraft:iron_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:iron_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("gold_plate", <item:minecraft:gold_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:gold_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("tin_plate", <item:thermal:tin_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:tin_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("lead_plate", <item:thermal:lead_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:lead_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("silver_plate", <item:thermal:silver_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:silver_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("nickel_plate", <item:thermal:nickel_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:nickel_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("bronze_plate", <item:thermal:bronze_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:bronze_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("electrum_plate", <item:thermal:electrum_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:electrum_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("invar_plate", <item:thermal:invar_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:invar_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("constantan_plate", <item:thermal:constantan_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:constantan_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("signalum_plate",  <item:thermal:signalum_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:signalum_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("lumium_plate", <item:thermal:lumium_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:lumium_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("enderium_plate", <item:thermal:enderium_ingot>, <item:immersiveengineering:mold_plate>, 1000, <item:thermal:enderium_plate>);
<recipetype:immersiveengineering:metal_press>.addRecipe("plate_aluminum", <item:immersiveengineering:ingot_aluminum>, <item:immersiveengineering:mold_plate>, 1000, <item:immersiveengineering:plate_aluminum>);
<recipetype:immersiveengineering:metal_press>.addRecipe("plate_steel", <item:mekanism:ingot_steel>, <item:immersiveengineering:mold_plate>, 1000, <item:immersiveengineering:plate_steel>);
<recipetype:immersiveengineering:metal_press>.addRecipe("netherite_gear", <item:minecraft:netherite_ingot> *4, <item:immersiveengineering:mold_gear>, 1000, <item:thermal:netherite_gear>);
<recipetype:immersiveengineering:metal_press>.addRecipe("lapis_gear", <item:minecraft:lapis_lazuli> *4, <item:immersiveengineering:mold_gear>, 1000, <item:thermal:lapis_gear>);
<recipetype:immersiveengineering:metal_press>.addRecipe("diamond_gear", <item:minecraft:diamond> *4, <item:immersiveengineering:mold_gear>, 1000, <item:thermal:diamond_gear>);
<recipetype:immersiveengineering:metal_press>.addRecipe("emerald_gear", <item:minecraft:emerald> *4, <item:immersiveengineering:mold_gear>, 1000, <item:thermal:emerald_gear>);
<recipetype:immersiveengineering:metal_press>.addRecipe("quartz_gear", <item:minecraft:quartz> *4, <item:immersiveengineering:mold_gear>, 1000, <item:thermal:quartz_gear>);
<recipetype:immersiveengineering:metal_press>.addRecipe("signalum_gear", <item:thermal:signalum_ingot> *4, <item:immersiveengineering:mold_gear>, 1000, <item:thermal:signalum_gear>);
<recipetype:immersiveengineering:metal_press>.addRecipe("lumium_gear", <item:thermal:lumium_ingot> *4, <item:immersiveengineering:mold_gear>, 1000, <item:thermal:lumium_gear>);
<recipetype:immersiveengineering:metal_press>.addRecipe("enderium_gear", <item:thermal:enderium_ingot> *4, <item:immersiveengineering:mold_gear>, 1000, <item:thermal:enderium_gear>);
<recipetype:immersiveengineering:metal_press>.addRecipe("compressed_iron_gear", <item:pneumaticcraft:ingot_iron_compressed> *4, <item:immersiveengineering:mold_gear>, 1000, <item:pneumaticcraft:compressed_iron_gear>);
<recipetype:immersiveengineering:crusher>.addRecipe("plastic_waste", <item:rats:plastic_waste>, 500, <item:industrialforegoing:dryrubber>, <item:industrialforegoing:dryrubber> %75);

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

//industrial foregoing mod

//mekanism mod

//Psi mod
craftingTable.addShapedMirrored("cad_assembly_iron", <item:psi:cad_assembly_iron>, [
	[<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:immersiveengineering:gunpart_barrel>],
	[<item:minecraft:iron_ingot>, <item:pneumaticcraft:air_canister>, <item:minecraft:air>]]);
	
craftingTable.addShapedMirrored("cad_assembly_gold", <item:psi:cad_assembly_gold>, [
	[<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:immersiveengineering:gunpart_barrel>],
	[<item:minecraft:gold_ingot>, <item:pneumaticcraft:air_canister>, <item:minecraft:air>]]);
	
craftingTable.addShapedMirrored("cad_assembly_psimetal", <item:psi:cad_assembly_psimetal>, [
	[<item:psi:psimetal>, <item:psi:psimetal>, <item:pneumaticcraft:pneumatic_cylinder>],
	[<item:psi:psimetal>, <item:pneumaticcraft:printed_circuit_board>, <item:minecraft:air>]]);
	
craftingTable.addShapedMirrored("cad_assembly_ebony_psimetal", <item:psi:cad_assembly_ebony_psimetal>, [
	[<item:psi:psigem>, <item:psi:ebony_psimetal>, <item:pneumaticcraft:pneumatic_cylinder>],
	[<item:psi:ebony_psimetal>, <item:pneumaticcraft:advanced_pcb>, <item:minecraft:air>]]);
	
craftingTable.addShapedMirrored("cad_assembly_ivory_psimetal", <item:psi:cad_assembly_ivory_psimetal>, [
	[<item:psi:psigem>, <item:psi:ivory_psimetal>, <item:pneumaticcraft:pneumatic_cylinder>],
	[<item:psi:ivory_psimetal>, <item:pneumaticcraft:advanced_pcb>, <item:minecraft:air>]]);

craftingTable.addShaped("programmer", <item:psi:programmer>, [
	[<item:pneumaticcraft:network_node>, <item:pneumaticcraft:capacitor>, <item:pneumaticcraft:network_node>],
	[<item:pneumaticcraft:network_node>, <item:pneumaticcraft:compressed_iron_block>, <item:pneumaticcraft:network_node>],
	[<item:pneumaticcraft:ingot_iron_compressed>, <item:pneumaticcraft:ingot_iron_compressed>, <item:pneumaticcraft:ingot_iron_compressed>]]);

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

//draconic evolution mod

craftingTable.addShaped("draconium_core", <item:draconicevolution:draconium_core>, [
	[<item:draconicevolution:draconium_ingot>, <item:botania:manasteel_ingot>, <item:draconicevolution:draconium_ingot>],
	[<item:botania:manasteel_ingot>, <item:minecraft:diamond>, <item:botania:manasteel_ingot>],
	[<item:draconicevolution:draconium_ingot>, <item:botania:manasteel_ingot>, <item:draconicevolution:draconium_ingot>]]);
	
craftingTable.addShaped("wyvern_core", <item:draconicevolution:wyvern_core>, [
	[<item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_core>, <item:draconicevolution:draconium_ingot>],
	[<item:draconicevolution:draconium_core>, <item:envirocore:xerothium_crystal>, <item:draconicevolution:draconium_core>],
	[<item:draconicevolution:draconium_ingot>, <item:draconicevolution:draconium_core>, <item:draconicevolution:draconium_ingot>]]);
	
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

//Iceandfire
	
//blood magic



craftingTable.addShaped("sacrificialdagger", <item:bloodmagic:sacrificialdagger>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:botania:mana_glass>],
	[<item:minecraft:air>, <item:botania:mana_glass>, <item:minecraft:air>],
	[<item:botania:manasteel_ingot>, <item:minecraft:air>, <item:minecraft:air>]]);
	
//resourceful bees mod

craftingTable.addShaped("white_dye", <item:minecraft:white_dye>, [
	[<item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("orange_dye", <item:minecraft:orange_dye>, [
	[<item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("yellow_dye", <item:minecraft:yellow_dye>, [
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>]]);
craftingTable.addShaped("magenta_dye", <item:minecraft:magenta_dye>, [
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("light_blue_dye", <item:minecraft:light_blue_dye>, [
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("lime_dye", <item:minecraft:lime_dye>, [
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("pink_dye", <item:minecraft:pink_dye>, [
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("gray_dye", <item:minecraft:gray_dye>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("light_gray_dye", <item:minecraft:light_gray_dye>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("cyan_dye", <item:minecraft:cyan_dye>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>]]);
craftingTable.addShaped("purple_dye", <item:minecraft:purple_dye>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>]]);
craftingTable.addShaped("blue_dye", <item:minecraft:blue_dye>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>]]);
craftingTable.addShaped("brown_dye", <item:minecraft:brown_dye>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("green_dye", <item:minecraft:green_dye>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("red_dye", <item:minecraft:red_dye>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:minecraft:air>, <item:resourcefulbees:rgbee_honeycomb>]]);
craftingTable.addShaped("black_dye", <item:minecraft:black_dye>, [
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>, <item:resourcefulbees:rgbee_honeycomb>]]);
craftingTable.addShaped("oak_log", <item:minecraft:oak_log> *16, [
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("spruce_log", <item:minecraft:spruce_log> *16, [
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>]]);
craftingTable.addShaped("birch_log", <item:minecraft:birch_log> *16, [
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>],
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("acacia_log", <item:minecraft:acacia_log> *16, [
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>]]);
craftingTable.addShaped("jungle_log", <item:minecraft:jungle_log> *16, [
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>]]);
craftingTable.addShaped("dark_oak_log", <item:minecraft:dark_oak_log> *16, [
	[<item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>],
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>],
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:minecraft:air>]]);
craftingTable.addShaped("crimson_stem", <item:minecraft:crimson_stem> *16, [
	[<item:resourcefulbees:netherrack_honeycomb>, <item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>],
	[<item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>],
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:resourcefulbees:netherrack_honeycomb>]]);
craftingTable.addShaped("warped_stem", <item:minecraft:warped_stem> *16, [
	[<item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>, <item:resourcefulbees:netherrack_honeycomb>],
	[<item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>, <item:minecraft:air>],
	[<item:resourcefulbees:netherrack_honeycomb>, <item:minecraft:air>, <item:resourcefulbees:wood_honeycomb>]]);

//Rftools mod
craftingTable.addShapedMirrored("machine_base", <item:rftoolsbase:machine_base>, [
	[<item:rftoolsbase:dimensionalshard>, <item:rftoolsbase:dimensionalshard>,<item:rftoolsbase:dimensionalshard>],
	[<item:mekanism:ingot_steel>, <item:mekanism:ingot_steel>, <item:mekanism:ingot_steel>]]);
craftingTable.addShaped("machine_frame", <item:rftoolsbase:machine_frame>, [
	[<item:rftoolsbase:dimensionalshard>, <item:rftoolsbase:dimensionalshard>, <item:rftoolsbase:dimensionalshard>],
	[<item:mekanism:ingot_steel>, <item:thermal:machine_frame>, <item:mekanism:ingot_steel>],
	[<item:rftoolsbase:dimensionalshard>, <item:rftoolsbase:dimensionalshard>, <item:rftoolsbase:dimensionalshard>]]);

//ProjectE

mods.extendedcrafting.TableCrafting.addShaped("alchemical_chest", <item:projecte:alchemical_chest>, [
[<item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>],
[<item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:low_covalence_dust>],
[<item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:projecte:high_covalence_dust>, <item:projecte:high_covalence_dust>, <item:projecte:high_covalence_dust>, <item:projecte:low_covalence_dust>, <item:minecraft:air>],
[<item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>, <item:ironchest:obsidian_chest>, <item:projecte:high_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:projecte:low_covalence_dust>],
[<item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:projecte:high_covalence_dust>, <item:projecte:high_covalence_dust>, <item:projecte:high_covalence_dust>, <item:projecte:high_covalence_dust>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>],
[<item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>],
[<item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:air>]]);

mods.extendedcrafting.TableCrafting.addShaped("collector_mk1", <item:projecte:collector_mk1>, [
[<item:minecraft:glowstone>, <item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:compressium:quartz_1>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:projecte:high_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:projecte:high_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:aeternalis_fuel>, <item:compressium:quartz_3>, <item:projecte:aeternalis_fuel>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:projecte:high_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:projecte:high_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:mekanism:block_refined_glowstone>, <item:mekanism:block_refined_glowstone>, <item:mekanism:block_refined_glowstone>, <item:projecte:medium_covalence_dust>, <item:projecte:high_covalence_dust>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:projecte:high_covalence_dust>, <item:projecte:high_covalence_dust>, <item:mekanism:block_refined_glowstone>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:mekanism:block_refined_glowstone>, <item:projecte:high_covalence_dust>, <item:projecte:high_covalence_dust>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:minecraft:glowstone>, <item:minecraft:glowstone>, <item:mekanism:block_refined_glowstone>, <item:mekanism:block_refined_glowstone>, <item:mekanism:block_refined_glowstone>, <item:minecraft:glowstone>, <item:minecraft:glowstone>, <item:minecraft:glowstone>]]);

mods.extendedcrafting.TableCrafting.addShaped("collector_mk2", <item:projecte:collector_mk2>, [
[<item:minecraft:glowstone>, <item:industrialforegoing:dark_glass>, <item:industrialforegoing:dark_glass>, <item:industrialforegoing:dark_glass>, <item:industrialforegoing:dark_glass>, <item:industrialforegoing:dark_glass>, <item:industrialforegoing:dark_glass>, <item:industrialforegoing:dark_glass>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:psi:psimetal>, <item:psi:psigem>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:psi:psigem>, <item:psi:psimetal>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:psi:psimetal>, <item:psi:psigem>, <item:projecte:dark_matter>, <item:projecte:collector_mk1>, <item:projecte:dark_matter>, <item:psi:psigem>, <item:psi:psimetal>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:psi:psimetal>, <item:psi:psigem>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:psi:psigem>, <item:psi:psimetal>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:psi:psimetal>, <item:psi:psigem>, <item:mekanism:block_refined_glowstone>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:mekanism:block_refined_glowstone>, <item:psi:psigem>, <item:psi:psimetal>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:psi:psimetal>, <item:psi:psimetal>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:psi:psimetal>, <item:psi:psimetal>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:minecraft:glowstone>, <item:minecraft:glowstone>, <item:mekanism:block_refined_glowstone>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:mekanism:block_refined_glowstone>, <item:minecraft:glowstone>, <item:minecraft:glowstone>, <item:minecraft:glowstone>]]);

mods.extendedcrafting.TableCrafting.addShaped("collector_mk3", <item:projecte:collector_mk3>, [
[<item:minecraft:glowstone>, <item:thermal:signalum_glass>, <item:thermal:signalum_glass>, <item:thermal:signalum_glass>, <item:thermal:signalum_glass>, <item:thermal:signalum_glass>, <item:thermal:signalum_glass>, <item:thermal:signalum_glass>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:compressium:redstone_2>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:large_chaos_frag>, <item:projecte:red_matter>, <item:projecte:red_matter>, <item:projecte:red_matter>, <item:draconicevolution:large_chaos_frag>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:large_chaos_frag>, <item:projecte:red_matter>, <item:projecte:collector_mk2>, <item:projecte:red_matter>, <item:draconicevolution:large_chaos_frag>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:large_chaos_frag>, <item:projecte:red_matter>, <item:draconicevolution:dragon_heart>, <item:projecte:red_matter>, <item:draconicevolution:large_chaos_frag>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:large_chaos_frag>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:draconicevolution:large_chaos_frag>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:draconicevolution:awakened_draconium_ingot>, <item:draconicevolution:awakened_draconium_ingot>, <item:minecraft:glowstone>],
[<item:minecraft:glowstone>, <item:minecraft:glowstone>, <item:minecraft:glowstone>, <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:extendedcrafting:singularity>.withTag({Id: "extendedcrafting:glowstone" as string}), <item:minecraft:glowstone>, <item:minecraft:glowstone>, <item:minecraft:glowstone>]]);

mods.extendedcrafting.TableCrafting.addShaped("relay_mk1", <item:projecte:relay_mk1>, [
[<item:minecraft:obsidian>, <item:minecraft:black_stained_glass>, <item:minecraft:black_stained_glass>, <item:minecraft:black_stained_glass>, <item:minecraft:black_stained_glass>, <item:minecraft:black_stained_glass>, <item:minecraft:black_stained_glass>, <item:minecraft:black_stained_glass>, <item:minecraft:obsidian>],
[<item:minecraft:obsidian>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:minecraft:obsidian>],
[<item:minecraft:obsidian>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:minecraft:obsidian>],
[<item:minecraft:obsidian>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:minecraft:obsidian>],
[<item:minecraft:obsidian>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:projecte:aeternalis_fuel>, <item:minecraft:diamond_block>, <item:projecte:aeternalis_fuel>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:minecraft:obsidian>],
[<item:minecraft:obsidian>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:minecraft:obsidian>],
[<item:minecraft:obsidian>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:minecraft:obsidian>],
[<item:minecraft:obsidian>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:envirocore:aethium_crystal>, <item:envirocore:aethium_crystal>, <item:minecraft:obsidian>],
[<item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>]]);

mods.extendedcrafting.TableCrafting.addShaped("relay_mk2", <item:projecte:relay_mk2>, [
[<item:compressium:obsidian_1>, <item:darkutils:dark_glass>, <item:darkutils:dark_glass>, <item:darkutils:dark_glass>, <item:darkutils:dark_glass>, <item:darkutils:dark_glass>, <item:darkutils:dark_glass>, <item:darkutils:dark_glass>, <item:compressium:obsidian_1>],
[<item:compressium:obsidian_1>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_1>],
[<item:compressium:obsidian_1>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_1>],
[<item:compressium:obsidian_1>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:compressium:obsidian_1>],
[<item:compressium:obsidian_1>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:projecte:dark_matter>, <item:projecte:relay_mk1>, <item:projecte:dark_matter>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:compressium:obsidian_1>],
[<item:compressium:obsidian_1>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:projecte:dark_matter>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:compressium:obsidian_1>],
[<item:compressium:obsidian_1>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:compressium:obsidian_1>],
[<item:compressium:obsidian_1>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:envirocore:nanorite_crystal>, <item:envirocore:nanorite_crystal>, <item:compressium:obsidian_1>],
[<item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>, <item:compressium:obsidian_1>]]);

mods.extendedcrafting.TableCrafting.addShaped("mk3relay", <item:projecte:relay_mk3>, [
[<item:compressium:obsidian_2>, <item:glassential:glass_dark_ethereal>, <item:glassential:glass_dark_ethereal>, <item:glassential:glass_dark_ethereal>, <item:glassential:glass_dark_ethereal>, <item:glassential:glass_dark_ethereal>, <item:glassential:glass_dark_ethereal>, <item:glassential:glass_dark_ethereal>, <item:compressium:obsidian_2>],
[<item:compressium:obsidian_2>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_2>],
[<item:compressium:obsidian_2>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_3>, <item:compressium:obsidian_2>],
[<item:compressium:obsidian_2>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:projecte:red_matter>, <item:projecte:red_matter>, <item:projecte:red_matter>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:compressium:obsidian_2>],
[<item:compressium:obsidian_2>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:projecte:red_matter>, <item:projecte:relay_mk2>, <item:projecte:red_matter>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:compressium:obsidian_2>],
[<item:compressium:obsidian_2>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:projecte:red_matter>, <item:projecte:red_matter>, <item:projecte:red_matter>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:compressium:obsidian_2>],
[<item:compressium:obsidian_2>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:compressium:obsidian_2>],
[<item:compressium:obsidian_2>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:envirocore:xerothium_crystal>, <item:envirocore:xerothium_crystal>, <item:compressium:obsidian_2>],
[<item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:mekanism:block_refined_obsidian>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>, <item:compressium:obsidian_2>]]);

mods.extendedcrafting.TableCrafting.addShaped("condenser_mk1", <item:projecte:condenser_mk1>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:netherite_ingot>, <item:projecte:klein_star_drei>, <item:mekanism:pellet_antimatter>, <item:botania:quartz_mana>, <item:projecte:high_covalence_dust>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:projecte:low_covalence_dust>, <item:projecte:low_covalence_dust>, <item:mekanism:pellet_antimatter>, <item:botania:quartz_mana>, <item:projecte:high_covalence_dust>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:botania:quartz_mana>, <item:mekanism:pellet_antimatter>, <item:projecte:alchemical_chest>, <item:mekanism:pellet_antimatter>, <item:botania:quartz_mana>, <item:projecte:high_covalence_dust>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:botania:quartz_mana>, <item:mekanism:pellet_antimatter>, <item:projecte:low_covalence_dust>, <item:projecte:low_covalence_dust>, <item:projecte:high_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:botania:quartz_mana>, <item:mekanism:pellet_antimatter>, <item:projecte:klein_star_drei>, <item:minecraft:netherite_ingot>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:netherite_ingot>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);

mods.extendedcrafting.TableCrafting.addShaped("condenser_mk2", <item:projecte:condenser_mk2>, [
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:netherite_block>, <item:minecraft:netherite_block>, <item:minecraft:netherite_block>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:low_covalence_dust>, <item:minecraft:netherite_block>, <item:projecte:klein_star_sphere>, <item:projecte:dark_matter>, <item:botania:quartz_elven>, <item:projecte:high_covalence_dust>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:projecte:low_covalence_dust>, <item:projecte:low_covalence_dust>, <item:projecte:dark_matter>, <item:botania:quartz_elven>, <item:projecte:high_covalence_dust>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:botania:quartz_elven>, <item:projecte:dark_matter>, <item:projecte:condenser_mk1>, <item:projecte:dark_matter>, <item:botania:quartz_elven>, <item:projecte:high_covalence_dust>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:botania:quartz_elven>, <item:projecte:dark_matter>, <item:projecte:low_covalence_dust>, <item:projecte:low_covalence_dust>, <item:projecte:high_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:projecte:high_covalence_dust>, <item:botania:quartz_elven>, <item:projecte:dark_matter>, <item:projecte:klein_star_sphere>, <item:minecraft:netherite_block>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:minecraft:netherite_block>, <item:minecraft:netherite_block>, <item:minecraft:netherite_block>, <item:projecte:low_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>],
[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:projecte:medium_covalence_dust>, <item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);

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
