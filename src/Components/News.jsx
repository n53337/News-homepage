export default function News() {
  return (
    <aside className="m-5 sm:mx-10 sm:my-5 p-4 bg-darkblue ">
      <h1 className="text-orange text-2xl sm:text-4xl font-bold ">New</h1>
      <div className="py-5 flex flex-col gap-2 border-b border-blue">
        <h3 className="text-white font-bold text-base sm:text-xl hover:text-orange cursor-pointer">
          Lorem, ipsum dolor.
        </h3>
        <p className="text-blue text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, modi?
        </p>
      </div>
    </aside>
  );
}
