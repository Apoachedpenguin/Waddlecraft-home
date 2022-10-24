//thermal mod

<recipetype:thermal:smelter>.addRecipe("steel_casing", [<item:mekanism:steel_casing> %100], [<item:mekanism:block_steel>, <item:thermal:machine_frame>, <item:industrialforegoing:plastic> *4], 25, 1000);
<recipetype:thermal:smelter>.addRecipe("press_gear_die", [<item:thermal:press_gear_die> %100], [<item:thermal:diamond_gear>, <item:thermal:invar_plate> *4], 25, 1000);


//pneumaticcraft mod
<recipetype:pneumaticcraft:explosion_crafting>.addRecipe("dielectric_paste", <item:psi:ebony_substance>, [<item:powah:dielectric_paste>], 25);

<recipetype:pneumaticcraft:pressure_chamber>.addRecipe("timeinabottle", 
[<item:minecraft:glass_bottle>, <item:minecraft:clock>, <item:astralsorcery:liquid_starlight_bucket>, <item:powah:dielectric_paste> *2], [<item:tiab:timeinabottle>], 3.5);
<recipetype:pneumaticcraft:pressure_chamber>.addRecipe("dielectric_paste",
[<item:psi:ebony_substance>], [<item:powah:dielectric_paste> *2], 1.5);
