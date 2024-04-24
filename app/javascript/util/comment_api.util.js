export const createComment = async (comment) => {
  try {
    const response = await fetch(`/api/tracks/${comment.track_id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });

    if (!response.ok) {
      throw new Error("Failed to create comment");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};

export const deleteComment = async (commentId, trackId) => {
  try {
    const response = await fetch(
      `/api/tracks/${trackId}/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete comment");
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error;
  }
};
