import Container from "@/components/Container"
import Media from "@/shared/Media"
import useIsMobile from "@/hooks/useIsMobile"
import Lists from "./lists.json"

const Table = () => {
  const isMobile = useIsMobile()
  return (
    <div className="w-full bg-white">
      <Container>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-[100px] md:w-[250px] h-[3px] md:h-[5px] bg-gradient_red" />
          <p className="font-barlow_black text-[42px] md:text-[90px] leading-[100%] text-center my-[30px]">
            COMPARISON TABLE
          </p>
          <div className="w-full flex flex-col justify-center items-start font-barlow md:mb-[70px]">
            <div className="w-full grid grid-cols-3 md:grid-cols-4 justify-cetner items-start">
              {isMobile ? "" : <div className="w-full col-span-1" />}
              <div className="w-full col-span-1" />
              <div className="w-full col-span-1 bg-yellow_2 font-barlow text-center text-[12px] md:text-[16px]">
                Best Option
              </div>
              <div className="w-full col-span-1" />
            </div>
            <div className="w-full grid grid-cols-3 md:grid-cols-4 justify-cetner items-start font-barlow font-bold">
              {isMobile ? "" : <div className="w-full col-span-1" />}
              <div className="w-full col-span-1 h-[122px] md:h-[261px] text-center flex flex-col !justify-center !items-center border-b border-b-black_4">
                <p className="text-[15px] md:text-[34px]">GAMING</p>
                <p className="text-[30px] md:text-[67px]">30%+</p>
                <p className="text-[14px] md:text-[24px]">Win ratio</p>
              </div>
              <div
                className="w-full col-span-1 h-[122px] md:h-[261px] text-center bg-black_3 text-yellow_2
              flex flex-col !justify-center !items-center border-b border-b-black_4"
              >
                <p className="text-[15px] md:text-[34px]">US VS DOWN</p>
                <p className="text-[30px] md:text-[67px]">50%+</p>
                <p className="text-[14px] md:text-[24px]">Win ratio</p>
              </div>
              <div className="w-full col-span-1 h-[122px] md:h-[261px] text-center flex flex-col !justify-center !items-center border-b border-b-black_4">
                <p className="text-[15px] md:text-[34px]">FINANCE</p>
                <p className="text-[30px] md:text-[67px]">50%+</p>
                <p className="text-[14px] md:text-[24px]">Win ratio</p>
              </div>
            </div>
            {Lists.map((list, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="w-full grid grid-cols-3 md:grid-cols-4 justify-cetner items-start border-y-[0.1px] border-black_7"
              >
                {isMobile ? (
                  ""
                ) : (
                  <div className="col-span-1 w-full h-[80px] md:h-[76px] flex flex-col justify-center items-center">
                    <p className="text-[14px] md:text-[20px]">{list.title}</p>
                  </div>
                )}
                {isMobile ? (
                  <div className="col-span-1 w-full h-[76px] flex flex-col justify-center items-center">
                    <Media
                      link={`/images/about/${list.gaming}.svg`}
                      blurLink={`/images/about/${list.gaming}.svg`}
                      containerClasses="w-[12px] md:w-[24px] aspect-[24/20]"
                    />
                    <p className="text-[14px] md:text-[20px] text-center">{list.title}</p>
                  </div>
                ) : (
                  <div className="col-span-1 w-full h-[76px] flex flex-col justify-center items-center">
                    <Media
                      link={`/images/about/${list.gaming}.svg`}
                      blurLink={`/images/about/${list.gaming}.svg`}
                      containerClasses="w-[12px] md:w-[24px] aspect-[24/20]"
                    />
                  </div>
                )}

                <div className="col-span-1 w-full h-[76px] flex flex-col justify-center items-center bg-black_3 text-yellow_2">
                  <Media
                    link={`/images/about/${list.upDownImage}.svg`}
                    blurLink={`/images/about/${list.upDownImage}.svg`}
                    containerClasses="w-[12px] md:w-[24px] aspect-[24/20]"
                  />
                  <p className="text-[12px] md:text-[20px] text-center">{list.upDownTitle}</p>
                </div>
                {isMobile ? (
                  <div className="col-span-1 w-full h-[76px] flex flex-col justify-center items-center">
                    <Media
                      link={`/images/about/${list.gaming}.svg`}
                      blurLink={`/images/about/${list.gaming}.svg`}
                      containerClasses="w-[12px] md:w-[24px] aspect-[24/20]"
                    />
                    <p className="text-[14px] md:text-[20px] text-center">{list.title}</p>
                  </div>
                ) : (
                  <div className="col-span-1 w-full h-[76px] flex flex-col justify-center items-center">
                    <Media
                      link={`/images/about/${list.gaming}.svg`}
                      blurLink={`/images/about/${list.gaming}.svg`}
                      containerClasses="w-[12px] md:w-[24px] aspect-[24/20]"
                    />
                  </div>
                )}
              </div>
            ))}
            <div className="w-full grid md:grid-cols-4 justify-cetner items-start">
              {isMobile ? "" : <div className="w-full col-span-1" />}
              <div className="w-full col-span-1" />
              <div className="w-full col-span-1 bg-none md:bg-black_3 font-barlow text-center p-[30px_5px]">
                <button
                  type="button"
                  className="border-2 border-yellow_2 p-[6px_20px] rounded-full 
                font-barlow_bold text-2xl bg-yellow_2 font-bold text-black_3
                  transition duration-[300ms] hover:scale-[1.1]"
                >
                  Play to earn Crypto
                </button>
              </div>
              <div className="w-full col-span-1" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Table
