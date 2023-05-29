import React, { useContext, useEffect, useState } from "react";
import "../component/Card.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MainContext } from "../Context/Context";
const Card = () => {
  const [data, setData] = useState([]);
  const [seacrValue, setSearchValue] = useState([]);
  const [dummys, setDummy] = useState(false);
  const { wishlistItem, setWishlistItem } = useContext(MainContext);
  useEffect(() => {
    axios.get("http://localhost:8085/").then((res) => {
      setData(res.data);
    });
  }, [seacrValue === "", dummys ? data : ""]);
  return (
    <div>
      <Helmet>
        <title>Card</title>
      </Helmet>

      <input
        id="input"
        onChange={(e) => {
          setSearchValue(e.target.value);
          setData(data.filter((item) => item.name.includes(seacrValue)));
        }}
        type="text"
      />
      <button
        id="sort"
        onClick={() => {
          setData([...data.sort((a, b) => a.price - b.price)]);
          toast.success("sort olundu");
        }}
      >
        sort by price
      </button>
      <div className="cards">
        {data.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="card__img">
                <img
                  src="https://preview.colorlib.com/theme/manup/img/team-member/member-2.jpg"
                  alt=""
                />
              </div>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <p>{item.desc}</p>
              <div className="button">
                <div>
                  <button
                    onClick={() => {
                      axios
                        .delete(`http://localhost:8085/${item._id}`)
                        .then((res) => {
                          setDummy(true);
                          toast.success("product silindi");
                          console.log("delete");
                        });
                    }}
                    id="dlt"
                  >
                    delete
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setWishlistItem([...wishlistItem, item]);
                      toast.success("liked");
                    }}
                    id="icn"
                  >
                    <FavoriteBorderIcon />
                  </button>
                  <Link to={`${item._id}`}>detail</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Toaster />
    </div>
  );
};

export default Card;
