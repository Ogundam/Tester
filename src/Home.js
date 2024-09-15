import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Post from './Post'
import axios from 'axios'







function Home() {

  function test(){
    // alert('hello' + name)
    // alert(Math.round(Math.random() * 1000))


    // let a = prompt("Enter your age")
    
    // if( a % 2 == 0){
    //   alert("Your age is even")
    // }else{
    //   alert("Your age is odd")
    // }



    // let cardno = prompt ("Please enter your card number")
    // let cvv = prompt ("Please enter your cvv number")
    // let pin = prompt ("Please enter your pin number")
    let exp = prompt ("enter expiry date i.e. 2025/08")
    let expandexp = exp.split("/")
    expandexp.push("01")

   let convertbacktostring = expandexp.join("/") 

   let convertToDate = new Date(convertbacktostring)

   let today = new Date()

   alert(convertToDate.getFullYear() >= today.getFullYear())



    // if(cardno.length === 16 && cvv.length === 3 && pin.length ===4){
    //   alert("Your card information is valid")
    // }  
    // else{
    //   alert("invalid card number")
    // }
  }
    let [a, setA] = useState(1)

    let [articles, setArticles] = useState([])

    console.log(articles[0]?.image_url);


    useEffect(() => {

    axios.get("https://newsdata.io/api/1/latest?apikey=pub_485753728640005c540682e14711c5dc5f62b")
    .then((a) => setArticles(a.data.results))
    .catch((err) => console.log(err))



    // document.getElementById("test").style.backgroundColor = "red"
  }, [])

  // function changeA(){
  //   setA(a + 1)
  // }


  return (
    <div>
      <h1 id='test'>{a <= 0 ? 0 : a}</h1>
      <button onClick={() => setA(a-1)}>decrease variable</button>
      <button onClick={() => setA(a+1)}>change variable</button>

      
      <button onClick={() => test()}>Click</button>
      <Navbar/>
      {/* <Content/> */}
      <div className="container">
        {/* banner */}

        <div className="banner">

          <img className='img-fluid' src={require("./Images/Banner.png")} alt="banner" />

          <div className="card bg-white">
            <button className='btn btn-primary btn-sm'>Featured</button>
            <Link to="" className='my-2'>The Impact of Technology on the Workplace: How Technology is Changing
            </Link>

            <div>
              <img src={require("./Images/Image.png")} alt="" />
              <span>By John Doe</span>

              <span className='ms-5'>2022-02-02</span>
            
            </div>
            {/* latest blog */}

             

          </div>



        </div>

        <img className='d-block mx-auto my-5' src={require("./Images/o-ads-space.png")} alt="" />


        {/* latest post */}
        <div>
          <h5 className='my-5'>Latest Posts</h5>
          <div className="row">

          {
            articles?.map((article) => (
              <div className='col-md-4'>
                <Post text={article?.title} category="sport" img={article?.image_url}/>
              </div>
            ))
          }
            
          </div>
          
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Home