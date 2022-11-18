import { news, article } from "./../data";
import Header from "./Header";
import Article from "./Article";
import New from "./News";
import Related from "./Related";

export default function App() {
  return (
    <>
      <Header />
      <main className="sm:grid sm:grid-cols-3">
        <Article
          articleImgDesktop={article.img.desktop}
          articleImgMobile={article.img.mobile}
          articleTitle={article.title}
          articleContent={article.content}
        />
        <New news={news} />
        <Related />
      </main>
    </>
  );
}
