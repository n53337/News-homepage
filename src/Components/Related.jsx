import gaming from "./../../assets/images/image-retro-pcs.jpg";
export default function Related() {
  return (
    <div className="col-span-full p-5 sm:px-10 sm:py-5 flex flex-col gap-10 sm:flex-row">
      <div className="flex gap-4 items-center">
        <img src={gaming} alt="gaming" className="w-1/3" />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-blue sm:text-4xl">01</h1>
          <h3 className="text-base font-semibold text-darkblue sm:text-xl">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-sm font-light text-lightblue sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            placeat.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img src={gaming} alt="gaming" className="w-1/3" />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-blue sm:text-4xl">01</h1>
          <h3 className="text-base font-semibold text-darkblue sm:text-xl">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-sm font-light text-lightblue sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            placeat.
          </p>
        </div>
      </div>
    </div>
  );
}
