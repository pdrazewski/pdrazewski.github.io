namespace('enp.editor.settings');

enp.editor.settings = (function($, window, undefined) {

	var dumpAll;
	var info;

	dumpAll = function() {
		$('#scene').prepend('<pre style="background: #222; color: yellow;padding: 20px"> enp: ' + $.dump(enp) + '</pre>')
	}

	info = {
		screen: {
			width: $(window).innerWidth()
		},
		userAgent: navigator.userAgent
	}

	enp.editor.scene.settings

	return {
		dumpAll: dumpAll,
		info: info
	};

}($, window, undefined));


console.dir(enp.editor)


