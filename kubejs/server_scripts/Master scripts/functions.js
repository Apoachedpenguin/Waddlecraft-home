// priority: 1

let altarRecipe = (output, input, tier, drain, consumptionRate, drainRate) => {
    return onEvent('recipes', event => {
        event.recipes.bloodmagic.altar(output, input)
            .upgradeLevel(tier)
            .altarSyphon(drain)
            .consumptionRate(consumptionRate)
            .drainRate(drainRate)
    })
}