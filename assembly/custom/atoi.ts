/**
 * Implementation of ATOI. Can be much much faster with SIMD.
 */

// @ts-ignore
export function __atoi_fast<T extends number>(str: string, start: u32 = 0, end: u32 = 0): T {
    // @ts-ignore
    let val: T = 0;
    if (!end) end = start + u32(str.length << 1);
    if (isSigned<T>()) {
        // Negative path
        if (load<u16>(changetype<usize>(str) + <usize>start) === 45) {
            start += 2;
            for (; start < end; start += 2) {
                val = (val * 10) + (load<u16>(changetype<usize>(str) + <usize>start) - 48) as T;
            }
            return -val as T;
        } else {
            for (; start < end; start += 2) {
                val = ((val * 10) + (load<u16>(changetype<usize>(str) + <usize>start) - 48)) as T;
            }
            return val as T;
        }
    } else {
        for (; start < end; start += 2) {
            val = ((val * 10) + (load<u16>(changetype<usize>(str) + <usize>start) - 48)) as T;
        }
        return val as T;
    }
}