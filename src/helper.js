export default class DistrictRepository {
  constructor(data) {
    this.data = data.reduce((mainObj, curr) => {
      if(!mainObj[curr.Location.toLowerCase()]) {
        const dataProfile = {
          location: curr.Location,
          data: { [curr.TimeFrame]: curr.Data }
        }
        mainObj[curr.Location.toLowerCase()] = dataProfile;
      } else {
        mainObj[curr.Location.toLowerCase()].data[curr.TimeFrame] = curr.Data;
      }
      return mainObj;
    }, {});
  }

  findByName(query) {
    return !query ? undefined : this.data[query.toLowerCase()];
  }
}


//
//
// {
//   colorado: {
//     data: [{year: 2006, data: 0.5}, {year: 2007, data: 0.4}],
//     location: colorado
//   },
//   boulder: {
//     data: [{year: 2006, data: 0.5}, {year: 2007, data: 0.4}],
//     location: boulder
//   }
// }
