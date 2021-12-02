import React from 'react';
import styled from 'styled-components';
import faq2 from '../assets/faq2.png'


const FAQ = () => {
    return (
        <Wrapper>
            <div className="container1">
                <div className="divimage">
                    <h1 className= "title">  Any questions ? </h1>
                    <img src={faq2} className="image" />
                </div>
              
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        First Question
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis ipsum eget nulla laoreet, nec faucibus neque finibus. In at ullamcorper dolor, nec pharetra metus. Sed vel urna dapibus, sodales neque vel, vestibulum ante. Vivamus in lectus ut eros egestas posuere quis at tortor. In rhoncus quam tortor, suscipit ullamcorper velit elementum id.  </p>
                    </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Second Question
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis ipsum eget nulla laoreet, nec faucibus neque finibus. In at ullamcorper dolor, nec pharetra metus. Sed vel urna dapibus, sodales neque vel, vestibulum ante. Vivamus in lectus ut eros egestas posuere quis at tortor. In rhoncus quam tortor, suscipit ullamcorper velit elementum id. </p> 
                    </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         Third Question
                        </button>
                        </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis ipsum eget nulla laoreet, nec faucibus neque finibus. In at ullamcorper dolor, nec pharetra metus. Sed vel urna dapibus, sodales neque vel, vestibulum ante. Vivamus in lectus ut eros egestas posuere quis at tortor. In rhoncus quam tortor, suscipit ullamcorper velit elementum id. </p>
                    </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                         Fourth Question
                        </button>
                        </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis ipsum eget nulla laoreet, nec faucibus neque finibus. In at ullamcorper dolor, nec pharetra metus. Sed vel urna dapibus, sodales neque vel, vestibulum ante. Vivamus in lectus ut eros egestas posuere quis at tortor. In rhoncus quam tortor, suscipit ullamcorper velit elementum id. </p>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>

        </Wrapper>
    )
}

const Wrapper = styled.header`
font-family: 'Electrolize', sans-serif;

.image{
    width:35%;
    margin-right: 2%;

}
.divimage{
    display:flex;
    justify-content:space-between;
    margin-top:3%;
}

.accordion{
    padding: 5%;    
}

.title{
    font-weight: bold;
    font-size: 55px;
    margin-top: 17%;
    margin-left: 8%;
}
`
export default FAQ;