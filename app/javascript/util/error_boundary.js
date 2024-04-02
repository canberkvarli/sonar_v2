import React from "react";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-div">
      <p className="err-msg">Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} className="err-btn">
        Try again
      </button>
      <p>Or try going to the previous page and refresh</p>
    </div>
  );
}
