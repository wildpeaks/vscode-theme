/// <reference path="../example.d.ts" />
import type {Example} from "./Example";
export type Example2 = Example & {property: string};

type Hello = {
	aaaa: string;
	bbbb?: {
		cccc: string;
	};
	json: any;
};

enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
}
enum Response {
	No = 0,
	Yes = 1,
}
console.log(Response.Yes);

interface Named {
	name: string;
}

declare function myfunction(x: string): number;
declare function myfunction(x: number): string;
declare function myfunction(x: string | number): string | number;
type MyReturnType = ReturnType<typeof myfunction>;

namespace MyNamespace {
	class MyBaseClass implements IMyInterface {
		private readonly _myproperty: string;
		public constructor(value: string = "Hello") {
			this._myproperty = value;
		}
		public static mymethod(): string {
			return "Aaaaaaa";
		}
	}
	class MyExtendedClass extends MyBaseClass {
		public constructor() {
			super("World");
		}
	}
}

import {example1} from "module1";
import example2 from "module2";
import * as example3 from "module3";

const MyComponent = (props) => <div>{props.children}</div>;
const component1 = (
	<MyComponent>
		<div>Hello World</div>
		{"This is just a JS expression..." + 1000}
	</MyComponent>
);
const component2 = <MyComponent hello="world" />;
const component3 = <MyComponent hello={myvar} />;
const component4 = <div class="aaaaaa" />;
const component5 = <div className="aaaaaa" />;
const component6 = (
	<>
		<h1>Hello</h1>
		World
	</>
);

export async function myfunction(param) {
	const tmp1 = [NaN, 123.45, true, false, null, 0xFF00AA, void 0, Symbol("key")];
	const tmp2 = [parseInt("123", 10), Math.log(1)];
	console.log( mytag`Type is ${typeof typeof window.something}` );

	const parsed = await parse1(param);
	let data;
	try {
		data = parsed["hello:world"].mylist[0].myproperty;
	} catch (e) {
		data = undefined;
	}
	const mylist = [];
	if (Array.isArray(data)) {
		for (const key in data) {
			log(key);
		}
		for (const _subdata of data) {
			// Single line comment
			/* multiline comment */
		}
		if (typeof order !== "undefined") {
			mylist.push(order);
		}
	}
	return mylist;
}

class MyClass {
	mymethod() {
		console.log(this.aaaaa);
		return 123;
	}
}

myfunction();
Math.log(1);
parseInt("123", 10);
console.log(typeof MyClass);
console.log(new MyClass());
console.log(window.innerWidth);
console.log(window["innerHeight"]);

switch (window.something) {
	case "value1": {
		//
		break;
	}
}

console.log(typeof example1);
console.log(typeof example2);
console.log(typeof example3);
