
import { Route, Routes } from "react-router-dom"
import AuthForm from "./pages/AuthForm"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CategoryGrid from "./pages/CategoryGrid"
import Layout from "./pages/Layout"
import ProductGrid from "./pages/CopyCard"
import ProductDetails from "./pages/ProductDetails"
import AdminDashboard from "./pages/admin/AdminDash"




const App = () => {
  return (

    <Layout>
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/add-user" element={<AuthForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<CategoryGrid />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin/me" element={<AdminDashboard />} />
      </Routes>
    </Layout>
  )
}

export default App
