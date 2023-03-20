import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../layouts/Navbar";
import AddBook from "../features/AddBook";
import BooksView from "../features/BooksView";
import EditBook from "../features/EditBook";
import Footer from "../layouts/Footer";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/edit-book" element={<EditBook />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
