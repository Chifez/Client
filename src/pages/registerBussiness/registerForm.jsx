import Layout from '../../components/layout';
import TextInput from '../../components/TextInput';
import Button from '../../components/button';
import Upload from '../../components/Upload';
import { Formik } from 'formik';
import { useBoundedStore } from '../../../store/store';

const Register = () => {
  const initialValue = {
    businessName: '',
    businessLocation: '',
    streetAddress: '',
    storeCity: '',
    country: '',
  };
  const openModal = useBoundedStore((state) => state.openModal);
  return (
    <Layout>
      <Formik initialValues={initialValue}>
        <div className="flex flex-col items-center w-full gap-10 font-ERegular pb-5">
          <div className="text-center pb-3">
            <h1 className="text-2xl font-bold">
              Let's know more about your bussiness
            </h1>
            <span>
              <p className="text-[#00398E] font-semibold">
                we want to verify that you own a store
              </p>
            </span>
          </div>

          <form className="relative flex flex-col gap-3">
            <TextInput
              name="Business name"
              title="Business name"
              placeholder="e.g Simbi's enterprise"
              extraclass="w-[25rem]"
            />
            <TextInput
              name="Business Location"
              title="Business Location"
              placeholder="e.g Enugu Nigeria"
              extraclass="w-[25rem]"
            />
            <div className="flex flex-col items-start">
              <label htmlFor="descritpion" className="ml-2">
                Brief description about your business
              </label>
              <textarea
                name="descritpion"
                id=""
                cols="30"
                rows="10"
                placeholder="e.g we specialize in selling beauty soaps"
                className="border-[1.5px] w-[25rem] border-[#64BCF4] rounded-lg focus:outline-none resize-none p-2"
              ></textarea>
            </div>
            <TextInput
              name="Street address"
              title="Street address"
              placeholder="e.g Plot 312 indpendence layout"
              extraclass="w-[25rem]"
            />

            <TextInput
              name="Store city"
              title="Store city"
              placeholder="e.g Enugu city"
              extraclass="w-[25rem]"
            />

            <TextInput
              name="Country"
              title="Country"
              placeholder="e.g Nigeria"
              extraclass="w-[25rem]"
            />
            <Upload title="upload images of your store" />
            <Upload title="upload your logo (or whatever you are known for)" />
          </form>
          <Button
            name="Submit"
            extraclass={`w-[25rem] h-[3rem] rounded-lg`}
            handleClick={() => openModal()}
          />
        </div>
      </Formik>
    </Layout>
  );
};

export default Register;
