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
  return drivers.sort(function(a, b) {
    a[revenue].localeCompare(b.revenue);
  });
}
