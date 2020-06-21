/**Constants in pricing */
const FLOORING_PSF = 5.0;
const CUSTOM_DESIGN_BASE = 500.0;
const LOCAL_DELIVERY = 350.0;
const LOCAL_INSTALLATION = 700.0;
const PERMIT_DRAWING_SUPPORT = 1500.0;

let exterior = [
  {
    id: "operable_windows_sh",
    name: 'Operable Windows 22"-44" SH',
    price: 560,
  },
  {
    id: "operable_windows_dh",
    name: 'Operable Windows 22"-44" DH',
    price: 570,
  },
  {
    id: "operable_windows_transom",
    name: "Operable Windows For Transom",
    price: 805,
  },
  {
    id: "double_door",
    name: "Double Door",
    price: 650,
  },
  {
    id: "single_door",
    name: "Single Door",
    price: 325,
  },
  {
    id: "garage_door",
    name: "Garage Door",
    price: 500,
  },
  {
    id: "shingle_roof",
    name: "Change from Metal to Shingle Roof",
    price_per_sf: 0.5,
  },
  {
    id: "tongue_groove_ceiling",
    name: "Tongue and Groove Ceiling",
    price_per_sf: 6.0,
  },
];

let size = [
  {
    id: "eight",
    options: [
      {
        id: "eight",
        price: 8 * 8 * FLOORING_PSF,
      },
      {
        id: "ten",
        price: 8 * 10 * FLOORING_PSF,
      },
      {
        id: "fourteen",
        price: 8 * 14 * FLOORING_PSF,
      },
      {
        id: "sixteen",
        price: 8 * 16 * FLOORING_PSF,
      },
    ],
  },
  {
    id: "ten",
    options: [
      {
        id: "eight",
        price: 10 * 8 * FLOORING_PSF,
      },
      {
        id: "ten",
        price: 10 * 10 * FLOORING_PSF,
      },
      {
        id: "fourteen",
        price: 10 * 14 * FLOORING_PSF,
      },
      {
        id: "sixteen",
        price: 10 * 16 * FLOORING_PSF,
      },
      {
        id: "eighteen",
        price: 10 * 18 * FLOORING_PSF,
      },
      {
        id: "twenty",
        price: 10 * 20 * FLOORING_PSF,
      },
    ],
  },
  {
    id: "twelve",
    options: [
      {
        id: "twelve",
        price: 12 * 12 * FLOORING_PSF,
      },
      {
        id: "fourteen",
        price: 12 * 14 * FLOORING_PSF,
      },
      {
        id: "sixteen",
        price: 12 * 16 * FLOORING_PSF,
      },
      {
        id: "eighteen",
        price: 12 * 18 * FLOORING_PSF,
      },
      {
        id: "twenty",
        price: 12 * 20 * FLOORING_PSF,
      },
    ],
  },
];

let interior = [
  {
    id: "insulated_floor",
    name: "Insulated Floor",
    price_per_sf: 9.0,
  },
  {
    id: "insulated_wall",
    name: "Wall Insulation",
    price_per_sf: 1.4,
  },
  {
    id: "insulated_ceiling",
    name: "Ceiling Insulated",
    price_per_sf: 1.4,
  },
  {
    id: "pegboard_22",
    name: 'Interior Panels Pegboard 44"',
    price: 130.0,
  },
  {
    id: "pegboard_44",
    name: 'Interior Panels Pegboard 22"',
    price: 160.0,
  },
  {
    id: "beadboard_22",
    name: 'Interior Panels Beadboard 22"',
    price: 145.0,
  },
  {
    id: "beadboard_44",
    name: 'Interior Panels Beadboard 44"',
    price: 190.0,
  },
  {
    id: "panels_melamine",
    name: 'Interior Panels 5/8" Melamine',
    price: 160.0,
  },
  {
    id: "insulated_windows_22",
    name: 'Insulated Windows 22"',
    price: 175.0,
  },
  {
    id: "insulated_windows_44",
    name: 'Insulated Windows 44"',
    price: 450.0,
  },
];

let siding = [
  {
    id: "cement_siding",
    name: "Cement Siding",
    price_per_sf: 13.0,
  },
  {
    id: "stacked_stone",
    name: `Stacked Stone 3' high`,
    price_per_sf: 25.0,
  },
];

let services = [
  {
    id: "custom_design_base",
    name: "Custom Design Base Cost",
    price: 500.0,
  },
  {
    id: "local_delivery",
    name: "Local Delivery Cost",
    price: 350.0,
  },
  {
    id: "local_installation",
    name: "Local Installation Cost",
    price: 700.0,
  },
  {
    id: "permit_drawing_support",
    name: "Permit Drawing Support Cost",
    price: 1500.0,
  },
];

let colors = [
  {
    id: "blue",
    name: "Blue",
    price: 500.0,
  },
  {
    id: "red",
    name: "Red",
    price: 500.0,
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
