import "reflect-metadata";
import { plainToInstance, Type } from "class-transformer";
import {
  validate,
  IsString,
  IsArray,
  IsDate,
  ValidateNested,
  IsNumber,
} from "class-validator";

export function DataClass() {
  return function (constructor: Function) {
    const properties = Reflect.ownKeys(constructor.prototype);

    for (const property of properties) {
      if (property === "constructor") continue;

      const type = Reflect.getMetadata(
        "design:type",
        constructor.prototype,
        property
      );

      switch (type) {
        case String:
          Reflect.decorate([IsString()], constructor.prototype, property);
          break;
        case Array:
          Reflect.decorate([IsArray()], constructor.prototype, property);
          break;
        case Number:
          Reflect.decorate([IsNumber()], constructor.prototype, property);
          break;
        case Date:
          Reflect.decorate(
            [IsDate(), Type(() => Date)],
            constructor.prototype,
            property
          );
          break;
        default:
          Reflect.decorate(
            [ValidateNested(), Type(() => type)],
            constructor.prototype,
            property
          );
          break;
      }
    }
  };
}

export async function serialize<T>(
  cls: new (...args: any[]) => T,
  data: object
): Promise<T> {
  const instance = plainToInstance(cls, data);
  const errors = await validate(instance as Object);
  if (errors.length > 0) throw new Error(JSON.stringify(errors));
  return instance;
}

export * from "class-transformer";
export * from "class-validator";
