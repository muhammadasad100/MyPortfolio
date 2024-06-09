// counterReducer.js
const Reducerdata = (state, action) => {
  switch (action.type) {
    case "Api-Data":
      // filter data from Api
      //const filterskillData = action.payload.filter((item) => item.skills);
      const skillsdata =
        action.payload.find((item) => item.skills)?.skills || [];
      const educationdata =
        action.payload.find((item) => item.education)?.education || [];
      const experiencedata =
        action.payload.find((item) => item.experience)?.experience || [];
      const servicesdata =
        action.payload.find((item) => item.services)?.services || [];
      const portfoliodata =
        action.payload.find((item) => item.portfolio)?.portfolio || [];

      console.log(" skills data is", skillsdata);
      console.log("education data is", educationdata);
      console.log("experience data is", experiencedata);
      console.log("services data is", servicesdata);
      console.log("portfolio data is", portfoliodata);

      return {
        ...state,
        skills: skillsdata,
        experience: experiencedata,
        education: educationdata,
        services: servicesdata,
        portfolio: portfoliodata,
      };
    default:
      return state;
  }
};

export { Reducerdata };
