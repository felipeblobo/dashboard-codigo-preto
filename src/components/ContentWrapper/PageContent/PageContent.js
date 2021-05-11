import ContentRow1 from './ContentRow';
import ContentRow2 from './ContentRow2';

function PageContent() {


	const products = {
    quantity: 135,
    amount: "$ 546.456",
  };
  
  const usersObject = {
    "quantity": 38
  }


  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard - Código Preto</h1>
      </div>
      <div className="row"><ContentRow1  products={products} users={usersObject}/></div>
      <div className="row"><ContentRow2/></div>
    </div>
  );
}

export default PageContent;
