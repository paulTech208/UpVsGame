import { useRouter } from "next/router"

const PlayToButton = ({ className = "" }) => {
  const router = useRouter()
  return (
    <button
      type="button"
      className={`p-[10px_30px] md:p-[16px_50px] rounded-full  mt-[20px]
            font-barlow_bold text-[14px] md:text-2xl bg-yellow_2 font-bold text-black_3
            transition duration-[300ms] hover:scale-[1.1] ${className}`}
      onClick={() => router.push("/trade")}
    >
      Play to earn Crypto
    </button>
  )
}

export default PlayToButton
