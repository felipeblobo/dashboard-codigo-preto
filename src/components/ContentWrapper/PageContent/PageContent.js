import ContentRow1 from './ContentRow1';
import ContentRow2 from './ContentRow2';

function PageContent() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard - Código Preto</h1>
      </div>
      <div class="row"><ContentRow1 /></div>
      <div class="row"><ContentRow2 /></div>
    </div>
  );
}

export default PageContent;
