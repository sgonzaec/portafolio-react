import toast from "react-hot-toast";
import { Portafolio } from "../Clients";

export const sendEmail = async (data, isSending) => {
  const body = {
    from: data.email,
    to: "simongonzalezechavarria@gmail.com",
    subject: data.subject,
    message: data.message,
  };
  toast.promise(Portafolio.sendMail(body, isSending), {
    loading: "Sending...",
    success: <b>Email send success.</b>,
    error: <b>Ups! we have some problems, try again.</b>,
  });
};
