@inline export function __itoa_fast<T extends number>(buf: usize, val: T): i32 {
  if (val > 10000) {
    store<u32>(buf,
      (((val / 10000) % 10) + 48) |
      ((((val / 1000) % 10) + 48) << 16),
      0
    );
    store<u32>(buf,
      (((val / 100) % 10) + 48) |
      ((((val / 10) % 10) + 48) << 16),
      4
    );
    store<u16>(buf, (val % 10) + 48, 8);
  } else if (val > 1000) {
    store<u32>(buf,
      (((val / 1000) % 10) + 48) |
      ((((val / 100) % 10) + 48) << 16),
      0
    );
    store<u32>(buf,
      (((val / 10) % 10) + 48) |
      (((val % 10) + 48) << 16),
      4
    );
  } else if (val > 100) {
    store<u32>(buf,
      (((val / 100) % 10) + 48) |
      ((((val / 10) % 10) + 48) << 16),
      0
    );
    store<u16>(buf,
      ((val % 10) + 48),
      4
    );
  } else if (val > 10) {
    store<u32>(buf,
      (((val / 10) % 10) + 48) |
      (((val % 10) + 48) << 16),
      0
    );
  } else {
    store<u16>(buf,
      val + 48,
      0
    );
  }
  return 0;
}