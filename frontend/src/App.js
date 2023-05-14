import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// public pages
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";

import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";

import ScrollToTop from "./utils/scrollTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />

      <Routes>
        <Route>
          <Route path='/' element={<HomePage />} />
          <Route path='/product-list' element={<ProductListPage />} />
          <Route path='/product-details' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={"Page not exists 404"} />
        </Route>

        <Route>
          <Route path='/user' element={<UserProfilePage />} />
          <Route path='/user/my-orders' element={<UserOrdersPage />} />
          <Route path='/user/cart-details' element={<UserCartDetailsPage />} />
          <Route
            path='/user/order-details'
            element={<UserOrderDetailsPage />}
          />
        </Route>
        <Route>
          <Route path='/admin/users' element={<AdminUsersPage />} />
          <Route path='/admin/edit-user' element={<AdminEditUserPage />} />
          <Route path='/admin/products' element={<AdminProductsPage />} />
          <Route
            path='/admin/create-new-product'
            element={<AdminCreateProductPage />}
          />
          <Route
            path='/admin/edit-product'
            element={<AdminEditProductPage />}
          />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
