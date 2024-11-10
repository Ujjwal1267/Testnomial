import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Card = (props) => {
    let review = props.review
    return (
        <div className="flex flex-col md:relative items-center md:items-start md:text-left text-center">
            {/* Testimonial Content */}
            <div className="order-2 md:order-none">
                <div className="mt-7">
                    <p className="tracking-wider font-bold text-2xl capitalize">{review.name}</p>
                    <p className="text-violet-300 uppercase text-sm">{review.job}</p>
                </div>

                <div className="text-violet-400 mt-5">
                    <FaQuoteLeft />
                </div>

                <div className="mt-4 text-slate-500 px-4">
                    {review.text}
                </div>

                <div className="text-violet-400 mt-5">
                    <FaQuoteRight />
                </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 md:order-none relative md:absolute md:top-[-7rem] z-[10]">
                <img
                    className="aspect-square rounded-full w-[100px] h-[100px] md:w-[140px] md:h-[140px] z-[25] mx-auto md:mx-0"
                    src={review.image}
                    alt={review.name}
                />
                <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]"></div>
            </div>
        </div>
    )
}

export default Card

