var timer = require("grunt-timer");
var gruntpath = process.cwd().split('\\').pop();
var commonPath = gruntpath + '/common';
var templatePath = gruntpath + '/templates';
var datetime = Date.now();

module.exports = function(grunt) {
	require('jit-grunt')(grunt, {
		notify_hooks: 'grunt-notify',
		cmq: 'grunt-combine-media-queries',
		sprite: 'grunt-spritesmith',
		stylizeSCSS: 'grunt-scss-stylize'
	});
	timer.init(grunt, {
		deferLogs: false,
		friendlyTime: true,
		color: "red"
	});
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'sass-multi-import': {
			modules: {
				files: [{
					src: ['common/css/modules/*.scss'],
					dest: 'common/css/_partials.scss'
				}]
			},
			plugins: {
				files: [{
					src: ['common/css/plugins/**/*.scss'],
					dest: 'common/css/_plugins.scss'
				}]
			},
			fonts: {
				files: [{
					src: ['common/fonts/**/*.scss'],
					dest: 'common/css/_fonts.scss'
				}]
			}
		},
		sass: {
			options: {
				sourceMap: false,
				outputStyle: 'compressed'
			},
			main: {
				files: {
					'common/css/style.css': 'common/css/style.scss'
				}
			},
			doc: {
				files: {
					'common/css/doc.css': 'common/css/doc.scss'
				}
			}
		},

		copy: {

			start_php: {
				expand: true,
				cwd: '../_src/starter/php/',
				src: '**',
				flatten: false
			},
			start_common: {
				expand: true,
				cwd: '../_src/starter/common/',
				src: '**',
				dest: 'common',
				flatten: false
			},
			start_templates: {
				expand: true,
				cwd: '../_src/starter/templates/',
				src: '**',
				dest: 'templates',
				flatten: false
			}
		},

		sprite: {
			buildretina: {
				src: ['common/images/icons/*.png'],
				retinaSrcFilter: ['common/images/icons/*@2x.png'],
				dest: 'common/images/sprite.png',
				retinaDest: 'common/images/sprite-2x.png',
				'cssVarMap': function(sprite) {
					sprite.name = 'icon-' + sprite.name;
				},
				padding: 10,
				destCss: 'common/css/_icons.scss'
			},
			build: {
				src: ['common/images/icons/*.png'],
				dest: 'common/images/sprite.png',
				padding: 10,
				destCss: 'common/css/_icons.scss',
				'cssVarMap': function(sprite) {
					sprite.image = sprite.image.replace(".png", "");
					sprite.name = 'icon-' + sprite.name;
				}
			}
		},
		cmq: {
			options: {
				log: false
			},
			style: {
				files: {
					'common/css/ie': ['common/css/style.css']
				}
			}
		},
		stripmq: {
			options: {
				width: 1200,
				type: 'screen'
			},
			all: {
				files: {
					'common/css/ie.css': ['common/css/ie/style-min.css']
				}
			}
		},
		csslint: {
			strict: {
				src: ['common/css/style.css']
			}
		},
		notify: {
			watch: {
				options: {
					title: 'IE plus minify',
					message: 'Also ready!'
				}
			},
			main: {
				options: {
					title: 'Ok!',
					message: "I'm reloaded!"
				}
			},
			js: {
				options: {
					title: 'Js minify',
					message: "Also ready!"
				}
			}

		},
		pngmin: {
			compile: {
				options: {
					ext: '.png',
					quality: '65-80',
					speed: 1,
					force: true
				},
				files: [{
					src: ['common/images/sprite.png', 'common/images/sprite-2x.png'],
					dest: 'common/images/'
				}]
			}
		},
		stylestats: {
			src: ['common/css/style.css', 'common/css/ie/old-ie.css']
		},
		stylizeSCSS: {
			options: {
				extraLine: false,
				oneLine: false

			},
			target: {
				files: [{
					expand: true,
					src: ['common/css/modules/*.scss']
				}]
			}
		},
		fixindent: {
			stylesheets: {}
		},

		'string-replace': {
			images: {
				files: {
					'common/css/style.css': 'common/css/style.css'
				},
				options: {
					replacements: [{
						pattern: '/common/',
						replacement: '../'
					}]
				}
			},
			doc: {
				files: {
					'docs/styleguide/modules/': ['docs/styleguide/modules/*/*/*.html']
				},
				options: {
					replacements: [{
						pattern: 'src="common/images/',
						replacement: 'src="../../../../../common/images/'
					}]
				}
			},
			omq: {
				files: {
					'common/css/ie/style-min.css': 'common/css/ie/style.css'
				},
				options: {
					replacements: [{
						pattern: '2 / 1',
						replacement: '2/1'
					}]
				}

			},
			sprite: {
				files: {
					'common/css/_icons.scss': 'common/css/_icons.scss'
				},
				options: {
					replacements: [{
						pattern: /sprite.png/g,
						replacement: 'sprite.png' + '?' + datetime
					}, {
						pattern: /sprite-2x.png/g,
						replacement: 'sprite-2x.png' + '?' + datetime
					}]
				}
			}
		},
		cssshrink: {
			options: {
				log: true
			},
			style: {
				files: {
					'common/css/style.css': ['common/css/style.css']
				}
			}
		},
		csssplit: {
			your_target: {
				src: ['common/css/ie.css'],
				dest: 'common/css/ie.css',
				options: {
					maxSelectors: 4095,
					maxPages: 3,
					suffix: '_page_'
				}
			},
		},
		uglify: {
			js: {
				options: {
					sourceMap: true,
					sourceMapName: 'common/js/apps.min.map',
					sourceMapIncludeSources: false,
					preserveComments: false,
					compress: false
				},
				files: {
					'common/js/apps.min.js': [
						'common/js/libs/*.js',
						'common/js/app/modules/**/*.js',
						'common/js/app/app.js'
					]
				}
			}
		},
		watch: {
			options: {
				nospawn: true,
				livereload: true
			},
			global: {
				files: ['common/css/style.scss'],
				tasks: ['stylizeSCSS', 'fixindent', 'sass:main', 'notify:main', 'cmq', 'string-replace:omq', 'stripmq', 'csssplit', 'notify:watch']
			},
			modules: {
				files: ['common/css/modules/*.scss'],
				tasks: ['stylizeSCSS', 'fixindent', 'sass-multi-import:modules', 'sass:main', 'notify:main', 'cmq', 'string-replace:omq', 'stripmq', 'csssplit', 'notify:watch']
			},
			plugins: {
				files: ['common/css/plugins/**/*.scss'],
				tasks: ['stylizeSCSS', 'fixindent', 'sass-multi-import:plugins', 'sass:main', 'notify:main', 'cmq', 'string-replace:omq', 'stripmq', 'csssplit', 'notify:watch']
			},
			fonts: {
				files: ['common/fonts/*/*.scss'],
				tasks: ['sass-multi-import:fonts', 'sass:main', 'notify:main', 'cmq', 'string-replace:omq', 'stripmq', 'csssplit', 'notify:watch']
			},
			icons: {
				files: ['common/images/icons/*.png'],
				tasks: ['sprite:build', 'pngmin', 'string-replace:sprite', 'sass:main', 'notify:main'] //change for buildretina if want to retina sprite
			},
			js: {
				files: ['common/js/**/*.js'],
				tasks: ['uglify', 'notify:js']
			}
		}
	});

	grunt.event.on('watch', function(action, filepath, target) {
		var path,
			option,
			currentFile,
			setup;

		path = require('path');
		if (path.basename(filepath) != 'style.scss') {
			var siteDirectory = path.dirname(filepath);
			//compass config change
			option = 'compass.origin.options.sassDir';
			var result = __dirname + '/' + siteDirectory;
			grunt.config(option, result);
			option = 'compass.origin.options.cssDir';
			result = path.resolve(__dirname, siteDirectory);
			grunt.config(option, result);
			//csslint config change
			option = 'csslint.strict.src';
			var file = filepath.replace('scss', 'css');
			//stylizeSCSS config change
			option = 'stylizeSCSS.target.files';
			currentFile = [{
					expand: true,
					src: filepath
				}]
				//grunt.log.writeln(option, currentFile);
			grunt.config(option, currentFile);
			//indent config change
			option = 'fixindent.stylesheets';
			setup = {
				src: [
					filepath
				],
				dest: filepath,
				options: {
					style: 'tab',
					size: 1
				}
			};
			grunt.config(option, setup);

		} else {

			//stylizeSCSS config change
			option = 'stylizeSCSS.target.files';
			currentFile = [{
					expand: true,
					src: filepath
				}]
				//grunt.log.writeln(option, currentFile);
			grunt.config(option, currentFile);
			//indent config change
			option = 'fixindent.stylesheets';
			setup = {
				src: [
					filepath
				],
				dest: filepath,
				options: {
					style: 'tab',
					size: 1
				}
			};
			grunt.config(option, setup);
		}
	});

	grunt.task.run('notify_hooks');
	grunt.registerTask('starter', ['copy:start_php', 'copy:start_common', 'copy:start_templates']);
	grunt.registerTask('php', ['copy:start_php']);
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('shrink', ['clean', 'copy:main', 'watch:shirnk']);
	grunt.registerTask('stats', ['stylestats']);
	grunt.registerTask('reload', ['sprite:build', 'pngmin', 'string-replace:sprite', 'sass-multi-import', 'sass:main', 'notify:main', 'cmq', 'string-replace:omq', 'stripmq', 'notify:watch']);

};
