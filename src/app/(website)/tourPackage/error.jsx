"use client";

export default function Error({ error, reset }) {
  return (
    <main className="container-app min-h-screen py-20">
      <div className="mx-auto max-w-lg rounded-2xl border p-8 text-center">

        <h2 className="text-2xl font-semibold">
          Failed to load packages
        </h2>

        <p className="mt-3 text-sm text-red-500">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-primary px-5 py-2 text-primary-foreground"
        >
          Try Again
        </button>

      </div>
    </main>
  );
}