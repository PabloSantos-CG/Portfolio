import { dataServices } from "@/data/dataServices";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function ServiceSlide() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1180: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{ clickable: true }}
      className="h-[240px] sm:h-[370px]"
      modules={[FreeMode, Pagination]}
    >
      {dataServices.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(66,63,251,0.15)] h-full rounded-lg px-6 py-8 flex justify-between sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div>
              <div className="text-4xl text-accent mb-4">{item.icon}</div>

              <div>
                <div className="text-lg mb-2">{item.title}</div>
                <p className="max-w-[350px] leading-normal text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-blue-600 transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
