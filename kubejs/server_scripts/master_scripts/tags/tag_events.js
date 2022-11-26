const Validapiary = [
	{ item: "glassential:glass_ethereal" },
	{ item: "glassential:glass_dark_ethereal" }
]
const GunpowderStorage = [
	{ item: 'quark:gunpowder_sack' }
]
const Ambermyrmex = [
	{ item: 'iceandfire:myrmex_desert_resin' },
	{ item: 'iceandfire:myrmex_jungle_resin' }
]
const Pureore = [
	{ item: 'elementalcraft:pure_ore'}
]
onEvent('item.tags', event => {
	//if this gets big enough i will move it to another file :)
	Validapiary.forEach(block => {
		event.get('resourcefulbees:valid_apiary').add(block.item)
	})
	GunpowderStorage.forEach(block => {
		event.get('forge:storage_blocks/gunpowder').add(block.item)
	})
	Ambermyrmex.forEach(block => {
		event.get('wc:myrmex_amber').add(block.item)
	})
	Pureore.forEach(block => {
		event.get('wc:pureore').add(block.item)
	})
})