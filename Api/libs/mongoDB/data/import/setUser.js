function setUserData(profile) {
    return {
      discordUserID: profile.id,
      username: profile.username,
      guild: profile.guilds,
      avatar: profile.avatar,
      multimendia: [
        {
          apiCourseName: "",
          title: "",
          link: "",
          text: "",
        },
      ],
    };
  }
export { setUserData }