import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { createBook, deleteBook, getBook, getBooks, updateBook } from "./api/books";

const App: React.FC = () => {
  const toast = useRef<any>(null);

  const showToast = (message: string) => {
    if (toast.current) {
      toast.current.show({
        severity: "info",
        summary: "Info",
        detail: message,
      });
    }
  };

  const getBooksData = async () => {
    const { data } = await getBooks();

    showToast(JSON.stringify(data));
  };

  const getBookData = async (id: number) => {
    const { data } = await getBook(id);

    showToast(JSON.stringify(data));
  };

  const deleteBookData = async (id: number) => {
    const { data } = await deleteBook(id);

    showToast(JSON.stringify(data));
  }

  const createBookData  = async () => {
    const { data } = await createBook("Bleach", "Best manga in this year");

    showToast(JSON.stringify(data));
  }

  const updateBookData  = async () => {
    const { data } = await updateBook(1, "One Piece", "Great manga in this year");

    showToast(JSON.stringify(data));
  }

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      <Button
        label="Create"
        severity="warning"
        className="p-button-primary m-2 px-5 py-3"
        onClick={createBookData}
      />
      <Button
        label="Update"
        severity="help"
        className="p-button-primary m-2 px-5 py-3"
        onClick={updateBookData}
      />
      <Button
        label="Delete"
        severity="danger"
        className="p-button-primary m-2 px-5 py-3"
        onClick={() => deleteBookData(1)}
      />
      <Button
        label="Read all books"
        severity="info"
        className="p-button-primary m-2 px-5 py-3"
        onClick={getBooksData}
      />
      <Button
        label="Read Lord of the ring"
        severity="info"
        className="p-button-primary m-2 px-5 py-3"
        onClick={() => getBookData(1)}
      />
      <Button
        label="Read Harry Potter"
        severity="info"
        className="p-button-primary m-2 px-5 py-3"
        onClick={() => getBookData(2)}
      />
    </div>
  );
};

export default App;
