/* id, bookId, userName, rating (1–5), comment, createdAt */

export interface Review {
  id: string;
  bookId: string;
  rating: number;
  comment: string;
}