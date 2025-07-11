export interface User {
    email: string
    username: string
    avatar: string
}

export interface Transaction {
    id: number;
    type: string;
    title: string;
    date: Date;
    amount: number;
}

export interface Account {
    id: string;
    name: string;
    number: string;
    createdAt: Date;
}