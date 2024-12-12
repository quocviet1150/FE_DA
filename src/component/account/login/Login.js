import React from 'react';
import '../../account/account.css';

const Login = () => {

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <form onSubmit={handelSubmit} >
            <div className='header-login'>
                <div className='d-flex w-50'>
                    <div className='w-50'>tes</div>
                    <div className='d-flex w-50 justify-content-end text-danger'>Bạn cần giúp đỡ?</div>
                </div>
            </div>
        </form>
    );
};

export default Login;
