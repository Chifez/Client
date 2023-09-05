import TextInput from '../../components/TextInput';
import Button from '../../components/button';
import { MdContentCopy } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';
import { Formik } from 'formik';
import { useState } from 'react';

const PaymentModal = ({ id }) => {
  const [paymentLink, setPaymentLink] = useState(null);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  // this has to be global value that can be accessed so that it can be used in the preview file
  const initialvalues = {
    item: '',
    price: '',
  };

  const BaseURL = `https://Simpliby.store/`;
  const handleGeneratePaymentLink = (values) => {
    if (values.item == '' || values.price == '') return;
    const generatedLink = `${BaseURL}pay?item=${values.item}&amount=${values.price}`;
    setPaymentLink(generatedLink);
    setGenerated(true);
    console.log(paymentLink);
  };

  const copyLinkToClipboard = () => {
    if (!paymentLink) return;
    navigator.clipboard
      .writeText(paymentLink)
      .then(() => {
        console.log('Payment link copied to clipboard:', paymentLink);
        // You can show a success message or perform additional actions here
      })
      .catch((error) => {
        console.error('Failed to copy payment link:', error);
        // You can show an error message or handle the error here
      });
    setCopied(true);
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-center gap-3 justify-start w-[30%] h-[70%] py-5  bg-white rounded-3xl"
    >
      <h2 className="font-[600] font-inter py-2">Generate Payment Link</h2>
      <Formik
        initialValues={initialvalues}
        onSubmit={(values) => {
          handleGeneratePaymentLink(values);
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
            <div className=" flex flex-col gap-4 mb-14">
              <TextInput
                title="Item(s)"
                value={values.item}
                placeholder="Type the item(s) here"
                handleChange={handleChange('item')}
                titleclass="font-[600] text-lg "
                extraclass="px-5 border-[2px] border-blue-900 w-[18rem]"
              />
              <TextInput
                title="Price"
                value={values.price}
                placeholder="Enter amount"
                handleChange={handleChange('price')}
                titleclass="font-[600] text-lg"
                extraclass="px-5 border-[2px] border-blue-900 w-[18rem]"
              />
            </div>
            <Button
              name={generated ? 'Link Generated' : 'Generate'}
              handleClick={handleSubmit}
              extraclass="px-4 py-2 w-72 rounded-md text-[15px] font-inter"
            />
          </>
        )}
      </Formik>
      <div
        onClick={copyLinkToClipboard}
        className="flex flex-row items-center justify-center gap-1 cursor-pointer"
      >
        {copied ? <GiCheckMark /> : <MdContentCopy />}
        <p className="font-[600] ">copy link</p>
      </div>
    </div>
  );
};

export default PaymentModal;
