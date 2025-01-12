import Layout from "../layouts/Layout"
import Hero from "../components/Hero";
import Services from "../components/Services/Services";
import About from "../components/About";
import Team from "../components/Team";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Team />
    </Layout>
  )
}

export default Home