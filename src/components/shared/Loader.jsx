import { ColorRing } from "react-loader-spinner";

export const Loader = ({ text }) => {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
      <div className="flex flex-col gap-1 items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        <p className="text-slate-900">{text ? text : "Please Wait..."}</p>
      </div>
    </div>
  );
};
