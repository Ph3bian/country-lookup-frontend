export const getToken = () => {
    return localStorage.getItem("countryToken")
      ? JSON.parse(localStorage.getItem("countryToken"))
      : "";
  };