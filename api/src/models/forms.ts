import { Question } from './questions';

export interface Form {
    id: string;
    questions: [
        {
            question: Question;
            response: string;
        },
    ];
}
