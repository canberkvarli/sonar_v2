import * as convert from "./camel_to_snake.js";

export const fetchTracks = (data) =>
  fetch("/api/tracks", {
    method: "GET",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching tracks:", error);
    });

export const fetchTrack = (trackId) =>
  fetch(`/api/tracks/${trackId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching track:", error);
    });

export const uploadTrack = (trackForm) => {
  let formData = convert.formDataConvert(trackForm);
  return fetch("api/tracks/", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error uploading track:", error);
    });
};

export const deleteTrack = (trackId) =>
  fetch(`/api/tracks/${trackId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("Error deleting track:", error);
    });
