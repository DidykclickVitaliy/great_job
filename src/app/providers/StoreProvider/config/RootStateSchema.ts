import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/ui/AuthByUsername";

export interface RootStateSchema {
    counter: CounterSchema,
    user: UserSchema,
    login: LoginSchema
}
