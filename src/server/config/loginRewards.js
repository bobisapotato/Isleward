define([
	
], function(
	
) {
	var config = {
		'0': [{
			name: 'Common Essence',
			sprite: [0, 2]
		}, {
			name: 'Iron Bar',
			sprite: [0, 0]
		}, {
			name: 'Cloth Scrap',
			sprite: [0, 1]
		}, {
			name: 'Leather Scrap',
			sprite: [0, 7]
		}],
		'1': [{
			name: 'Magic Essence',
			sprite: [0, 3]
		}],
		'2': [{
			name: 'Rare Essence',
			sprite: [0, 4]
		}], 
		'3': [{
			name: 'Cerulean Pearl',
			sprite: [11, 9]
		}, {
			name: 'Epic Essence',
			sprite: [0, 5]
		}],
		'4': [{
			name: 'Legendary Essence',
			sprite: [0, 6]
		}]
	};

	return {
		generate: function(streak) {
			var items = [];

			var qualityTotals = {
				'0': 1 + Math.min(streak * 3, 15),
				'1': ~~(streak / 3),
				'2': ~~(streak / 5),
				'3': ~~(streak / 10),
				'4': ~~(streak / 21)
			};

			for (var p in qualityTotals) {
				var total = qualityTotals[p];
				var picks = config[p];

				while (total > 0) {
					var pick = picks[~~(Math.random() * picks.length)];
					var amount = 1 + ~~(Math.random() * (total - 1));
					total -= amount;

					var item = items.find(f => (f.name == pick.name));
					if (!item) {
						item = extend(true, {
							material: true,
							quality: p
						}, pick);
						item.quantity = 0;

						items.push(item);
					}

					item.quantity += amount;
				}
			}

			if (items.length > 0)
				items[0].msg = `Daily login reward for ${streak} days:`;

			return items;
		}
	};
});