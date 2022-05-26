import { useEffect, useState, } from "react";
import axios from "axios";
import Loader from "./Loader";




export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm,setDebouncedTerm]=useState(searchTerm)

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setDebouncedTerm(searchTerm)
    },600)

    return ()=>{
      clearTimeout(timerId)
    }
  },[searchTerm])

  useEffect(()=>{
    const search = async() =>{
      const baseURL ='https://www.stands4.com/services/v2/abbr.php'
      // const result = await axios.get(baseURL,{
      //   headers:{
      //     'Content-Type': 'application/json',
      //   },
      //   proxy:createProxyMiddleware({target:baseURL,changeOrigin:true}),
      //   params:{
      //     uid: '10423',
      //     tokenid:'SQi5YYHnp7iOrycg',
      //     term:debouncedTerm,
      //     format: 'json',
      //   },
  
      // })
      const result = await axios({
        method: 'get',
        url: baseURL,
        headers:{
              'Content-Type': 'application/json',
        },
        params:{
              uid: '10423',
              tokenid:'SQi5YYHnp7iOrycg',
              term:debouncedTerm,
              format: 'json',
            },


      })

      console.log(result);
    }

    if(debouncedTerm) {
      search()
    }
  },[debouncedTerm])

  return (
    <>
      <div className="search-container">
        <div class="ui form">
          <div class="field">
            <label>Search Acronym</label>
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                console.log(searchTerm);
              }}
              type="text"
              placeholder="eg. WHO"
            />
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
                <label>Alphabetically</label>
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
