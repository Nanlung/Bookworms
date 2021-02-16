import React, { useState, useEffect } from "react";
import AdCard from "./DisplayAds/AdCard";
import Movie from "./DisplayAds/Addetails";
import axios from "axios";
import AdList from "./AdList";

const Store = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    var bookIds = []
    axios.get("/bookads/allads").then((res) => {
      axios.get("/wishList/view")
        .then(result=>{
             if(result.data.Wishlist != undefined){
              bookIds = result.data.Wishlist[0].wishlistItem.map(b => {
                return b.bookAds
              });
             }
             
             //console.log(bookIds);
             var allBooks = res.data.book.map((b) => (
              <AdList
                id = {b._id}
                author={b.Author}
                title={b.Title}
                price={b.Price}
                bookImage={b.BookImages}
                category={b.Condition}
                isWished = {bookIds.includes(b._id) ? "yes" : "no"}
              />
            ));
            setBooks(allBooks);
            var length = res.data.book.filter(b => bookIds.includes(b._id)).length;
            sessionStorage.setItem("wishlistcount", length);
            });
      
      
      // console.log(ads);
    });
  }, []);

  return (
    <>
     <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text">
                        <a href="#"><i class="fa fa-home"></i> Home</a>
                        <span>Store</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section class="product-shop spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 order-1 order-lg-2">
            <div class="product-list">
              <div class="row">{books}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Store;
