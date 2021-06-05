import {example1} from "module1";
import example2 from "module2";
import * as example3 from "module3";

module.exports.something = 123;

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
