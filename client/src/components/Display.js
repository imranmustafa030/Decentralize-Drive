import { useState } from "react";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");

  const getdata =async ()=>{
    let dataArray;
    const Otheraddress = document.querySelector("#address").value;
    if(Otheraddress){
      dataArray = await contract.display(Otheraddress);
    }else{
      dataArray = await contract.display(account);
    }
    const isEmpty = Object.keys(dataArray).length===0;
    if(!isEmpty){
      const str = dataArray.toString();
      const str_array = str.split(",");
      

      const images =str_array.map((item, i)=>{
        return(
           <a href={item} key={i} target="_blank">
            <img key={i} src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`} alt="image"></img>
          </a> 
        )
      })
      setData(images);
    }else{
      alert("No image to display")
    }
  }

  return (
    <div>
      <div>{data}</div>
      <input type="text" id="address" placeholder="Enter Address"></input>
      <button onClick={getdata}>Get Data</button>
    </div>
  );
};

export default Display;
