import React, {useState, useEffect, useRef} from 'react';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';

interface searchBoxProps{
    type: "normal" | "mobile",
    searchOpen?: boolean
}

const SearchBox = (props: searchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const inputNormal = useRef<HTMLInputElement>(null);
  const inputMobile = useRef<HTMLInputElement>(null);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.type === "normal" && inputNormal.current) {
      inputNormal.current.blur();
    }
    else if (props.type === "mobile" && inputMobile.current){
        inputMobile.current.blur();
    }
    if (searchTerm.trim() !== "") {
      // Redirect to /search with the keyword as a query parameter
      navigate(`/search?keyword=${encodeURIComponent(searchTerm)}`);
    }
  };
  useEffect(() => {
    if (
      location.pathname !== "/search" ||
      location.search.indexOf("?keyword=*") ||
      location.search.indexOf("?keyword=sales")
    ) {
      if (props.type === "normal" && inputNormal.current) {
        inputNormal.current.value = "";
      } else if (props.type === "mobile" && inputMobile.current) {
        inputMobile.current.value = "";
      }
    }
  }, [location.pathname])


  return props.type === "normal" ? (
    <form
      action="javascript:void(0)"
      className="search-bar"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="q"
        id="search-product"
        placeholder="Tìm kiếm sản phẩm"
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={inputNormal}
      />
      <button type="submit">
        <img
          width="23"
          height="23"
          src="https://img.icons8.com/ios/50/search--v1.png"
          alt="search--v1"
        />
      </button>
    </form>
  ) : (
    <div
      className={`nav__mobile-search ${
        props.searchOpen && "nav__mobile-search-open"
      }`}
    >
      <form
        action="javascript:void(0)"
        className="search-bar"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="q"
          id="search-product"
          placeholder="Tìm kiếm sản phẩm"
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={inputMobile}
        />
        <button type="submit">
          <img
            width="23"
            height="23"
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBox