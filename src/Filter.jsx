import React from "react";

let Filter = (props) => {
  return (
    <div className="col-3">
      <ul className="list-group m-4">
        <li
          onClick={() => {
            props.handleFilter("All Genres");
          }}
          className={`list-group-item ${
            props.selectedFilter == "All Genres" ? "active" : ""
          }`}
        >
          All Genres
        </li>
        {props.genreData.map((el) => {
          return (
            <li
              onClick={() => {
                props.handleFilter(el.name);
              }}
              key={el._id}
              className={`list-group-item ${
                props.selectedFilter == el.name ? "active" : ""
              }`}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
