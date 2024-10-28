"use client";

import React, { FC, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Badge from "@/app/components/shared/Badge";
import ButtonClose from "@/app/components/shared/ButtonClose";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Route } from "next";
import { useTranslations } from "next-intl";
import ButtonPrimary from "@/app/components/shared/ButtonPrimary";

export interface StandartRoomPageProps {}

const StandartRoomPage: FC<StandartRoomPageProps> = ({}) => {
  let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false);
  const thisPathname = usePathname();
  const router = useRouter();

  function closeModalAmenities() {
    setIsOpenModalAmenities(false);
  }

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const rooms = useTranslations("LuxRoom1");
  const roomImages: String[] = rooms.raw("asset_image");
  const defaults = useTranslations("roomDefault");

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        <div className="flex justify-between items-center">
          <Badge name={rooms("title")} />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {rooms("name")}
        </h2>

        <div className="flex items-center space-x-4">
          <span>
            <i className="las la-map-marker-alt"></i>
            <span className="ml-1">{defaults("location")}</span>
          </span>
        </div>

        <div className="w-full border-b border-neutral-100 dark:border-neutral-700" />
        <div className="flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center space-x-3 ">
            <i className=" las la-user text-2xl "></i>
            <span className="">
              {rooms("guests")}{" "}
              <span className="hidden sm:inline-block">
                {defaults("guests")}
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bed text-2xl"></i>
            <span className=" ">
              {rooms("beds")}{" "}
              <span className="hidden sm:inline-block">{defaults("beds")}</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-bath text-2xl"></i>
            <span className=" ">
              {rooms("baths")}{" "}
              <span className="hidden sm:inline-block">
                {defaults("baths")}
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className=" las la-door-open text-2xl"></i>
            <span className=" ">
              {rooms("bedrooms")}{" "}
              <span className="hidden sm:inline-block">
                {defaults("bedrooms")}
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="las la-home text-2xl"></i>
            <span className=" ">{rooms("square")} </span>
          </div>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">
          {defaults("stayinformation")}
        </h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <span>{rooms("information")}</span>
        </div>
      </div>
    );
  };

  const renderSection3 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">{defaults("amenities")}</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {defaults("amenitiesAbout")}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 ">
          {rooms
            .raw("amenities")
            .filter((_: any, i: number) => i < 12)
            .map((item: { name: String; icon: any }, index: number) => (
              <div key={index} className="flex items-center space-x-3">
                <i className={`text-3xl las ${item.icon}`}></i>
                <span className=" ">{item.name}</span>
              </div>
            ))}
        </div>
        {renderMotalAmenities()}
      </div>
    );
  };

  const renderMotalAmenities = () => {
    return (
      <Transition appear show={isOpenModalAmenities} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModalAmenities}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block py-8 h-screen w-full max-w-4xl">
                <div className="inline-flex pb-2 flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 dark:text-neutral-100 shadow-xl h-full">
                  <div className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="headlessui-dialog-title-70"
                    >
                      Amenities
                    </h3>
                    <span className="absolute left-3 top-3">
                      <ButtonClose onClick={closeModalAmenities} />
                    </span>
                  </div>
                  <div className="px-8 overflow-auto text-neutral-700 dark:text-neutral-300 divide-y divide-neutral-200">
                    {rooms
                      .raw("amenities")
                      .filter((_: any, i: number) => i < 1212)
                      .map(
                        (
                          item: {
                            name:
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | Promise<React.AwaitedReactNode>
                              | React.Key
                              | null
                              | undefined;
                            icon: any;
                          },
                          index: number
                        ) => (
                          <div
                            key={index}
                            className="flex items-center py-2.5 sm:py-4 lg:py-5 space-x-5 lg:space-x-8"
                          >
                            <i
                              className={`text-4xl text-neutral-6000 las ${item.icon}`}
                            ></i>
                            <span>{item.name}</span>
                          </div>
                        )
                      )}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };

  const renderSection7 = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">
            {defaults("secondLocation")}
          </h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {defaults("locationofTaij")}
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />

        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
          <div className="rounded-xl overflow-hidden z-0">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.143650636421!2d106.87701357624871!3d47.914257871219654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693a9733e2769%3A0xbfd1c3e04edc44e8!2sTaij%20business%20hotel!5e0!3m2!1sen!2smn!4v1719060475873!5m2!1sen!2smn"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="listingSectionSidebar__wrap shadow-xl">
        <div className="flex justify-between">
          <span className="text-3xl font-semibold">
            {rooms("price")}$
            <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
              /{rooms("night")}
            </span>
          </span>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>
              {rooms("price")}$ x 1 {rooms("night")}
            </span>
            <span>{rooms("price")}$</span>
          </div>
          <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
            <span>{rooms("service_charge")}</span>
            <span>0$</span>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex justify-between font-semibold">
            <span>{rooms("price_total")}</span>
            <span>{rooms("price")}$</span>
          </div>
        </div>
        <ButtonPrimary>{defaults("order")}</ButtonPrimary>
      </div>
    );
  };

  return (
    <div className="nc-StandartRoomPage">
      <header className="rounded-md sm:rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
          <div
            className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
            onClick={handleOpenModalImageGallery}
          >
            <Image
              fill
              className="object-cover rounded-md sm:rounded-xl"
              src={roomImages[0].toString()}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {roomImages
            .filter((_, i) => i >= 1 && i < 5)
            .map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                  index >= 3 ? "hidden sm:block" : ""
                }`}
              >
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                  <Image
                    fill
                    className="object-cover rounded-md sm:rounded-xl "
                    src={item.toString()}
                    alt=""
                    sizes="400px"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={handleOpenModalImageGallery}
                />
              </div>
            ))}
          <button
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10"
            onClick={handleOpenModalImageGallery}
          >
            <Squares2X2Icon className="w-5 h-5" />
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              {defaults("showPhotos")}
            </span>
          </button>
        </div>
      </header>
      <main className=" relative z-10 mt-11 flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderSection1()}
          {renderSection2()}
          {renderSection3()}
          {renderSection7()}
        </div>
        <div className="hidden lg:block flex-grow mt-14 lg:mt-0">
          <div className="sticky top-28">{renderSidebar()}</div>
        </div>
      </main>
    </div>
  );
};

export default StandartRoomPage;
