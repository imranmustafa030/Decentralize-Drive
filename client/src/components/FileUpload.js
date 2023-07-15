import axios from "axios";
import { useState } from 'react';

const FileUpload = ({contract, account, provider}) => {

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(file){
      try{
        const formData = new FormData();
        formData.append("file",file);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
              'pinata_api_key': `d17b7b57008474192437`,
              'pinata_secret_api_key': `e26782983b4a98ff3e5abc7eca2404ceb43fdf2a804f1b2fb7b9e4c7e5736d35`,
              "Content-Type": "multipart/form-data"
          },
      });
      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      // const signer = contract.connect(provider.getSigner());
      contract.add(account, ImgHash);
      // alert("Successfully Image Uploaded");
      setFileName("No Image Selected");
      setFile(null);
      }catch(e){
        alert("Unable to upload image to Pinata");
      }
    }

  }
  const retrieveFile =(e)=>{
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend=()=>{
      setFile(e.target.files[0]);
    }
    setFileName(e.target.files[0].name);
    e.preventDefault();

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          chose Image
        </label>
        <input disabled={!account} type='file' name='data' onChange={retrieveFile}></input>
        <span>Image: {fileName}</span>
        <button type='submit' disabled={!file}>Upload Image</button>
      </form>
    </div>
  )
}

export default FileUpload;