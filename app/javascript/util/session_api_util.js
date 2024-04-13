export const login = async (user) => {
  const response = await fetch("/api/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    return response.json().then((err) => {
      throw err;
    });
  }
};

export const signup = async (user) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    return response.json().then((err) => {
      throw err;
    });
  }
};

export const logout = async () => {
  const response = await fetch("/api/session", {
    method: "DELETE",
  });
  if (response.ok) {
    return response;
  } else {
    return response.json().then((err) => {
      throw err;
    });
  }
};
