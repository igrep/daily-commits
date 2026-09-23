import{standardModuleRoot}from"@custard-lang/processor/dist/lib/base.js";
;
import * as async from "@custard-lang/processor/dist/lib/async.js";
;
import * as fsC from "node:fs";
;
import * as meta from "@custard-lang/processor/dist/lib/meta.js";

const dropLastIfEmpty=function(lines,){
;
return (((lines.length>0)&&(lines.at(-1)==="")))?(lines.slice(0,-1)):(lines);
};
;
export const readUtf8String=async function(reader,){
reader.setEncoding("utf8");
let data="";
for await (const chunk of reader){data=`${data}${chunk}`};
return data;
};
;
const readUtf8Lines=async function(reader,){
const data=await readUtf8String(reader);
return dropLastIfEmpty(data.split("\n"));
};
;
const inputFile=(process.argv[2]);
;
const commit=(process.argv[3]);
;
const formatDate=function({year,month,day,},){
;
return `${year}${"/"}${(`${month}`.padStart)(2,"0")}${"/"}${(`${day}`.padStart)(2,"0")}`;
};
;
export const newWeekHeader=function(){
const today=Temporal.Now.plainDateISO();
if((today.dayOfWeek!==1)){console.warn(`${""}`);
console.warn(`${"*******************************"}`);
console.warn(`${"*WARNING: Today is not Monday.*"}`);
console.warn(`${"*******************************"}`);
console.warn(`${""}`)}else{};
const nextSunday=today.add({days:6,});
return `${"# "}${formatDate(today)}${" - "}${formatDate(nextSunday)}`;
};
;
const checkedItemRegExp=new RegExp("^ {4,}- \\[x\\] ");
;
const datedItemRegExp=new RegExp("^ {8,}- \\d{4}/\\d\\d/\\d\\d: ?");
;
const otherItemRegExp=new RegExp("^ {12,}- ");
;
export const editBodyLines=function(lines,){
;
return lines.filter(function(line,){
;
return !((datedItemRegExp.test(line)||(checkedItemRegExp.test(line)||otherItemRegExp.test(line))));
});
};
;
export const linkToLastWeekCommit=function(commit,){
;
return `${"[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/"}${commit}${"/yesterday.md)"}`;
};
;
await (async function(){
const lines=await readUtf8Lines(fsC.createReadStream(inputFile));
const lastLine=lines.at(-1);
const [_headerLine,...restLines]=lines.slice(0,-1);
const newLines=[newWeekHeader(),...editBodyLines(restLines),linkToLastWeekCommit(commit)];
for (const newLine of newLines){console.log(newLine.trimEnd())};
})()