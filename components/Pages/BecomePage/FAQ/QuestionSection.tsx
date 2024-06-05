import useClickOutside from "@/hooks/useClickOutside"
import { useState } from "react"
import questionLists from "./questionLIsts.json"
import Questions from "./Questions"

const QuestionSection = () => {
  const { setIsVisibleSelect, isVisibleSelect, selectRef } = useClickOutside()
  const [selectedList, setSelectedList] = useState(questionLists[0])
  const onToggleList = (data) => {
    setSelectedList(data)
    setIsVisibleSelect(!isVisibleSelect)
  }

  return (
    <div className="w-full flex flex-col justify-center items-start mt-[20px] ">
      <div className="w-full flex justify-center items-start relative" ref={selectRef}>
        <button
          type="button"
          onClick={() => setIsVisibleSelect(!isVisibleSelect)}
          className="max-w-[300px] flex justify-between items-center rounded-[10px] border border-white_2 
              bg-black_3 p-[13px_0px_13px_20px] text-yellow_2 font-barlow text-[13px] md:text-[20px]  gap-[20px]
              transition duration-[300ms] hover:text-white hover:scale-[1.05]"
          style={{ zIndex: 50 }}
        >
          <p>{selectedList.title} </p>
          <div
            className={`${
              isVisibleSelect ? "" : "transform rotate-[180deg]"
            } transition duration-[300ms]`}
          >
            <svg width="64" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <g stroke="currentColor" fill="none" fill-rule="evenodd">
                <path
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15l4 4 4-4"
                />
              </g>
            </svg>
          </div>
        </button>
        {isVisibleSelect && (
          <div
            className="max-w-[250px] absolute top-full left-[50%] z-[100]
                bg-black_3 py-3 px-4 max-h-[400px] overflow-y-auto overflow-x-hidden mt-[10px]
                transform -translate-x-1/2 
                rounded-[5px] flex flex-col gap-2"
          >
            {questionLists.map((list, i) => (
              <button
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                type="button"
                className="w-full text-white hover:text-yellow_2 text-center md:text-left"
                onClick={() => onToggleList(list)}
              >
                {list.title}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="w-full max-h-[500px] overflow-auto flex flex-col justify-start items-center gap-[5px] mt-[30px]">
        {selectedList.data.map((list, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Questions key={index} data={list} />
        ))}
      </div>
    </div>
  )
}

export default QuestionSection
