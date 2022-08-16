export interface Question {
    id: string;
    type: QuestionType;
    question: string;
    options: string[];
    constraints: [
        {
            property: string;
            comparator: string;
            value: any;
        },
    ];
}

export enum QuestionType {
    RADIO = 0,
    CHECKBOX = 1,
    TEXT = 2,
}
