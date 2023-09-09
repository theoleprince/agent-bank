import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import User from './User/User'
import SingIn from './Sign-in/SignIn'

function AppRouting() {
    return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user" element={<User />} />
    <Route path="/sign-in" element={<SingIn />} />
    <Route path="*" element={<Home />} />
  </Routes>
}

export default AppRouting