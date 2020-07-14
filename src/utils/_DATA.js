/**Constants in pricing */
export const FLOORING_PSF = "5.00";

let exterior = [
  {
    id: "operable_windows_sh",
    name: 'Operable Windows 22"-44" SH',
    price: "560.00",
  },
  {
    id: "operable_windows_dh",
    name: 'Operable Windows 22"-44" DH',
    price: "570.00",
  },
  {
    id: "operable_windows_transom",
    name: "Operable Windows For Transom",
    price: "805.00",
  },
  {
    id: "double_door",
    name: "Double Door",
    price: "650.00",
  },
  {
    id: "single_door",
    name: "Single Door",
    price: "325.00",
  },
  {
    id: "garage_door",
    name: "Garage Door",
    price: "500.00",
  },
  {
    id: "shingle_roof",
    name: "Change from Metal to Shingle Roof",
    price_per_sf: "0.50",
  },
  {
    id: "tongue_groove_ceiling",
    name: "Tongue and Groove Ceiling",
    price_per_sf: "6.00",
  },
];

let size = [
  {
    id: "eighteight",
    name: "8x8",
    totalSquareFootage: 8 * 8,
    length: 8,
    width: 8,
    price_per_sf: FLOORING_PSF,
  },
  {
    id: "teneight",
    name: "10x8",
    totalSquareFootage: 10 * 8,
    length: 10,
    width: 8,
    price_per_sf: FLOORING_PSF,
  },
  {
    id: "twelveten",
    name: "12x10",
    totalSquareFootage: 12 * 10,
    length: 12,
    width: 10,
    price_per_sf: FLOORING_PSF,
  },
];

let interior = [
  {
    id: "insulated_floor",
    name: "Insulated Floor",
    price_per_sf: "9.00",
  },
  {
    id: "insulated_wall",
    name: "Wall Insulation",
    price_per_sf: "1.40",
  },
  {
    id: "insulated_ceiling",
    name: "Ceiling Insulated",
    price_per_sf: "1.40",
  },
  {
    id: "pegboard_22",
    name: 'Interior Panels Pegboard 44"',
    price: "130.00",
  },
  {
    id: "pegboard_44",
    name: 'Interior Panels Pegboard 22"',
    price: "160.00",
  },
  {
    id: "beadboard_22",
    name: 'Interior Panels Beadboard 22"',
    price: "145.00",
  },
  {
    id: "beadboard_44",
    name: 'Interior Panels Beadboard 44"',
    price: "190.00",
  },
  {
    id: "panels_melamine",
    name: 'Interior Panels 5/8" Melamine',
    price: "160.00",
  },
  {
    id: "insulated_windows_22",
    name: 'Insulated Windows 22"',
    price: "175.00",
  },
  {
    id: "insulated_windows_44",
    name: 'Insulated Windows 44"',
    price: "450.00",
  },
];

let siding = [
  {
    id: "cement_siding",
    name: "Cement Siding",
    price_per_sf: "13.00",
  },
  {
    id: "stacked_stone",
    name: `Stacked Stone 3' high`,
    price_per_sf: "25.00",
  },
];

let services = [
  {
    id: "custom_design_base",
    name: "Custom Design Base Cost",
    price: "500.00",
  },
  {
    id: "local_delivery",
    name: "Local Delivery Cost",
    price: "350.00",
  },
  {
    id: "local_installation",
    name: "Local Installation Cost",
    price: "700.00",
  },
  {
    id: "permit_drawing_support",
    name: "Permit Drawing Support Cost",
    price: "1500.00",
  },
];

let colors = [
  {
    id: "blue",
    name: "Blue",
    price: "500.00",
  },
  {
    id: "red",
    name: "Red",
    price: "500.00",
  },
];

export function getColorOptions() {
  return colors;
}

export const getColorPrice = (key) => {
  return colors.filter((option) => {
    if (option.id === key) {
      return option.price;
    }
  });
};

export function getServicesOptions() {
  return services;
}

export const getServicesPrice = (key) => {
  return services.filter((option) => {
    if (option.id === key) {
      return option.price;
    }
  });
};

export function getSidingOptions() {
  return siding;
}

export const getSidingPrice = (key, fixed) => {
  return siding.filter((option) => {
    if (option.id === key) {
      if (fixed) {
        return option.price_per_sf;
      } else {
        return option.price;
      }
    }
  });
};

export function getInteriorOptions() {
  return interior;
}

export const getInteriorPrice = (key, fixed) => {
  return interior.filter((option) => {
    if (option.id === key) {
      if (fixed) {
        return option.price_per_sf;
      } else {
        return option.price;
      }
    }
  });
};

export function getFlooringPrice(length, width) {
  return length * width * FLOORING_PSF;
}

export function getSizeOptions() {
  return size;
}

//Fixed is a bool denoting if it is fixed price. False if psf
export const getExteriorPrice = (key, fixed) => {
  return exterior.filter((option) => {
    if (option.id === key) {
      if (fixed) {
        return option.price_per_sf;
      } else {
        return option.price;
      }
    }
  });
};

export function getExteriorOptions() {
  return exterior;
}
