import {Link, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css"
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";


function App() {
  return (
    <>
      <div>
        <h3>React-Router 6</h3>
      </div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="about/*" element={<AboutPage/>}>
                <Route path="contact" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Route>
            <Route path="about-us" element={<Navigate to="/about" replace/>}/> {/* переадресация адреса (редирект), replace нужен, чтобы в истории не сохранился адрес */}
            <Route path="posts" element={<BlogPage/>}/>
            {/*<Route path="posts/:category/:title" element={<SinglePage/>}/>*/} {/* если нужно несколько параметров */}
            <Route path="posts/:id" element={<SinglePage/>}/>
            <Route path="posts/:id/edit" element={<EditPost/>}/>
            {/*<Route path="posts/new" element={<CreatePost />}/>*/}
            <Route path="posts/new" element={
              <RequireAuth>
                <CreatePost /> {/* Приватный роут */}
              </RequireAuth>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
