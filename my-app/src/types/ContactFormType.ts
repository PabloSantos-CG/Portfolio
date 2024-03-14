import { ContactFormSchema } from "@/schemas/ContactForm";
import { z } from "zod";

export type ContactFormTypeSchema = z.infer<typeof ContactFormSchema>;