import PageContent from "./PageContent/PageContent";
import WrapperTopBar from "./WrapperTopBar";


function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <WrapperTopBar />
      <PageContent />
    </div>
  );
}

export default ContentWrapper;
