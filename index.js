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
  const d = drivers.sort(function(a, b) {
    a.revenue-b.revenue;
  });
  return d;
}
