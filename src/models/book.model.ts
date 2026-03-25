// id, title, isbn, publishedYear, pageCount, language, description, coverImage (opt.), authorId, publisherId, genres[], createdAt, updatedAt
export interface Book {
    id: number;
    title: string;
    isbn: string;
    publishedYear: number;
    pageCount: number;
    language: string;
    description: string; 
    authorID: number;
    genres: string[];
    updatedAt: number;
}