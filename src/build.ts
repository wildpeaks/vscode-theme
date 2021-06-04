/* eslint-env node, mocha */
/* eslint-disable prefer-arrow-callback */
import {join} from "path";
// @ts-expect-error -- fs-extra doesn't provide types
import {emptyDir, writeJson, copy} from "fs-extra";

type VSCodeTheme = {
	name: string;
	type: "dark" | "light";
	colors: {
		[scope: string]: string;
	};
	tokenColors: {
		name: string;
		scope: string[] | string;
		settings: {
			fontStyle?: "bold" | "italic";
			foreground?: string;
		};
	}[];
};

enum Styles {
	BOLD = "bold",
	ITALIC = "italic"
}
enum Colors {
	BACKGROUND = "#222222",
	FOREGROUND = "#F8F8F2",
	DARK_GREY = "#151515",
	GREY = "#8C8C8C",
	LIGHT_GREY = "#333333",
	MUTED = "#666666",
	LESS_WHITE = "#CCCCCC",
	ALMOST_WHITE = "#EEEEEE",
	WHITE = "#FFFFFF",
	CRIMSON = "#ff2671",
	BLUE = "#75ddff",
	ORANGE = "#e44d26",
	YELLOW = "#f9f99d",
	GREEN = "#00FF7F"
}

describe("Build", function () {
	const folder = join(process.cwd(), "package");
	before(async function () {
		await emptyDir(folder);
	});
	it("theme-dark.json", async function () {
		const dark: VSCodeTheme = {
			name: "Wildpeaks Dark",
			type: "dark",
			colors: {
				"editor.background": Colors.BACKGROUND,
				"editor.foreground": "#F8F8F2",

				"statusBar.background": Colors.DARK_GREY,
				"statusBar.noFolderBackground": Colors.DARK_GREY,
				"statusBar.foreground": Colors.MUTED,
				"statusBar.debuggingBackground": Colors.ORANGE,
				"statusBar.debuggingForeground": Colors.WHITE,

				"editorGroupHeader.tabsBackground": Colors.BACKGROUND,
				"tab.border": Colors.BACKGROUND,
				"tab.inactiveBackground": Colors.BACKGROUND,
				"tab.inactiveForeground": Colors.GREY,
				"tab.activeBackground": Colors.LIGHT_GREY,
				"tab.activeForeground": Colors.WHITE
			},
			tokenColors: [
				{
					name: "Comments",
					scope: ["comment", "punctuation.definition.comment"],
					settings: {
						foreground: Colors.GREY
					}
				},

				{
					name: "Muted",
					scope: [
						// JS & TS
						"meta.brace.round",
						"punctuation.definition.string.begin",
						"punctuation.definition.string.end",
						"punctuation.definition.parameters.begin",
						"punctuation.definition.parameters.end",
						"punctuation.terminator.statement",
						"punctuation.separator.delimiter",
						"punctuation.separator.comma",
						"punctuation.separator.key-value",
						"punctuation.separator.parameter",
						"punctuation.definition.block",
						"punctuation.definition.tag.begin",
						"punctuation.definition.tag.end",
						"punctuation.definition.array.begin.json",
						"punctuation.definition.array.end.json",
						"punctuation.definition.dictionary.begin.json",
						"punctuation.definition.dictionary.end.json",
						"punctuation.separator.array.json",
						"punctuation.separator.dictionary.pair.json",
						"punctuation.separator.dictionary.key-value.json",
						"keyword.operator.type.annotation",
						"punctuation.support.type.property-name.begin.json",
						"punctuation.support.type.property-name.end.json",
						"punctuation.definition.typeparameters",

						// Markdown: link brackets
						"punctuation.definition.string.begin.markdown",
						"punctuation.definition.string.end.markdown",
						"punctuation.definition.metadata.markdown",

						// CSS & SCSS muted
						"punctuation.section.property-list.begin.bracket.curly",
						"punctuation.section.property-list.end.bracket.curly",
						"punctuation.separator.list.comma",
						"punctuation.terminator.rule",
						"punctuation.section.function.scss",

						// REG: = and "
						"punctuation.definition.equals.reg",
						"punctuation.definition.quote.reg",

						// JSX & TSX: { and }
						"punctuation.section.embedded.begin.js.jsx",
						"punctuation.section.embedded.end.js.jsx",
						"punctuation.section.embedded.begin.tsx",
						"punctuation.section.embedded.end.tsx",

						// PHP
						"punctuation.terminator.expression.php",
						"punctuation.definition.arguments.begin.bracket.round.php",
						"punctuation.definition.arguments.end.bracket.round.php",
						"punctuation.definition.class.begin.bracket.curly.php",
						"punctuation.definition.class.end.bracket.curly.php",
						"punctuation.definition.begin.bracket.curly.php",
						"punctuation.definition.end.bracket.curly.php",
						"punctuation.section.array.begin.php",
						"punctuation.section.array.end.php",

						// Python
						"punctuation.definition.arguments.begin.python",
						"punctuation.definition.arguments.end.python",
						"punctuation.section.function.begin.python",
						"punctuation.separator.arguments.python",

						// MS & MCR
						"source.mxs punctuation.section.block.begin",
						"source.mxs punctuation.section.block.end",
						"string.begin.maxscript",
						"string.end.maxscript",

						// Nginx
						"source.nginx constant.character.end",
						"source.nginx constant.character.brace",

						// Handlebars: <, >
						"text.html.handlebars punctuation.definition.tag",

						// Vex
						"punctuation.group.vex"
					],
					settings: {
						foreground: Colors.MUTED
					}
				},

				{
					name: "Yellow",
					scope: ["string"],
					settings: {
						foreground: Colors.YELLOW
					}
				},

				{
					name: "Orange",
					scope: [
						// Regex: escaped characters
						"constant.character.escape.backslash.regexp",

						// PHP: Escaped characters
						"constant.character.escape.php",

						// SCSS: escaped characters
						"constant.character.escape.scss"
					],
					settings: {
						foreground: Colors.ORANGE
					}
				},

				{
					name: "Crimson",
					scope: [
						// +, -, &&, ||, &, |
						"keyword.operator.arithmetic",
						"keyword.operator.logical",
						"keyword.operator.bitwise",
						"keyword.operator.type",

						// type, import, import * as, export, from, default
						"keyword.control.type",
						"keyword.control.import",
						"constant.language.import-export-all",
						"keyword.control.as",
						"keyword.control.export",
						"keyword.control.from",
						"keyword.control.default",

						// module.exports
						"support.type.object.module",

						// await, return
						"keyword.control.flow",
						"keyword.control.return",

						// new
						"keyword.operator.new",

						// if
						"keyword.control.conditional",

						// for, while
						"keyword.control.loop",

						// try, catch
						"keyword.control.trycatch",

						// switch, case
						"keyword.control.switch.js",
						"keyword.control.switch.ts",
						"keyword.control.switch.tsx",

						// Equal signs
						"keyword.operator.assignment",
						"keyword.operator.comparison",

						// <
						"keyword.operator.relational",

						// ++, --
						"keyword.operator.increment",
						"keyword.operator.decrement",

						// Regex: ^, $
						"keyword.control.anchor",

						// The dot to access properties
						"punctuation.accessor",

						// arrow
						"storage.type.function.arrow",

						// TS: ? from optional properties
						"keyword.operator.optional",

						// TS: tripleslash "reference"
						"entity.name.tag.directive.ts",
						"entity.name.tag.directive.tsx",

						// JS & TS: String template wrappers
						"punctuation.definition.template-expression.begin",
						"punctuation.definition.template-expression.end",

						// SCSS: String templates wrappers
						"punctuation.definition.interpolation.begin.bracket.curly.scss",
						"punctuation.definition.interpolation.end.bracket.curly.scss",

						// SCSS: math operators
						"keyword.operator.css",

						// PGSQL: DROP, CREATE, COMMENT ON COLUMN, IS
						"keyword.other.postgres",

						// PGSQL: IF
						"keyword.control.postgres",

						// PGSQL: NOT
						"keyword.operator.postgres",

						// PGSQL: TABLE, CASCADE, UNIQUE, VIEW, SELECT, FROM, ORDER BY, LIMIT
						"keyword.other.sql.postgres",

						// INI: Section name
						"entity.name.section.group-title.ini",

						// [, ]
						"meta.brace.square",

						// Regex: [, ], (, )
						"punctuation.definition.character-class",
						"punctuation.definition.group.regexp",

						// Regex: +, *
						"keyword.operator.quantifier.regexp",

						// CSS & SCSS: *
						"entity.name.tag.wildcard",

						// CSS & SCSS: tag name
						"entity.name.tag.css",

						// CSS & SCSS: #
						"punctuation.definition.constant.css",

						// SCSS: keywords
						"source.css.scss keyword.control",

						// SCSS: &
						"entity.name.tag.reference.scss",

						// REG: Delete key
						"entity.name.function.section.delete.reg",

						// PHP: <?php, ?>, $, ::, ., if, elseif, else
						"punctuation.section.embedded.begin.php",
						"punctuation.section.embedded.end.php",
						"punctuation.definition.variable.php",
						"keyword.operator.class.php",
						"keyword.operator.string.php",
						"keyword.control.if.php",
						"keyword.control.elseif.php",
						"keyword.control.else.php",

						// XML tags
						"punctuation.definition.tag.xml",
						"entity.name.tag.xml",
						"entity.name.tag.namespace.xml",
						"entity.name.tag.localname.xml",

						// BAT: @, command name
						"keyword.operator.at.batchfile",
						"keyword.command.batchfile",

						// Python: .
						"punctuation.separator.period.python",

						// MCR: try catch
						"keyword.control.maxscript",

						// MS: math operators
						"keyword.operator.maxscript",

						// MS: "." and ","
						"keyword.operator.delimiter.maxscript",

						// Markdown: ----
						"meta.separator.markdown",

						// Markdown: #
						"punctuation.definition.heading.markdown",

						// Markdown: >
						"punctuation.definition.quote.begin.markdown",

						// Markdown: list indicators
						"punctuation.definition.list.begin.markdown",

						// function const let
						"storage.type",

						// implements, async, extends
						"storage.modifier",

						// typeof, of
						"keyword.operator.expression",

						// MCR: macroscript
						"entity.type.utility.maxscript",

						// MS: struct
						"entity.type.struct.maxscript",

						// MS: fn, as
						"entity.modifier.function.maxscript",
						"keyword.operator.word.maxscript",

						// ENV: export
						"source.env keyword",

						// HLSL & GLSL: keywords
						"source.hlsl keyword",
						"source.glsl keyword",

						// Dockerfile: keywords
						"source.dockerfile keyword",

						// Rust: keywords
						"source.rust keyword",

						// Cypher: keywords, relationship signs
						"source.cypher keyword",
						"support.function.relationship-pattern.cypher",
						"support.function.relationship-pattern-start.cypher",
						"support.function.relationship-pattern-end.cypher",

						// Editorconfig patterns
						"meta.section.header.editorconfig",

						// YML: -
						"punctuation.definition.block.sequence.item.yaml",

						// Graphviz: ->
						"source.dot keyword.operator.dot",

						// Vex
						"keyword.control.vex",
						"keyword.operator.vex"
					],
					settings: {
						foreground: Colors.CRIMSON
					}
				},

				{
					name: "Tag names (crimson bold)",
					scope: [
						// HTML, JSX, TSX, Handlebars: tag name
						"entity.name.tag.html",
						"entity.name.tag.js.jsx",
						"entity.name.tag.tsx",
						"text.html.handlebars entity.name.tag"
					],
					settings: {
						fontStyle: Styles.BOLD,
						foreground: Colors.CRIMSON
					}
				},

				{
					name: "Green",
					scope: [
						// name of a property being accessed
						"variable.object.property",
						"variable.other.object.property",
						"variable.other.property",

						// object property name
						"meta.object-literal.key",

						// TS: enum property name
						"variable.other.enummember.ts",

						// JSON property name
						"support.type.property-name.json",

						// HTML attribute name & CSS/SCSS pseudoelements
						"entity.other.attribute-name",

						// Markdown: link title
						"string.other.link.title.markdown",

						// YAML: Property name
						"entity.name.tag.yaml",
						"constant.language.boolean.yaml",

						// CSS & SCSS: Property name
						"meta.property-name.css",
						"meta.property-name.scss",
						"support.type.property-name",
						"support.type.vendored.property-name",

						// REG: Add key
						"entity.name.function.section.add.reg",

						// PGSQL quoted name
						"string.quoted.double.postgres",

						// INI: Property name
						"keyword.other.definition.ini",

						// MCR: named parameter
						"variable.parameter.maxscript",

						// MCR: global variable name
						"variable.definition.global.maxscript",

						// MS: property name
						"variable.property.maxscript",

						// Nginx keywords
						"source.nginx constant.language",
						"source.nginx keyword.control",

						// ENV: variable name
						"source.env variable",

						// HLSL & GLSL: SV_TARGET, TEXCOORD0, samplerCUBE, etc
						"source.hlsl support",
						"source.glsl support",

						// Handlebars: {{, }}
						"support.constant.handlebars",

						// Cypher: variable name
						"variable.other.identifier.cypher",

						// Graphviz: property name
						"source.dot support.constant.attribute.node.dot",

						// EditorConfig: property name
						"source.editorconfig keyword.other.definition",

						// PHP: variable name
						"variable.other.php"
					],
					settings: {
						foreground: Colors.GREEN
					}
				},

				{
					name: "Blue: Constants",
					scope: [
						// JSON null, true, false
						"constant.language.json",

						// HTML: &amp;
						"constant.character.entity",

						// PGSQL: NULL
						"constant.language.postgres",

						// Units
						"keyword.other.unit",

						// PHP: Constants
						"constant.language.php",
						"constant.other.php",
						"variable.language.this.php",

						// MS: stricmp, color
						"support.class.primitive.maxscript",
						"support.other.primitive.maxscript",

						// Numbers
						"constant.numeric",

						// Regex: range
						"constant.other.character-class.range.regexp",
						"constant.other.character-class.regexp",

						// true, false
						"constant.language.boolean",

						// NaN
						"constant.language.nan",

						// undefined
						"constant.language.undefined",

						// CSS & SCSS: variable name
						"variable.scss",
						"variable.parameter.url.scss",
						"variable.css",
						"variable.argument.css",
						"variable.parameter.misc.css",

						// Cypher: Constants
						"source.cypher constant",

						// Cypher: Quant (e.g. "*0..1")
						"support.function.relationship-pattern.quant.cypher"
					],
					settings: {
						foreground: Colors.BLUE
					}
				},
				{
					name: "Blue Italic",
					scope: [
						// TS: types
						"support.type.primitive",

						// MS: types
						"storage.type.primitive.maxscript"
					],
					settings: {
						fontStyle: Styles.ITALIC,
						foreground: Colors.BLUE
					}
				},
				{
					name: "White",
					scope: [
						// JS, TS, TSX: string templates
						"meta.template.expression.js",
						"meta.template.expression.ts",
						"meta.template.expression.tsx"
					],
					settings: {
						foreground: Colors.WHITE
					}
				},

				{
					name: "Markdown: Default Text",
					scope: ["text.html.markdown"],
					settings: {
						foreground: Colors.LESS_WHITE
					}
				},
				{
					name: "Markdown: Headline Text",
					scope: [
						// Markdown: header lines
						"entity.name.section.markdown"
					],
					settings: {
						fontStyle: Styles.BOLD,
						foreground: Colors.WHITE
					}
				},

				{
					name: "Markdown: Symbols (muted)",
					scope: [
						// Markdown: ````
						"punctuation.definition.markdown",

						// Markdown: code block language name
						"fenced_code.block.language.markdown",

						// Markdown: * (italic and bold)
						"punctuation.definition.italic.markdown",
						"punctuation.definition.bold.markdown",

						// Markdown: ` (inline quote)
						"punctuation.definition.raw.markdown"
					],
					settings: {
						foreground: Colors.MUTED
					}
				},
				{
					name: "Markdown: Italic",
					scope: "markup.italic.markdown",
					settings: {
						fontStyle: Styles.ITALIC,
						foreground: Colors.ALMOST_WHITE
					}
				},
				{
					name: "Markdown: Bold",
					scope: "markup.bold.markdown",
					settings: {
						fontStyle: Styles.BOLD,
						foreground: Colors.ALMOST_WHITE
					}
				},
				{
					name: "Markdown: Raw Code (Inline)",
					scope: "markup.inline.raw.string.markdown",
					settings: {
						foreground: Colors.YELLOW
					}
				},
				{
					name: "Markdown: quote text",
					scope: [
						// Markdown: > quotes
						"markup.quote.markdown",

						// Markdown: tab quotes
						"markup.raw.block.markdown"
					],
					settings: {
						foreground: Colors.MUTED
					}
				},
				{
					name: "Markdown: raw code blocks",
					scope: "markup.fenced_code.block.markdown",
					settings: {
						foreground: Colors.WHITE
					}
				},
				{
					name: "Markdown: link url",
					scope: ["markup.underline.link.markdown"],
					settings: {
						foreground: Colors.WHITE
					}
				},

				{
					name: "Bold",
					scope: [
						// Function name
						"entity.name.function",

						// console.log
						"support.function.console",

						// parseInt, anything.method()
						"support.function",

						// type name
						"entity.name.type.alias",

						// class name
						"entity.name.type.class",
						"entity.other.inherited-class",

						// type alias name
						"entity.name.type",

						// Markdown: #
						"punctuation.definition.heading.markdown",

						// PHP: this
						"variable.language.this.php",

						// Python: method name
						"meta.function-call.generic.python",

						// MCR: macroscript name
						"entity.name.utility.maxscript",

						// MS: struct name
						"entity.name.struct.maxscript"
					],
					settings: {
						fontStyle: Styles.BOLD
					}
				}
			]
		};
		await writeJson(join(folder, "theme-dark.json"), dark);
	});
	it("package.json", async function () {
		const [, , , , , param5, param6, , param8] = process.argv;
		const version = (param5 === "--version") ? param6 : "0.0.0";
		const preview = (param8 !== "latest");
		const pkg = {
			name: "wildpeaks-theme",
			displayName: "Wildpeaks Theme",
			version,
			preview,
			description: "Dark theme that reduces visual clutter",
			author: "Cecile Muller",
			publisher: "wildpeaks",
			license: "MIT",
			icon: "icon.png",
			homepage: "https://github.com/wildpeaks/vscode-theme/#readme",
			repository: "https://github.com/wildpeaks/vscode-theme",
			bugs: {
				url: "https://github.com/wildpeaks/vscode-theme/issues"
			},
			engines: {
				vscode: "^1.45.0"
			},
			categories: ["Themes"],
			contributes: {
				themes: [
					{
						label: "Wildpeaks Dark",
						uiTheme: "vs-dark",
						path: "./theme-dark.json"
					}
				]
			}
		};
		await writeJson(join(folder, "package.json"), pkg);
	});
	it("icon.png", async function () {
		await copy(
			join(__dirname, "icon.png"),
			join(folder, "icon.png")
		);
	});
	it("README.md", async function () {
		await copy(
			join(process.cwd(), "README.md"),
			join(folder, "README.md")
		);
	});
});
