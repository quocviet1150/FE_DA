// import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AccountApi } from "../../../api/account/accountApi";
import { useLoading } from "../../../component/loading/LoadingProvider";

const Login = () => {
    const { t } = useTranslation();
    const { showLoading, hideLoading } = useLoading();
    const navigate = useNavigate();

    // const [formState, setFormState] = useState({
    //         emailOrUsername: '',
    //         password: '',
    //         errors: {
    //             emailOrUsername: '',
    //             password: '',
    //         },
    //     });

    const handelSubmit = () => {
    
            // const { emailOrUsername, password, errors } = formState;
            // let valid = true;
    
            // if (!emailOrUsername) {
            //     errors.emailOrUsername = t('please_enter_username_or_email');
            //     valid = false;
            // }
            // if (!password) {
            //     errors.password = t('please_enter_password');
            //     valid = false;
            // }
    
            // setFormState((prevState) => ({ ...prevState, errors }));
    
            // if (!valid) return;
    
            const data = {
                usernameOrEmail: "khoahocmaytinh37@gmail.com",
                password : "vietnq",
            };
    
            try {
                showLoading();
                debugger
                AccountApi.login(data)
                    .then((response) => {
                        localStorage.setItem('userAdmin', JSON.stringify(response.data));
                        localStorage.removeItem('user');
                        navigate('/admin/dashboard');
                        hideLoading();
                    })
                    .catch((error) => {
                        hideLoading();
                        if (error?.response?.status === 423) {
                            toast.error(t('account_is_locked'));
                        } else if (error?.response?.status === 401) {
                            toast.error(t('invalid_username_or_password'));
                        } else {
                            toast.error(t('login_failed'));
                        }
                    });
            } catch (error) {
                hideLoading();
                toast.error(t('system_error'));
            }
        };
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <button className="btn btn-primary" onClick={handelSubmit()}>Login</button>
        </div>
    );
};
export default Login;