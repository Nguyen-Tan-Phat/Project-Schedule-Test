import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import "./Login.css";

function App() {
  return (
    <MDBContainer className='container p-4 my-5 border'>

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://image.thanhnien.vn/w1024/Uploaded/2023/puqgfdmzs-co/2022_04_24/fpt3-1647.jpg' alt="login form" className='rounded-start w-100 h-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

            <MDBCol className=''>
            <MDBCardImage src='https://upload.wikimedia.org/wikipedia/vi/1/1d/Logo_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.png' className='rounded-start w-100 h-100'/>
          </MDBCol>

              <h5 className="fw-normal my-4 pb-3 text-center" style={{letterSpacing: '1px',color:'green'}}>Sign In</h5>

              <MDBBtn className="btn btn-primary w-30" color='blue' size='lg'>Login with Google</MDBBtn>
              
              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}
export default App;