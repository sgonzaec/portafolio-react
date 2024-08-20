import toast from "react-hot-toast";

const key = 'e07195'

const screenshotmachine = {
  getImage: async (url) => {
    try {
      return await fetch(`https://api.screenshotmachine.com/?key=${key}&url=${url}&dimension=1380xfull`, {
        method: "GET",
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json;
        } else {
          return "Error loading data.";
        }
      });
    } catch (error) {
      toast.error(`Error loading data`);
      throw new Error();
    }
  }
};

export default screenshotmachine;