import { MdDone,MdClose } from "react-icons/md";
import {
  Button,
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import Status from "./Status";

export default function ProductViewModel({ open, setOpen, product, isAvailable }) {
  if (!product) return null;

  const {
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
  } = product;

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      as="div"
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500 opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">

        <div className="flex min-h-full items-center justify-center p-4">
           
          <DialogPanel
            className="relative transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all md:max-w-[629px] md:min-w-[620px] w-full"
          >
         
            


            {/* Product Image */}
            {image && (
              <div className="flex justify-center aspect-3/2">
                
                <CloseButton
                  as="button"
                  className="absolute right-3 top-3 z-10 text-gray-400 hover:text-gray-700 transition-colors duration-200 bg-white/80 hover:bg-white p-1.5 rounded-full shadow"
                >
                  <MdClose size={22} />
                </CloseButton>
                
                <img
                  src={image}
                  alt={productName}
                  className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            )}

            {/* Product Details */}
            <div className="px-6 pt-10 pb-6">
              <DialogTitle
                as="h3"
                className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 mb-4"
              >
                {productName}
              </DialogTitle>

              {/* Price and Availability */}
              <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                
                  {specialPrice ? (
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-400 line-through text-sm">
                        ${Number(price).toFixed(2)}
                      </span>
                      <span className="text-slate-700 text-xl font-bold">
                        ${Number(specialPrice).toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-700 text-xl font-bold">
                      ${Number(price).toFixed(2)}
                    </span>
                  )}
                  {
                    isAvailable ?
                    <Status
                    text="In Stock"
                    icon={MdDone}
                    bg="bg-teal-200"
                    color="text-teal-900"
                    />
                    :
                    (
                    <Status
                    text="Out of Stock"
                    icon={MdClose}
                    bg="bg-rose-200"
                    color="text-rose-900"
                    />                    
                    )
                  }
                
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>

              {/* Close Button */}
             
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
