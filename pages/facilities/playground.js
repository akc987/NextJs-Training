import React from "react";

export const getStaticProps =() => {
  return {
    props: {footerstatus: true}
  }
} 
const Playground = (props) => {
  return (
    <div>
      <h2>This is playground.</h2>
    </div>
  );
};

export default Playground;
