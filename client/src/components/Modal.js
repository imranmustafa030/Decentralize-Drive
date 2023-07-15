// import React from "react";
// import { useEffect } from "react";

// const Modal = ({setModalOpen, contract}) => {
//   const sharing =async ()=>{
//     const address = document.querySelector("#address").value;
//     await contract.allow(address);

//   };
//   const removeShare =async ()=>{
//     const address = document.querySelector("#address").value;
//     // console.log(`${address}`);
//     await contract.disallow(address);
//   };
//   useEffect(()=>{
//     const accessList = async()=>{
//       const addressList = await contract.shareAccess();
//       console.log(addressList);
//       let select = document.querySelector("#selectNumber");
//       const option = addressList;

//       for(let i=0;i<option.length;i++){
//         let opt = option[i];
//         // console.log(opt, "Option");
//         let e1 = document.createElement("option");
//         e1.textContent = opt;
//         e1.value = opt;
//         // console.log(e1.value, "value");
//         e1.value = e1.value.substring(0,e1.value.length-5);
//         e1.textContent = e1.value;
//         console.log(e1.value);
//         select.appendChild(e1);
//         if(i>=option.length-1){
//           break;
//         }
//       }

//     }
//     contract && accessList();
//   },[contract]);
//   return (
//     <div>
//       <div>Share with</div>
//       <div>
//         <input type="text" placeholder="Enter Address" id="address"/>
//       </div>
//       <form>
//         <select id="selectNumber">
//           <option>People with address</option>
//         </select>
//       </form>
//       <div>
//         <button onClick={()=>{setModalOpen(false)}}>Cancel</button>
//         <button onClick={()=>sharing()}>Share</button>
//         {/* <button onClick={()=>removeShare()}>Remove</button> */}
//       </div>
//     </div>
//   );
// };

// export default Modal;


// -----------------------------------------




import { useEffect } from "react";
// import "./Modal.css";
const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };
  const removeSharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.disallow(address);
    setModalOpen(false);
  };
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;
      console.log(options.length)

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let e1 = document.createElement("option");
        // e1.textContent = opt;
        e1.value = opt;
        select.appendChild(e1);
        console.log(e1)
      }
    };
    contract && accessList();
  }, []);
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">Share with</div>
          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>
          <form id="myForm">
            <select id="selectNumber">
              <option className="address">People With Access</option>
            </select>
          </form>
          <div className="footer">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={() => sharing()}>Share</button>
            {/* <button onClick={() => removeSharing()}>Remove</button> */}

          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
