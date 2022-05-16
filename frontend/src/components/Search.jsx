import Loader from "./Loader";

export default function Search() {
  return (
    <>
      <div className="search-container">
        <div class="ui form">
          <div class="field">
            <label>Search Acronym</label>
            <input type="text" placeholder="eg. WHO" />
          </div>
          <div class="inline fields">
            <label htmlFor="category">Search by category:</label>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="category"
                  checked=""
                  tabindex="0"
                  class="hidden"
                />
                <label>Medical</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="category"
                  tabindex="0"
                  class="hidden"
                />
                <label>IT</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="category"
                  tabindex="0"
                  class="hidden"
                />
                <label>Entertainment</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="category"
                  tabindex="0"
                  class="hidden"
                />
                <label>Programming</label>
              </div>
            </div>
          </div>
          <div class="inline fields">
            <label htmlFor="category">Sort by:</label>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="category"
                  checked=""
                  tabindex="0"
                  class="hidden"
                />
                <label>Popularity</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="category"
                  tabindex="0"
                  class="hidden"
                />
                <label>Alphabetially</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input
                  type="radio"
                  name="category"
                  tabindex="0"
                  class="hidden"
                />
                <label>Category</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
