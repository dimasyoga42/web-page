"use client";
import { useState } from "react";
import EndpointCard from "@/components/card";
import Navbar from "@/components/navbar";
import Search from "@/components/search";

export default function Home() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const data = [
    {
      title: "Ava Information",
      path: "/api/toram/ava",
      type: "GET",
      status: "online",
    },
    {
      title: "Waifu",
      path: "/api/etc/waifu",
      type: "GET",
      status: "online",
    },
    {
      title: "Dye Information",
      path: "/api/toram/dye",
      type: "GET",
      status: "online",
    },
    {
      title: "Search xtal",
      path: "/api/toram/xtal?name=",
      type: "GET",
      status: "online",
    },
    {
      title: "Tiraid search",
      path: "/api/toram/ability?name=",
      type: "GET",
      status: "online",
    },
    {
      title: "Item search",
      path: "/api/toram/item?name=&limit=",
      type: "GET",
      status: "online",
    },
    {
      title: "Monster search",
      path: "/api/toram/monster?q=&limit=",
      type: "GET",
      status: "offline",
    },
    {
      title: "Regis search",
      path: "/api/toram/regis?name=",
      type: "GET",
      status: "online",
    },
    {
      title: "Cuaca",
      path: "/api/etc/cuaca?q=",
      type: "GET",
      status: "offline",
    },
    {
      title: "Kerang ajaib",
      path: "/api/etc/kerang?q=",
      type: "GET",
      status: "online",
    },
    {
      title: "adv calculator",
      path: "/api/toram/spamadv?lv=&exp=&lvmx=&from=",
      type: "GET",
      status: "online",
    },
    {
      title: "khodam",
      path: "/api/etc/khodam",
      type: "GET",
      status: "online",
    },
    {
      title: "wellcome",
      path: "/api/etc/wellcome?phone=&name=&image=",
      type: "GET",
      status: "online",
    },
  ];

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSearch = () => setSearch(query);

  return (
    <div className="max-w-6xl mx-auto h-lvh">
      <Navbar />
      <Search
        value={query}
        setValue={(e) => {
          setQuery(e.target.value);
          setSearch(e.target.value);
        }}
        handler={handleSearch}
      />

      <div className="flex flex-col gap-2 mt-4">
        {filtered.length > 0 ? (
          filtered.map((item, i) => (
            <EndpointCard
              key={i}
              method={item.type}
              title={item.title}
              status={item.status}
              path={item.path}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <span className="text-4xl mb-3">🔍</span>
            <p className="text-sm font-semibold text-gray-400">
              No results for &quot;{search}&quot;
            </p>
            <p className="text-xs text-gray-300 mt-1">
              Try a different keyword
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
