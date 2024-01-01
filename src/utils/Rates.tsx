import React from "react"

type RatesProps = {
    rate: number
}

const Rates = ({ rate }: RatesProps) => {
    let currentRate = rate

    const formatRate = () => {
        currentRate = Math.round(currentRate)
        currentRate = Math.min(5, currentRate)

        console.log(currentRate);
        

        return currentRate
    }

    formatRate()

    return (
        <>
        {
            currentRate && (
                Array.from({ length: 5 }).map((_, index) => (
                <svg
                    key={index}
                    style={{ fill: index < currentRate ? "#ebcc34" : "#878787" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    height="90%"
                >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                ))
            )
        }
        </>
    )
}

export default Rates;