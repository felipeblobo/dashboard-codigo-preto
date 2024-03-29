import Product from "../../../assets/images/product_dummy.svg";

function ContentRow2(props) {
    
  return (
    // <!-- Amount of Products in DB -->
    <>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Last product in Data Base
            </h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "25rem" }}
                src={Product}
                alt=""
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              consequatur explicabo officia inventore libero veritatis iure
              voluptate reiciendis a magnam, vitae, aperiam voluptatum non
              corporis quae dolorem culpa exercitationem ratione?
            </p>
            <a target="_blank" rel="nofollow" href="/">
              View product detail
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Categories in DB --> */}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Categories in Data Base
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentRow2;
