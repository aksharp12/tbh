export interface User {
    id: string;
    firstName: string;
    lastName: string;
    college: string;
    age: number;
    email: string;
    [key: string]: any;
}

export interface UserMap {}
