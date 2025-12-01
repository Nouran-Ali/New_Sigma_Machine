export const products = [
  {
    id: 1,
    name: "3 Axis CNC Router Machine",
    overview:
      "Reliable, Accurate, and Versatile CNC Cutting for Wood, Acrylic, Plastics & More.",
    image: "/../products/router-550x750.png",
    image_small: "/../products/router-350x370.png",
    slug: "3-axis-cnc-router-machine",
    title: "3 Axis CNC Router Machine",
    desc: "The 3 Axis CNC router is designed for cutting, engraving, and milling wood, acrylic, plastics, and various sheet materials with high precision and long-term stability.",

    details: {
      keyFeatures: [
        {
          title: "High-Precision 3-Axis Motion System",
          points: [
            "Accurate movement on X, Y & Z axes",
            "Supports 2D, 2.5D, and basic 3D carving",
            "Smooth contour cutting with minimal vibration",
            "Ideal for engraving, profiling, pocketing, and drilling",
          ],
        },
        {
          title: "Industrial-Grade Structure",
          points: [
            "Heavy-duty steel welded frame",
            "Reinforced gantry structure",
            "HIWIN linear guide rails",
            "Rack & pinion transmission on X and Y axes",
            "Ball screw on Z-axis for maximum accuracy",
          ],
        },
        {
          title: "Powerful Spindle Options",
          points: [
            "3.2kW / 4.5kW / 6kW / 9kW spindle options",
            "Air-cooled or water-cooled",
            "Up to 24,000 RPM",
            "Suitable for hardwood, MDF, acrylic, foam, plastics, and more",
          ],
        },
        {
          title: "Smart CNC Controller",
          points: [
            "NcStudio, RichAuto DSP, Mach3/Mach4, Syntec (optional)",
            "Easy operation and smooth toolpath processing",
            "USB file transfer",
            "Supports G-code and standard CAM outputs",
          ],
        },
        {
          title: "Vacuum Table & Dust Collection (Optional)",
          points: [
            "Strong vacuum hold-down for sheet materials",
            "Includes dust shoe and dust collector",
            "Provides cleaner cuts and reduces cleanup time",
          ],
        },
      ],

      workingArea: ["1300 × 2500 mm", "1500 × 3500 mm", "2000 × 4000 mm", "2000 × 6000 mm"],

      applications: [
        {
          category: "Woodworking & Furniture",
          items: [
            "MDF doors & cabinet panels",
            "Decorative wall panels",
            "2.5D carving",
            "Furniture components",
          ],
        },
        {
          category: "Signage & Advertising",
          items: [
            "Acrylic letters",
            "Engraved signs",
            "PVC, foamboard, and composite sheets",
            "2D/3D logo production",
          ],
        },
        {
          category: "Plastic & Acrylic Fabrication",
          items: [
            "Display stands",
            "Lightboxes",
            "Retail fixtures",
            "Precision outlines",
          ],
        },
        {
          category: "Prototyping & Model Making",
          items: ["Foam patterns", "Casting molds", "Architectural models"],
        },
        {
          category: "General Manufacturing",
          items: ["Drilling", "Pocketing", "Contour cutting", "Engraving & labeling"],
        },
      ],

      advantages: [
        "Stable and reliable for long working hours",
        "Excellent price-to-performance ratio",
        "Easy to learn and operate",
        "Supports a wide variety of materials",
        "High-speed cutting with smooth finishing",
        "Low maintenance and long service life",
      ],
    },
  },
  // {
  //   id: 2,
  //   name: "4 Axis CNC Router Machine",
  //   image: "/../products/21.webp",
  //   slug: "4-axis-cnc-router-laser-machine",
  //   title: "Production Process Of 4 Axis CNC Router Machine",
  //   desc: "The 4-axis CNC router introduces a rotating spindle...",
  // },
  {
    id: 2,
    name: "4 Axis CNC Router Machine",
    overview:
      "Advanced 4-Axis Machining with Tilting Spindle for Angled Cutting & Deep 3D Carving.",
    image: "/../products/21.webp",
    slug: "4-axis-cnc-router-laser-machine",
    title: "4 Axis CNC Router Machine",
    desc: "The 4-axis CNC router features a tilting spindle for advanced machining, allowing angled cuts, undercuts, multi-surface shaping, and deep 3D carving without flipping the workpiece.",

    details: {
      keyFeatures: [
        {
          title: "Tilting Spindle (B-Axis on the Head)",
          points: [
            "Spindle rotates/tilts around the B-axis",
            "No need to flip the workpiece",
            "Ideal for angled cuts, chamfers, and curved surfaces",
            "Supports true 4-axis simultaneous machining",
            "Perfect for deep 3D sculptures and complex contours",
          ],
        },
        {
          title: "High-Performance Cutting Capability",
          points: [
            "Executes undercuts and negative angles",
            "Carves deep 3D shapes smoothly",
            "Cuts multi-directional surfaces in a single setup",
            "Reduces manual finishing significantly",
          ],
        },
        {
          title: "Industrial-Grade Machine Structure",
          points: [
            "Heavy-duty welded steel body",
            "Reinforced gantry for tilting spindle load",
            "HIWIN linear guide rails",
            "Rack & pinion transmission for X/Y axes",
            "Ball screw Z-axis for maximum accuracy",
          ],
        },
        {
          title: "Powerful Spindle Options",
          points: [
            "6kW / 9kW / 12kW spindle power",
            "Air-cooled or water-cooled options",
            "Up to 24,000 RPM",
            "Suitable for hardwood, MDF, foam, acrylic, and composites",
          ],
        },
        {
          title: "Smart 4-Axis CNC Controller",
          points: [
            "Supports Syntec, NcStudio, RichAuto, and optional OSAI",
            "Smooth interpolation across X, Y, Z, and A axes",
            "Supports 4-axis G-code",
            "Auto tool calibration",
            "High-precision toolpath control",
          ],
        },
      ],

      workingArea: ["1500 × 3500 mm", "2000 × 4000 mm", "2000 × 6000 mm"],

      applications: [
        {
          category: "High-End Furniture Manufacturing",
          items: [
            "Curved doors",
            "Sculpted chair and table components",
            "Multi-angle joints",
            "Artistic wooden structures",
          ],
        },
        {
          category: "3D Carving & Artistic Production",
          items: [
            "Deep 3D sculpting",
            "Organic and artistic shapes",
            "Complex multi-angle carvings",
          ],
        },
        {
          category: "Mold & Prototype Production",
          items: [
            "Foam molds",
            "Wooden patterns",
            "Multi-surface shaping without repositioning",
          ],
        },
        {
          category: "Architectural Decoration",
          items: [
            "Curved wall panels",
            "Multi-level decorative elements",
            "Sculpted columns and artistic features",
          ],
        },
      ],

      advantages: [
        "True 4-axis machining with spindle rotation",
        "Cuts angles impossible for standard 3-axis machines",
        "No need to flip or reposition material",
        "Faster and more accurate multi-surface machining",
        "Perfect for complex artistic or industrial tasks",
        "High finishing quality with minimal handwork",
      ],
    },
  },
  // {
  //   id: 3,
  //   name: "CNC Aluminum Milling Machine",
  //   image: "/../products/22.webp",
  //   slug: "cnc-aluminum-milling-laser-machine",
  //   title: "Production Process Of CNC Aluminum Milling Machine",
  //   desc: "Specialized for aluminum, the CNC aluminum milling machine...",
  // },
  {
    id: 3,
    name: "5 Axis CNC Router Machine",
    overview:
      "Ultimate 5-Axis Machining for Complex 3D Surfaces, Deep Sculpting & Multi-Angle Cutting.",
    image: "/../products/22.webp",
    slug: "5-axis-cnc-router-machine",
    title: "5 Axis CNC Router Machine",
    desc: "The 5-axis CNC router features a dual-axis tilting and rotating spindle (B-axis + C-axis), enabling full multi-directional machining for highly complex 3D geometries, sculptures, molds, and advanced industrial components.",

    details: {
      keyFeatures: [
        {
          title: "Dual-Axis Tilting Spindle Head (B-axis + C-axis)",
          points: [
            "Spindle tilts on B-axis and rotates on C-axis",
            "Supports full 5-axis simultaneous machining",
            "Perfect for undercuts, compound angles, and curved surfaces",
            "Tool can approach the workpiece from any direction",
            "Eliminates repositioning or flipping the material",
          ],
        },
        {
          title: "True 5-Axis Interpolation",
          points: [
            "Smooth and accurate 5-axis toolpath execution",
            "Ideal for organic shapes, sculptures, and molds",
            "Perfect for aerospace-grade surface machining",
            "Delivers ultra-smooth finishing with minimal handwork",
          ],
        },
        {
          title: "High-Strength Heavy-Duty Structure",
          points: [
            "Reinforced steel frame designed for 5-axis torque",
            "Gantry engineered to support tilting-head spindle weight",
            "HIWIN/PMI linear guide rails",
            "Rack & pinion transmission on X/Y axes",
            "Ball screw Z-axis for maximum accuracy",
            "Rigid construction for vibration-free machining",
          ],
        },
        {
          title: "High-Performance Spindle Options",
          points: [
            "9kW / 12kW / 15kW HSD or equivalent",
            "Air-cooled or water-cooled",
            "Up to 24,000 RPM",
            "Supports long-duration 5-axis machining cycles",
          ],
        },
        {
          title: "Advanced 5-Axis CNC Controller",
          points: [
            "Syntec 5-axis, OSAI 5-axis, Siemens/Fanuc (optional)",
            "Supports full 5-axis simultaneous machining",
            "5-axis RTCP (Rotational Tool Center Point)",
            "Tool length compensation",
            "Smooth 5-axis surface processing",
            "High-speed data handling and precision control",
          ],
        },
      ],

      workingArea: ["1500 × 3500 mm", "2000 × 4000 mm", "2000 × 6000 mm"],

      applications: [
        {
          category: "High-End Furniture & Woodworking",
          items: [
            "Sculpted chair bodies",
            "Curved and twisted wooden panels",
            "Artistic wooden structures",
            "Complex multi-angle joints",
          ],
        },
        {
          category: "3D Sculpture & Artistic Production",
          items: [
            "Life-size statues",
            "Organic 3D forms",
            "Art installations",
            "Advanced decorative shapes",
          ],
        },
        {
          category: "Mold & Prototype Manufacturing",
          items: [
            "Automotive molds",
            "3D surface molds",
            "Foam, wood, and resin patterns",
            "Large prototypes with undercuts",
          ],
        },
        {
          category: "Aerospace & Marine Components",
          items: [
            "Composite shaping",
            "Aerodynamic components",
            "Multi-surface trimming",
            "Precision milling for complex parts",
          ],
        },
        {
          category: "Architectural & Interior Design",
          items: [
            "3D wall panels",
            "Sculpted columns",
            "Organic interior structures",
            "Custom artistic installations",
          ],
        },
      ],

      advantages: [
        "Allows machining from any angle or direction",
        "No need to flip or reposition the workpiece",
        "Perfect for extremely complex 3D geometries",
        "High-precision sculpting and mold production",
        "Reduced manual finishing work",
        "Ultra-smooth surface quality",
        "Maximum flexibility for advanced manufacturing",
      ],
    },
  },
  // {
  //   id: 4,
  //   name: "CNC Wood Router",
  //   image: "/../products/23.webp",
  //   slug: "cnc-wood-router-laser",
  //   title: "Production Process Of CNC Wood Router",
  //   desc: "The CNC wood router is a versatile tool...",
  // },
  {
    id: 4,
    name: "Rotary Axis CNC Router Machine",
    overview:
      "Precision machining for cylindrical, curved, and 3D round components with full 360° rotary axis control.",
    image: "/../products/23.webp",
    slug: "rotary-axis-cnc-router-machine",
    title: "Rotary Axis CNC Router Machine",
    desc: "The Rotary Axis CNC Router is engineered for precision machining of cylindrical, round, and 3D curved components using an integrated A-axis rotary system that enables full 360-degree carving and multi-sided processing.",

    details: {
      keyFeatures: [
        {
          title: "High-Precision Rotary Axis (A-Axis)",
          points: [
            "Full 360° continuous rotation",
            "Heavy-duty chuck and tailstock support",
            "Supports long and heavy cylindrical workpieces",
            "Perfect synchronization with XYZ axes",
            "Ideal for spirals, 3D round carving, and deep sculpting",
          ],
        },
        {
          title: "Flexible Rotary Installation Options",
          points: [
            "Fixed rotary axis mounted on the bed for dedicated turning work",
            "Detachable rotary axis for switching between flat and rotary jobs",
            "Suitable for workshops requiring multi-function operation",
          ],
        },
        {
          title: "Powerful Spindle Options",
          points: [
            "3.2kW / 4.5kW / 6kW / 9kW spindle configurations",
            "Air-cooled or water-cooled options",
            "Up to 24,000 RPM",
            "Stable for long-duration 3D carving operations",
          ],
        },
        {
          title: "Strong Mechanical Structure",
          points: [
            "Heavy-duty steel welded body",
            "HIWIN linear guide rails",
            "Rack & pinion transmission for X and Y axes",
            "Ball screw Z-axis for maximum accuracy",
            "Vibration-free machining under heavy carving loads",
          ],
        },
        {
          title: "Advanced CNC Controller",
          points: [
            "Supports rotary interpolation",
            "Compatible with Syntec 6MB, RichAuto, NcStudio 4-axis, Mach3/4",
            "Smooth coordinated 4-axis motion",
            "Automatic tool calibration",
            "Accurate feed-to-rotation synchronization",
          ],
        },
      ],

      workingArea: ["1500 × 3500 mm", "2000 × 4000 mm", "2000 × 6000 mm"],

      applications: [
        {
          category: "Woodworking & Furniture",
          items: [
            "Table legs",
            "Chair legs",
            "Bed posts",
            "Decorative spindles",
            "Porch columns",
            "Handrails and staircase balusters",
          ],
        },
        {
          category: "3D Sculpture & Art",
          items: [
            "Human and animal statues",
            "Totem poles",
            "Complex cylindrical carvings",
            "Custom artistic pieces",
          ],
        },
        {
          category: "Architectural & Interior Elements",
          items: [
            "Ornamental pillars",
            "Decorative columns",
            "Curved moldings",
            "3D wooden ornaments",
          ],
        },
        {
          category: "Advertising & Display",
          items: [
            "Custom cylindrical displays",
            "3D totem structures",
            "Rounded signage components",
          ],
        },
        {
          category: "Crafts & Handmade Production",
          items: [
            "Handcrafted wooden cylinders",
            "Decorative cylindrical items",
          ],
        },
      ],

      advantages: [
        "True 360° rotary machining capability",
        "Ideal for cylindrical, round, and multi-sided components",
        "Much faster than manual lathe carving",
        "High precision for deep and detailed 3D carving",
        "Functions as both flat-bed CNC and rotary CNC",
        "Supports long, large, and heavy work materials",
      ],
    },
  },
  // {
  //   id: 5,
  //   name: "5 Axis CNC Router Machine",
  //   image: "/../products/24.webp",
  //   slug: "5-axis-cnc-router-laser-machine",
  //   title: "Production Process Of 5 Axis CNC Router Machine",
  //   desc: "The 5-axis CNC router offers unmatched flexibility...",
  // },
  {
    id: 5,
    name: "3 Axis ATC CNC Router Machine",
    overview:
      "High-speed CNC machining with automatic tool changing for maximum productivity and seamless multi-tool operations.",
    image: "/../products/24.webp",
    slug: "3-axis-atc-cnc-router-machine",
    title: "3 Axis ATC CNC Router Machine",
    desc: "The 3 Axis ATC CNC Router is designed for fast, accurate, and continuous production. It features a fully automatic tool-changing system that enables switching between multiple tools in seconds, making it ideal for woodworking, signage, plastic machining, aluminum processing, and large-scale manufacturing.",

    details: {
      keyFeatures: [
        {
          title: "Automatic Tool Changer (ATC)",
          points: [
            "Available with 6 / 8 / 12 tool magazines",
            "Fast and smooth automatic tool switching",
            "Supports complex multi-step jobs",
            "Ideal for designs requiring multiple bits",
            "Significantly reduces manual labor and downtime",
          ],
        },
        {
          title: "High-Performance Spindle",
          points: [
            "6kW / 9kW / 12kW HSD or HQD spindles",
            "Air-cooled or water-cooled configuration",
            "Up to 24,000 RPM",
            "Stable performance for long-hour continuous machining",
            "Suitable for wood, MDF, plywood, acrylic, plastics, aluminum, ACP, and composites",
          ],
        },
        {
          title: "Heavy-Duty Industrial Structure",
          points: [
            "Reinforced steel welded frame",
            "High-torque helical rack & pinion on X/Y axes",
            "Taiwan HIWIN linear guide rails",
            "Ball screw Z-axis for maximum accuracy",
            "Zero vibration even at high cutting speeds",
          ],
        },
        {
          title: "Smart CNC Controller",
          points: [
            "Compatible with Syntec 6MB, NcStudio, RichAuto, Mach3/4",
            "Supports multi-layer machining",
            "High-speed interpolation",
            "Automatic tool height calibration",
            "Advanced safety and error-protection features",
          ],
        },
      ],

      workingArea: [
        "1300 × 2500 mm",
        "1500 × 3500 mm",
        "2000 × 4000 mm",
        "2000 × 6000 mm",
      ],

      applications: [
        {
          category: "Furniture Production",
          items: [
            "MDF door carving",
            "Cabinet panels and doors",
            "Decorative wall panels",
            "Nested-based manufacturing (NBM)",
            "Joinery and slotting",
          ],
        },
        {
          category: "Signage & Advertising",
          items: [
            "Acrylic cutting",
            "PVC board shaping",
            "3D letters",
            "ACP cutting",
            "Complex contour profiles",
          ],
        },
        {
          category: "Woodworking Industry",
          items: [
            "Relief carving",
            "3D engraving",
            "Artistic wooden designs",
            "Moldings and frames",
          ],
        },
        {
          category: "Aluminum & Non-Ferrous Materials",
          items: [
            "Thin aluminum sheet cutting",
            "Patterns and fixtures",
            "Composite machining",
          ],
        },
        {
          category: "Plastic Fabrication",
          items: [
            "Acrylic displays",
            "PVC/ABS components",
            "Industrial plastic parts",
          ],
        },
      ],

      advantages: [
        "Fully automatic multi-tool operation",
        "Significantly faster production with no manual tool change delays",
        "Ideal for long and complex machining jobs",
        "High precision with industrial-grade rigidity",
        "Compatible with a wide range of materials",
        "Perfect for mass production and factory environments",
      ],
    },
  },
  // {
  //   id: 6,
  //   name: "Fiber Laser Cutting Machine",
  //   image: "/../products/25.webp",
  //   slug: "fiber-laser-cutting-machine",
  //   title: "Production Details Of Fiber Laser Cutting Machine",
  //   desc: "The fiber laser cutting machine provides a powerful solution...",
  // },
  {
    id: 6,
    name: "4 Axis ATC CNC Router Machine",
    image: "/../products/25.webp",
    slug: "4-axis-atc-cnc-router-machine",
    title: "Production Details Of 4 Axis ATC CNC Router Machine",
    desc: "The 4-axis ATC CNC router with a tilting spindle offers advanced machining capabilities for complex angles, deep 3D carving, and multi-surface processing. Combined with an automatic tool changer, it boosts productivity and precision.",

    overview: `
Advanced 4-Axis Machining with a Fully Automatic Tool Changer

The 4 Axis ATC CNC Router (Tilting Spindle Type) is designed for advanced 3D machining, angled cutting, and complex contour processing.
Unlike rotary 4th-axis machines, this model uses a tilting spindle (A/B axis) allowing undercuts, bevel cuts, deep carving, and multi-surface machining without flipping the material.
  `,

    keyFeatures: [
      {
        title: "Tilting Spindle 4-Axis",
        points: [
          "Angled cutting",
          "Beveled edges",
          "Undercuts",
          "Deep 3D surface machining",
          "Multi-face machining without flipping the material",
          "Perfect for complex 3D molds and patterns"
        ]
      },

      {
        title: "Automatic Tool Changer (ATC)",
        points: [
          "6 / 8 / 12-tool magazine options",
          "Fast, precise tool switching",
          "Ideal for multi-step 3D jobs",
          "Reduces production time and operator labor"
        ]
      },

      {
        title: "High-Performance Tilting Spindle",
        points: [
          "9kW / 12kW spindle options",
          "0–24000 RPM",
          "Stable during angled operations",
          "Suitable for professional long-hour machining"
        ]
      },

      {
        title: "Heavy-Duty Industrial Structure",
        points: [
          "Thick welded steel frame",
          "Reinforced gantry for tilting torque",
          "HIWIN linear guides",
          "Helical rack & pinion on X/Y",
          "Ball screw Z-axis for high precision"
        ]
      },

      {
        title: "Advanced 4-Axis Controller",
        points: [
          "Supports full 4-axis interpolation",
          "3D & multi-surface machining",
          "Automatic tool calibration",
          "Smooth motion control"
        ],
        controllers: ["Syntec", "NcStudio 4-axis", "RichAuto 4-axis", "Osai (optional)"]
      }
    ],

    workingAreas: [
      "1500×3500 mm",
      "2000×4000 mm",
      "2000×6000 mm"
    ],

    applications: [
      {
        title: "3D Carving & Artistic Woodwork",
        items: [
          "Deep 3D sculptures",
          "Complex reliefs",
          "Curved surface carving",
          "Artistic elements"
        ]
      },
      {
        title: "Mold Making",
        items: [
          "Foam molds",
          "Wooden molds",
          "Prototypes",
          "Casting patterns"
        ]
      },
      {
        title: "Furniture Manufacturing",
        items: [
          "Curved chair legs",
          "Slanted surfaces",
          "Decorative angles",
          "Multi-level panels"
        ]
      },
      {
        title: "Architectural & Interior Design",
        items: [
          "Curved CNC panels",
          "Complex ceilings",
          "Column bases",
          "3D wall panels"
        ]
      },
      {
        title: "Advertising & Acrylic Work",
        items: [
          "Angled acrylic cuts",
          "3D signage",
          "Deep engraving"
        ]
      }
    ],

    advantages: [
      "4-axis tilting spindle for advanced geometry",
      "No manual flipping required",
      "More accuracy than rotary tables",
      "ATC system increases productivity",
      "Ideal for large 3D & multi-surface jobs",
      "Compatible with wood, MDF, foam, plastics, molds, and some aluminum"
    ]
  },
  // {
  //   id: 7,
  //   name: "Co2 Laser Cutting Machine",
  //   image: "/../products/26.webp",
  //   slug: "co2-laser-cutter",
  //   title: "Production Process Of Co2 Laser Cutting Machine",
  //   desc: "The CO2 laser cutter is a versatile machine...",
  // },
  {
    id: 7,
    name: "Multi-Spindle CNC Router",
    image: "/../products/26.webp",
    slug: "multi-spindle-cnc-router",
    title: "Production Process Of Multi-Spindle CNC Router",
    desc: "The Multi-Spindle CNC Router is built for mass production, allowing several spindles to work simultaneously for maximum efficiency and output.",

    overview: `
High-Efficiency CNC Router for Mass Production & Multi-Piece Machining

The Multi-Spindle CNC Router is designed for high-volume production, allowing multiple spindles to operate simultaneously on several pieces at once. 
Ideal for factories and workshops requiring maximum output, consistent quality, and reduced machining time.
With synchronized spindles, heavy-duty structure, and advanced controls, it dramatically boosts productivity in woodworking, signage, furniture manufacturing, and batch processing.
  `,

    keyFeatures: [
      {
        title: "Multiple Spindles Working Simultaneously",
        points: [
          "Available in 2, 3, 4, or 6 spindles (customizable)",
          "Machine multiple identical parts at once",
          "Increase output by 2×–6×",
          "Highly efficient for batch manufacturing"
        ]
      },
      {
        title: "Powerful High-Speed Spindles",
        points: [
          "1.5kW / 2.2kW / 3.2kW / 4.5kW spindle options",
          "Air-cooled or water-cooled",
          "Reliable performance during long-hour operation",
          "Ideal for wood, MDF, acrylic, PVC, foam, and soft aluminum"
        ]
      },
      {
        title: "Rigid Heavy-Duty Structure",
        points: [
          "Thick steel welded frame",
          "Reinforced gantry",
          "Vibration-free operation",
          "Long-term accuracy under continuous load"
        ]
      },
      {
        title: "High-Precision Transmission System",
        points: [
          "HIWIN linear guide rails",
          "Ball screw Z-axis",
          "Rack & pinion X/Y motion",
          "Repeatability of ±0.03mm for detailed work"
        ]
      },
      {
        title: "Multiple Working Modes",
        points: [
          "Synchronized Mode: all spindles do the same job",
          "Independent Mode (optional): each spindle works separately",
          "Perfect for switching between bulk and custom production"
        ]
      },
      {
        title: "Advanced CNC Controller",
        points: [
          "Supports RichAuto, NcStudio, Mach3/4, Syntec (optional)",
          "Multi-spindle synchronization",
          "Fast data processing",
          "Smooth motion control and large-file support"
        ]
      },
      {
        title: "Vacuum Table & T-Slot Bed",
        points: [
          "Strong suction for batch jobs",
          "Holds multiple sheets securely",
          "Reduces vibration for cleaner finishes"
        ]
      }
    ],

    workingAreas: [
      "1300×2500 mm",
      "1500×3500 mm",
      "2000×4000 mm",
      "2000×6000 mm"
    ],

    applications: [
      {
        title: "Furniture Manufacturing",
        items: [
          "Cabinet doors",
          "MDF panels",
          "Decorative wood pieces",
          "Chairs, tables, frames"
        ]
      },
      {
        title: "Woodworking & Carving",
        items: [
          "Relief carving",
          "Pattern duplication",
          "Artistic panels",
          "Batch wooden parts"
        ]
      },
      {
        title: "Sign-Making",
        items: [
          "3D letters",
          "Acrylic signs",
          "PVC and foam cutting",
          "Lightbox components"
        ]
      },
      {
        title: "Interior Decoration",
        items: [
          "Wall panels",
          "Partitions",
          "Ceiling designs",
          "Custom engravings"
        ]
      },
      {
        title: "Mass Production Workshops",
        items: [
          "Hundreds of identical pieces",
          "High-volume commercial work",
          "Batch machining with minimal labor"
        ]
      }
    ],

    advantages: [
      "2–6× higher productivity",
      "Uniform quality across all workpieces",
      "Lower labor and machining cost",
      "Perfect for bulk production",
      "Strong spindle performance",
      "Stable structure for long-term precision",
      "Easy operation and maintenance"
    ]
  },
  // {
  //   id: 8,
  //   name: "Fiber Laser Marking Machine",
  //   image: "/../products/27.webp",
  //   slug: "fiber-laser-marking-machine",
  //   title: "Production Process Of Fiber Laser Marking Machine",
  //   desc: "The fiber laser marking machine offers high-precision engraving...",
  // },
  {
    id: 8,
    name: "Multi-Process CNC Router",
    image: "/../products/27.webp",
    slug: "multi-process-cnc-router",
    title: "Production Process Of Multi-Process CNC Router",
    desc: "The Multi-Process CNC Router uses several independent spindles, each carrying a different tool, allowing fast multi-step machining with zero downtime.",

    overview: `
High-Speed Production with Multiple Tools Ready at the Same Time

The Multi-Process CNC Router is designed for high-efficiency workshops and factories that require continuous production without delays caused by manual tool changes.
Each spindle holds a different tool (bit), enabling the machine to switch operations automatically by shifting to the correct spindle—without any ATC system.
This makes it ideal for high-volume woodworking, furniture manufacturing, panel cutting, engraving, and decorative CNC projects.
  `,

    keyFeatures: [
      {
        title: "3 or 4 Independent Spindles",
        points: [
          "Each spindle carries a different tool",
          "Common tools: end mill, V-bit, ball nose, engraving bit, drill bit",
          "Allows multiple operations in a single setup",
          "No need to stop the machine to change tools"
        ]
      },
      {
        title: "Sequential Automatic Tool Switching",
        points: [
          "Machine automatically shifts to the required spindle",
          "No ATC mechanism required",
          "Much faster than manual tool changes",
          "Zero downtime between machining steps"
        ]
      },
      {
        title: "High-Speed Air-Cooled Spindles",
        points: [
          "4.5kW / 6kW spindle options",
          "18,000 to 24,000 RPM",
          "Very reliable for long production cycles",
          "Independent spindle control available"
        ]
      },
      {
        title: "Perfect for Mass Production",
        points: [
          "Significantly faster cycle times",
          "Reduces operator workload",
          "Consistent quality across large batches",
          "Widely used in furniture and woodworking factories"
        ]
      },
      {
        title: "Heavy-Duty Industrial Structure",
        points: [
          "Steel-welded machine frame",
          "HIWIN linear guide rails",
          "Rack & pinion transmission on X/Y",
          "Ball screw Z-axis for high precision",
          "Long service life and stable performance"
        ]
      }
    ],

    workingAreas: [
      "1500×3500 mm",
      "2000×4000 mm",
      "2000×6000 mm"
    ],

    applications: [
      {
        title: "Furniture Manufacturing",
        items: [
          "MDF doors",
          "Decorative wood panels",
          "3D designs",
          "Cabinet production",
          "Routing and engraving"
        ]
      },
      {
        title: "Wood Carving & Decoration",
        items: [
          "2D and 3D relief",
          "Islamic patterns",
          "Frames and moldings",
          "Artistic decorative carving"
        ]
      },
      {
        title: "Advertising Industry",
        items: [
          "Acrylic letters",
          "PVC signage",
          "Foam board cutting",
          "Wooden advertising signs"
        ]
      },
      {
        title: "Mass Production Jobs",
        items: [
          "Identical repeated parts",
          "Batch furniture components",
          "Large-scale engraving work"
        ]
      }
    ],

    advantages: [
      "Multiple tools available instantly",
      "Perfect for multi-step machining",
      "Faster than manual tool changing",
      "More affordable than ATC CNC routers",
      "Reliable and ideal for continuous industrial production",
      "High accuracy and stable mechanical performance"
    ]
  },
  // {
  //   id: 9,
  //   name: "UV Laser Marking Machine",
  //   image: "/../products/27.webp",
  //   slug: "uv-laser-marking-machine",
  //   title: "Production Process Of UV Laser Marking Machine",
  //   desc: "The UV laser marking machine specializes in ultra-fine engraving...",
  // },
  {
    id: 9,
    name: "Stone CNC Router (Marble & Granite CNC)",
    image: "/../products/27.webp",
    slug: "stone-cnc-router",
    title: "Production Process Of Stone CNC Router",
    desc: "The Stone CNC Router is built for heavy-duty machining of marble, granite, quartz, and other dense materials with high accuracy and stability.",

    overview: `
High-Strength CNC Machine for Marble, Granite, Quartz, and Solid Surface Processing
The Stone CNC Router is designed for powerful, accurate machining of extremely hard materials such as marble, granite, quartz, and artificial stone.
With its reinforced steel frame, water-cooled spindle, corrosion-resistant table, and heavy-load structure, it is ideal for stone fabrication factories, countertop workshops, monuments, and high-detail artistic engraving.
  `,

    keyFeatures: [
      {
        title: "Heavy-Duty Structure for Stone Processing",
        points: [
          "Thick welded steel frame",
          "Reinforced gantry design",
          "High resistance to vibration",
          "Specially engineered for high-load cutting of hard stone",
          "Ensures accuracy even with deep, high-force cutting"
        ]
      },
      {
        title: "High-Power Water-Cooled Spindle",
        points: [
          "Available in 5.5kW / 7.5kW / 9kW / 11kW",
          "Ideal for cutting granite, marble, quartz, and stone surfaces",
          "Supports deep 3D carving and shaping",
          "Water cooling ensures stability during long machining cycles"
        ]
      },
      {
        title: "Stainless Steel Water Tray & Cooling System",
        points: [
          "Integrated stainless steel water tray",
          "Automatic water spray for wet cutting",
          "Corrosion-resistant working bed",
          "Efficient dust and chip removal",
          "Perfect for continuous stone cutting operations"
        ]
      },
      {
        title: "Precision Motion System",
        points: [
          "HIWIN linear guide rails",
          "Helical rack and pinion for smooth motion",
          "High-torque stepper or servo motors",
          "Repeatability accuracy of ±0.05 mm",
          "Clean edge finishing and detailed carving"
        ]
      },
      {
        title: "High-Load Working Table",
        points: [
          "Heavy-duty stone table options",
          "Vacuum adsorption with clamps (optional)",
          "Anti-slip rubber pads",
          "Supports large stone slabs safely"
        ]
      },
      {
        title: "Industrial CNC Controller",
        points: [
          "Compatible with NcStudio, Weihong, Syntec, RichAuto",
          "Supports 3-axis and 4-axis machining",
          "Handles large 3D relief files smoothly",
          "Accurate curve motion control"
        ]
      }
    ],

    workingAreas: [
      "1500×3500 mm",
      "2000×4000 mm",
      "2000×6000 mm"
    ],

    applications: [
      {
        title: "Marble & Granite Processing",
        items: [
          "Cutting and trimming",
          "Stone shaping",
          "Text and pattern engraving",
          "Edge polishing"
        ]
      },
      {
        title: "Kitchen & Bathroom Countertops",
        items: [
          "Sink cutouts",
          "Countertop edge shaping",
          "Drilling faucet holes",
          "Custom countertop designs"
        ]
      },
      {
        title: "Monuments & Tombstones",
        items: [
          "Text engraving",
          "Deep 3D carving",
          "Portrait engraving on stone",
          "Decorative reliefs"
        ]
      },
      {
        title: "Building Decoration",
        items: [
          "Floor medallions",
          "Wall stone art panels",
          "Mosaic patterns",
          "Columns and capitals"
        ]
      },
      {
        title: "Artistic Stone Carving",
        items: [
          "3D sculptures",
          "Complex stone artworks",
          "Custom engraving"
        ]
      },
      {
        title: "Quartz & Artificial Stone",
        items: [
          "Countertop machining",
          "Slotting and drilling",
          "Edge finishing and shaping"
        ]
      }
    ],

    advantages: [
      "Engineered specifically for hard stone machining",
      "Extremely rigid structure with minimal vibration",
      "High-power spindle allows deep and fast stone cutting",
      "Excellent accuracy and clean surface finishing",
      "Long service life with industrial reliability",
      "Fully compatible with wet cutting systems",
      "Ideal for heavy-duty stone workshops"
    ]
  },
  // {
  //   id: 10,
  //   name: "Laser Welding Machine",
  //   image: "",
  //   slug: "laser-cutting-and-laser-welding-machine-أداة-قطع-قطع-بالبلازما-الموضوع",
  //   title: "Laser Welding Machine",
  //   desc: "The hand held laser welding machine provides advanced solutions...",
  // },
  {
    id: 10,
    name: "Aluminum CNC Router",
    image: "/../products/28.webp",
    slug: "aluminum-cnc-router",
    title: "Production Process Of Aluminum CNC Router",
    desc: "The Aluminum CNC Router is built for high-speed, high-accuracy milling, cutting, drilling, and engraving of aluminum and other non-ferrous materials.",

    overview: `
High-Speed, High-Accuracy Routing for Aluminum & Non-Ferrous Metals

The Aluminum CNC Router is engineered for industrial manufacturing and precision engineering.
With reinforced structure, precision linear guides, and high-speed spindle, it provides smooth cutting, tight tolerances, and excellent surface finish for aluminum, copper, brass, and other non-ferrous metals.
  `,

    keyFeatures: [
      {
        title: "High-Speed Spindle for Aluminum Processing",
        points: [
          "Powerful spindle (3.2kW – 9kW)",
          "Clean cutting of aluminum without burrs",
          "Stable temperature during long operation",
          "Mirror-like surface finishing",
          "Optional air-cooled or water-cooled configurations"
        ]
      },
      {
        title: "Rigid Machine Body for Vibration-Free Operation",
        points: [
          "Heavy-duty welded steel frame",
          "Stress-relief treatment for stability",
          "Thickened gantry structure",
          "Ensures precise cuts on aluminum, copper, brass, and plastics"
        ]
      },
      {
        title: "Precision Linear Guides & Ball Screws",
        points: [
          "Hiwin/TBI ball screws",
          "Linear guide rails for smooth movement",
          "Repeatability up to ±0.02mm",
          "Zero backlash for high-precision machining"
        ]
      },
      {
        title: "Powerful Servo or Stepper Motors",
        points: [
          "Closed-loop stepper motors or Delta/Yaskawa servo systems",
          "High stability during fast cutting",
          "Supports high feed rates without losing steps"
        ]
      },
      {
        title: "Mist Cooling / Lubrication System",
        points: [
          "Reduces heat during aluminum milling",
          "Improves tool life",
          "Ensures clean cutting edges",
          "Prevents chip welding"
        ]
      },
      {
        title: "Vacuum Table & Strong Suction",
        points: [
          "Holds aluminum sheets firmly",
          "Prevents vibration",
          "Supports full-sheet operations",
          "Optional T-slot + vacuum hybrid table"
        ]
      },
      {
        title: "DSP or Industrial CNC Controller",
        points: [
          "Compatible with NcStudio, Syntec, RichAuto, Mach3/Mach4",
          "Supports multi-layer machining",
          "High-speed interpolation",
          "Handles large files and smooth curves"
        ]
      }
    ],

    workingAreas: [
      "1500×3500 mm",
      "2000×4000 mm",
      "2000×6000 mm"
    ],

    applications: [
      {
        category: "Aluminum Sheet Cutting & Engraving",
        items: ["Signage", "Decorative panels", "Machine covers"]
      },
      {
        category: "Industrial Aluminum Parts",
        items: ["Brackets", "Fixtures", "Aerospace components", "Automotive prototypes"]
      },
      {
        category: "Mold Making",
        items: ["Soft aluminum molds", "Casting patterns", "Temperature-control channels"]
      },
      {
        category: "Electronics & Enclosures",
        items: ["Aluminum housings", "Heat sinks", "Controller boxes"]
      },
      {
        category: "Mechanical Prototyping",
        items: ["Custom parts", "Engineering samples", "R&D components"]
      },
      {
        category: "Non-Ferrous Metal Machining",
        items: ["Copper", "Brass", "Composite materials", "Plastics & Acrylic"]
      }
    ],

    advantages: [
      "Extremely high accuracy",
      "Smooth finishing on aluminum",
      "High-speed cutting without vibration",
      "Long tool life thanks to cooling system",
      "Easy to operate and maintain"
    ]
  },
  {
    id: 11,
    name: "CNC Plasma Cutting Machine",
    image: "",
    slug: "cnc-plasma-cutting-laser-machine",
    title: "CNC Plasma Cutting Machine",
    desc: "The CNC plasma cutting machine is designed for cutting conductive metals...",
  },
  {
    id: 12,
    name: "2024 Ultra-Portable 500W air cooled handheld welding Machine",
    image: "/../products/28.webp",
    slug: "2024-ultra-portable-500w-air-cooled-handheld-welding-laser-machine",
    title: "Previous Next Ultra portable 500w air cooled welding",
    desc: "1. Compact & Portable Design The 2024 handheld welding tool...",
  },
  {
    id: 13,
    name: "2024 Best Portable Water cooled laser welding machine 4 in1",
    image: "/../products/29.webp",
    slug: "2024-best-portable-water-cooled-laser-welding-machine-4-in1-laser",
    title: "Portable water cooled laser welding machine",
    desc: "1.JNTECH handheld laser welding machine adopts the latest...",
  },
  {
    id: 14,
    name: "Affordable Price Five-axis platform laser welding machine",
    image: "/../products/30.webp",
    slug: "affordable-price-five-axis-platform-laser-welding-machine",
    title: "Platform Laser Welding Machine",
    desc: "1) High degree of automation,simple welding process...",
  },
  {
    id: 15,
    name: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine",
    image: "/../products/31.webp",
    slug: "3-in-1-fiber-laser-welding-cleaning-cutting-machine",
    title: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine",
    desc: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine  is an eco-friendly power welding tool...",
  },
  {
    id: 16,
    name: "1kw-3kw Handheld Fiber Laser Welding Machine",
    image: "/../products/32.webp",
    slug: "1kw-3kw-handheld-fiber-laser-welding-machine",
    title: "Handheld Fiber Laser Welding Machine",
    desc: "JNW1000W JNW2000w JNW3000w Fiber Laser welding machine...",
  },
  {
    id: 17,
    name: "2023 Top Affordable JNP1530 CNC Plasma Cutting Table for Sale",
    image: "/../products/33.webp",
    slug: "2023-top-affordable-jnp1530-cnc-plasma-cutting-laser-table-for-sale",
    title: "JNP1530 CNC Plasma Cutting Machine",
    desc: "JNP1530 CNC plasma cutting table is an automatic power tool...",
  },
  {
    id: 18,
    name: "JNP1530R Sheet Metal & Tube Plasma Cutter on Sale",
    image: "/../products/34.webp",
    slug: "jnp1530r-sheet-metal-and-tube-plasma-cutter-laser-on-sale",
    title: "JNP1530R Sheet Metal&Tube Plasma Machine",
    desc: "JNP1530R CNC plasma cutting machine can do All kinds of metal sheet and tube...",
  },
  {
    id: 19,
    name: "JNP2040 CNC Plasma Cutting Machine Gantry Model",
    image: "/../products/35.webp",
    slug: "jnp2040-cnc-plasma-cutting-laser-machine-gantry-model",
    title: "CNC Plasma Cutting Machine Gantry",
    desc: "All kinds of metal materials such as steel, copper,aluminum...",
  },
  {
    id: 20,
    name: "Press Brake",
    image: "/../products/40.webp",
    slug: "press-brake-laser",
    title: "Press Brake",
    desc: "Steel plate welded structure, hydraulic transmission...",
  },
  {
    id: 21,
    name: "Shearing machine",
    image: "/../products/41.webp",
    slug: "shearing-machine-laser",
    title: "Shearing machine",
    desc: "Back gauge controlling, General motors control...",
  },
  {
    id: 22,
    name: "DA53T 4+1Axis CNC Press Brake Machine",
    image: "/../products/42.webp",
    slug: "da53t-4-plus-1-axis-cnc-press-brake-laser-machine",
    title: "DA53T 4+1Axis CNC Press Brake Machine",
    desc: "1. Steel plate welded structure, hydraulic transmission...",
  },
  {
    id: 23,
    name: "WC67K E310 200T6000mm Heavy Duty Sheet Metal CNC Press",
    image: "/../products/43.webp",
    slug: "wc67k-e310-200t6000mm-heavy-duty-sheet-metal-cnc-press-laser",
    title: "WC67K E310 200T6000mm Heavy Duty Sheet Metal CNC Press Brake",
    desc: "1. Steel plate welded structure, hydraulic transmission...",
  },
  {
    id: 24,
    name: "2 Axis NC E21 Hydraulic Press Brake Machine",
    image: "/../products/45.webp",
    slug: "2-axis-nc-e21-hydraulic-press-brake-laser-machine",
    title: "2 Axis NC Press Brake",
    desc: "Model Type :WC67K",
  },
  {
    id: 25,
    name: "DA53T 300T3200mm 4+1 Axis CNC Hydraulic Press Brake",
    image: "/../products/47.webp",
    slug: "da53t-300t3200mm-4-plus-1-axis-cnc-hydraulic-press-laser-brake",
    title: "DA53T 300T3200mm 4+1 Axis CNC Hydraulic Press Brake",
    desc: "1. Steel plate welded structure, hydraulic transmission...",
  },
  {
    id: 26,
    name: "DA66T 6+1 Axis CNC Press Brake With Feeder Brand :Rbqlty",
    image: "/../products/46.webp",
    slug: "da66t-6-plus-1-axis-cnc-press-brake-with-feeder-laser",
    title: "DA66T 6+1 Axis CNC Press Brake With Feeder",
    desc: "Model Type :WE67K",
  },
  {
    id: 27,
    name: "Panel Bending Machine",
    image: "/../products/53.webp",
    slug: "panel-bending-laser-machine",
    title: "Panel Bending Machine",
    desc: "No description added",
  },
];

export const productsWelding = [
  {
    id: 12,
    name: "2024 Ultra-Portable 500W air cooled handheld welding Machine",
    slug: "2024-ultra-portable-500w-air-cooled-handheld-welding-machine",
    image: "/../products/28.webp",
    title: "Previous Next Ultra portable 500w air cooled welding",
    desc: "1. Compact & Portable Design ...",
  },
  {
    id: 13,
    name: "2024 Best Portable Water cooled laser welding machine 4 in1",
    slug: "2024-best-portable-water-cooled-laser-welding-machine-4-in1",
    image: "/../products/29.webp",
    title: "Portable water cooled laser welding machine",
    desc: "1.JNTECH handheld laser welding machine ...",
  },
  {
    id: 14,
    name: "Affordable Price Five-axis platform laser welding machine",
    slug: "affordable-price-five-axis-platform-laser-welding-machine",
    image: "/../products/30.webp",
    title: "Platform Laser Welding Machine",
    desc: "1) High degree of automation ...",
  },
  {
    id: 15,
    name: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine",
    slug: "3-in-1-fiber-laser-welding-cleaning-cutting-machine",
    image: "/../products/31.webp",
    title: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine",
    desc: "3 in 1 Fiber Laser Welding Cleaning Cutting Machine ...",
  },
  {
    id: 16,
    name: "1kw-3kw Handheld Fiber Laser Welding Machine",
    slug: "1kw-3kw-handheld-fiber-laser-welding-machine",
    image: "/../products/32.webp",
    title: "Handheld Fiber Laser Welding Machine",
    desc: "JNW1000W JNW2000w JNW3000w Fiber Laser welding machine ...",
  },
];

export const productsPlasma = [
  {
    id: 17,
    name: "2023 Top Affordable JNP1530 CNC Plasma Cutting Table for Sale",
    slug: "2023-top-affordable-jnp1530-cnc-plasma-cutting-table-for-sale",
    image: "/../products/33.webp",
    title: "JNP1530 CNC Plasma Cutting Machine",
    desc: "JNP1530 CNC plasma cutting table ...",
  },
  {
    id: 18,
    name: "JNP1530R Sheet Metal & Tube Plasma Cutter on Sale",
    slug: "jnp1530r-sheet-metal-and-tube-plasma-cutter-on-sale",
    image: "/../products/34.webp",
    title: "JNP1530R Sheet Metal&Tube Plasma Machine",
    desc: "JNP1530R CNC plasma cutting machine ...",
  },
  {
    id: 19,
    name: "JNP2040 CNC Plasma Cutting Machine Gantry Model",
    slug: "jnp2040-cnc-plasma-cutting-machine-gantry-model",
    image: "/../products/35.webp",
    title: "CNC Plasma Cutting Machine Gantry",
    desc: "All kinds of metal materials ...",
  },
];

export const productsPress = [
  {
    id: 22,
    name: "DA53T 4+1Axis CNC Press Brake Machine",
    slug: "da53t-4-plus-1axis-cnc-press-brake-machine",
    image: "/../products/42.webp",
    title: "DA53T 4+1Axis CNC Press Brake Machine",
    desc: "1. Steel plate welded structure ...",
  },
  {
    id: 23,
    name: "WC67K E310 200T6000mm Heavy Duty Sheet Metal CNC Press",
    slug: "wc67k-e310-200t6000mm-heavy-duty-sheet-metal-cnc-press",
    image: "/../products/43.webp",
    title: "WC67K E310 200T6000mm Heavy Duty Sheet Metal CNC Press Brake",
    desc: "1. Steel plate welded structure ...",
  },
  {
    id: 24,
    name: "2 Axis NC E21 Hydraulic Press Brake Machine",
    slug: "2-axis-nc-e21-hydraulic-press-brake-machine",
    image: "/../products/45.webp",
    title: "2 Axis NC Press Brake",
    desc: "Model Type :WC67K",
  },
  {
    id: 25,
    name: "DA53T 300T3200mm 4+1 Axis CNC Hydraulic Press Brake",
    slug: "da53t-300t3200mm-4-plus-1-axis-cnc-hydraulic-press-brake",
    image: "/../products/47.webp",
    title: "DA53T 300T3200mm 4+1 Axis CNC Hydraulic Press Brake",
    desc: "1. Steel plate welded structure ...",
  },
  {
    id: 26,
    name: "DA66T 6+1 Axis CNC Press Brake With Feeder Brand :Rbqlty",
    slug: "da66t-6-plus-1-axis-cnc-press-brake-with-feeder-brand-rbqlty",
    image: "/../products/46.webp",
    title: "DA66T 6+1 Axis CNC Press Brake With Feeder",
    desc: "Model Type :WE67K",
  },
  {
    id: 27,
    name: "Panel Bending Machine",
    slug: "panel-bending-machine",
    image: "/../products/53.webp",
    title: "Panel Bending Machine",
    desc: "No description added",
  },
];

export const productsShearing = [
  {
    id: 28,
    name: "QC11K E21S 8x6000mm Hydraulic Guillotine Shearing Machine",
    slug: "qc11k-e21s-8x6000mm-hydraulic-guillotine-shearing-machine",
    image: "/../products/48.webp",
    title: "QC11K E21S 8x6000mm Hydraulic Guillotine Shearing Machine",
    desc: "Optional Numeric Control System ...",
  },
  {
    id: 29,
    name: "Swing beam shears",
    slug: "swing-beam-shears",
    image: "/../products/49.webp",
    title: "Swing Beam shearing Machine",
    desc: "1.rack,knife,vibration to eliminate stress ...",
  },
  {
    id: 30,
    name: "QC11K DAC360 16x3200 Servo Guillotine Shearing Machine",
    slug: "qc11k-dac360-16x3200-servo-guillotine-shearing-machine",
    image: "/../products/50.webp",
    title: "QC11K DAC360 16x3200 Servo Guillotine Shearing Machine",
    desc: "Optional Numeric Control System ...",
  },
  {
    id: 31,
    name: "DAC360 CNC Hydraulic Shearing",
    slug: "dac360-cnc-hydraulic-shearing",
    image: "/../products/51.webp",
    title: "DAC360 CNC Hydraulic Shearing",
    desc: "No description",
  },
  {
    id: 32,
    name: "Large Heavy Duty Guillotine Shears",
    slug: "large-heavy-duty-guillotine-shears",
    image: "/../products/52.webp",
    title: "Large Heavy Duty Guillotine Shears",
    desc: "Optional Numeric Control System ...",
  },
];