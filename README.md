ts-data-object

A TypeScript library inspired by Python's dataclass, designed to simplify object serialization, validation, and transformation using class-transformer and class-validator.

Features

🎯 Easy-to-use decorator-based API

🔄 Automatic serialization and deserialization

✅ Built-in validation with class-validator

📦 Fully typed with TypeScript support

🛠 Exports all class-validator and class-transformer decorators for extended flexibility

Installation

npm install ts-data-object class-transformer class-validator

or using yarn:

yarn add ts-data-object class-transformer class-validator

Usage

import { DataClass, serialize, IsString, IsInt } from "ts-data-object";

@DataClass()
class User {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}

const user = new User({ name: "Alice", age: 25 });
console.log(serialize(User, user));

License

This project is licensed under the MIT License.

