function make_car(
    manufacturer: string,
    model: string,
    ...options: [string, any][]
  ) {
    let car : { [key: string]: any } = { manufacturer, model };
    options.forEach(([key, value]) => (car[key] = value));
    return car;
  }
  
  console.log(make_car("Nissan", "Skyline", ["color", "red"], ["year", 2002]));
  console.log(make_car("Toyota", "Supra", ["color", "black"], ["sunroof", true]));

export{}