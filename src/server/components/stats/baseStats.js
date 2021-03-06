const events = require('../../misc/events');

const baseStats = {
	mana: 20,
	manaMax: 20,

	manaReservePercent: 0,

	hp: 5,
	hpMax: 5,
	xpTotal: 0,
	xp: 0,
	xpMax: 0,
	level: 1,
	str: 0,
	int: 0,
	dex: 0,
	magicFind: 0,
	itemQuantity: 0,
	regenHp: 0,
	regenMana: 5,

	addCritChance: 0,
	addCritMultiplier: 0,
	addAttackCritChance: 0,
	addAttackCritMultiplier: 0,
	addSpellCritChance: 0,
	addSpellCritMultiplier: 0,

	critChance: 5,
	critMultiplier: 150,
	attackCritChance: 0,
	attackCritMultiplier: 0,
	spellCritChance: 0,
	spellCritMultiplier: 0,

	armor: 0,
	vit: 0,

	blockAttackChance: 0,
	blockSpellChance: 0,
	dodgeAttackChance: 0,
	dodgeSpellChance: 0,

	attackSpeed: 0,
	castSpeed: 0,

	elementArcanePercent: 0,
	elementFrostPercent: 0,
	elementFirePercent: 0,
	elementHolyPercent: 0,
	elementPoisonPercent: 0,
	physicalPercent: 0,

	elementPercent: 0,
	spellPercent: 0,

	elementArcaneResist: 0,
	elementFrostResist: 0,
	elementFireResist: 0,
	elementHolyResist: 0,
	elementPoisonResist: 0,

	elementAllResist: 0,

	sprintChance: 0,

	xpIncrease: 0,

	lifeOnHit: 0
};

events.emit('onBeforeGetBaseStats', baseStats);

module.exports = baseStats;
