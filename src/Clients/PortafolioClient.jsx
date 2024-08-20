const portafolio = {
  sendMail: async (body) => {
    isSending(true);
    try {
      const response = await fetch(
        `https://portafolio-backend-0qxk.onrender.com/api/email/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (response.status >= 200 && response.status < 300) {
        isSending(false);
        return await response.json();
      } else {
        isSending(false);
        return "Error sending data.";
      }
    } catch (error) {
      isSending(false);
      throw new Error("Error sending email");
    }
  },
};

export default portafolio;
