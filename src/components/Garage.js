import React, { Component } from "react";
import Car from "./Car";


class Garage extends Component {

  render() {
    const renderedCars = this.props.cars.filter((car)=> {
      const carYear = car.year;
      const filterYear = (this.props.year_filter ? this.props.year_filter : 0);
      const isCar = carYear>=filterYear;
      return isCar;
     })
    //console.log(this.props);
    return (
      <div>
        {
          // eslint-disable-next-line
          
          renderedCars.map(_car => <Car car={_car} key={_car.id}
             delete_car = {this.props.delete_car} update_car = {this.props.update_car}
             get_car = {this.props.get_car}
             />)
        }
      </div>
    );
  }
}

export default Garage;
