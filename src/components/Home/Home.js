import React from 'react';
import './Home.css'
import {useNavigate} from 'react-router-dom';
import data from '../helper/data';

const Home = () => {
    const navigate = useNavigate()
    return(
        <>
            <div className="home">
                {
                  data.map((item, index) => (
                      <button onClick={() => navigate(`/product/${item.id}`)}
                              key={index}
                              className="product"
                      >
                          <div>
                              Name :{item.name}
                          </div>
                          <div>
                              Price :{item.price}
                          </div>
                      </button>
                  ))
                }
            </div>
        </>
    )
}

export default Home