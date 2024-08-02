import React from "react";
import { useForm } from "react-hook-form";
// import { sendEmail } from '../Helpers/SendEmail'

const Contactme = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => sendEmail(data);

  return (
    <section
      className="text-center flex justify-center flex-col max-w-xl m-auto p-8 mb-4 bg-transparent border-2 border-dashed border-amber-400 rounded-lg shadow-md"
      id="proyects"
    >
      <h2 className="text-2xl">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="text-start">Name</label>
          <input
            className="border-2 rounded my-2"
            {...register("name", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-start">Email</label>
          <input
            className="border-2 rounded my-2"
            {...register("email", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-start">Subject</label>
          <input
            className="border-2 rounded my-2"
            {...register("subject", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-start">Message</label>
          <textarea
            className="border-2 rounded my-2"
            {...register("message", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>

        <input type="submit" value={"Send"} />
      </form>
    </section>
  );
};

export default Contactme;
