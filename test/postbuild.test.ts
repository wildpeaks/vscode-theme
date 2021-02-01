/* eslint-env node */
/* eslint-disable prefer-arrow-callback */
import {strictEqual} from "assert";
import {readFileSync, existsSync} from "fs";
import {join} from "path";
import {describe, it} from "mocha";

function parseJSON(filepath: string): any {
	const raw = readFileSync(filepath, "utf8");
	return JSON.parse(raw);
}

function isObject(value: any): boolean {
	return (typeof value === "object") && (value !== null);
}

describe("Postbuild", () => {
	it("/package/package.json", function () {
		const filepath = join(process.cwd(), "/package/package.json");
		const pkg = parseJSON(filepath);
		strictEqual(isObject(pkg), true, "pkg");
		strictEqual(isObject(pkg.contributes), true, "pkg.contributes");
		strictEqual(Array.isArray(pkg.contributes.themes), true, "pkg.contributes.themes");

		const l = pkg.contributes.themes.length;
		strictEqual(l > 0, true, "pkg.contributes.themes.length");
		for (let i = 0; i < l; i++) {
			const theme = pkg.contributes.themes[i];
			strictEqual(isObject(theme), true, `pkg.contributes.themes[${i}]`);
			strictEqual(typeof theme.label, "string", `pkg.contributes.themes[${i}].label`);
			strictEqual(typeof theme.path, "string", `pkg.contributes.themes[${i}].path`);
			strictEqual(typeof theme.uiTheme, "string", `pkg.contributes.themes[${i}].uiTheme`);
		}
	});

	it("/package/theme-dark.json", function () {
		const filepath = join(process.cwd(), "package/theme-dark.json");
		const theme = parseJSON(filepath);
		strictEqual(isObject(theme), true, "theme");
		strictEqual(typeof theme.name, "string", "theme.name");
		strictEqual(typeof theme.type, "string", "theme.type");
		strictEqual(Array.isArray(theme.tokenColors), true, "theme.tokenColors");

		const l = theme.tokenColors.length;
		strictEqual(l > 0, true, "theme.tokenColors.length");
		for (let i = 0; i < l; i++) {
			const color = theme.tokenColors[i];
			strictEqual(isObject(color), true, `theme.tokenColors[${i}]`);
			strictEqual(typeof color.name, "string", `theme.tokenColors[${i}].name`);
			const okScope = Array.isArray(color.scope) || (typeof color.scope === "string");
			strictEqual(okScope, true, `theme.tokenColors[${i}].scope`);
			strictEqual(isObject(color.settings), true, `theme.tokenColors[${i}].settings`);
		}
	});

	it("/package/icon.png", function () {
		const filepath = join(process.cwd(), "package/icon.png");
		strictEqual(existsSync(filepath), true);
	});

	it("/package/README.md", function () {
		const filepath = join(process.cwd(), "package/README.md");
		strictEqual(existsSync(filepath), true);
	});
});
