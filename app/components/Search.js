"use client";
import { useState, useEffect } from "react";
import { supabase } from "../_lib/supabase";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Search = () => {
  const [searchResult, setSearchResult] = useState("");
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(e) {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setSearchResult("");
    }
  }

  useEffect(() => {
    async function getSearchData() {
      if (searchInput !== "") {
        const { data, error } = await supabase
          .from("products")
          .select()
          .ilike("title", `%${searchInput}%`);
        setSearchResult(data);
        if (error) console.log(error);
      }
    }
    getSearchData();
  }, [searchInput]);

  return (
    <div className="flex w-full">
      <div className="h-14 w-full max-w-[75%] md:max-w-[90%] mr-2 bg-[#FFF8EF] flex items-center rounded-3xl">
        <input
          onChange={handleSearch}
          className="pl-4 w-[80%] bg-[#FFF8EF] border-none focus:outline-none"
          type="text"
          placeholder="Find what you want"
        />
      </div>
      <Button
        text={<Image width={20} height={20} src="/Search.png" />}
        style="rounded-full bg-[#181516] h-14 w-14 flex justify-center items-center"
      />

      {searchResult && (
        <div className="z-10 rounded-md absolute top-[300px] md:top-[285px] max-w-[65%] md:max-w-[74%] w-[650px] h-content bg-[#FFF8EF]">
          <ul>
            {searchResult.map((items) => (
              <span key={items.id}>
                <Link href={`/product/${items.id}`} className="no-underline">
                  <span className="flex">
                    <li className="my-2 mx-2 pl-2">{items.title}</li>
                    <Image height={5} width={35} src={`/${items.image}`} />
                  </span>
                </Link>
              </span>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
