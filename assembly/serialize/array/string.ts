import { commaCode, rightBracketCode } from "../../src/chars";
import { Sink } from "../../src/sink";
import { serializeString } from "../string";

// @ts-ignore: Decorator
@inline export function serializeStringArray<T extends string[]>(data: T, out: Sink | null = null): Sink {
    if (!out) {
        if (!data.length) {
            return Sink.fromString("[]");
        } else {
            out = Sink.fromString("[");
        }
    }

    const end = data.length - 1;

    for (let i = 0; i < end; i++) {
        serializeString(
            data[i],
            out
        );
        out.writeCodePoint(commaCode);
    }

    serializeString(
        data[end],
        out
    );
    out.writeCodePoint(rightBracketCode);

    return out;
}