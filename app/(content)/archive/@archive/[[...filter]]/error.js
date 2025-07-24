'use client';

export default function Error({ error, reset }) {
  return (
    <div id="error">
      <h2>An error occuped!</h2>
      <p>{error.message}</p>
    </div>
  );
}
