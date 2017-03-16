const roundNumber = (num, decimals) => {
  if(isNaN(num)) {
    return 0
  } else {
    return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals)
  }
}

const dataHelper = (data) => {
  return data.reduce((mainObj, curr) => {
    if(!mainObj[curr.Location.toLowerCase()]) {
      const dataProfile = {
        location: curr.Location,
        data: { [curr.TimeFrame]: roundNumber(curr.Data, 3) }
      }
      mainObj[curr.Location.toLowerCase()] = dataProfile;
    } else {
      mainObj[curr.Location.toLowerCase()].data[curr.TimeFrame] = roundNumber(curr.Data, 3);
    }
    return mainObj;
  }, {});
}

export default dataHelper;
