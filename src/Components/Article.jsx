export default function Article({
  articleImgDesktop,
  articleImgMobile,
  articleTitle,
  articleContent,
}) {
  return (
    <div className="col-start-1 col-end-3 p-5 sm:px-10 sm:py-5 grid gap-5">
      <picture>
        <source media="(min-width:640px)" srcSet={articleImgDesktop} />
        <img src={articleImgMobile} alt="article image" />
      </picture>
      <article className="flex flex-col gap-5 sm:grid sm:grid-cols-2">
        <h1 className="text-4xl font-bold place-self-center sm:text-5xl">
          {articleTitle}
        </h1>
        <div className="flex flex-col gap-5">
          <p className="text-lightblue">{articleContent}</p>
          <button className="px-10 py-3 bg-red uppercase text-white font-semibold text-sm tracking-widest hover:bg-darkblue w-fit">
            Read More
          </button>
        </div>
      </article>
    </div>
  );
}
