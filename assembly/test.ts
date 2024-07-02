import { itoa_buffered } from "util/number";
import { __itoa_fast } from "./custom/itoa";

// Usage example
let buf = new ArrayBuffer(10); // 11 characters * 2 bytes per character
const l = __itoa_fast(changetype<usize>(buf), 12345);
console.log(Uint16Array.wrap(buf).join(" "));

const len = itoa_buffered(changetype<usize>(buf), 12345);
console.log(Uint16Array.wrap(buf.slice(0, len * 2)).join(" "));