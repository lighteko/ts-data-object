import "reflect-metadata";
export declare function dataclass(): (constructor: Function) => void;
export declare function serialize<T>(cls: new () => T, data: object): Promise<T>;
