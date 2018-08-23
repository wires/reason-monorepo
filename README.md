# ReasonML in a monorepo

just works.

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


