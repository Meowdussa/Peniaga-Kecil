import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
//import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { useState} from "react";
import axios from "axios";
import Additem from "./components/Additem";
import Button from "@mui/material/Button";
import "./Ownerprofile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "cloudinary-react";
import { useHistory } from "react-router-dom";


function Ownerprofile() {
  const [input, setInput] = useState({});
  const [item, setItem] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const [imageURL, setImageURL] = useState("https://fakeimg.pl/600x400");
  const [header, setHeader] = useState([]);

  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/logmasuk");
    console.log("LOGGED OUT");
  }
  

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "xnxqwn7c");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/sai-project/image/upload",
        formData
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.url);
        setImageURL(response.data.url);
      });
  };

  const addHeader = () => {
    input.header_image = imageURL;
    fetch("/headerapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accessToken: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => {
        setHeader(data);
      });
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    addHeader();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };


/*   useEffect(() => {
    getItem();
  }, [])


const getItem= () =>{
  axios
    .get(`http://localhost:5000/itemapi/${id}`, item)
    .then((response)=>{
      console.log(response.data)
      setItem(response.data);
    })
    .catch(function (error) {
      console.log("Error getting item");
    });    
}
 */


  
  return (
    <div className="ownerprofile">
      <Box>
        <Box id="header">
          <Paper id="header-content">
            <h4>Selamat datang ke halaman anda!</h4>
            <div className="highlight">
              <a>Mulakan dengan memuat naik foto kedai anda</a>
            </div>
            <Image id="header-img" cloudName="sai-project" publicId={imageURL}/>
            <input
              id="header-input"
              label="choose photo"
              type="file"
              name="headerimg"
              onChange={(e) => setImageSelected(e.target.files[0])}
            />
            <Button id="upload-btn" type="submit" onClick={uploadImage}>
            <SaveAltIcon />
              SIMPAN
            </Button>
            <div className="highlight">
              <a>Perkenalkan kedai anda</a>
            </div>
            <textarea
              id="shop-desc"
              type="text"
              name="description"
              placeholder="Selamat datang ke kedai kami! Kami menawarkan pelbagai jenis makanan..."
            ></textarea>
            <Button id="upload-btn" type="submit">
              SIMPAN
            </Button>
            <div className="highlight">
              <a>Senaraikan hidangan yang ditawarkan</a>
            </div>
            <div className="item-buttons">
              <table className="table table-hover">
                <thead>
                  <tr className="table-auto">
                    <th style={{ width: "30vw" }}>Nama hidangan</th>
                    <th style={{ width: "10vw" }}>Harga (RM)</th>
                    <th></th>
                  </tr>

                  <tr>
                    //map sini utk senarai barang 
                  </tr>
                </thead>
                <tbody>
                  {/* {events.map((e) => ( */}
                  <tr>
                    <td>{/*{e.date}*/}</td>
                    <td>{/*{e.title}*/}</td>
                    <td
                      className="del-btn"
                      style={{
                        width: "1%",
                      }} /*onClick={()=>deleteEvent(e.id)}*/
                    >
                      &times;
                    </td>
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
              <span>
                <button onClick={() => setItem(true)}>TAMBAH SENARAI</button>
              </span>
              <Additem trigger={item} setTrigger={setItem}></Additem>
            </div>
          </Paper>
        </Box>
      </Box>
      <div className="logout-btn">
        <Button id="logout-btn" variant="contained" onClick={logout}>
          LOG KELUAR
        </Button>
      </div>
    </div>
  );
}

export default Ownerprofile;
