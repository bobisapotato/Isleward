module.exports = {
	name: 'Fjolarok',
	level: [1, 10],
	objects: {
		shopestrid: {
			properties: {
				cpnNotice: {
					actions: {
						enter: {
							cpn: 'dialogue',
							method: 'talk',
							args: [{
								targetName: 'estrid'
							}]
						},
						exit: {
							cpn: 'dialogue',
							method: 'stopTalk'
						}
					}
				}
			}
		},
		shophermit: {
			properties: {
				cpnNotice: {
					actions: {
						enter: {
							cpn: 'dialogue',
							method: 'talk',
							args: [{
								targetName: 'hermit'
							}]
						},
						exit: {
							cpn: 'dialogue',
							method: 'stopTalk'
						}
					}
				}
			}
		},
		shopvikar: {
			properties: {
				cpnNotice: {
					actions: {
						enter: {
							cpn: 'dialogue',
							method: 'talk',
							args: [{
								targetName: 'vikar'
							}]
						},
						exit: {
							cpn: 'dialogue',
							method: 'stopTalk'
						}
					}
				}
			}
		},
		shopasvald: {
			properties: {
				cpnNotice: {
					actions: {
						enter: {
							cpn: 'dialogue',
							method: 'talk',
							args: [{
								targetName: 'asvald'
							}]
						},
						exit: {
							cpn: 'dialogue',
							method: 'stopTalk'
						}
					}
				}
			}
		},
		shoppriest: {
			properties: {
				cpnNotice: {
					actions: {
						enter: {
							cpn: 'dialogue',
							method: 'talk',
							args: [{
								targetName: 'priest'
							}]
						},
						exit: {
							cpn: 'dialogue',
							method: 'stopTalk'
						}
					}
				}
			}
		},
		'estuary entrance': {
			components: {
				cpnParticles: {
					simplify: function () {
						return {
							type: 'particles',
							blueprint: {
								color: {
									start: ['48edff', '80f643'],
									end: ['80f643', '48edff']
								},
								scale: {
									start: {
										min: 2,
										max: 10
									},
									end: {
										min: 0,
										max: 2
									}
								},
								speed: {
									start: {
										min: 4,
										max: 16
									},
									end: {
										min: 2,
										max: 8
									}
								},
								lifetime: {
									min: 1,
									max: 4
								},
								randomScale: true,
								randomSpeed: true,
								chance: 0.075,
								randomColor: true,
								spawnType: 'rect',
								spawnRect: {
									x: -32,
									y: -48,
									w: 64,
									h: 64
								}
							}
						};
					}
				}
			}
		},
		gas: {
			components: {
				cpnParticles: {
					simplify: function () {
						return {
							type: 'particles',
							blueprint: {
								color: {
									start: ['c0c3cf', '80f643'],
									end: ['386646', '69696e']
								},
								scale: {
									start: {
										min: 18,
										max: 64
									},
									end: {
										min: 8,
										max: 24
									}
								},
								speed: {
									start: {
										min: 2,
										max: 6
									},
									end: {
										min: 0,
										max: 4
									}
								},
								lifetime: {
									min: 4,
									max: 24
								},
								alpha: {
									start: 0.05,
									end: 0
								},
								randomScale: true,
								randomSpeed: true,
								chance: 0.02,
								randomColor: true,
								spawnType: 'rect',
								blendMode: 'screen',
								spawnRect: {
									x: -80,
									y: -80,
									w: 160,
									h: 160
								}
							}
						};
					}
				}
			}
		},
		greencandle: {
			components: {
				cpnLight: {
					simplify: function () {
						return {
							type: 'light',
							blueprint: {
								color: {
									start: ['80f643'],
									end: ['4ac441', '51fc9a', 'd07840']
								},
								lifetime: {
									min: 2,
									max: 6
								}
							}
						};
					}
				}
			}
		},
		fountain: {
			components: {
				cpnParticles: {
					simplify: function () {
						return {
							type: 'particles',
							blueprint: {
								color: {
									start: ['48edff', '3fa7dd'],
									end: ['3a71ba', '42548d']
								},
								scale: {
									start: {
										min: 2,
										max: 10
									},
									end: {
										min: 0,
										max: 2
									}
								},
								speed: {
									start: {
										min: 4,
										max: 16
									},
									end: {
										min: 2,
										max: 8
									}
								},
								lifetime: {
									min: 2,
									max: 5
								},
								randomScale: true,
								randomSpeed: true,
								chance: 0.8,
								randomColor: true,
								spawnType: 'rect',
								spawnRect: {
									x: -10,
									y: -21,
									w: 20,
									h: 8
								}
							}
						};
					}
				}
			}
		},
		alchgreenpot: {
			components: {
				cpnParticles: {
					simplify: function () {
						return {
							type: 'particles',
							blueprint: {
								color: {
									start: ['80f643', '80f643'],
									end: ['4ac441', '4ac441']
								},
								scale: {
									start: {
										min: 2,
										max: 10
									},
									end: {
										min: 0,
										max: 2
									}
								},
								speed: {
									start: {
										min: 4,
										max: 16
									},
									end: {
										min: 2,
										max: 8
									}
								},
								lifetime: {
									min: 1,
									max: 4
								},
								randomScale: true,
								randomSpeed: true,
								chance: 0.1,
								randomColor: true,
								spawnType: 'rect',
								spawnRect: {
									x: -15,
									y: -20,
									w: 30,
									h: 8
								}
							}
						};
					}
				}
			}
		},
		alchredpot: {
			components: {
				cpnParticles: {
					simplify: function () {
						return {
							type: 'particles',
							blueprint: {
								color: {
									start: ['ff4252', 'ff4252'],
									end: ['a82841', 'a82841']
								},
								scale: {
									start: {
										min: 2,
										max: 10
									},
									end: {
										min: 0,
										max: 2
									}
								},
								speed: {
									start: {
										min: 4,
										max: 16
									},
									end: {
										min: 2,
										max: 8
									}
								},
								lifetime: {
									min: 1,
									max: 4
								},
								randomScale: true,
								randomSpeed: true,
								chance: 0.2,
								randomColor: true,
								spawnType: 'rect',
								spawnRect: {
									x: -15,
									y: -28,
									w: 30,
									h: 8
								}
							}
						};
					}
				}
			}
		}
	},
	mobs: {
		default: {
			regular: {
				drops: {
					chance: 40,
					rolls: 1
				}
			}
		},
		'crazed seagull': {
			level: 1,

			rare: {
				count: 0
			},

			regular: {
				drops: {
					rolls: 1,
					noRandom: true,
					blueprints: [{
						chance: 100,
						maxLevel: 2,
						name: 'Family Heirloom',
						quality: 1,
						slot: 'neck',
						type: 'Choker',
						noSalvage: true,
						stats: ['vit', 'regenMana']
					}]
				}
			}
		},
		seagull: {
			level: 2,
			regular: {
				drops: {
					chance: 60,
					rolls: 1
				}
			},
			rare: {
				count: 0
			},
			questItem: {
				name: 'Gull Feather',
				sprite: [0, 0]
			}
		},
		bunny: {
			level: 3,
			regular: {
				drops: {
					chance: 56,
					rolls: 1
				}
			},
			rare: {
				count: 0
			},
			questItem: {
				name: "Rabbit's Foot",
				sprite: [0, 1]
			}
		},
		thumper: {
			level: 5,
			cron: '0 * * * *',

			regular: {
				hpMult: 3,
				dmgMult: 3,

				drops: {
					chance: 100,
					rolls: 2,
					magicFind: [1300]
				}
			},
			rare: {
				chance: 100
			}
		},
		elk: {
			level: 4,
			regular: {
				drops: {
					chance: 50,
					rolls: 1
				}
			},
			rare: {
				name: 'Ironhorn'
			},
			questItem: {
				name: 'Elk Antler',
				sprite: [0, 2]
			}
		},
		flamingo: {
			level: 5,
			regular: {
				drops: {
					chance: 45,
					rolls: 1
				}
			}
		},
		crab: {
			level: 6,

			rare: {
				name: 'Squiggles'
			},
			questItem: {
				name: 'Severed Pincer',
				sprite: [0, 3]
			}
		},
		'titan crab': {
			level: 7,
			rare: {
				name: 'The Pincer King'
			}
		},
		'mud crab': {
			level: 9
		},
		frog: {
			level: 8,
			rare: {
				name: 'The Muck Prince'
			}
		},
		eagle: {
			level: 10,
			regular: {
				drops: {
					rolls: 1,
					noRandom: true,
					alsoRandom: true,
					blueprints: [{
						chance: 3,
						name: 'Eagle Feather',
						material: true,
						sprite: [0, 0],
						spritesheet: 'images/questItems.png'
					}]
				}
			},
			rare: {
				name: 'Fleshripper',
				drops: {
					rolls: 1,
					noRandom: true,
					alsoRandom: true,
					blueprints: [{
						chance: 80,
						name: 'Eagle Feather',
						material: true,
						sprite: [0, 0],
						spritesheet: 'images/questItems.png'
					}]
				}
			}
		},
		hermit: {
			level: 10,
			walkDistance: 0,
			attackable: false,
			rare: {
				count: 0
			}
		},
		guard: {
			level: 20,
			attackable: false,

			walkDistance: 0,

			rare: {
				count: 0
			}
		},
		estrid: {
			level: 15,
			attackable: false,
			walkDistance: 5,

			rare: {
				count: 0
			}
		},
		vikar: {
			level: 15,
			walkDistance: 0,
			attackable: false,
			rare: {
				count: 0
			}
		},
		luta: {
			level: 15,
			walkDistance: 0,
			attackable: false,
			rare: {
				count: 0
			}
		},
		asvald: {
			level: 15,
			walkDistance: 0,
			attackable: false,
			rare: {
				count: 0
			},

			properties: {
				cpnTrade: {
					items: {
						min: 0,
						max: 0,
						extra: [{
							generate: true,
							spell: true,
							quality: 0,
							infinite: true,
							spellName: 'magic missile',
							worth: 3
						}, {
							generate: true,
							spell: true,
							quality: 0,
							infinite: true,
							spellName: 'ice spear',
							worth: 3
						}, {
							generate: true,
							spell: true,
							quality: 0,
							infinite: true,
							spellName: 'smite',
							worth: 3
						}, {
							generate: true,
							spell: true,
							quality: 0,
							infinite: true,
							spellName: 'consecrate',
							worth: 3
						}, {
							generate: true,
							spell: true,
							quality: 0,
							infinite: true,
							spellName: 'slash',
							worth: 3
						}, {
							generate: true,
							spell: true,
							quality: 0,
							infinite: true,
							spellName: 'charge',
							worth: 3
						}, {
							generate: true,
							spell: true,
							quality: 0,
							infinite: true,
							spellName: 'flurry',
							worth: 3
						}, {
							generate: true,
							spell: true,
							quality: 0,
							infinite: true,
							spellName: 'smokebomb',
							worth: 3
						}]
					},
					faction: {
						id: 'fjolgard',
						tier: 5
					},
					markup: {
						buy: 0.25,
						sell: 10
					}
				}
			}
		},
		rodriguez: {
			attackable: false,
			level: 10,
			rare: {
				count: 0
			}
		},
		pig: {
			attackable: false,
			level: 3,
			rare: {
				count: 0
			}
		},
		goat: {
			attackable: false,
			level: 3,
			rare: {
				count: 0
			}
		},
		cow: {
			attackable: false,
			level: 3,
			rare: {
				count: 0
			}
		},
		priest: {
			level: 20,
			attackable: false,
			walkDistance: 0,
			rare: {
				count: 0
			},

			properties: {
				cpnTrade: {
					items: {
						min: 5,
						max: 10,
						extra: [{
							type: 'skin',
							skinId: '2.0',
							worth: 100,
							factions: [{
								id: 'gaekatla',
								tier: 7
							}]
						}, {
							worth: 100,
							infinite: true,
							generate: true,
							name: 'Cowl of Obscurity',
							level: [4, 13],
							quality: 4,
							noSpell: true,
							slot: 'head',
							sprite: [2, 0],
							spritesheet: '../../../images/legendaryItems.png',
							type: 'Silk Cowl',
							description: 'Imbued with the powers of Gaekatla herself.',
							stats: ['hpMax', 'hpMax', 'int', 'int'],
							effects: [{
								type: 'healOnCrit',
								rolls: {
									i_chance: [20, 60],
									i_percentage: [3, 7]
								}
							}],
							factions: [{
								id: 'gaekatla',
								tier: 7
							}]
						}]
					},
					faction: {
						id: 'gaekatla',
						tier: 5
					},
					markup: {
						buy: 0.25,
						sell: 10
					}
				}
			}
		},

		sundfehr: {
			level: 9,
			walkDistance: 0,

			cron: '0 */2 * * *',

			regular: {
				hpMult: 10,
				dmgMult: 1,

				drops: {
					chance: 100,
					rolls: 3,
					magicFind: [2000]
				}
			},

			rare: {
				chance: 0
			},

			spells: [{
				type: 'warnBlast',
				range: 8,
				delay: 9,
				damage: 0.8,
				statMult: 1,
				cdMax: 7,
				targetRandom: true,
				particles: {
					color: {
						start: ['c0c3cf', '929398'],
						end: ['929398', 'c0c3cf']
					},
					spawnType: 'circle',
					spawnCircle: {
						x: 0,
						y: 0,
						r: 12
					},
					randomColor: true,
					chance: 0.03
				}
			}, {
				type: 'projectile',
				damage: 0.4,
				statMult: 1,
				cdMax: 5,
				targetRandom: true,
				row: 2,
				col: 4
			}],

			components: {
				cpnParticles: {
					simplify: function () {
						return {
							type: 'particles',
							blueprint: {
								color: {
									start: ['fc66f7', '802343'],
									end: ['393268', 'de43ae']
								},
								scale: {
									start: {
										min: 10,
										max: 18
									},
									end: {
										min: 4,
										max: 8
									}
								},
								speed: {
									start: {
										min: 6,
										max: 12
									},
									end: {
										min: 2,
										max: 4
									}
								},
								lifetime: {
									min: 5,
									max: 12
								},
								alpha: {
									start: 0.25,
									end: 0
								},
								randomScale: true,
								randomSpeed: true,
								chance: 0.06,
								randomColor: true,
								spawnType: 'rect',
								blendMode: 'add',
								spawnRect: {
									x: -24,
									y: -24,
									w: 48,
									h: 48
								}
							}
						};
					}
				}
			}
		}
	}
};
