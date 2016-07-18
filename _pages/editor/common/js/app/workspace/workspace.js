namespace('enp.editor.workspace');

enp.editor.workspace = (function($, window, undefined) {

	var setup;
	var initView;

	setup = {
		toolbar: {
			active: true,
			draggable: true
		},
		sidebar: {
			active: true,
			actions: "all",
			toggle: true
		},
		actionbar: {
			active: true,
			actions: "all",
			history: true,
			buttons: true
		},
		header: {
			active: true,
			breakpoints: true
		},
		scene: {
			active: true,
			resizable: true,
			defaultPositioning: "static",
			size: {
				base: {
					width: "auto",
					height: "auto"
				},
				max: {
					width: "auto",
					height: "auto"
				}
			}
		}
	}

	initView = function() {
		var active;
		var setup = enp.editor.workspace.setup;

		active = {
			toolbar: $('#js-enp_editor_header')
		}

		if (setup.toolbar.active == true) {
			active.toolbar.removeClass('g-dn');
		} else {
			active.toolbar.addClass('g-dn');
		}
	}

	return {
		setup: setup,
		initView: initView
	}


}($, window, undefined));


