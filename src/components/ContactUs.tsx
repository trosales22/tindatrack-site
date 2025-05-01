import React from 'react';
import { Input, TextArea } from 'components/ui/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData, contactSchema } from 'schemas/contact';
import { useSubmitFeedbackMutation } from 'hooks/feedback';
import toast from 'react-hot-toast';

const ContactUs: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const { mutate: submitFeedback, isPending: isSubmitFeedbackLoading } = useSubmitFeedbackMutation({
    onSuccess: () => {
      reset();
      toast.success('Thank you for your feedback! We appreciate your input.');
    },
    onError: () => {},
  });

  const onSubmit = (data: ContactFormData) => {
    submitFeedback(data);
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">Contact Us</h2>
        <p className="text-base-content mb-6">
          Have a question or feedback? We'd love to hear from you.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            id="name"
            type="text"
            label="Name"
            placeholder="Your Name"
            className="w-full"
            error={errors?.name?.message}
            {...register('name')}
          />

          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            className="w-full"
            error={errors?.email?.message}
            {...register('email')}
          />

          <TextArea
            id="message"
            label="Message"
            rows={4}
            placeholder="Your message..."
            className="w-full"
            error={errors?.message?.message}
            {...register('message')}
          />

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isSubmitFeedbackLoading}
          >
            {isSubmitFeedbackLoading ? 'Submitting' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
