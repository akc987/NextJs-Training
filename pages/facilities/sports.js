import React from "react"

export const getStaticProps =() => {
  return {
    props: {footerstatus: true}
  }
}

const Sports = (props) => {
  return (
    <div>
      <h2>This is Sports.</h2>
    </div>
  );
};

export default Sports;
