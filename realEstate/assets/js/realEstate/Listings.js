import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (
    <section id="listings">
    <section className="search-area">
    <input type="text" name="search"/>
    </section>

    <section className="sortby-area">
    <div className="results">390 results found</div>
    <div className="sort-options">
     <select name="sortby" className="sortby">
       <option value="price-asc"> Highest Price</option>
       <option value="price-asc"> Lowest Price</option>
     </select>
     <div className="view">
     <i className="fas fa-list"></i>
     <i className="fas fa-th"></i>
     </div>
    </div>
    </section>


    <section className="listing-results">
    <div className="listing"ś>
      <div className="listing-img" >
       <span className="address">Address</span>
       <div className="details">
         <div className="user-img"> </div>
         <div className="user-details">
          <span className="user-name">Nina Smith</span>
          <span className="post-date">05.08.2016</span>
         </div>
         <div className="listing-details">
           <div className="floor-space"><i class="far fa-square"></i> <span>1000 ft&sup2; </span></div>
           <div className="bedrooms">
           <i className="fas fa-bed"></i>
           <span>3 bedrooms </span>
           </div>
         </div>
       </div>
      </div>
      <div className="bottom-info">
     <span> $1200/ month</span>
      <span><i className="fas fa-map-marker"></i> Kreutzber Berlin</span>
      </div>
    </div>
    </section>

    <section className="pagination">
      <ul className="pagination-numbers">
      <li> Prev</li>
      <li> 1</li>
      <li> 2</li>
      <li> 3</li>
      <li> 4</li>
      <li> Next</li>
      </ul>
    </section>

    </section>
    )
  }
}
