//priority 1
onEvent('recipes', Botanydaisy => {
    Botanydaisy.custom({
      type: 'botania:pure_daisy',
      input: {
        type: 'block',
        block: 'minecraft:end_stone'
      },
      output: { name: 'botania:livingrock' }
    })
    Botanydaisy.custom({
        type: 'botania:pure_daisy',
        input: {
          type: 'block',
          block: 'astralsorcery:infused_wood'
        },
        output: { name: 'botania:livingwood' }
      })
      Botanydaisy.custom({
        type: 'botania:pure_daisy',
        input: {
          type: 'block',
          block: 'rats:compressed_garbage'
        },
        output: { name: 'rats:purified_garbage' }
      })
})