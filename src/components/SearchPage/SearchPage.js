import React from "react";
import { MdSearch, MdUpdate } from "react-icons/md";
import {
  SearchPage,
  LoadMoreButton,
  MovieCardItem,
  MoviesWrapper,
  SearchWrapper,
  SectionHeader,
  SectionTitle,
} from "./SearchPageStyles";

const SearchPageComponent = () => {
  return (
    <SearchPage id="byGenre">
      <SectionHeader>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Search</p>
        </SectionTitle>
      </SectionHeader>

      <SearchWrapper>
        <input
          type="text"
          name="search"
          className="searchBox"
          placeholder="Type a movie you want to watch"
          tabIndex="100"
        />
        <div className="searchButton" tabIndex="101">
          Search <MdSearch />
        </div>
      </SearchWrapper>

      <MoviesWrapper>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
      </MoviesWrapper>
      <LoadMoreButton>
        <MdUpdate />
        Load more movies
      </LoadMoreButton>
    </SearchPage>
  );
};

export default SearchPageComponent;
