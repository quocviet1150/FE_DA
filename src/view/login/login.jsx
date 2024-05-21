import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Loading from '../../component/loading/loading';

const Login = () => {
  const [isLoading, setIsLoading] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/home");
    }, 1000);
    return () => clearTimeout(timer);
  }

  const handleSignUp = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/signup");
    }, 1000);

    return () => clearTimeout(timer);
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isLoading && (
        <MDBContainer fluid className="my-4 h-custom" style={{ paddingRight: '5rem' }}>

          <MDBRow>

            <MDBCol col='10' md='6'>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
            </MDBCol>

            <MDBCol col='4' md='6' className='shadow mb-10 bg-white rounded' style={{ padding: '1rem 5rem' }}>
              <div className="text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{ width: '150px' }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">ĐĂNG NHẬP</h4>
              </div>

              <MDBInput wrapperClass='mb-4' label='Nhập email' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4' label='Nhập mật khẩu' id='formControlLg' type='password' size="lg" />

              <div className="d-flex justify-content-between mb -4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Ghi nhớ' />
                <a href="!#">Đổi mật khẩu?</a>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center">
                <p className="lead fw-normal mb-0 me-3">Đăng nhập với:</p>
                <div className='me-2 icon-design-face'>
                  <FontAwesomeIcon icon={faFacebookF} style={{ width: '20px', height: '20px', margin: '5px 0 0 5px' }} />
                </div>

                <div className='me-2 icon-design-google'>
                  <FontAwesomeIcon icon={faGoogle} style={{ width: '20px', height: '20px', margin: '5px 0 0 5px' }} />
                </div>
              </div>

              <div className='text-center mt-4 pt-2'>
                <div className="btn-login" size='lg' onClick={handleLogin}>Đăng nhập</div>
                <p className="small fw-bold mt-2 pt-1 mb-2">Không có tài khoản? <a className="link-danger" onClick={handleSignUp}>Đăng kí</a></p>
              </div>

            </MDBCol>

          </MDBRow>

        </MDBContainer>
      )}
    </>
  );
}
export default Login;