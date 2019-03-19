function logDriverNames(drivers) {
  drivers.forEach(function(person) {
    console.log(person.name);
  }) ;
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(person) {
    if (person.hometown == location) {
      console.log(person.name);
    }
  });
}

function driversByRevenue(drivers) {
  const d = drivers;
  return d.sort(function (a, b) {
    return a.revenue-b.revenue;
  })
}
