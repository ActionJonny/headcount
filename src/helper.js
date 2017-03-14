export default class DistrictRepository {
  constructor(data) {
    this.data = data.reduce((mainObj, curr) => {
      let metrics = {
        profile: [],
        location: curr.Location
      }
      if(!mainObj[curr.Location]) {
        mainObj[curr.Location.toLowerCase()] = metrics;
        metrics.profile.push({year: curr.TimeFrame, data: curr.Data});
      } else {
        mainObj[curr.Location].profile.push({year: curr.TimeFrame, data: curr.Data});
      }
      return mainObj;
    }, {});
    console.log(this.data.location);
  }
  
  findByName(query) {
    let lowQuery = !query ? undefined : query.toLowerCase();
    
    if(this.data[lowQuery]) {
      return this.data[lowQuery];
    } else {
      return undefined;
    }
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

