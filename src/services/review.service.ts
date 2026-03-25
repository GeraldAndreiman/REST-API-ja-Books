import { reviews } from "../data/reviews";
import { Review } from "../models/reviews";
import { randomUUID } from "crypto";

export const createReview = (
  bookId: string,
  data: Omit<Review, "id" | "bookId">
): Review => {
  const review: Review = {
    id: randomUUID(),
    bookId,
    ...data,
  };
  reviews.push(review);
  return review;
};

export const getReviewsByBook = (bookId: string): Review[] =>
  reviews.filter(r => r.bookId === bookId);

export const getAverageRating = (bookId: string): number => {
  const bookReviews = getReviewsByBook(bookId);
  if (bookReviews.length === 0) return 0;

  const sum = bookReviews.reduce((acc, r) => acc + r.rating, 0);
  return sum / bookReviews.length;
};