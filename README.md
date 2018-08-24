# ReasonML in a monorepo

Surprisingly, it just works.

## using FFI

You can use the JS FFI, **but, you can not call an FFI function directly** from another package, this will give the confusing error: 

```
internal/modules/cjs/loader.js:596
    throw err;
    ^

Error: Cannot find module './foo.js'
```

Instead, you should use a wrapper function that you call:

So suppose you have `packages/foo/foo.js` and `package/foo/Foo.re` looking like this

```js
exports.dilla = function () { console.log('hi'); return {bar:"a",nabz:123} }
``` 

```reason
[@bs.deriving {jsConverter: newType}]
type flep = {
  bar: string,
  nabz: int
}

[@bs.module "./foo.js"] external dilla' : unit => abs_flep = "dilla";

let dilla : unit => flep = dilla'() |> flepFromJs
```

Calling `dilla'` from a another module explodes in your face with the "cannot find module" error.
Calling `dilla` works fine.


## demo

	lerna run demo

## running the example

first install all dependencies

	git clone https://github/wires/reason-monorepo
	cd reason-monorepo
	lerna bootstrap

then build

	lerna run build

now run the demo

	lerna run demo
	
>>>>>>> 1f3600e55765e96ea989af66d2dc676a89f40667

## adding a package

create directory

	mkdir packages/my-package
	cd package/my-package
	bsb -init . -theme basic-reason

then add it to dependee's `package.json` using lerna

	lerna add my-package --scope=re-testmain

and modify dependee's `bsconfig.json` file:

	 "dependencies": {
  		  "my-package": "^0.1.0"
  	 }

importing from the package becomes

	MyPackage.MyModule.bla


