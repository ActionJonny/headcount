export default class DistrictRepository {
  constructor(data) {
    this.data = data.reduce((acc, curr) => {
      let location = curr.Location;
      if(!acc[location]) {
        
      } 
    }, {});
  }
}
