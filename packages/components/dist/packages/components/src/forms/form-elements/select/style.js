import{__spreadArray as n,__read as r,__makeTemplateObject as e}from"../../../../../../node_modules/tslib/tslib.es6.js";import o,{themeGet as t}from"@doar/shared/styled";import a from"../../../static/select.svg.js";import{InputStyles as s,SuccessInputStyles as p,WarningInputStyles as c,ErrorInputStyles as i,allowedProps as l}from"../style.js";var u,f=o("select").withConfig({shouldForwardProp:function(e,o){return!n([],r(l),!1).includes(e)&&o(e)}})(u||(u=e(["\n    border-color: ",";\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: #fff url(",") no-repeat right 0.625rem center/8px 10px;\n    ",";\n    ",";\n    ",";\n    ",";\n"],["\n    border-color: ",";\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: #fff url(",") no-repeat right 0.625rem center/8px 10px;\n    ",";\n    ",";\n    ",";\n    ",";\n"])),t("colors.text4"),a,s,(function(n){var r=n.$state,e=n.$showState,o=n.$showErrorOnly;return"success"===r&&!!e&&!o&&p}),(function(n){var r=n.$state,e=n.$showState,o=n.$showErrorOnly;return"warning"===r&&!!e&&!o&&c}),(function(n){var r=n.$state,e=n.$showState,o=n.$showErrorOnly;return"error"===r&&!!e&&!!o&&i}));export{f as StyledSelect};
