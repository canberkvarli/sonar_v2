export const createLike = async (like) => {
  try {
    const response = await fetch(`/api/tracks/${like.track_id}/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like }),
    });

    if (!response.ok) {
      throw new Error("Failed to create like");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating like:", error);
    throw error;
  }
};

export const deleteLike = async (likeId, trackId) => {
  try {
    const response = await fetch(`/api/tracks/${trackId}/likes/${likeId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete like");
    }
  } catch (error) {
    console.error("Error deleting like:", error);
    throw error;
  }
};
