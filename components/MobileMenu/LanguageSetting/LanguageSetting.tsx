import React from "react"
import ReactCountryFlag from "react-country-flag"
import useCountrySelect from "@/hooks/useCountrySelect"

const LanguageSetting = () => {
  const { selectRef, selectedCountry, select, isVisibleSelect, countries, setIsVisibleSelect } =
    useCountrySelect()

  return (
    <div className="relative" ref={selectRef}>
      {/* eslint-disable-next-line  jsx-a11y/label-has-associated-control, jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        onClick={() => setIsVisibleSelect(!isVisibleSelect)}
        className="flex justify-center items-center w-[35px] h-[35px] rounded-full border border-white_2 bg-white_3
        transition duration-[300ms] hover:bg-black_3"
        style={{ zIndex: 50 }}
      >
        <span
          className="w-[25px] aspect-[200/150] border border-black_3
        flex justify-center items-center !overflow-hidden"
        >
          <ReactCountryFlag
            countryCode={selectedCountry?.value}
            svg
            style={{
              width: "200px",
              height: "150px",
            }}
          />
        </span>
      </button>
      {isVisibleSelect && (
        <div
          className="min-w-[200px] absolute top-full left-0 z-[100] border border-black_4
                bg-black_1 py-2 px-3 max-h-[400px] overflow-y-auto overflow-x-hidden
                w-full rounded-md flex flex-col gap-2"
        >
          {countries.map((country) => (
            <label key={country.value} htmlFor="languageSelect">
              <button
                key={country.value}
                className="w-[300px] text-white text-sm text-center md:text-left flex gap-[8px]"
                type="button"
                onClick={() => select(country)}
              >
                <ReactCountryFlag
                  countryCode={country.value}
                  svg
                  style={{
                    width: "25px",
                    height: "15px",
                  }}
                />
                {country.label}
              </button>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSetting
