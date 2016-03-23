# grunt-basehref

> Update href from base html tag

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-basehref --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-basehref');
```

## The "basehref" task

### Overview
In your project's Gruntfile, add a section named `basehref` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  basehref: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.href
Type: `String`
Default value: ``

A string value that is used to do update href value in base element of html file.

### Usage Examples

#### Default Options
In this example, the default options are used to update href attribute of base element found in html file.

```js
grunt.initConfig({
  basehref: {
    default_options: {
      options: {
          href: '<value>'
      },
      files: {
        '<dest file>': '<src file>'
      }
    }
  }
});
```

#### Custom href
In this example, href is used to change href value to custom url.

```js
grunt.initConfig({
  basehref: {
    options: {
      href:'/url_destino'
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

node --debug-brk /usr/bin/grunt

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
