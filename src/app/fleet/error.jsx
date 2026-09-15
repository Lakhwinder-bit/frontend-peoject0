
"use client";

export default function Error({ error, reset }) {
  return (
    <section className="container-app py-20">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-xl font-semibold">
          Failed to load feeds
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {error.message || "Something went wrong."}
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-primary px-5 py-2 text-primary-foreground"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}

