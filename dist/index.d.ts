import "reflect-metadata";
export declare function DataClass(): (constructor: Function) => void;
export declare function serialize<T>(cls: new (...args: any[]) => T, data: object): Promise<T>;
export * from "class-transformer";
export * from "class-validator";
