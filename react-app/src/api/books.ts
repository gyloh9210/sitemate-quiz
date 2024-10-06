import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080",
});

export const getBooks = () => client.get("/books");

export const getBook = (id: number) => client.get(`/books/${id}`);

export const deleteBook = (id: number) => client.delete(`/books/${id}`);

export const createBook = (title: string, description: string) =>
  client.post("/books", {
    title,
    description,
  });

export const updateBook = (id: number, title: string, description: string) =>
  client.put(`/books/${id}`, {
    title,
    description,
  });
