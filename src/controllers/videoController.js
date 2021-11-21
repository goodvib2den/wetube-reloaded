let videos = [
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
    id: 2,
  },
  {
    title: "3 Video",
    rating: 5,
    comments: 2,
    crfeatedAt: "2 minutes ago",
    views: 50,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}` });
};
export const edit = (req, res) => res.send("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
