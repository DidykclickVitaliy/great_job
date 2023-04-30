export interface LoginSchema {
    username: string,
    password: string,
    isLoading: boolean,
    error?: string
}

export type LoginDetails = Pick<LoginSchema, "username" | "password">
