import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout/Layout";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Documents from "./components/Pages/Documents";
import DummyPage from "./components/DummyPage/DummyPage";

function NotFoundPage() {
  return <h2>404 - Страницата не е намерена</h2>;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="cases" element={<Documents />} />
            <Route path="legal-search" element={<DummyPage />} />
            <Route path="smart-review" element={<DummyPage />} />
            <Route path="compliance" element={<DummyPage />} />
            <Route path="legal-forms" element={<DummyPage />} />
            <Route path="team" element={<DummyPage />} />
            <Route path="integrations" element={<DummyPage />} />
            <Route path="settings" element={<DummyPage />} />
            <Route
              path="support"
              element={<DummyPage title="Support Center" />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
