import Container from "@/components/Container"
import PlayToButton from "@/components/PlayToButton"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const Look = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full relative bg-black_3 flex py-[30px] md:py-[50px]">
      <Container>
        <div className="w-full grid md:grid-cols-5 justify-ccneter items-center">
          <div className="md:col-span-2 flex flex-col justify-center items-center md:items-start">
            <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
            <p className="max-w-[800px] font-barlow_black text-white text-[42px] md:text-[90px] leading-[100%] text-center md:text-left leading-[90%] mt-[10px] md:mt-[30px]">
              {`TAKE A \n Look`}
            </p>
            <p className="font-barlow text-white text-[15px] md:text-[20px] mt-[10px] md:my-[20px] text-center mt:text-center md:text-left">
              Watch this short video to learn the game logic, enjoy!
            </p>
            {isMobile ? "" : <PlayToButton className="bg-gradient_red text-white" />}
          </div>
          <div className="md:col-span-3 h-[150px] md:h-[386px] flex flex-col justify-stat items-center my-5 md:my-0 p-1 bg-gradient_red">
            <div className="w-full h-full bg-black flex justify-center items-center">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                type="button"
                className="rounded-full font-balow text-[22px] text-white
                           transition duration-[300ms] hover:scale-[1.1]"
              >
                <Media
                  link="/images/about/8f605546f51033bd99da.png"
                  blurLink="/images/about/8f605546f51033bd99da.png"
                  containerClasses="w-[52px] w-[100px] aspect-[1/1]"
                />
              </button>
            </div>
          </div>
          {isMobile ? <PlayToButton className="w-full bg-gradient_red text-white mx-auto" /> : ""}
        </div>
      </Container>
    </div>
  )
}

export default Look
