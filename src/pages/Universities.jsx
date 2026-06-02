import { useState } from "react";

import { universities } from "../data/universities";

import UniversityCard from "../components/universities/UniversityCard";
import UniversityFilters from "../components/universities/UniversityFilters";

export default function Universities() {

  const [search, setSearch] =
    useState("");

  const [rating, setRating] =
    useState("");

  const [sort, setSort] =
    useState("");

  let filtered =
    universities.filter((u) =>
      u.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (rating) {
    filtered =
      filtered.filter(
        (u) =>
          u.rating >=
          Number(rating)
      );
  }

  if (sort === "high") {
    filtered.sort(
      (a, b) =>
        b.rating - a.rating
    );
  }

  if (sort === "low") {
    filtered.sort(
      (a, b) =>
        a.rating - b.rating
    );
  }

  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1
          className="
          text-5xl
          font-bold
          mb-10
          "
        >
          Universities
        </h1>

        <UniversityFilters
          search={search}
          setSearch={setSearch}
          rating={rating}
          setRating={setRating}
          sort={sort}
          setSort={setSort}
        />

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >
          {filtered.map(
            (university) => (
              <UniversityCard
                key={university.id}
                university={university}
              />
            )
          )}
        </div>

      </div>

    </section>
  );
}