import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";

export interface RootStateSchema {
    counter: CounterSchema,
    user: UserSchema
}
