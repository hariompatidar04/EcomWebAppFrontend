import { useState } from "react";

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
    const [selectViewProduct,setSelectViewProduct]=useState("");
    const isAvailable=quantity && Number(quantity)>0;
    return (
        <div className="product-card border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300 ">
            <div onClick={()=>{}} className="w-full overflow-hidden aspect-[3/2]">
                <img src={image} alt={productName} className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"/>
            </div>  
              
            <div className="p-4">
                <h2 onClick={()=>{}} className="text-lh font-semibold mb-2 cursor-pointer">{productName}</h2>
                <div className="min-h-20 max-h-20">
                    <p className="text-gray-600 text-sm">{description} </p>
                </div>

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
                </div>

                <button className={`bg-blue-500 ${isAvailable} ? "opacity-100  hover:bg-blue-600 : opacity-70"
                    text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center`}>
                    {isAvailable ?
                        "Add to Cart"
                        :"Stock Out"
                    }
                </button>
                
            </div>  

        </div>
    );
}
export default ProductCard;

