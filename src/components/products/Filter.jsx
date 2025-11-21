import { useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch } from "react-icons/fi"; // From Feather Icons
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router";

const Filter = ({ categories }) => {

  // --- HOOKS ---
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Create a mutable copy for handlers
  const params = new URLSearchParams(searchParams);

  // --- LOCAL STATE ---
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  // --- EFFECT 1: Sync URL to Local State ---
  useEffect(() => {
    const currentCategory = searchParams.get("category") || "all";
    const currentSortOrder = searchParams.get("sortby") || "asc";
    const currentSearchTerm = searchParams.get("keyword") || "";

    setCategory(currentCategory);
    setSortOrder(currentSortOrder);
    setSearchTerm(currentSearchTerm);
  }, [searchParams]);

  // --- HANDLERS ---
  const handleChangeCategory = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }
    navigate(`${pathname}?${params.toString()}`);
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "asc" ? "dsc" : "asc";
    params.set("sortby", newOrder);
    navigate(`${pathname}?${params.toString()}`);
  };

  // --- EFFECT 2: Debounce Search Term ---
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (searchTerm) {
        params.set("keyword", searchTerm);
      } else {
        params.delete("keyword");
      }
      navigate(`${pathname}?${params.toString()}`);
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, searchParams, navigate, pathname]); // Note: searchTerm is the main trigger

  const handleClearFilter = () => {
    navigate({ pathname: window.location.pathname });
  };

  // //it allow to update query param
  // const [searchParams] = useSearchParams();
  // const params = new URLSearchParams(searchParams);

  // //it provide info about current url
  // const {pathName} = useLocation();
  // //it provide navigate to new url
  // const navigate = useNavigate();

  // const [category, setCategory] = useState("all");
  // const [sortOrder, setSortOrder] = useState("asc");
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   const currectCategory = searchParams.get("category") || "all";
  //   const currentSortOrder = searchParams.get("sortby") || "asc";
  //   const currentSearchTerm = searchParams.get("keyword") || "";

  //   setCategory(currectCategory);
  //   setSortOrder(currentSortOrder);
  //   setSearchTerm(currentSearchTerm);
  // }, [searchParams]);

  // const handleChangeCategory = (event) => {
  //   const selectedCategory = event.target.value;
  //   if (selectedCategory === "all") {
  //     params.delete("category");
  //   }
  //    else {
  //     params.set("category", selectedCategory);
  //   }
  //   navigate(`${pathName}?${params.toString()}`);
  //   setCategory(selectedCategory);
  // };

  // const toggleSortOrder = () => {
  //   setSortOrder((preOrder) => {
  //     const newOrder = preOrder === "asc" ? "dsc" : "asc";
  //     params.set("sortby", newOrder);
  //     navigate(`${pathName}?${params.toString()}`);
  //     return newOrder;
  //   });
  // };

  // useEffect(()=>{
  //   const handler=setTimeout(()=>{
  //     if(searchTerm){
  //       searchParams.set("keyword",searchTerm);
  //     }
  //     else{
  //       searchParams.delete("keyword");
  //     }

  //     navigate(`${pathName}?${params.toString()}`);

  //   },700);

  //   return ()=>{
  //     clearTimeout(handler);
  //   }
  // },[searchParams,searchTerm,navigate,pathName]);

  // const handleClearFilter=()=>{
  //   navigate({pathname:window.location.pathname});
  // }
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
      {/* SEARCH BAR */}
      <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search Products"
          className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-hidden focus:ring-2 focus:ring-[#1976d2]"
        />
        <FiSearch className="absolute left-3 text-slate-800 size={20}" />
      </div>

      {/* CATEGORY SELECTION */}
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        <FormControl
          className="text-slate-800 border-slate-700"
          variant="outlined"
          size="small"
        >
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            onChange={handleChangeCategory}
            label="Category"
            className="min-w-[120px] text-slate-800 border-slate-700"
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryName}>
                {item.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* SORT BUTTON  & CLEAR BUTTTON */}

        <Tooltip
          title={`sorted by price ${sortOrder === "asc" ? "asc" : "dsc"}`}
        >
          <Button
            variant="contained"
            color="primary"
            className="flex items-center gap-2 h-10"
            onClick={toggleSortOrder}
          >
            Sort By
            {sortOrder === "asc" ? (
              <FiArrowUp size={20} />
            ) : (
              <FiArrowDown size={20} />
            )}
          </Button>
        </Tooltip>

        <button
          className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-sm transition duration-300 ease-in shadow-md focus:outline-none"
          onClick={handleClearFilter}
        >
          <FiRefreshCw size={16} className="font-bold" />
          <span className="font-bold">Clear Filter</span>
        </button>
      </div>
    </div>
  );
};
export default Filter;
