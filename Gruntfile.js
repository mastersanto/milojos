module.exports = function(grunt) {

  grunt.initConfig({

    clean: [ "public/debug/", "public/prod/" ],

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
        "public/build/config.js", "app/**/*.js"
      ]
    },

    jst: {
      compile: {
        options: {},
        files: {
          "public/debug/templates.js": [
            "public/app/views/**/templates/*.html"
          ]
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: "public/app/config.js",
          out: "public/debug/require.build.js",
          name: "config",
          wrap: false,
          optimize: "none"
        }
      }
    },

    concat: {
      "public/debug/main.js": [
        "public/components/almond/almond.js",
        "public/debug/templates.js",
        "public/debug/require.build.js"
      ]
    },

    uglify: {
      my_target: {
        files: {
          'public/prod/main.js': ['public/debug/main.js']
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
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', [
    'clean', 'jshint', 'jst', 'requirejs', 'concat'
  ]);

  grunt.registerTask('release', [
    'default', 'uglify'
  ]);
};
