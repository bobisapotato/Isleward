define([
	'ui/uiBase',
	'js/system/events',
	'js/system/globals',
	'js/misc/tosAcceptanceValid'
], function (
	uiBase,
	events,
	globals,
	tosAcceptanceValid
) {
	return {
		uis: [],
		root: '',

		init: function (root) {
			if (root)
				this.root = root + '/';

			events.on('onEnterGame', this.onEnterGame.bind(this));
			events.on('onUiKeyDown', this.onUiKeyDown.bind(this));
			events.on('onResize', this.onResize.bind(this));

			globals.clientConfig.uiLoginList.forEach(u => {
				if (u.path)
					this.buildModUi(u);
				else
					this.build(u);
			});
		},

		onEnterGame: function () {
			events.clearQueue();

			globals.clientConfig.uiList.forEach(u => {
				if (u.path)
					this.buildModUi(u);
				else
					this.build(u);
			});
		},

		buildModUi: function (config) {
			const type = config.path.split('/').pop();

			this.build(type, {
				path: config.path
			});
		},

		build: function (type, options) {
			let className = 'ui' + type[0].toUpperCase() + type.substr(1);
			let el = $('.' + className);
			if (el.length > 0)
				return;

			this.getTemplate(type, options);
		},

		getTemplate: function (type, options) {
			let path = null;
			if (options && options.path)
				path = options.path + `\\${type}.js`;
			else
				path = this.root + 'ui/templates/' + type + '/' + type;
		
			require([path], this.onGetTemplate.bind(this, options, type));
		},
		
		onGetTemplate: function (options, type, template) {
			let ui = $.extend(true, { type }, uiBase, template);
			ui.setOptions(options);
		
			requestAnimationFrame(this.renderUi.bind(this, ui));
		},

		renderUi: function (ui) {
			ui.render();
			ui.el.data('ui', ui);

			this.uis.push(ui);
		},

		onResize: function () {
			this.uis.forEach(function (ui) {
				if (ui.centered)
					ui.center();
				else if ((ui.centeredX) || (ui.centeredY))
					ui.center(ui.centeredX, ui.centeredY);
			}, this);
		},

		onUiKeyDown: function (keyEvent) {
			if (keyEvent.key === 'esc') {
				this.uis.forEach(u => {
					if (!u.modal || !u.shown)
						return;

					keyEvent.consumed = true;
					u.toggle();
				});
				
				$('.uiOverlay').hide();
				events.emit('onHideContextMenu');
			} else if (['o', 'j', 'h', 'i'].indexOf(keyEvent.key) > -1)
				$('.uiOverlay').hide();
		},

		preload: function () {
			require([
				'death',
				'dialogue',
				'equipment',
				'events',
				'hud',
				'inventory',
				'overlay',
				'passives',
				'quests',
				'reputation',
				'stash'
			].map(m => 'ui/templates/' + m + '/' + m), this.afterPreload.bind(this));
		},

		afterPreload: function () {
			if (!globals.clientConfig.tos.required || tosAcceptanceValid()) {
				this.build('characters');

				return;
			}

			this.build('terms');
		},

		update: function () {
			let uis = this.uis;
			let uLen = uis.length;
			for (let i = 0; i < uLen; i++) {
				let u = uis[i];
				if (u.update)
					u.update();
			}
		}
	};
});
