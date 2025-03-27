import path from "path"
import { fileURLToPath } from "url";
let obj = {
    root: 'C:/',
    dir: 'C:/A/B/C/D/E/F/G',
    base: 'H.js',
    ext: '.js',
}
console.log(path.format(obj));

console.log(path.parse("C:/A/B/C/D/E/F/G/H.js/"));


// console.log(path.basename(fileURLToPath(import.meta.url)));
// console.log(path.extname(fileURLToPath(import.meta.url)));
// console.log(path.join("apbcd","b"));
// console.log(path.matchesGlob("C:/A","C/A"));

console.log(path.isAbsolute("./H.js"));
