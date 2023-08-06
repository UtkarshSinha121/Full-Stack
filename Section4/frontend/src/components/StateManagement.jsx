import { useState } from "react";


const StateManagement = () => {
    const [Likes, setLikes] = useState(0);

    const [ImgURL, setImgURL] = useState('');
    
    
    let count=10;
    const selectFile = (e) =>{
      const file =  e.target.files[0];
      console.log(file);

      // reading a file
      const reader = new FileReader();

      reader.onload = (data) => {
        console.log(data.target.result);
        setImgURL(data.target.result)
      };
      reader.readAsDataURL(file);

    }
  return (
    <div className="container">
        <h1>Count : {count}</h1>
        
        <button onClick={()=> { count++; console.log(count);}}>Add count</button>

        <h1>Likes : {Likes}</h1>
        <button className="btn btn-primary" onClick={()=>{ setLikes(Likes+1)}}>Likes</button>
        <button className="btn btn-danger" onClick={()=>{ setLikes(Likes-1)}}>Dislikes</button>

        <input type="file"  onChange={selectFile}/>

        <img className="d-block m-auto w-50" src={ImgURL} alt="" />


    </div>
  )
}

export default StateManagement