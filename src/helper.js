export default class DistrictRepository {
  constructor(data) {
    this.data = data.reduce((mainObj, curr) => {
      if(!mainObj[curr.Location.toLowerCase()]) {
        const dataProfile = {
          location: curr.Location,
          data: { [curr.TimeFrame]: this.roundNumber(curr.Data, 3) }
        }
        mainObj[curr.Location.toLowerCase()] = dataProfile;
      } else {
        mainObj[curr.Location.toLowerCase()].data[curr.TimeFrame] = this.roundNumber(curr.Data, 3);
      }
      return mainObj;
    }, {});
  }

  findByName(query) {
    return !query ? undefined : this.data[query.toLowerCase()];
  }

  roundNumber(num, decimals) {
    if(isNaN(num)) {
      return 0
    } else {
      return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals)
    }
  }
  
  findAllMatches(query) {
    let dataArray = Object.values(this.data);

    if(query) {
      let filtered = dataArray.filter((curr) => {
        let lowerCaseLocation = curr.location.toLowerCase();
        let lowerCaseQuery = query.toLowerCase();
        return lowerCaseLocation.includes(lowerCaseQuery);
      });
      return filtered;
    } else {
      return dataArray;
    }
  }
}
