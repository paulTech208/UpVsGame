import Media from "@/shared/Media"
import lists from "./lists.json"

const Footer = () => (
  <div className="w-full grid grid-cols-4 justify-center items-center md:p-[20px_20px] gap-[20px]">
    {lists.map((list, index) => (
      <div
        className="col-span-1 flex flex-col md:flex-row justify-center items-center py-[2vh] gap-[5px]"
        // eslint-disable-next-line  react/no-array-index-key
        key={index}
      >
        <Media
          link={`/images/landing/${list.image}.svg`}
          blurLink={`/images/landing/${list.image}.svg`}
          containerClasses="w-[27px] md:w-[45px] aspect-[1/1]"
        />
        <div className="w-full flex flex-col text-white_1 justify-center items-center md:items-start">
          <p className="font-barlow text-[10px] md:text-[15px]">{list.topTitle}</p>
          <p className="font-barlow text-[7px] md:text-[11px]">{list.bottomTitle}</p>
        </div>
      </div>
    ))}
  </div>
)

export default Footer
