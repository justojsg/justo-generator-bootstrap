[![Build Status](https://travis-ci.org/justojsg/justo-generator-bootstrap.svg?branch=master)](https://travis-ci.org/justojsg/justo-generator-bootstrap)

Generator for *Bootstrap*.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install -g justo-generator-bootstrap
```

## Default generator

Creates a *Bootstrap* project.

### Parameters

- `title`. The index.html &lt;title>.
- `fontAwesome`. Would you like to use *Font Awesome*? `false`, nope; `local`, yep, locally; or `CDN (MAXCDN)`.

Example:

```
justo -g bootstrap title:'This the title' fontAwesome:'CDN (MAXCDN)'
```

## add generator

Creates a *Bootstrap* file.

### Parameters

- `file`. The file.
- `title`. The &lt;title>.
- `fontAwesome`. Would you like to use *Font Awesome*? `false`, nope; `local`, yep, locally; or `CDN (MAXCDN)`.

Example:

```
justo -g bootstrap add file:index.html title:'This the title' fontAwesome:'CDN (MAXCDN)'
```
