define([
	'js/system/events',
	'js/system/client',
	'html!ui/templates/trade/template',
	'css!ui/templates/trade/styles',
	'html!ui/templates/inventory/templateItem'
], function (
	events,
	client,
	template,
	styles,
	tplItem
) {
	return {
		tpl: template,

		centered: true,

		modal: true,

		list: null,
		action: null,

		postRender: function () {
			this.onEvent('onGetTradeList', this.onGetTradeList.bind(this));
			this.onEvent('onCloseTrade', this.hide.bind(this));
		},

		onGetTradeList: function (itemList, action) {
			itemList = itemList || this.itemList;
			action = action || this.action;

			this.itemList = itemList;
			this.action = action;

			this.find('.heading-text').html(action);

			var uiInventory = $('.uiInventory').data('ui');

			var container = this.el.find('.grid')
				.empty();

			var buyItems = itemList.items;

			buyItems.forEach(function (item) {
				if ((item == this.hoverItem))
					this.onHover(null, item);
			}, this);

			var iLen = Math.max(buyItems.length, 50);
			for (var i = 0; i < iLen; i++) {
				var item = buyItems[i];

				if (action == 'sell') {
					item = buyItems.find(function (b) {
						return (b.pos == i);
					});
				}

				if (!item) {
					$(tplItem).appendTo(container);

					continue;
				}

				item = $.extend(true, {}, item);

				var size = 64;
				var offset = 0;

				var itemEl = $(tplItem)
					.appendTo(container);

				var spritesheet = item.spritesheet || '../../../images/items.png';
				if (item.material)
					spritesheet = '../../../images/materials.png';
				else if (item.quest)
					spritesheet = '../../../images/questItems.png';
				 else if (item.type == 'consumable')
					spritesheet = '../../../images/consumables.png';
				else if (item.type == 'skin') {
					offset = 4;
					size = 8;
					if (!item.spritesheet)
						spritesheet = '../../../images/characters.png';
				}

				var imgX = (-item.sprite[0] * size) + offset;
				var imgY = (-item.sprite[1] * size) + offset;

				itemEl
					.data('item', item)
					.on('click', this.onClick.bind(this, itemEl, item, action))
					.on('mousemove', this.onHover.bind(this, itemEl, item, action))
					.on('mouseleave', uiInventory.hideTooltip.bind(uiInventory, itemEl, item))
					.find('.icon')
					.css('background', 'url(' + spritesheet + ') ' + imgX + 'px ' + imgY + 'px')
					.addClass(item.type);

				if (item.quantity)
					itemEl.find('.quantity').html(item.quantity);
				else if (item.eq)
					itemEl.find('.quantity').html('EQ');

				if (action == 'buy') {
					var noAfford = false;
					if (item.worth.currency) {
						var currencyItems = window.player.inventory.items.find(function (i) {
							return (i.name == item.worth.currency);
						});
						noAfford = ((!currencyItems) || (currencyItems.quantity < item.worth.amount));
					} else
						noAfford = (item.worth * this.itemList.markup > window.player.trade.gold)

					if ((!noAfford) && (item.factions)) {
						noAfford = item.factions.some(function (f) {
							return f.noEquip;
						});
					}
					if (noAfford)
						$('<div class="no-afford"></div>').appendTo(itemEl);
				}

				if (item.worth.currency)
					item.worthText = item.worth.amount + 'x ' + item.worth.currency;
				else
					item.worthText = ~~(itemList.markup * item.worth);

				if (item.eq)
					itemEl.addClass('eq');
				else if (item.isNew) {
					itemEl.addClass('new');
					itemEl.find('.quantity').html('NEW');
				}
			}

			this.center();
			this.show();
			events.emit('onShowOverlay', this.el);
		},

		onClick: function (el, item, action, e) {
			el.addClass('disabled');

			client.request({
				cpn: 'player',
				method: 'performAction',
				data: {
					cpn: 'trade',
					method: 'buySell',
					data: {
						itemId: item.id,
						action: action
					}
				},
				callback: this.onServerRespond.bind(this, el)
			});

			var uiInventory = $('.uiInventory').data('ui');
			uiInventory.hideTooltip(el, item, e);
		},

		onHover: function (el, item, action, e) {
			var uiInventory = $('.uiInventory').data('ui');
			uiInventory.onHover(el, item, e);

			var canAfford = true;
			if (action == 'buy') {
				if (item.worth.currency) {
					var currencyItems = window.player.inventory.items.find(function (i) {
						return (i.name == item.worth.currency);
					});
					canAfford = ((currencyItems) && (currencyItems.quantity >= item.worth.amount));
				} else
					canAfford = (item.worth * this.itemList.markup <= window.player.trade.gold)
			}

			var uiTooltipItem = $('.uiTooltipItem').data('ui');
			uiTooltipItem.showWorth(canAfford);
		},

		beforeHide: function () {
			events.emit('onHideOverlay', this.el);
		},

		onServerRespond: function (el) {
			el.removeClass('disabled');
		}
	};
});
