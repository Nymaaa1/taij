"use client";

import "@/app/components/listing-image-gallery/index.css";
import Image from "next/image";
import { FC, Fragment } from "react";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";

export const getNewParam = ({
  paramName = "photoId",
  value,
}: {
  paramName?: string;
  value: string | number;
}) => {
  let params = new URLSearchParams(document.location.search);
  params.set(paramName, String(value));
  return params.toString();
};

interface Props {
  images: string[];
  onClose?: () => void;
  isShowModal: boolean;
}

const ListingImageGallery: FC<Props> = ({ images, onClose, isShowModal }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  const renderContent = () => {
    if (!Array.isArray(images)) {
      return <p>No images available</p>;
    }

    return (
      <div className=" ">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
          {images.map((url, index) => (
            <div
              key={index}
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight focus:outline-none"
            >
              <Image
                alt="listing gallery"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 focus:outline-none"
                style={{
                  transform: "translate3d(0, 0, 0)",
                }}
                src={url}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 350px"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Transition appear show={isShowModal} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="sticky z-10 top-0 p-4 xl:px-10 flex items-center justify-between bg-white">
              <button
                className="focus:outline-none focus:ring-0 w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100"
                onClick={handleClose}
              >
                <ArrowSmallLeftIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="flex min-h-full items-center justify-center sm:p-4 pt-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-5"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-5"
              >
                <Dialog.Panel className="w-full max-w-screen-lg mx-auto transform p-4 pt-0 text-left transition-all">
                  {renderContent()}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ListingImageGallery;
