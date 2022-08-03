import { Navigate, Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import MyFavoritesPage from "./pages/MyFavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/meme" element={<DetailsPage />} />
        <Route path="/favorites" element={<MyFavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
