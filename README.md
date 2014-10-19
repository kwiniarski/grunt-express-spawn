# grunt-express-spawn [![NPM version](https://badge.fury.io/js/grunt-express-spawn.png)](http://badge.fury.io/js/grunt-express-spawn)

> Manage Express applications

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```bash
npm install grunt-express-spawn --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-express-spawn');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

## The "express_spawn" task

### Overview
In your project's Gruntfile, add a section named `express_spawn` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  express: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

### Options

#### options.stderr
Type: `Boolean`
Default value: `true`

#### options.stdout
Type: `Boolean`
Default value: `false`

#### options.env
Type: `Object`
Default value: `{}`

### Usage Examples

```js
grunt.initConfig({
  express: {
    script: 'app/express'
    options: {
      stderr: true,
      stdout: true,
      env: {
        NODE_ENV: 'development'
      }
    }
  }
})
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][].


## Release History

 * 2014     v0.1.1    FIX: Don't terminate process on close
 * 2014   v0.1.0    First commit


## License
Copyright (c) 2014 Krzysztof Winiarski
Licensed under the [MIT license](LICENSE-MIT).

***

Project created by [Krzysztof Winiarski](https://github.com/kwiniarski).

_This file was generated on Sat Oct 04 2014 12:42:24._
