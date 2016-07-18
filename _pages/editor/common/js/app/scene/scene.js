namespace('enp.editor.scene');

enp.editor.scene = (function($, window, undefined) {

	var settings;
	var domData;
	var resize;
	var aceInit;
	var init;
	var getAceContent;
	var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
 	};
 	var escapeHtml;

  	escapeHtml = function(string) {
    	return String(string).replace(/[&<>"'\/]/g, function (s) {
      	return entityMap[s];
    	});
  	}

	settings = {
		steps: 3,
		data: 'historia 3 stanów wstecz'
	}

	/* 
	*	domJSON implementation
	*/
	domData = function() {
		var myDiv = document.getElementById('scene');
		var jsonOutput = domJSON.toJSON(myDiv, {
			attributes: ['id', 'class', 'style'], 
			domProperties: { 
				exclude: true, 
				values: [
				'text-decoration',
				'clientHeight', 
				'clientLeft', 
				'clientTop', 
				'offsetWidth', 
				'offsetHeight', 
				'offsetLeft', 
				'offsetTop', 
				'offsetWidth', 
				'scrollHeight', 
				'scrollLeft', 
				'scrollTop', 
				'scrollWidth'
			] 
			},
			computedStyle: false
		});
		return jsonOutput;
	}

	/* 
	*	jquery.ui: resizeble implementation
	*/
	resize = function() {

	}

	/*
	*	Implement ace editor
	*/
	aceInit = function() {
		var escaped = escapeHtml($('#js-sceneContent').html());
		var escapeContent = $('#js-sceneContent').html(escaped);
		var editor = ace.edit("js-sceneContent");
	    editor.setTheme("ace/theme/monokai");
	    editor.getSession().setMode("ace/mode/html");
	    editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true
     	});
	    editor.getSession().setTabSize(4);
	    document.getElementById('js-sceneContent').style.fontSize='16px';
	}

	getAceContent = function() {
		var editor = ace.edit("js-sceneContent");
		$('#js-sceneContent').html(editor.getSession().getValue()).removeClass().addClass('enp-editor_aceHolder').removeAttr('style');
		editor.destroy()
	}

	init = function() {
		$('#js-toggleHtmlView').on('click', function() { 
			aceInit()
		})
		$('#js-togglePreview').on('click', function() { 
			getAceContent()
		})
	}

	
	return {
		settings: settings,
		domData: domData,
		resize: resize,
		aceInit: aceInit,
		getAceContent: getAceContent,
		init: init
	};

}($, window, undefined));


enp.editor.scene.init();