export const login = async (user) => {
  try {
    const response = await fetch("/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const signup = async (user) => {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const logout = async () => {
  try {
    const response = await fetch("/api/session", {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
