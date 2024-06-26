import { dataServices } from "@/data/dataServices";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { nanoid } from "nanoid";

export default function ServiceSlide() {
  return (
    <div className="w-full xl:w-2/3">
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
        className="h-[240px] sm:h-[340px]"
        modules={[FreeMode, Pagination]}
      >
        {dataServices.map((item) => (
          <SwiperSlide key={nanoid(5)}>
            <div className="bg-[#423ffb26] h-full rounded-lg px-6 py-8 flex justify-between sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[#5941a926] transition-all duration-300">
              <div>
                <div className="text-4xl text-accent mb-4">{item.icon}</div>

                <div>
                  <div className="text-base sm:text-lg mb-2">{item.title}</div>
                  <p className="max-w-[350px] leading-normal text-gray-300 text-xs sm:text-base">
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
    </div>
  );
}
