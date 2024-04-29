import toast from "react-hot-toast";

const github = {
  getProfileData: async (isLoading) => {
    isLoading(true);
    try {
      return await fetch(`https://api.github.com/users/sgonzaec`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer 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"
        },
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(`data loaded successfully`);
          return res.json();
        } else {
          toast.error(`Error loading data`);
          isLoading(false);
          return "Error loading data.";
        }
      });
    } catch (error) {
      isLoading(false);
      throw new Error();
    }
  },
  getRepos: async (isLoading) => {
    isLoading(true);
    try {
      return await fetch(`https://api.github.com/users/sgonzaec/repos`, {
        method: "GET",
        headers: {
            "Authorization": "Bearer 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"
        },
      }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(`data loaded successfully`);
          return res.json();
        } else {
          toast.error(`Error loading data`);
          isLoading(false);
          return "Error loading data.";
        }
      });
    } catch (error) {
      isLoading(false);
      throw new Error();
    }
  },
};

export default github;