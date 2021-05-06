import PageContent from "./PageContent/PageContent";
import WrapperTopBar from "./WrapperTopBar/WrapperTopBar";
import Footer from "./Footer/Footer";


function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <WrapperTopBar />
      <PageContent />
      <Footer />
    </div>
  );
}

export default ContentWrapper;
