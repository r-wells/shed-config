import {
  getSidingPrice,
  getInteriorPrice,
  getFlooringPrice,
  getExteriorPrice,
  getServicesPrice,
  getColorPrice,
  getColorOptions,
  getServicesOptions,
  getSizeOptions,
  getInteriorOptions,
  getSidingOptions,
  getExteriorOptions,
} from "./_DATA";

export function getInitialData(key) {
  console.log("key", key);
  const data = {
    Siding: getSidingOptions(),
    Interior: getInteriorOptions(),
    Sizing: getSizeOptions(),
    Exterior: getExteriorOptions(),
    Services: getServicesOptions(),
    Colors: getColorOptions(),
  };
  return data[key];
}

export function getPricingOptions(key) {
  return {
    Siding: getSidingPrice,
    Interior: getInteriorPrice,
    Sizing: getFlooringPrice,
    Exterior: getExteriorPrice,
    Services: getServicesPrice,
    Colors: getColorPrice,
  };
}
