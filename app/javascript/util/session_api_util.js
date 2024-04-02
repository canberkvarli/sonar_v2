export const login = (user) => {
  return $.ajax({
    method: "POST",
    // beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    url: "/api/session",
    data: { user },
    error: (err) => console.log(err),
  });
};

export const signup = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
    error: (err) => console.log(err),
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
    error: (err) => console.log(err),
  });
