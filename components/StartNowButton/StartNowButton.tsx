const StartNowButton = ({ className = "", label = "", onClick = () => {} }) => (
  <button
    type="button"
    className={`p-[10px_60px] md:p-[16px_50px] rounded-full mt-[20px] mb-[30px]
    font-barlow_bold text-[14px] md:text-2xl bg-yellow_2 font-bold text-black_3
    transition duration-[300ms] hover:scale-[1.1] ${className}`}
    onClick={onClick}
  >
    {label || "Start Now"}
  </button>
)

export default StartNowButton
