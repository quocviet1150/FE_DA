import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import Loading from '../../component/loading/loading';

const SignUp = () => {
    const [isLoading, setIsLoading] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
            navigate("/login");
        }, 1000);
        return () => clearTimeout(timer);
    }

    const handleSignup = () => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
            navigate("/login");
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
                                <h4 className="mt-1 mb-5 pb-1">ĐĂNG KÍ</h4>
                            </div>

                            <MDBInput wrapperClass='mb-4' label='Nhập họ và tên' id='formControlLg' type='password' size="lg" />
                            <MDBInput wrapperClass='mb-4' label='Nhập email' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' label='Nhập mật khẩu' id='formControlLg' type='password' size="lg" />
                            <MDBInput wrapperClass='mb-4' label='Nhập lại mật khẩu' id='formControlLg' type='password' size="lg" />

                            <div className="d-flex justify-content-end mb-4">
                                <a className="link-danger" onClick={handleLogin}>Đã có tài khoản đăng nhập.</a>
                            </div>

                            <div className='text-center mt-4'>
                                <div className="btn-login" onClick={handleSignup}>Đăng kí</div>
                            </div>

                        </MDBCol>

                    </MDBRow>

                </MDBContainer>
            )}
        </>
    );
}
export default SignUp;