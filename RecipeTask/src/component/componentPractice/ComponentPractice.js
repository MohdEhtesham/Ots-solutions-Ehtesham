import React from "react";

//functional Component props and state

function ComponentPractice(props) {
  let data = "Manisha";
  function onSubmit() {
    data = "Hrishi";
    console.log(data);
  }
  return (
    <div className="main">
      <p>
        Hello {props.firstName} {props.lastName}.
      </p>
      <div className="data">
        <p>{data}</p>
        <button id="btn" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default ComponentPractice;

//classComponent

// class ComponentPractice extends React.Component {
//   render() {
//     const variable = this.props;
//     const { firstName, lastName } = variable;

//     return (
//       <p>
//         Hello {firstName} {lastName}.
//       </p>
//     );
//   }
// }
// export default ComponentPractice;
