import React from "react";
import Pagination from "./Pagination";
import "./Table.css";

class Table extends React.Component {
  state = {
    currPage: 1,
  };

  selectPage = (value) => {
    this.setState({ currPage: value });
  };

  render() {
    let allMovies = this.props.moviesData;
    let currFilter = this.props.selectedFilter;

    let filteredMoviesArr = allMovies.filter((el) => {
      if (currFilter === "All Genres") {
        return true;
      } else if (el.genre.name === currFilter) {
        return true;
      }
    });

    filteredMoviesArr = filteredMoviesArr.filter((el) => {
      let movieTitle = el.title;
      movieTitle = movieTitle.toLowerCase();
      let s = this.props.search.toLowerCase();

      return movieTitle.includes(s);
    });

    let numberOfPages = Math.ceil(filteredMoviesArr.length / 4);

    let startIndex = (this.state.currPage - 1) * 3;
    let endIndex = Math.min(filteredMoviesArr.length, this.state.currPage * 3);

    let arrToBeUsedInTable = filteredMoviesArr.slice(startIndex, endIndex);

    console.log(arrToBeUsedInTable);

    return (
      <>
        <div className="row">
          <div className="col-8">
            <table class="table mt-4">
              <thead>
                <th scope="col">
                  <h2>
                    Today's Trending{" "}
                    <span class="material-icons-outlined">whatshot</span>
                  </h2>
                </th>
              </thead>
              <tbody>
                {arrToBeUsedInTable.map((el) => {
                  return (
                    <td className="movies" key={el._id}>
                      <td className="movie-card">
                        <img
                          className="movie-img"
                          src={el.photoURL}
                          height="450px"
                          width="300px"
                        />
                        <br />
                        <div className="movie-detail">
                          <b>Title: </b>
                          {el.title}
                          <br />
                          <b>Genre: </b>
                          {el.genre.name}
                          <br />
                          <b>Stock: </b>
                          {el.numberInStock}
                          <br />
                          <b>Rate: </b>
                          {el.dailyRentalRate}
                          <br />
                          <span
                            onClick={() => {
                              //toggle liked key
                              this.props.toggleLike(el._id);
                            }}
                          >
                            {el.liked ? (
                              <span class="material-icons-outlined">
                                favorite
                              </span>
                            ) : (
                              <span class="material-icons-outlined">
                                favorite_border
                              </span>
                            )}
                          </span>

                          <a className="trlr-btn" href={el.trailer}>
                            Watch Trailer
                          </a>

                          <button
                            onClick={() => {
                              this.props.deleteMovie(el._id);
                            }}
                            className="tble-dlt-btn"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </td>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          selectPage={this.selectPage}
          currPage={this.state.currPage}
          numberOfPages={numberOfPages}
        />
      </>
    );
  }
}

export default Table;
