export const createLike = (like) => {
  return $.ajax({
    method: "POST",
    url: `/api/tracks/${like.track_id}/likes`,
    data: { like },
    errot: (err) => console.log(err),
  });
};

export const deleteLike = (likeId, trackId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/tracks/${trackId}/likes/${likeId}`,
    error: (err) => console.log(err),
  });
};
