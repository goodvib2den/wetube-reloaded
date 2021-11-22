let videos = [
  {
    title: "1 Video",
    rating: 5,
    comments: 2,
    crfeatedAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "2 Video",
    rating: 5,
    comments: 2,
    crfeatedAt: "2 minutes ago",
    views: 59,
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

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
