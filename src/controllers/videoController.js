export const trending = (req, res) => {
  const videos = [
    {
      title: "1 Video",
      rating: 5,
      comments: 2,
      crfeatedAt: "2 minutes ago",
      views: 50,
      id: 1,
    },
    {
      title: "2 Video",
      rating: 5,
      comments: 2,
      crfeatedAt: "2 minutes ago",
      views: 50,
      id: 1,
    },
    {
      title: "3 Video",
      rating: 5,
      comments: 2,
      crfeatedAt: "2 minutes ago",
      views: 50,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.send("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
