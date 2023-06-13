import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color:'white',
        backgroundColor : 'black'
    })

    const [btntext, setbtntext] = useState("Enable Light mode")
    
    const toggleStyle = ()=>{
        if(myStyle.color == 'white'){
            setMyStyle({

                color: 'black',
                backgroundColor: 'white',
                border: '1px Solid White'
            })
            setbtntext("Enable Dark mode")
    }
    else{
        setMyStyle({
            color: 'white',
            backgroundColor: 'black'
        })
        setbtntext("Enable Light mode")
    }
}

  return (
    <div className="container" style = {myStyle}>
        <h2 className = "my-3">About Us</h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            About Text Analyzer
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style = {myStyle} >
            The text analyzer web application is a powerful tool that helps users analyze and understand written content with ease. It offers features such as word count, readability scores, sentiment analysis, and keyword extraction, providing valuable insights to enhance writing quality.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style = {myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             Privacy & policy
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style = {myStyle} >
        The privacy policy of our text analyzer web application ensures that no personally identifiable information (PII) is collected or stored from our users. We prioritize the security of user data and employ industry-standard measures to protect it during transmission and storage.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Connect with us
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style = {myStyle} >
        We value your feedback and are committed to providing excellent customer support. If you have any questions, suggestions, or concerns about our text analyzer web application, please don't hesitate to contact us. We are here to assist you.
        </div>
        </div>
    </div>
</div>
        <div className = "container my-3">
            <button onClick = {toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div>
    </div>
  )
}
