export interface User {
    id: string;
    firstName: string;
    lastName: string;
    college: string;
    age: number;
    email: string;
}

export interface UserMap {
    [key: string]: any;
}
