export interface Product {
  id: string;
  name: string;
  category: 'engine' | 'hydraulic' | 'drivetrain' | 'industrial' | 'grease' | 'coolant';
  viscosity: string;
  standards: string;
  operatingLife: string;
  packaging: string;
  containerType: 'pail-black-gold' | 'pail-teal' | 'drum-red' | 'drum-teal' | 'pail-white' | 'pail-coolant';
  application: string;
  description: string;
}

export const initialProducts: Product[] = [
  {
    id: "fulmer-c12-plus",
    name: "FULMER C12 PLUS Super Synthetic Diesel Oil",
    category: "engine",
    viscosity: "15W-40, 20W-50",
    standards: "API CJ-4, ACEA E9, Cat ECF-3/2, Volvo VDS-3, Cummins CES 20081, MB 228.31, Mack EO-O, Renault RLD-3",
    operatingLife: "600 Hours in standard operating conditions",
    packaging: "4L, 18L, 170kg Barrel",
    containerType: "pail-black-gold",
    application: "Super-large excavators, heavy mining tippers (Sany, CAT, Volvo, Komatsu, XCMG)",
    description: "High Base Number super synthetic diesel engine oil designed for National V/VI heavy mining machinery."
  },
  {
    id: "fulmer-c12-ci4",
    name: "FULMER C12 High Base Number Diesel Oil",
    category: "engine",
    viscosity: "15W-40, 20W-50",
    standards: "API CI-4, Cat ECF-2, Volvo VDS-3, Cummins CES 20078, Deutz DQC III-10, MB 228.3, ACEA E7",
    operatingLife: "500 Hours in standard operating conditions",
    packaging: "4L, 18L, 170kg Barrel",
    containerType: "pail-black-gold",
    application: "Heavy excavators, quarry dump trucks, wheel loaders (CAT, Komatsu, Hitachi)",
    description: "High TBN formula to neutralize high-sulfur fuel and resist severe high-temperature oxidation."
  },
  {
    id: "mine-ck4-synthetic",
    name: "Mine Engineering CK-4 Synthetic Diesel Oil",
    category: "engine",
    viscosity: "15W-40, 20W-50",
    standards: "API CK-4, ACEA E9, Cummins CES 20086, Volvo VDS-4.5, MB 228.31, MAN 3775, DFS 93K222",
    operatingLife: "500 Hours in standard operating conditions",
    packaging: "4L, 18L, 170kg Barrel",
    containerType: "pail-teal",
    application: "Stage IV / Euro VI non-road equipment with DPF filters",
    description: "Low-ash formula preventing exhaust aftertreatment clogging while maintaining piston groove cleanliness."
  },
  {
    id: "fulmer-c4000-hydraulic",
    name: "FULMER C4000 Ultra-Clean High Pressure Hydraulic Oil",
    category: "hydraulic",
    viscosity: "ISO VG 46#, 68#",
    standards: "Bosch Rexroth, JALOS HK, Denison HF-0, Cincinnati P-68/69/70, Eaton 03-401, DIN 51524-2",
    operatingLife: "4,000 Hours TOST test; 35-40 MPa pumping pressure",
    packaging: "18L Pail, 170kg Barrel",
    containerType: "pail-black-gold",
    application: "High-pressure hydraulic excavator systems, hydraulic pumps",
    description: "NAS 8 international cleanliness standard with dust-free packaging. Increases pump wear resistance by >30%."
  },
  {
    id: "cave-low-temp-hydraulic",
    name: "CAVE Low & Ultra-low Temp Anti-wear Hydraulic Oil",
    category: "hydraulic",
    viscosity: "ISO VG 32#, 46#, 68#",
    standards: "GB 11118.1 L-HV, Denison HF-0, Vickers M-2950-S, DIN 51524-2, Bosch Rexroth",
    operatingLife: "Cold start down to -25°C; Pour point -48°C; VI > 150",
    packaging: "16L, 18L, 170kg Barrel",
    containerType: "pail-teal",
    application: "Hydraulic systems subject to extreme day-night temperature swings",
    description: "High VI fluid ensuring pressure stability across wide ambient temperature swings."
  },
  {
    id: "ashless-hydraulic-oil",
    name: "Ashless High Pressure Anti-wear Hydraulic Oil",
    category: "hydraulic",
    viscosity: "ISO VG 46#, 68#",
    standards: "Zinc-Free Eco-Formula, NAS 8 Grade Standard",
    operatingLife: "Demulsibility improved by 50%; Rapid oil-water separation",
    packaging: "18L Pail, 170kg Barrel",
    containerType: "drum-teal",
    application: "Mining equipment and copper/silver-containing hydraulic pumps",
    description: "100% zinc-free formula that prevents corrosion of yellow metals and silver pump components."
  },
  {
    id: "fulmer-to4-drive",
    name: "FULMER Drive System Oil TO-4",
    category: "drivetrain",
    viscosity: "SAE 10W",
    standards: "Caterpillar Cat TO-4, Komatsu KES 07.868.1, Allison C-4, ZF TE-ML 03C/07F, Eaton Vickers 35VQ25",
    operatingLife: "2,000 Hours in standard operating conditions",
    packaging: "18L Pail",
    containerType: "pail-black-gold",
    application: "Caterpillar & Komatsu powershift transmissions, gearboxes, final drives",
    description: "Delivers micro-clutch friction stability, prevents micro-pitting, and eliminates wet-brake slippage."
  },
  {
    id: "fulmer-gl5-gear",
    name: "FULMER Heavy-Duty Gear Oil GL-5",
    category: "drivetrain",
    viscosity: "SAE 85W-90, 85W-140",
    standards: "API GL-5, MIL-PRF-2105E, API MT-1, L-60 Bench Test Approved",
    operatingLife: "Four-ball PB extreme pressure 17%-25% higher than competitors",
    packaging: "4L, 16L, 18L",
    containerType: "pail-teal",
    application: "Non-road machinery rear axles, heavy differentials",
    description: "Proven in high ambient heat (>48°C) under severe continuous shock loads."
  },
  {
    id: "shive-ckd-industrial",
    name: "SHIVE Heavy-duty Industrial Gear Oil CKD",
    category: "industrial",
    viscosity: "ISO VG 100 to 680",
    standards: "GB 5903 L-CKD, FZG Failure Load Stage >12",
    operatingLife: "High defoaming speed & rapid water separation",
    packaging: "18L Pail, 170kg / 200L Drum",
    containerType: "drum-red",
    application: "Reducers, stone crushers, ball mills, crossheading conveyors",
    description: "Heavy-duty gear oil that prevents tooth surface scuffing in continuous milling duty."
  },
  {
    id: "talos-ep-grease",
    name: "TALOS EP Complex Lithium-based Grease",
    category: "grease",
    viscosity: "NLGI 1, 2, 3",
    standards: "NB/SH/T 0535; 4-Ball Weld Load: 315kg; Drop Point: 320°C",
    operatingLife: "Water washout loss <1% at 38°C; Temp: -20°C to 160°C",
    packaging: "15kg Pail",
    containerType: "pail-white",
    application: "Heavy excavator pins, swing bearings, centralized chassis systems",
    description: "Complex lithium thickener resisting softening and water spray washout in wet quarry pits."
  },
  {
    id: "talos-mos2-grease",
    name: "TALOS Molybdenum Disulfide (MoS2) EP Grease",
    category: "grease",
    viscosity: "NLGI 0, 1, 2",
    standards: "Q/DX TYS0058; 4-Ball Weld Load: 315kg; Solid MoS2 fortified",
    operatingLife: "Operating Temp: -20°C to 120°C",
    packaging: "15kg Pail",
    containerType: "pail-white",
    application: "Crusher jaw assemblies, hydraulic breaker pins, heavy vibration points",
    description: "Fortified with solid MoS2 particles that maintain a boundary barrier under shock loads."
  },
  {
    id: "fulmer-coolant-hec2",
    name: "FULMER Heavy-duty Fleet Coolant HEC-II",
    category: "coolant",
    viscosity: "Freezing: -25°C, -35°C, -45°C",
    standards: "GB 29743.1-2022 National Standard; Boiling Point: 110°C",
    operatingLife: "4,000 Hours service life",
    packaging: "9kg, 18kg Pail",
    containerType: "pail-coolant",
    application: "Heavy rear-engine excavators, mining dump trucks, concrete mixers",
    description: "High boiling point (110°C) prevents boiling over and scale formation in intense ambient heat."
  }
];