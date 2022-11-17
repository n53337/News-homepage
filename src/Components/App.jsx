import Header from "./Header";
import Article from "./Article";
import webDesktop from "./../../assets/images/image-web-3-desktop.jpg";
import webMobile from "./../../assets/images/image-web-3-mobile.jpg";
export default function App() {
  return (
    <>
      <Header />
      <Article articleImgDesktop={webDesktop} articleImgMobile={webMobile} />
    </>
  );
}
