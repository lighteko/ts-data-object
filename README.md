# ts-data-object

> A TypeScript package inspired by Python's `dataclass`, designed to simplify object serialization, validation, and transformation using `class-transformer` and class-validator`.

## Features

🎯 Easy-to-use decorator-based API

🔄 Automatic serialization and deserialization

✅ Built-in validation with class-validator

📦 Fully typed with TypeScript support

🛠 Exports all class-validator and class-transformer decorators for extended flexibility

## Installation
```bash
npm install ts-data-object
```

or using yarn:
```bash
yarn add ts-data-object
```
## Usage

```typescript
import { DataClass, serialize } from "ts-data-object";

@DataClass()
class User {
  name: string;
  age: number;
}

const user = { name: "Alice", age: 25 };
console.log(serialize(User, user));
```
## License

This project is licensed under the MIT License.

