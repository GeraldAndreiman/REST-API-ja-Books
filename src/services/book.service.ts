import { books } from "../data/book";
import { Book } from "../models/book";
import { randomUUID } from "crypto";

export const createBook = (data: Omit<Book, "id">): Book => {
  const newBook: Book = { id: randomUUID(), ...data };
  books.push(newBook);
  return newBook;
};

export const getBooks = (query: {
  page?: number;
  limit?: number;
  title?: string;
  language?: string;
  genre?: string;
  sortBy?: "title" | "publishedYear";
}) => {
  let result = [...books];

  // filters
  if (query.title) {
    result = result.filter(b =>
      b.title.toLowerCase().includes(query.title!.toLowerCase())
    );
  }

  if (query.language) {
    result = result.filter(b => b.language === query.language);
  }

  if (query.genre) {
    result = result.filter(b => b.genre === query.genre);
  }

  // sorting
  if (query.sortBy) {
    result.sort((a, b) =>
      query.sortBy === "title"
        ? a.title.localeCompare(b.title)
        : a.publishedYear - b.publishedYear
    );
  }

  // pagination
  const page = query.page ?? 1;
  const limit = query.limit ?? 10;
  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + limit);

  return {
    data: paginated,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(result.length / limit),
      totalItems: result.length,
      itemsPerPage: limit,
      hasNextPage: start + limit < result.length,
      hasPreviousPage: page > 1,
    },
  };
};

export const getBookById = (id: string): Book | undefined =>
  books.find(b => b.id === id);

export const updateBook = (id: string, data: Partial<Book>): Book | null => {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return null;

  books[index] = { ...books[index], ...data };
  return books[index];
};

export const deleteBook = (id: string): boolean => {
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return false;

  books.splice(index, 1);
  return true;
};