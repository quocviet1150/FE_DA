import { useTranslation } from "react-i18next";
import HeaderAccount from "../../header/headerAccount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    const [formState, setFormState] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        errors: {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
        },
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const errors = { ...formState.errors };

        if (name === "email" && value && !emailPattern.test(value)) {
            errors.email = t("invalid_email");
        } else if (!value) {
            errors[name] = t(`please_enter_${name}`);
        } else {
            errors[name] = '';
        }

        if (name === 'confirmPassword' && value !== formState.password) {
            errors.confirmPassword = t("password_mismatch");
        }

        if (name === "password" && value && !passwordPattern.test(value)) {
            errors.password = t("password_invalid");
        }

        setFormState({
            ...formState,
            [name]: value,
            errors,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = { ...formState.errors };
        let isValid = true;

        Object.keys(formState).forEach((key) => {
            if (!formState[key] && key !== 'errors') {
                errors[key] = t(`please_enter_${key}`);
                isValid = false;
            }
        });

        if (!emailPattern.test(formState.email)) {
            errors.email = t("invalid_email");
            isValid = false;
        }

        if (formState.password && !passwordPattern.test(formState.password)) {
            errors.password = t("password_invalid");
            isValid = false;
        }

        if (formState.confirmPassword !== formState.password) {
            errors.confirmPassword = t("password_mismatch");
            isValid = false;
        }

        setFormState({ ...formState, errors });

        if (!isValid) return;

        const { email, username, password, confirmPassword, firstName, lastName } = formState;
        const params = { email, username, password, confirmPassword, firstName, lastName };
        console.log("Submitted Data:", params);

    };

    const handleClickLogin = () => {
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <HeaderAccount text={t("register")} />
            <div className='d-flex justify-content-center' style={{ background: '#ff7e2b' }}>
                <div className='d-flex w-50 align-items-center'>
                    <div className='w-50 background-image'></div>
                    <div className='d-flex justify-content-end w-50'>
                        <div className='form-login'>
                            <div className='p-4'>
                                <h1 style={{ fontSize: '22px', fontWeight: '400' }}>{t("register")}</h1>

                                <div className="d-flex w-100 gap-1">
                                    <div className="w-50">
                                        <input
                                            type='text'
                                            name="lastName"
                                            className='form-control mt-4 w-100'
                                            placeholder={t("last_name")}
                                            onChange={handleChange}
                                        />
                                        {formState.errors.lastName && <div className="text-danger fs-custom">{formState.errors.lastName}</div>}
                                    </div>

                                    <div className="w-50">
                                        <input
                                            type='text'
                                            name="firstName"
                                            className='form-control mt-4 w-100'
                                            placeholder={t("first_name")}
                                            onChange={handleChange}
                                        />
                                        {formState.errors.firstName && <div className="text-danger fs-custom">{formState.errors.firstName}</div>}
                                    </div>
                                </div>

                                <input
                                    type='text'
                                    name="username"
                                    className='form-control mt-4'
                                    placeholder={t("username")}
                                    onChange={handleChange}
                                />
                                {formState.errors.username && <div className="text-danger fs-custom">{formState.errors.username}</div>}

                                <input
                                    type='text'
                                    name="email"
                                    className='form-control mt-4'
                                    placeholder={t("email")}
                                    onChange={handleChange}
                                />
                                {formState.errors.email && <div className="text-danger fs-custom">{formState.errors.email}</div>}

                                <div className='position-relative mt-4'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        className='form-control'
                                        placeholder={t("password")}
                                        onChange={handleChange}
                                    />
                                    <span
                                        className="position-absolute top-50 end-0 translate-middle-y me-3"
                                        style={{ cursor: 'pointer' }}
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </span>
                                    {formState.errors.password && <div className="text-danger fs-custom">{formState.errors.password}</div>}
                                </div>

                                <div className='position-relative mt-4'>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        className='form-control'
                                        placeholder={t("confirm_password")}
                                        onChange={handleChange}
                                    />
                                    <span
                                        className="position-absolute top-50 end-0 translate-middle-y me-3"
                                        style={{ cursor: 'pointer' }}
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                                    </span>
                                    {formState.errors.confirmPassword && <div className="text-danger fs-custom">{formState.errors.confirmPassword}</div>}
                                </div>

                                <button type='submit' className='btn btn-primary w-100 mt-4 p-2'>{t("register")}</button>
                                <div className="separator">
                                    <span>{t("or")}</span>
                                </div>

                                <div className='d-flex w-100 pt-2 justify-content-center gap-1'>
                                    <div className='new-to-shopee'>{t("have_login")}</div>
                                    <div className='register' onClick={handleClickLogin}>{t("login")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;
