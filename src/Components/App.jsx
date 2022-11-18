import { news, article, related } from "./../data";
import Header from "./Header";
import Article from "./Article";
import New from "./News";
import Related from "./Related";

export default function App() {
  return (
    <>
      <Header />
      <main className="sm:grid sm:grid-cols-3">
        <Article article={article} />
        <New news={news} />
        <Related related={related} />
      </main>
    </>
  );
}
