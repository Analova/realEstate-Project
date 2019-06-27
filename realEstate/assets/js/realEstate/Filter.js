import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Merry'
    }
  }

  render () {
    return (
      <section id="filter">
      <div className="ins">
      <h4>Filter</h4>
      <select name="neighbourhood filter" className="neighbourhood" onChange={this.props.change}>
          <option value="Kreutzberg">Kreutzberg</option>
          <option
          value="Fredrischein">Fredrischein</option>
      </select>
      <select name="housetype " className="housetype" onChange={this.props.change}>
          <option  value="Ranch">Ranch</option>
          <option  value="Apartament">Apartament</option>
          <option  value="Studio">Studio</option>
          <option  value="Room">Room</option>

      </select>
      <select name="bedrooms " className="bedrooms" onChange={this.props.change}>
          <option  value="2">2 BR</option>
          <option  value="1">1 BR</option>
          <option  value="3">3 BR</option>
          <option  value="4">4 BR</option>
      </select>
      <div className="filter price">
      <span className="title">Price</span>
          <input type="text" name="min_price" className="min_price" onChange={this.props.change} value={this.props.globalState.min_price}/>
          <input type="text" name="max_price" className=" min-floor-space"
          onChange={this.props.change}  value={this.props.globalState.max_price}/>
      </div>
      <div className="filter floor-space">
        <span className="title">Floor space</span>
        <input type="text" name="min_floor_space" className=" min-floor-space"
        onChange={this.props.change}  value={this.props.globalState.min_floor_space}/>
        <input type="text" name="max_floor_space" className=" min-floor-space"
        onChange={this.props.change}  value={this.props.globalState.max_floor_space}/>
      </div>
      <div className="filter extras">
        <span className="title">
        Extras
        </span>
        < label  htmlFor="extras" className="">
          <span>Elevators</span>
            <input type="checkbox" name="elevator" value="elevator" className=""
            onChange={this.props.change} />
        </ label >

        < label  htmlFor="extras" className="">
          <span>Swimming Poop</span>
             <input type="checkbox" name="swimming_pool" value="swimming_pool"  className=""  onChange={this.props.change}/>
         </ label >


      < label  htmlFor="extras" className="">
        <span>Finished Basement</span>
           <input type="checkbox" name="basement" value="basement"  className=""  onChange={this.props.change}/>
       </ label >

      < label  htmlFor="extras" className="">
         <span>Gym</span>
          <input type="checkbox" name="gym" value="gym"  className=""
           onChange={this.props.change}/>
       </ label >

      </div>
      </div>
      </section>
    )
  }
}
