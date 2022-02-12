import { Entity, FunctionPropertyNames } from "@subql/types";
declare type SumRewardProps = Omit<SumReward, NonNullable<FunctionPropertyNames<SumReward>>>;
export declare class SumReward implements Entity {
    constructor(id: string);
    id: string;
    totalReward: bigint;
    blockheight?: number;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<SumReward | undefined>;
    static create(record: SumRewardProps): SumReward;
}
export {};
