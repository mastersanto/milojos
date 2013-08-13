module.exports = function(grunt) {

  grunt.initConfig({

    clean: [ "assets/debug/", "assets/prod/" ],

    watch: {
       files: '<config:jshint.all>',
       tasks: 'default'
    },

    jshint: {
      options: {
        scripturl: true,
        eqnull: true
      },
      all: [
        "build/config.js", "app/**/*.js"
      ]
    },

    jst: {
      compile: {
        options: {},
        files: {
          "assets/debug/templates.js": [
            "assets/app/views/**/templates/*.html"
          ]
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: "assets/app/config.js",
          out: "assets/debug/require.build.js",
          name: "config",
          wrap: false,
          optimize: "none"
        }
      }
    },

    concat: {
      "assets/debug/main.js": [
        "components/almond/almond.js",
        "assets/debug/templates.js",
        "assets/debug/require.build.js"
      ]
    },

    uglify: {
      my_target: {
        files: {
          'assets/prod/main.js': ['assets/debug/main.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-remove-logging');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', [
    'clean', 'jshint', 'jst', 'requirejs', 'concat'
  ]);

  grunt.registerTask('release', [
    'default', 'uglify'
  ]);

};
