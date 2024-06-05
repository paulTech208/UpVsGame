import Container from "@/components/Container"

const TopWinner = () => (
  <div className="w-full bg-black_3 relative">
    <Container>
      <div className="w-full flex flex-col justify-center items-center text-white">
        <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
        <p className="max-w-[800px] font-barlow_black text-[42px] md:text-[90px] leading-[100%] text-center mt-[30px]">
          TOP WINNERS
        </p>
      </div>
    </Container>
  </div>
)

export default TopWinner
