import React from "react";

export const getStaticProps =() => {
  return {
    props: {footerstatus: true}
  }
}
const Lab = (props) => {
  return (
    <div>
      <h2>This is lab.</h2>
    </div>
  );
};

export default Lab;
