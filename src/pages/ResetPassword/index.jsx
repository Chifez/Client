import { useState, useEffect } from 'react';
import Button from '../../components/shared/Button';
import Layout from '../../components/layout';
import { Link, useNavigate } from 'react-router-dom';
import { ResetPasswordValidation } from '../../utils/validationSchema/validationSchema';
import TextInput from '../../components/shared/TextInput';
import { Formik } from 'formik';
import { useBoundedStore } from '../../../store/store';

const ResetPassword = () => {
  const forgotPassword = useBoundedStore((state) => state.forgotPassword);
  const isFetching = useBoundedStore((state) => state.loading);

  const initialValue = {
    email: '',
  };

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center h-full w-full gap-5 font-ERegular">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Forgot Password</h1>
          <span>
            <p className="text-[#434041] font-Esemi text-sm">
              Please enter your email address to receive a verification code
            </p>
          </span>
        </div>
        <Formik
          initialValues={initialValue}
          validationSchema={ResetPasswordValidation}
          onSubmit={(values) => {
            forgotPassword(values, navigate);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <form action="" className="relative flex pb-10 flex-col gap-3">
                <div>
                  <TextInput
                    name="email"
                    title="Email Address"
                    placeholder="yourname@email.com"
                    value={values.email}
                    handleChange={handleChange('email')}
                    error={errors.email}
                    touched={touched.email}
                    extraclass="w-[25rem]"
                    titleclass="font-[600] text-[#434041] pb-1"
                  />
                </div>
              </form>
              <Button
                handleClick={handleSubmit}
                name="Send Code"
                extraclass={`w-[25rem] h-[3rem] rounded-lg`}
                loading={isFetching}
              />
            </>
          )}
        </Formik>
      </div>
    </Layout>
  );
};

export default ResetPassword;
