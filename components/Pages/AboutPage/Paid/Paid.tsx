import Container from "@/components/Container"
import PlayToButton from "@/components/PlayToButton"

const Paid = () => (
  <div className="w-full bg-white">
    <Container>
      <div className="w-full flex flex-col justify-center items-center pb-[50px]">
        <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
        <p className="max-w-[800px] font-barlow_black text-[42px] md:text-[90px] leading-[100%] text-center mt-[30px]">
          {`PAID SO FAR \n AND WIN RATIO`}
        </p>
        <div className="w-full grid md:grid-cols-3 justify-center items-center py-[20px]">
          <div className="w-full flex flex-col justify-center items-center p-[10px_10px] md:p-[15px_20px]">
            <p className="font-barlow text-[14px] md:text-[22px] font-bold text-red ">Last 24H</p>
            <p className="font-barlow font-bold text-[16px] md:text-[28px]">WIN RATIO</p>
            <p className="font-barlow_black text-[37px] md:text-[65px]">50.2%</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center md:p-[15px_20px]">
            <p className="font-barlow text-[22px] font-bold text-red ">Last 24H</p>
            <p className="font-barlow font-bold text-[16px] md:text-[28px]">WIN RATIO</p>
            <p className="font-barlow_black text-[37px] md:text-[65px]">234,504.80</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center md:p-[15px_20px]">
            <p className="font-barlow text-[22px] font-bold text-green_2 ">Last 24H</p>
            <p className="font-barlow font-bold text-[16px] md:text-[28px]">WIN RATIO</p>
            <p className="font-barlow_black text-[37px] md:text-[65px]">234,504.80</p>
          </div>
        </div>
        <PlayToButton />
      </div>
    </Container>
  </div>
)

export default Paid
