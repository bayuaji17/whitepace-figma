"use client";
import { StaticImageData } from "next/image";
import ClientCard from "./ui/client-card";
import avatar_1 from "~/public/images/Avatar-1.png";
import avatar_2 from "~/public/images/Avatar-2.png";
import avatar_3 from "~/public/images/Avatar-3.png";
import TextElement from "./ui/text-element";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const ClientSection = () => {
  const listClient: {
    id: number;
    avatar: StaticImageData;
    testimonial: string;
    name: string;
    role: string;
  }[] = [
    {
      id: 1,
      avatar: avatar_1,
      testimonial:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      name: "Oberon Shaw, MCH",
      role: "Head of Talent Acquisition, North America",
    },
    {
      id: 2,
      avatar: avatar_2,
      testimonial:
        "Whitepate has revolutionized the way our team collaborates and manages projects. Highly recommended!",
      name: "Alice Johnson",
      role: "Product Manager",
    },
    {
      id: 3,
      avatar: avatar_3,
      testimonial:
        "The ease of use and powerful features of Whitepate have made it an indispensable tool for our business.",
      name: "Michael Brown",
      role: "CTO",
    },
    {
      id: 4,
      avatar: avatar_1,
      testimonial:
        "Whitepate has streamlined our workflow and improved our team's productivity significantly.",
      name: "Emily Davis",
      role: "Marketing Director",
    },
    {
      id: 5,
      avatar: avatar_2,
      testimonial:
        "We've seen a dramatic improvement in project delivery times since adopting Whitepate.",
      name: "David Wilson",
      role: "Operations Manager",
    },
  ];
  return (
    <section className="lg:px-8 py-36 flex flex-col items-center">
      <TextElement firstText="What Our" secondText="Clients Says" />
      <div className="w-full py-10 flex justify-center items-center mt-14">
        <Swiper
          slidesPerView={1}
          initialSlide={0}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
        >
          {listClient.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex items-center w-full justify-center py-10 px-2 xl:px-5">
                <ClientCard
                  avatar={client.avatar}
                  testimonial={client.testimonial}
                  name={client.name}
                  role={client.role}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSection;
