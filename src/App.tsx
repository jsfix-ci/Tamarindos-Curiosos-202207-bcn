import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import MyFavoritesPage from "./pages/MyFavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  let currentPage:
    | "mainPage"
    | "favoritesPage"
    | "detailsPage"
    | "notFoundPage" = "mainPage";
  return (
    <>
      <Header currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/meme" element={<DetailsPage />} />
        <Route path="/favorites" element={<MyFavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
