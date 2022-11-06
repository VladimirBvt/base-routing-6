import {Link, Outlet, Route, Routes} from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <h1>AboutPage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sequi!</p>
      <ul>
        <li><Link to="contact">Our contact</Link></li>
        <li><Link to="team">Our team</Link></li>
      </ul>

      {/*<Routes>*/}
      {/*  <Route path="contact" element={<p>Our contact</p>} />*/}
      {/*  <Route path="team" element={<p>Our team</p>} />*/}
      {/*</Routes>*/}

      <Outlet/>
    </>
  )
}

export default AboutPage
