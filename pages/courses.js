import React from "react";
import Image from "next/image"



export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json(); // to convert stringified json to parsed json.
  return {
    props: { productData: data },
  };
};
const Courses = (props) => {
  const { productData } = props;
  return (
    <div className="bg-info mb-4 pb-4">
      <h2>This is lab.</h2>
      <div class="container">
      <div class="row">
      {productData.map((item) => (
        <div className="col-3">
        <div class="card-deck mb-3">
        <div class="card">
          <div class="card-body">
            <Image
            src={item.image}
            height={100}
            width={50}           
            />
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text"> Price:$ {item.price}</p>

          </div>         
      </div>
      </div>
      </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Courses;
