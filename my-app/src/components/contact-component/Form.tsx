import { ContactFormSchema } from "@/schemas/ContactForm";
import { ContactFormTypeSchema } from "@/types/ContactFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonSubmitForm from "./ButtonSubmitForm";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormTypeSchema>({
    resolver: zodResolver(ContactFormSchema),
  });

  const notify = () =>
    toast.success("E-mail enviado com sucesso!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const sendEmail: SubmitHandler<ContactFormTypeSchema> = ({
    name,
    email,
    message,
    subject,
  }) => {
    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs.send("service_jwt4s4q", "template_x1bc4yn", templateParams, {
      publicKey: "FBkG42FLa5e-vr6NG",
    });

    reset({ name: "", email: "", message: "", subject: "" });
    notify();
  };

  return (
    <div className="xl:w-2/3 max-xl:flex max-xl:flex-col max-xl:justify-center">
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="flex flex-col gap-y-7 xl:mx-12 max-xl:max-w-[560px] m-auto"
      >
        <div className="flex justify-between gap-x-4 sm:gap-x-8">
          <div className="flex-1">
            <input
              {...register("name")}
              placeholder="Nome"
              className="
                input w-full capitalize
              "
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-2">
                {errors.name.message as string}
              </p>
            )}
          </div>
          <div className="flex-1">
            <input
              {...register("email")}
              placeholder="E-mail"
              className="w-full input"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2">
                {errors.email.message as string}
              </p>
            )}
          </div>
        </div>
        <div>
          <input
            {...register("subject")}
            placeholder="Assunto"
            className="input w-full"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-2">
              {errors.subject.message as string}
            </p>
          )}
        </div>
        <div>
          <textarea
            {...register("message")}
            placeholder="Faça uma breve descrição..."
            className="input w-full h-[180px] pr-2 pt-2 pb-2 capitalize resize-none text-gray-200"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-2">
              {errors.message.message as string}
            </p>
          )}
        </div>
        <ButtonSubmitForm />
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
