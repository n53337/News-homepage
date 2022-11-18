export default function News({ news }) {
  return (
    <aside className="m-5 sm:mx-10 sm:my-5 p-4 bg-darkblue ">
      <h1 className="text-orange text-2xl sm:text-4xl font-bold ">New</h1>
      {news.map(({ title, body }) => {
        return (
          <div
            className="py-5 flex flex-col gap-2 border-b border-blue"
            key={title}
          >
            <h3 className="text-white font-bold text-base sm:text-xl hover:text-orange cursor-pointer">
              {title}
            </h3>
            <p className="text-blue text-sm sm:text-base">{body}</p>
          </div>
        );
      })}
    </aside>
  );
}
