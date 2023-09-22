import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import User from './User/User'
import SingIn from './Sign-in/SignIn'
import withAuth from './_services/auth-guard'

function AppRouting() {
    return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user" element={withAuth(<User />)} />
    <Route path="/sign-in" element={<SingIn />} />
    <Route path="*" element={<Home />} />
  </Routes>
}

export default AppRouting