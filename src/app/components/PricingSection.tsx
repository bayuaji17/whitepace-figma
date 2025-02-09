"use client";
import Card from "@/app/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import TextElement from "./ui/text-element";

const PricingSection = () => {
  const cardData = [
    {
      title: "Personal",
      price: "$11.99",
      description: "Keep Home and family on track",
      listItems: [
        { title: "Sync unlimited devices" },
        { title: "10 GB monthly uploads" },
        { title: "200 MB max. note size" },
        { title: "Customize Home dashboard and access extra widgets" },
        { title: "Connect primary Google Calendar account" },
        {
          title: "Add due dates, reminders, and notifications to your tasks",
        },
      ],
      buttonTitle: "Get Started",
    },
    {
      title: "Free",
      price: "$11.99",
      description: "Keep Home and family on track",
      listItems: [
        { title: "Sync unlimited devices" },
        { title: "10 GB monthly uploads" },
        { title: "200 MB max. note size" },
        { title: "Customize Home dashboard and access extra widgets" },
        { title: "Connect primary Google Calendar account" },
        {
          title: "Add due dates, reminders, and notifications to your tasks",
        },
      ],
      buttonTitle: "Get Started",
    },
    {
      title: "Premium",
      price: "$11.99",
      description: "Keep Home and family on track",
      listItems: [
        { title: "Sync unlimited devices" },
        { title: "10 GB monthly uploads" },
        { title: "200 MB max. note size" },
        { title: "Customize Home dashboard and access extra widgets" },
        { title: "Connect primary Google Calendar account" },
        {
          title: "Add due dates, reminders, and notifications to your tasks",
        },
      ],
      buttonTitle: "Get Started",
    },
  ];

  return (
    <section className="flex flex-col md:px-8 h-[999px]">
      <div className="flex flex-col items-center px-8">
        <TextElement firstText="Choose" secondText="Your Plan" />
        <p className="text-lg font-medium w-3/4 text-center my-6">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className="hidden lg:flex gap-4 justify-around mt-28">
        {cardData.map((cardData, index) => (
          <Card
            key={index}
            title={cardData.title}
            price={cardData.price}
            description={cardData.description}
            listItems={cardData.listItems}
            buttonTitle={cardData.buttonTitle}
          />
        ))}
      </div>
      <div className="lg:hidden mt-10">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          initialSlide={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 25,
              centeredSlides: true,
            },
            // Medium screens (768px and up)
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              centeredSlides: true,
            },
            // Large screens (1024px and up)
            1024: {
              slidesPerView: 1.8,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
          modules={[FreeMode, Pagination]}
        >
          {cardData.map((cardData, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex justify-center items-center py-16">
                <Card
                  title={cardData.title}
                  price={cardData.price}
                  description={cardData.description}
                  listItems={cardData.listItems}
                  buttonTitle={cardData.buttonTitle}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PricingSection;
