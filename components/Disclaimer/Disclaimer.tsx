import Container from "@/components/Container"

const Disclaimer = () => (
  <div className="w-full relative bg-black_3 text-white flex md:py-[50px]">
    <Container>
      <div className="w-full flex justify-ccneter items-center px-[20px] md:px-[30px]">
        <p className="font-barlow text-black_5 text-[12px] md:text-[18px] pb-[30px] md:py-[20px] leading-[120%]">
          {`Disclaimer: This game software is fully decentralized Web3 software that enable players around the world to play against each other by \n 
          predicting the bitcoin next move, the software do not hold customer funds and do not play directly against the players, its enable \n 
           players to play peer to peer in social pools, to play the game you need to connect your digital wallet or create new one and connect,the \n  
           software don't have any access to your digital wallet crypto, the software (smart contract) takes commission only from the winners, to \n 
           bet/trade you are signing a contract with the smart contract that menage the game, the software pay winners their winnings directly to \n
            the same wallet they sign the contract with, the live stats that provided in this web site are original stats and they are open to the public \n
             on the polygon network and can be easily checked by all community, by playing this game you understand there is a risk to lose all your \n
              bet/trade, the chart is live chart of the bitcoin price and it's not manipulate the bitcoin price and its exact price the game gets from the \n
               data feed provider and there is no spread or pricing on this data feed, the chart is not a Bet/Trade advice, when you use this software \n
                you are fully responsible regarding the rules and regulations in your country that its allow you to use this kind of software, the smart \n
                 contract that menage the game is open source and can be find in this link, the smart contract is audited and verified by well-known top \n 
                 provider in the industry CERTIK, you can find here the scoring of the smart contract, the smart contract has passed all security checks \n
                  regarding the factors that insure safe, secure and fair game play, we wish you to enjoy the software and please make sure you \n
                   understand the game play and please make sure you are not spending more crypto the you can effort, thanks, enjoy, and please WIN!`}
        </p>
      </div>
    </Container>
  </div>
)

export default Disclaimer
