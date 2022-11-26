const pressurechamber = [
  {
    inputs: [{ item: "psi:ebony_substance" }],
    pressure: 2,
    output: [{ item: "powah:dielectric_paste", count: 2 }]
  },
  {
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        item: "powah:dielectric_paste",
        count: 2
      },
      {
        item: "astralsorcery:liquid_starlight_bucket"
      },
      {
        item: "minecraft:glass_bottle"
      },
      {
        item: "minecraft:clock"
      }
    ],
    pressure: 3.5,
    output: [
      {
        item: "tiab:timeinabottle"
      }
    ]
  }
]