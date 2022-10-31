onEvent('recipes', event => {
  event.custom({
    type: "pneumaticcraft:explosion_crafting",
    input: {
      item: "psi:ebony_substance"
    },
    results: [
      {
        item: "powah:dielectric_paste"
      }
    ],
    loss_rate: 25
  }),

    event.custom({
      type: "pneumaticcraft:pressure_chamber",
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
      results: [
        {
          item: "tiab:timeinabottle"
        }
      ]
    })
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "psi:ebony_substance"
      }
    ],
    pressure: 2,
    results: [
      {
        item: "2x powah:dielectric_paste"
      }
    ]
  })
})