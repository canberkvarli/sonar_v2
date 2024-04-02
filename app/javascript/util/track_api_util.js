import * as convert from "./camel_to_snake.js";

export const fetchTracks = (data) =>
  $.ajax({
    url: "/api/tracks",
    data,
    error: (err) => console.log(err),
  });

export const fetchTrack = (trackId) =>
  $.ajax({
    url: `/api/tracks/${trackId}`,
    error: (err) => console.log(err),
  });

export const uploadTrack = (trackForm) => {
  let formData = convert.formDataConvert(trackForm);
  const req = $.ajax({
    method: "POST",
    url: `api/tracks/`,
    data: formData,
    contentType: false,
    processData: false,
    error: (err) => console.log(err),
  });
  return req;
};

export const deleteTrack = (trackId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/tracks/${trackId}`,
    error: (err) => console.log(err),
  });
