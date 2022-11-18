export default function Related({ related }) {
  return (
    <div className="col-span-full p-5 sm:px-10 sm:py-5 flex flex-col gap-10 sm:flex-row">
      {related.map((data) => {
        return (
          <div className="flex gap-4 items-center" key={data.head}>
            <img src={data.img} alt="gaming" className="w-1/3" />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-blue sm:text-4xl">
                {data.head}
              </h1>
              <h3 className="text-base font-semibold text-darkblue sm:text-xl">
                {data.title}
              </h3>
              <p className="text-sm font-light text-lightblue sm:text-base">
                {data.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
