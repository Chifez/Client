import { useState, useEffect } from 'react';
import Button from '../../components/shared/Button';
import OtpInput from './OtpInput';
import Layout from '../../components/layout';
import { useNavigate } from 'react-router-dom';
import { useBoundedStore } from '../../../store/store';

const initialTime = 59;
const Verify = () => {
  const [time, setTime] = useState(initialTime);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [otpInput, setOtpInput] = useState('');

  const verify = useBoundedStore((state) => state.verifyUser);

  const handleOtpChange = (otp) => {
    setOtpInput(otp);
  };

  const verifyAccount = () => {
    const otp = otpInput.replace(/\D/g, '');
    verify(otp);
    // console.log('OTP submitted:', otp);
    // navigate('/register');
  };

  const updateCountdown = () => {
    if (time > 0) {
      setTime(time - 1);
    } else {
      setIsButtonDisabled(false);
    }
  };

  const formattedTime = `${String(Math.floor(time / 60)).padStart(
    2,
    '0'
  )}:${String(time % 60).padStart(2, '0')}`;

  const handleResendClick = () => {
    setTime(initialTime);
    setIsButtonDisabled(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => {
      clearInterval(countdownInterval);
    };
  }, [time]);

  return (
    <Layout>
      <div className="flex flex-col items-center h-full w-full gap-10 font-ERegular">
        <div className="text-center pb-3">
          <h1 className="text-2xl font-bold">Verification</h1>
          <span>
            <p className="text-[#434041] font-Esemi text-sm">
              We have sent you a code to verify your email
            </p>
          </span>
        </div>
        <form action="" className="w-full flex flex-col items-center gap-3">
          <OtpInput onChange={handleOtpChange} />
        </form>
        <div className="text-[#434041] flex flex-col gap-2 text-center font-Esemi text-sm">
          <span>{formattedTime}</span>
          <button
            onClick={handleResendClick}
            disabled={isButtonDisabled}
            className={`text-[#00398E] ${
              isButtonDisabled && 'cursor-not-allowed text-gray-600'
            } `}
          >
            Resend OTP
          </button>
        </div>

        <Button
          handleClick={() => verifyAccount()}
          name="Continue"
          extraclass={`w-[25rem] h-[3rem] rounded-lg`}
        />
      </div>
    </Layout>
  );
};

export default Verify;
