export const fetchUser = (userId) =>
  fetch(`/api/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
    });

export const updateUser = (user, userId) => {
  let formData = convert.formDataConvert(user);

  return fetch(`/api/users/${userId}`, {
    method: "PATCH",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });
};

export const fetchUsers = () =>
  fetch("/api/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
