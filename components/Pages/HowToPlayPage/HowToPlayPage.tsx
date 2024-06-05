import Layout from "@/components/Layout"
import Hero from "./Hero"
import Connect from "./Connect"
import Rate from "./Rate"
import JoinUp from "./JoinUp/JoinUp"
import JoinDown from "./JoinDown"
import Investment from "./Investment"
import UpPool from "./UpPool"
import UpDown from "./DownPool"
import PoolRound from "./PoolRound"
import StartRate from "./StartRate"
import UpPoolWins from "./UpPoolWIns"
import DownPoolWins from "./DownPoolWIns"
import Profits from "./Profits"
import WeeklyJackPot from "./WeeklyJackPot"
import MonthlyJackpot from "./MonthlyJackpot"
import PolygonMatic from "./PolygonMatic"
import GetMatic from "./GetMatic"
import SellOrSend from "./SellOrSend"
import Disclaimer from "../../Disclaimer"

const HowToPlayPage = () => (
  <Layout type="base">
    <Hero />
    <Connect />
    <Rate />
    <JoinUp />
    <JoinDown />
    <Investment />
    <UpPool />
    <UpDown />
    <PoolRound />
    <StartRate />
    <UpPoolWins />
    <DownPoolWins />
    <Profits />
    <WeeklyJackPot />
    <MonthlyJackpot />
    <PolygonMatic />
    <GetMatic />
    <SellOrSend />
    <Disclaimer />
  </Layout>
)

export default HowToPlayPage
