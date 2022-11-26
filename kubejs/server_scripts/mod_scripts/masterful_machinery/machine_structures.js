onEvent('recipes', event => {
    //psi
    event.custom({
        type: "masterfulmachinery:machine_structure",
        controllerId: "psi_reactor",
        id: "psi_structure",
        name: "Automatic Psi Reactor",
        layout: [
            [
                "     ",
                " BBB ",
                " BBB ",
                " BBB ",
                "     "
            ],
            [
                " BBB ",
                "BHHHB",
                "BHIHB",
                "BHHHB",
                " BBB "
            ],
            [
                " GFG ",
                "GJIJG",
                "DIIIE",
                "GJIJG",
                " GCG "
            ],
            [
                " BBB ",
                "BHHHB",
                "BHIHB",
                "BHHHB",
                " BBB "
            ],
            [
                "     ",
                " BBB ",
                " BBB ",
                " BBB ",
                "     "
            ]
        ],
        "legend": {
            "B": {
                "block": "psi:lit_black_psimetal_plate"
            },
            "D": {
                "block": "masterfulmachinery:psi_reactor_rl_port_items_input"
            },
            "E": {
                "block": "masterfulmachinery:psi_reactor_rl_port_items_output"
            },
            "F": {
                "block": "masterfulmachinery:psi_reactor_b_port_energy_input"
            },
            "G": {
                "block": "psi:lit_white_psimetal_plate"
            },
            "H": {
                "block": "psi:ebony_psimetal_block"
            },
            "I": {
                "block": "psi:psigem_block"
            },
            "J": {
                "block": "psi:ivory_psimetal_block"
            }
        }
    })
    event.custom({

        type: "masterfulmachinery:machine_structure",
        id: "ultima_pengu",
        controllerId: "waddle_ultima",
        name: "the god maker",
        layout: [
            [
                "            ",
                "            ",
                "            ",
                "    )**)    ",
                "            ",
                "            ",
                "            "
            ],
            [
                "            ",
                "            ",
                "    ++++    ",
                "  )))))))*  ",
                "    ,,,,    ",
                "            ",
                "            "
            ],
            [
                "            ",
                "    ***-    ",
                "  ))***)**  ",
                " )))***)*** ",
                "  ))***)**  ",
                "    ***.    ",
                "            "
            ],
            [
                "    ***-    ",
                "   )***)*   ",
                "  ))***)**  ",
                " )))***)*** ",
                "  ))***)**  ",
                "   .***)*   ",
                "    ***.    "
            ],
            [
                "   --*--    ",
                "  -))*))-   ",
                " *)))*))))  ",
                "C*)))*))))*/",
                " *)))*))))* ",
                "  .))*))).  ",
                "   ..*...   "
            ],
            [
                "   *-----   ",
                "  -*)))))-  ",
                " *)*))))))) ",
                "**)*))))))))",
                " *)*))))))) ",
                "  .*))))).  ",
                "   *.....   "
            ],
            [
                "   **--**   ",
                "  -**))**-  ",
                " ))**))**)) ",
                ")))**))**)))",
                " ))**))**)) ",
                "  .**))**.  ",
                "   **..**   "
            ],
            [
                "    ---*    ",
                "   -)))**   ",
                "  )))))**)  ",
                " ))))))**)) ",
                "  )))))**)  ",
                "   .)))**   ",
                "    ...*    "
            ],
            [
                "    *---    ",
                "   **)))-   ",
                "  )**)))))  ",
                " ))**)))))) ",
                "  )**)))))  ",
                "   **))).   ",
                "    *...    "
            ],
            [
                "     *-     ",
                "    **)-    ",
                "   ***))*   ",
                "  ****))*)  ",
                "   ***))*   ",
                "    **).    ",
                "     *.     "
            ],
            [
                "            ",
                "     *-     ",
                "   ***))*   ",
                "  ****))**  ",
                "   ***))*   ",
                "     *.     ",
                "            "
            ],
            [
                "            ",
                "            ",
                "     ))     ",
                "   **)))*   ",
                "     ))     ",
                "            ",
                "            "
            ],
            [
                "            ",
                "            ",
                "            ",
                "     ))     ",
                "            ",
                "            ",
                "            "
            ]
        ],
        "legend": {
            ")": {
                "block": "projecte:dark_matter_block"
            },
            "*": {
                "block": "minecraft:smooth_quartz"
            },
            "+": {
                "block": "masterfulmachinery:waddle_ultima_reactor_go_brrrr_port_energy_input"
            },
            ",": {
                "block": "masterfulmachinery:waddle_ultima_the_god_creator_port_items_input"
            },
            "-": {
                "block": "projecte:dark_matter_block"
            },
            ".": {
                "block": "masterfulmachinery:waddle_ultima_big_port_fluids_input"
            },
            "/": {
                "block": "masterfulmachinery:waddle_ultima_the_god_creator_port_items_output"
            }
        }
    })
//replace second dark matter block for gas
})