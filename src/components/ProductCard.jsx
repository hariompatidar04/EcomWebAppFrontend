import {useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; 
import ProductViewModel from "./ProductViewModel";

const ProductCard=({
    productId,
      productName,
      image,
      description,
      quantity,
      price,
      discount,
      specialPrice,
})=>{
    const [openProductViewModal,setOpenProductViewModal]=useState(false);
    const btnLoader=false;
    const [selectViewProduct,setSelectViewProduct]=useState(false);
    const isAvailable=quantity && Number(quantity)>0;

    const handleProductView=(product)=>{
        // set selected product for view model
        setSelectViewProduct(product);
        // open product view modal
        setOpenProductViewModal(true);
    }; 


    return (
        <div className="product-card border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            {/* product image */}
            <div onClick={()=>{
                handleProductView({ id:productId,
                                    productName,
                                    image,
                                    description,
                                    quantity,
                                    price,
                                    discount,
                                    specialPrice
                                })
                }} 
                className="w-full overflow-hidden aspect-3/2">
                <img src={image} alt={productName} className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"/>
            </div>

            {/* Product Name */}
            <div className="p-4">
                <h2 onClick={()=>{
                    handleProductView({ id:productId,
                                    productName,
                                    image,
                                    description,
                                    quantity,
                                    price,
                                    discount,
                                    specialPrice
                                })
                }}
                className="text-lh font-semibold mb-2 cursor-pointer">{productName}</h2>
                <div className="min-h-20 max-h-20">
                    <p className="text-gray-600 text-sm">{description} </p>
                </div>

                {/* product Price */}
                <div className="flex  items-center justify-between ">
                    {specialPrice ? (
                    <div className="flex flex-col">
                    <span className="text-gray-400 line-through text-sm">
                        ${Number(price).toFixed(2)}
                    </span>

                    <span className="text-slate-700 text-xl font-bold">
                        ${Number(specialPrice).toFixed(2)}
                    </span>
                </div>
                ) :(
                    <span className="text-slate-700 text-xl font-bold">
                        ${Number(price).toFixed(2)}
                    </span>                
                )
            }

            {/* product Add to Cart/Sold Out button */}
                <button  
                disabled={!isAvailable ||btnLoader}
                onClick={()=>{}} className={`bg-blue-500 text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center 
            ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}`}>
                <FaShoppingCart className="mr-2"/>
                    {isAvailable ?
                        "Add to Cart"
                        :"Stock Out"
                    }
                </button>

            </div>

            </div>
            <ProductViewModel
            open={openProductViewModal}
            setOpen={setOpenProductViewModal}
            product={selectViewProduct}
            isAvailable={isAvailable}
            />

        </div>
    );
}
export default ProductCard;

