import axios from "axios";
import React, { useEffect, useState } from "react";
//import AdCard from "./DisplayAds/AdCard";
//import Movie from "./DisplayAds/Addetails";
import {Link, NavLink} from 'react-router-dom';
import './index.css';



const Search = ({match}) => {

  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get(`/bookads/searchAds/${match.params.Title}`).then(result=>{
      console.log(result.data);
      setData(result.data.book);
  }).catch(err=>{alert(err)})
  },[data]);


  return(
  data &&
  
    data.map((item)=>{
        return (
         <div className="col-md-3 mb-5"><br></br>
         
        <div className="card card-body bg-dark text-center h-100">
           
            <img id='img' className="w-100 mb-2" src={`..\\${item.BookImages}`} alt="Movie Cover" />
            <h5 className="text-light card-title">
              {item.Title}
            </h5>
            <h5 className="text-light card-title">
              Rs {item.Price}
            </h5>
            
            <NavLink className="btn btn-primary" to={{ pathname: "/addetails", title: {title : item.Title}}}>
                        Ad Details
                          <i className="fas fa-chevron-right" />
              </NavLink> 
            </div>
            </div>
  )
        })
  )
};
export default Search;
