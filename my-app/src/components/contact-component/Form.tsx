import { ContactFormSchema } from "@/schemas/ContactForm";
import { ContactFormTypeSchema } from "@/types/ContactFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonSubmitForm from "./ButtonSubmitForm";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormTypeSchema>({
    resolver: zodResolver(ContactFormSchema),
  });

  const handleSubmitForm: SubmitHandler<ContactFormTypeSchema> = (data) => {};

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
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
  );
}
