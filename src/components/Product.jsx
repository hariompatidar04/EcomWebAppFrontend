import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FaExclamationTriangle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../action";
import Filter from "./Filter";



const Product=()=>{

    
    const { isLoading,errorMessage }=useSelector(
        (state)=>state.errors        
    );

    const {products}=useSelector((state)=>state.products);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);

//     // product Array
//     const products=
//     [
//         {
//       productId: 652,
//       productName: "Iphone Xs max",
//       image: "https://s3-alpha.figma.com/hub/file/5481873798/377f811b-1f26-415f-8517-7044d681b6f9-cover.png",
//       description: "Experience the latest in mobile technology with advanced cameras, powerful processing, and an all-day battery.",
//       quantity: 10,
//       price: 1450.0,
//       discount: 10.0,
//       specialPrice: 1305.0,
//     },
//     {
//       productId: 654,
//       productName: "MacBook Air M2s",
//       image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/7ec22b121392703.60c4d8fcc9f58.jpg",
//       description: "Ultra-thin laptop with Apple's M2 chip, providing fast performance in a lightweight, portable design.",
//       quantity: 20,
//       price: 2550.0,
//       discount: 20.0,
//       specialPrice: 2040.0,
//     },
//     {
//       productId: 654,
//       productName: "MacBook Air M2s",
//       image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/d002db153595851.6332d0ec0e205.jpg",
//       description: "Ultra-thin laptop with Apple's M2 chip, providing fast performance in a lightweight, portable design.",
//       quantity: 0,
//       price: 2550.0,
//       discount: 20.0,
//       specialPrice: 2040.0,
//     },
//     {
//       productId: 654,
//       productName: "MacBook Air M2s",
//       image: "https://tse3.mm.bing.net/th/id/OIP.F8kPzfgGac5C-aG-RHLbAAHaEQ?w=870&h=500&rs=1&pid=ImgDetMain&o=7&rm=3",
//       description: "Ultra-thin laptop with Apple's M2 chip, providing fast performance in a lightweight, portable design.",
//       quantity: 100,
//       price: 2550.0,
//       discount: 20.0,
//       specialPrice: 0,
//     },{
//       productId: 654,
//       productName: "MacBook Air M2s",
//       image: "https://tse1.mm.bing.net/th/id/OIP.8TuxO5qqEwfd6fFVQ2qJqAHaDt?w=1920&h=960&rs=1&pid=ImgDetMain&o=7&rm=3",
//       description: "Ultra-thin laptop with Apple's M2 chip, providing fast performance in a lightweight, portable design.",
//       quantity: 0,
//       price: 2550.0,
//       discount: 20.0,
//       specialPrice: 2040.0,
//     }
// ];


// Simulate loading state


    return (
        
        <div className="lg:px-14 sm:px-8 2xl:w-[90%] 2xl:mx-auto my-14">
            <Filter/>
            {isLoading ?
            (<p className="text-center max-h-full">it is loading...</p>)
            : errorMessage ?
            (<div className="flex justify-center items-center h-[200px]">
                <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                <span className="text-slate-800 text-lg font-medium" >{errorMessage}</span>
            </div>)
            :(
              // product carts grid
               <>
               <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 py-10">
                {products?.map((item, i) => (
                    <ProductCard key={i} {...item} />
                ))}
                </div>
               </>

            )
    }           
        </div>
    );
}
export default Product;