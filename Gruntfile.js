module.exports = function(grunt) {

  grunt.initConfig({

    clean: [ "assets/prod" ],

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
          "dist/debug/templates.js": [
            "app/templates/**/*.html"
          ]
        }
      }
    },

    concat: {
      "assets/prod/main.js": [
        "assets/app/**/*.js"
      ]
    },

    uglify: {
      my_target: {
        files: {
          'assets/prod/main.prod.js': ['assets/prod/main.js']
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

  grunt.registerTask('default', [
    'clean', 'jshint', 'jst', 'concat'
  ]);

  grunt.registerTask('release', [
    'default', 'uglify'
  ]);

};
