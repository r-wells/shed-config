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
    id: "eight",
    options: [
      {
        id: "eight",
        name: "8x8",
        price: 8 * 8 * Number(FLOORING_PSF),
        length: 8,
        width: 8,
      },
      {
        id: "ten",
        name: "8x10",
        price: 8 * 10 * Number(FLOORING_PSF),
        length: 8,
        width: 10,
      },
      {
        id: "fourteen",
        name: "8x14",
        price: 8 * 14 * Number(FLOORING_PSF),
        length: 8,
        width: 14,
      },
      {
        id: "sixteen",
        name: "8x16",
        price: 8 * 16 * Number(FLOORING_PSF),
        length: 8,
        width: 16,
      },
    ],
  },
  {
    id: "ten",
    options: [
      {
        id: "eight",
        name: "10x8",
        price: 10 * 8 * Number(FLOORING_PSF),
        length: 10,
        width: 8,
      },
      {
        id: "ten",
        name: "10x10",
        price: 10 * 10 * Number(FLOORING_PSF),
        length: 10,
        width: 10,
      },
      {
        id: "fourteen",
        name: "10x14",
        price: 10 * 14 * Number(FLOORING_PSF),
        length: 10,
        width: 14,
      },
      {
        id: "sixteen",
        name: "10x16",
        price: 10 * 16 * Number(FLOORING_PSF),
        length: 10,
        width: 16,
      },
      {
        id: "eighteen",
        name: "10x18",
        price: 10 * 18 * Number(FLOORING_PSF),
        length: 10,
        width: 18,
      },
      {
        id: "twenty",
        name: "10x20",
        price: 10 * 20 * Number(FLOORING_PSF),
        length: 10,
        width: 20,
      },
    ],
  },
  {
    id: "twelve",
    options: [
      {
        id: "twelve",
        name: "12x12",
        price: 12 * 12 * Number(FLOORING_PSF),
        length: 12,
        width: 12,
      },
      {
        id: "fourteen",
        name: "12x14",
        price: 12 * 14 * Number(FLOORING_PSF),
        length: 12,
        width: 14,
      },
      {
        id: "sixteen",
        name: "12x16",
        price: 12 * 16 * Number(FLOORING_PSF),
        length: 12,
        width: 16,
      },
      {
        id: "eighteen",
        name: "12x18",
        price: 12 * 18 * Number(FLOORING_PSF),
        length: 12,
        width: 18,
      },
      {
        id: "twenty",
        name: "12x20",
        price: 12 * 20 * Number(FLOORING_PSF),
        length: 12,
        width: 20,
      },
    ],
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
