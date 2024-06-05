import { motion } from "framer-motion"
import { useState } from "react"

const Questions = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="w-full 
        flex justify-center"
    >
      <div className="w-full md:px-0">
        <div className="flex items-center justify-between  rounded-[10px] p-[10px_10px_10px_25px] md:p-[20px_20px_20px_45px] bg-white_3">
          <button
            type="button"
            className="w-full text-center md:text-left mr-[20px] leading-[1.4] cursor-pointer 
            font-barlow font-bold text-[16px] md:text-[22px] transition duration-[200ms] tracking-[-0.4px] font-radikal_light
                    hover:text-white_2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {data.answer}
          </button>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            animate={{
              rotate: isExpanded ? "180deg" : "0deg",
            }}
            initial={{
              rotate: isExpanded ? "0deg" : "180deg",
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <g stroke="currentColor" fill="none" fill-rule="evenodd">
                <circle fill="#fff" cx="16" cy="16" r="15.5" />{" "}
                <path
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15l4 4 4-4"
                />
              </g>
            </svg>
          </motion.button>
        </div>
        <motion.div
          animate={{
            height: isExpanded ? "auto" : "0px",
          }}
          initial={{
            height: "0px",
          }}
          transition={{
            duration: 0.2,
          }}
          className="overflow-hidden h-fit mt-[5px]"
        >
          <motion.p
            className="leading-[1.1] p-[10px_10px_10px_25px] md:p-[20px_20px_20px_45px]
                    font-barlow text-[12px] md:text-[22px] rounded-[10px] bg-black_6 text-white
                    text-darkgray"
            animate={{
              opacity: isExpanded ? 1 : 0,
            }}
            initial={{
              opacity: isExpanded ? 0 : 1,
            }}
            transition={{
              delay: isExpanded ? 0.1 : 0,
              duration: 0.2,
            }}
          >
            {data.content}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Questions
