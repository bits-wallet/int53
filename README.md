# int53

### Refactoring [dannycoates]'s [int53] lib with number type enum parameter instead of function name with typescript.

# Int53Type

```js
Int64BE = "Int64BE",
Int64LE = "Int64LE",
UInt64BE = "UInt64BE",
UInt64LE = "UInt64LE",
```

# API

```js
import { Int53Type, readInt53, writeInt53 } from "./index";

var number = readInt53(Int53Type.Int64BE, buffer, offset)
var number = readInt53(Int53Type.Int64LE, buffer, offset)
var number = readInt53(Int53Type.UInt64BE, buffer, offset)
var number = readInt53(Int53Type.UInt64LE, buffer, offset)

writeInt53(Int53Type.Int64BE, number, buffer, offset)
writeInt53(Int53Type.Int64LE, number, buffer, offset)
writeInt53(Int53Type.UInt64BE, number, buffer, offset)
writeInt53(Int53Type.UInt64LE, number, buffer, offset)
```

## why?

Sometimes you need to read and write 64-bit integers. For some
things like timestamps, file sizes, and counters the 53-bits
offered by a double is enough to get by, and easier to work with
than a bigint module.

## License

MIT

**Free Software, Hell Yeah!**

