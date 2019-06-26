import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (
      <section id="filter">
      <div className="ins">
      <h4>Filter</h4>
      <select name="neighbourhood filter" className="neighbourhood">
          <option>Kreutzberg</option>
      </select>
      <select name="housetype filter" className="housetype">
          <option>Ranch</option>
      </select>
      <select name="bedrooms filter" className="bedrooms">
          <option>2 BR</option>
      </select>
      <div className="filter price">
      <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price" />
          <input type="text" name="min-price" className="max-price"/>
      </div>
      <div className="filter floor-space">
        <span className="title">Floor space</span>
        <input type="text" name="floor-space" className="floor-space" />
        <input type="text" name=" floor-space" className="floor-space"/>
      </div>
      <div className="filter extras">
        <span className="title">
        Extras
        </span>
        < label  for="extras" className="">
          <span>Elevators</span>
            <input type="checkbox" name="extras" value="elevator" className="" />
        </ label >


        < label  for="extras" className="">
          <span>Swimming Pool</span>
            <input type="checkbox" name="extras" value="elevator" className="" />
        </ label >

      < label  for="extras" className="">
        <span>Finished Basement</span>
           <input type="checkbox" name="extras" value="finished basement"  className="" />
       </ label >

      < label  for="extras" className="">
         <span>Gym</span>
          <input type="checkbox" name="extras" value="gym"  className="" />
       </ label >

      </div>
      </div>
      </section>
    )
  }
}
