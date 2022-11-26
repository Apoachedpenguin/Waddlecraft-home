const assembly =[
    //drills
    {
        type: "pneumaticcraft:assembly_drill",
        input: "botania:rune_fire",
        count1: 1,
        output: "waddlecraft:logic_base",
        count2: 1,
        program: "drill"
    },
    {
        type: "pneumaticcraft:assembly_drill",
        input: "botania:rune_water",
        count1: 1,
        output: "waddlecraft:engineering_base",
        count2: 1,
        program: "drill"
    },
    {
        type: "pneumaticcraft:assembly_drill",
        input: "botania:rune_earth",
        count1: 1,
        output: "waddlecraft:silicon_base",
        count2: 1,
        program: "drill"
    },
    {
        type: "pneumaticcraft:assembly_drill",
        input: "botania:rune_air",
        count1: 1,
        output: "waddlecraft:calculation_base",
        count2: 1,
        program: "drill"
    },
    //lasers
    {
        type: "pneumaticcraft:assembly_laser",
        input: "waddlecraft:logic_base",
        count1: 1,
        output: "appliedenergistics2:logic_processor_press",
        count2: 1,
        program: "laser"
    },
    {
        type: "pneumaticcraft:assembly_laser",
        input: "waddlecraft:silicon_base",
        count1: 1,
        output: "appliedenergistics2:silicon_press",
        count2: 1,
        program: "laser"
    },
    {
        type: "pneumaticcraft:assembly_laser",
        input: "waddlecraft:calculation_base",
        count1: 1,
        output: "appliedenergistics2:calculation_processor_press",
        count2: 1,
        program: "laser"
    },
    {
        type: "pneumaticcraft:assembly_laser",
        input: "waddlecraft:engineering_base",
        count1: 1,
        output: "appliedenergistics2:engineering_processor_press",
        count2: 1,
        program: "laser"
    }
]