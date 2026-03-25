/* id, bookId, userName, rating (1–5), comment, createdAt */

export interface reviews {
    id: number;
    bookId: number;
    userName: string;
    rating: reviews;
    comment: string;
    createdAt: string;
}