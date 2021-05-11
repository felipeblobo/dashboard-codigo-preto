function Card(props) {
  return (
    <>
      {props.categories.map((category) => {
          return (
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">{category.language}</div>
              </div>
            </div>
           );
        })}


    </>
  
)};

export default Card
