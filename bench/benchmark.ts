import { bench} from "as-bench/assembly/bench";
import { __itoa_fast } from "../assembly/custom/itoa"
import { itoa_buffered } from "util/number";

const out = new ArrayBuffer(10);


bench("Serialize String (New)", () => {
    serializeStringBL("hello world");
    bl._out(changetype<usize>(out))
    bl.reset();
});

bench("Serialize String (Old)", () => {
    serializeString("hello world");
});

bench("Serialize Vec3 (New)", () => {
    vec.__SERIALIZE_BL();
    bl._out(changetype<usize>(out))
    bl.reset();
});

bench("Serialize Vec3 (Old)", () => {
    blackbox(JSON.stringify(vec));
});

bench("Serialize Integer", () =>{
    serializeIntegerBL<i32>(12345);
    bl._out(changetype<usize>(out))
    bl.reset();
});

bench("Serialize Float", () => {
    serializeFloatBL<f64>(1.2345);
    bl._out(changetype<usize>(out))
    bl.reset();
})*/