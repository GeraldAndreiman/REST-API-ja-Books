//id, firstName, lastName, birthYear, nationality, biography (optional), createdAt//
export interface author {
    id: number;
    firstName: string;
    lastName: string;
    birthYear: Date;
    nationality: string;
    biography?: string;
    createdAt: string;
}