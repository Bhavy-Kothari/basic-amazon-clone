import React from 'react';
import '../Home/Home.css'
import {useParams} from 'react-router-dom';
import data from '../helper/data';

const Home = () => {
    const {id} = useParams();
    let found = data.find(e => e.id == id)

    return(
        <>
            <div className="home">
              <span>
                  Name: {found.name}
              </span>
                <span>
                  Description :{found.description}
              </span>
                <span>
                  Price :{found.price}
              </span>
            </div>
        </>
    )
}

export default Home