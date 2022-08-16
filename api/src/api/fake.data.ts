import { User } from '../models/users';
import { Question } from '../models/questions';

export const users: User[] = [
    {
        id: '0',
        firstName: 'John',
        lastName: 'Smith',
        college: 'Drexel University',
        age: 18,
        email: 'jsmith@gmail.com',
    },
    {
        id: '1',
        firstName: 'Joe',
        lastName: 'Smith',
        college: 'Temple University',
        age: 20,
        email: 'joe@gmail.com',
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        college: 'Rutgers University',
        age: 21,
        email: 'jane@gmail.com',
    },
    {
        id: '3',
        firstName: 'Thomas',
        lastName: 'Johnson',
        college: 'Cornell University',
        age: 22,
        email: 'tj@gmail.com',
    },
];

export const questions: Question[] = [
    {
        id: '0',
        type: 0,
        question: 'How are you today?',
        options: ['Good', 'Okay', 'Great'],
        constraints: [
            {
                property: 'age',
                comparator: '==',
                value: 18,
            },
        ],
    },
    {
        id: '1',
        type: 0,
        question: 'What kind of car do you drive?',
        options: ['Honda', 'Toyota', 'Ford'],
        constraints: [
            {
                property: 'age',
                comparator: '>',
                value: 18,
            },
        ],
    },
    {
        id: '2',
        type: 1,
        question: 'Do you have any pets?',
        options: ['Cat', 'Dog', 'Fox'],
        constraints: [
            {
                property: 'age',
                comparator: '>',
                value: 21,
            },
        ],
    },
];
