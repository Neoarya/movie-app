let Search = (props) => {
  return (
    <>
      <p className="mt-4">Showing {props.total} movies from the database</p>
      <button type="button" className="btn btn-primary mt-1">
        New
      </button>
      <div className="row">
        <div className="col-5">
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control mt-4"
              placeholder="Search..."
              value={props.search}
              onChange={(e) => {
                props.updateSearch(e.currentTarget.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
