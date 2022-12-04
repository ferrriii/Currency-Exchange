import { Routes, Route } from "react-router-dom";
import { Converter } from "./pages/Converter-page.js";
import { History } from "./pages/History-page.js";
import { Layout } from "./pages/layout.js";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Converter />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}