//import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

// export default class All extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { cvFileNames: [] };
//   }

//   async componentDidMount() {
//     try {
//       await fetch("http://localhost:8080/cvs", {
//         method: "GET",
//         mode: "cors",
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//         },
//       })
//         .then((response) => response.json())
//         .then((response) =>
//           this.setState({ cvFileNames: response.content }, () => {
//             console.log("state:", this.state);
//           })
//         );
//     } catch (error) {
//       console.log("fetch error" + error);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <nav
//           style={{
//             borderBottom: "solid 1px",
//             paddingBottom: "1rem",
//           }}
//         >
//           <Link to="/Generate">Generate</Link> | <Link to="/">Home</Link>
//         </nav>
//         <div>
//           <p> started CV Files Generation: </p>
//         </div>
//         <div className="row" style={{ width: "400px !important" }}>
//           {this.state.cvFileNames && (
//             <ul>
//               {this.state.cvFileNames.map((item) => (
//                 <li key={item.id}>
//                   {" "}
//                   <Link
//                     to={{
//                       pathname: `/cv-forms/cvId=${item.id}`,
//                       query: { item },
//                     }}
//                     to="cvId=${item.id}"
//                   >
//                     <button>{item.cvFileName}</button>
//                   </Link>
//                   ;
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

function All() {
  let navigate = useNavigate();
  const [state, setState] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Access-Control-Allow-Origin", "*")
    fetch("http://localhost:8080/cvs", {
      method: "GET",
      headers: myHeaders
    })
      .then((response) => response.json())
      .then((response) => setState(response.content));
  }, [state]);
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/generate">Generate</Link> | <Link to="/">Home</Link>
        <button
          onClick={() => {
            localStorage.removeItem("realtoken");
          }}
        >
          <Link to="/login">logout</Link>
        </button>
      </nav>
      <div>
        <p> started CV Files Generation: </p>
      </div>
      <div className="row" style={{ width: "400px !important" }}>
        {state && (
          <ul>
            {state.map((d) => (
              <div key={d.id}>
                <button
                  onClick={() => {
                    navigate(`/cvs/${d.id}`);
                  }}
                >
                  {d.cvFileName}
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default All;
