import Layout from "@/components/Layout"
import Disclaimer from "@/components/Disclaimer"
import Hero from "./Hero/Hero"
import Paid from "./Paid"
import Look from "./Look"
import Table from "./Table"
import Weekly from "./Weekly"
import TopWinner from "./TopWinner"
import Monthly from "./Monthly"
import KeyBenefit from "./KeyBenefit"
import Join from "./Join"
import FAQ from "./FAQ"
import Chance from "./Chance"
import Polygon from "./Polygon"

const AboutPage = () => (
  <Layout type="base">
    <Hero />
    <Paid />
    <Look />
    <Table />
    <TopWinner />
    <Weekly />
    <Monthly />
    <KeyBenefit />
    <Join />
    <FAQ />
    <Chance />
    <Polygon />
    <Disclaimer />
  </Layout>
)

export default AboutPage
