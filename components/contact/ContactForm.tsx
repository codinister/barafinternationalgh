'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { emailSchema } from './zodSchema';
import Errors from './Errors';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { BeatLoader } from 'react-spinners';
import axiosInterceptor from '@/data/server/axiosInterceptor';

const ContactForm = () => {
  type Errtype = any;
  type Succtype = boolean | undefined;

  const [err, setErr] = useState<Errtype>('');
  const [success, setSuccess] = useState<Succtype>(false);

  const closeBox = () => setSuccess(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });

  const [isPending, startTransition] = useState(false);

  const formSubmit = async (val: z.infer<typeof emailSchema>) => {
    try {
      startTransition(true)
      const { data } = await axiosInterceptor({
        url: '/email',
        method: 'Post',
        data: val,
      });

      if (data?.success) {
        setSuccess(data?.success);
      } else {
        setErr(data?.errors);
      }
      startTransition(false)
    } catch (err) {
      console.log(err);
    }
  };

  if (success) {
    return (
      <div className="successbox">

        <div>Email sent!</div>
      </div>
    );
  }

  return (
    <div className="contactform">
      <form onSubmit={handleSubmit(formSubmit)}>
        <h4>Make enquiry</h4>

        <Errors error={err} />

        <div className="input-control">
          <input type="text" id="email" placeholder="" {...register('email')} />
          <label htmlFor="email">Email</label>
          <Errors error={errors.email?.message} />
        </div>

        <div className="input-control">
          <input
            type="text"
            id="subject"
            placeholder=""
            {...register('subject')}
          />
          <label htmlFor="subject">Subject</label>
          <Errors error={errors.subject?.message} />
        </div>

        <div className="input-control">
          <textarea
            id=""
            placeholder="Message"
            {...register('message')}
          ></textarea>

          <Errors error={errors.message?.message} />
        </div>

        <div className="btn-box">
          {isPending ? (
            <BeatLoader />
          ) : (
            <button className="contactbtn">SEND MESSAGE</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
