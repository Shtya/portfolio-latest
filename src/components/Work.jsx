import React, { useState } from 'react';
import Works from '../Data';


const Work =  () => {
  const [data ,setdata] = useState(Works)
  const [video ,setvideo] = useState(false)
  const [name , setname] = useState("all")
  const [namevideo , setnamevideo] = useState()
  const getData = (ele)=>{
    setname(ele);
    const res = Works.filter(e => e.type.includes(ele ))
    setdata(res)
    
  }


  
  const handleVideo = (e)=>{
    setvideo(!video)
    setnamevideo(e.video)
    console.log(e);
    
  }

  return (
    <section className="Portfolio mb-8" id="work">
    

    <ul className='container'>
      <li onClick={_=> getData("all")} className= {name === "all" && "add"} >  <i class="fa-solid fa-bars"></i> <span className='all'>  All </span> </li>
      <li onClick={_=> getData("fullstack")} className= {name === "fullstack" && "add"}>  <img src='./nodejs-logo-FBE122E377-seeklogo.com.png' /> <span className='fullstack'>  Full Stack  </span> </li>
      <li onClick={_=> getData("react")}className= {name === "react" && "add"} >  <img src='./react-logo-7B3CE81517-seeklogo.com.png' /> <span className='react'> React </span> </li>
      <li onClick={_=> getData("next")} className= {name === "next" && "add"}>  <img src='./next-js-icon-logo-EE302D5DBD-seeklogo.com.png' /> <span className='next'> Next </span> </li>
    </ul>

    <div className="container mx-auto gap-y-4 coverapp">
      {
        data.map((e , idx) => {
          return (
            <div className="cover " key={idx}>
                <img src={e.img} alt="" />
              <div className="box">
                  <div className="to">
                  <a onClick={_=>handleVideo(e)} className="watch" > <img src="./watch.png" alt="" /></a>
                  <a className="githup" target="_blank" href={e.github}> <img src="./github.png" alt="" /></a>
                  <a className="link"  href={e.visit} target="_blank" >  <img src="./see.png" alt="" /></a>
                  </div>
                  <h3>{e.title}</h3>
              </div>
            </div>
          )
        })
      }
      </div> 

      {video && <div className="coverVideo"> <span onClick={_=> setvideo(!video)}>×</span> <video src={namevideo} typeof='video/mp4' controls autoPlay poster='./loading.webp'></video></div>
      }

    {/* {/* <div className="container mx-auto gap-y-4"> */}



  </section>
  )
}

export default Work;
