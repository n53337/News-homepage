import Header from "./Header";
import Article from "./Article";
import New from "./News";
import Related from "./Related";
import webDesktop from "./../../assets/images/image-web-3-desktop.jpg";
import webMobile from "./../../assets/images/image-web-3-mobile.jpg";
export default function App() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-3">
        <Article articleImgDesktop={webDesktop} articleImgMobile={webMobile} />
        <New />
        <Related />
      </main>
    </>
  );
}
