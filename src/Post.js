import React from 'react'
import { Link } from 'react-router-dom'


function Post({text, category, img}) {
  return (
    <div className='card'>
        <img src={img} alt="" className='card-img-top'/>
        <div className="card-body">

            <button className='btn btn-primary btn-sm'>{category}</button>
            <Link to="" className='my-2'>
            {text}
            </Link>

            <div>
              <img src={require("./Images/Image.png")} alt="" />
              <span>By John Doe</span>

              <span className='ms-5'>2022-02-02</span>
            </div>


        </div>
    </div>
  )
}

export default Post