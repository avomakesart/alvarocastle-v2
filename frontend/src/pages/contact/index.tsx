import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button, NavBar } from '../../components';
import { Footer } from '../../components/Footer/Footer';
import { Input } from '../../components/Input/Input';
import { TextArea } from '../../components/TextArea/TextArea';

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });

  return (
    <>
      <NavBar />
      <div className='container flex flex-col mx-auto mt-12'>
        <div className="max-w-xl ml-2">
          <h4>Let's chat.</h4>
          <h4 className='font-medium'>I'll get back to you shortly</h4>
        </div>
        <div className='max-w-xl'>
          <Formik
            initialValues={{
              fullname: '',
              email: '',
              subject: '',
              message: '',
            }}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            {({ handleChange, values }) => (
              <Form>
                <div className='mt-6'>
                  <Input
                    value={values.fullname}
                    onChange={handleChange}
                    name='fullname'
                    type='text'
                    label='Full name'
                    placeHolder='Your name'
                  />
                </div>
                <div className='mt-6'>
                  <Input
                    value={values.email}
                    onChange={handleChange}
                    name='email'
                    type='email'
                    label='Email address'
                    placeHolder='email@email.com'
                  />
                </div>
                <div className='mt-6'>
                  <Input
                    value={values.subject}
                    onChange={handleChange}
                    name='subject'
                    type='text'
                    label='Subject'
                    placeHolder='Hi I need your help with some cool software'
                  />
                </div>
                <div className='mt-6'>
                  <TextArea
                    value={values.message}
                    onChange={handleChange}
                    name='message'
                    label='Message'
                    cols={10}
                    rows={10}
                    placeHolder='Write a 300 max length character message'
                  />
                </div>

                <Button type='submit' btnType='primary'>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
