export const services = [
  {
    slug: "recurring-home-cleaning",
    title: "Recurring Home Cleaning",
    description:
      "Signature maintenance cleanings tailored to busy Dallas-Fort Worth households that expect a consistent, hotel-level finish.",
    longForm: [
      "Our recurring service is built around your lifestyle. We map out an itemized checklist for every room, rotate deep tasks on a schedule, and arrive with premium, family-safe products.",
      "From Uptown high-rises to sprawling Frisco estates, your dedicated team knows the nuances of luxury surfaces, designer fixtures, and smart-home technology.",
    ],
    checklist: [
      "Rotating detail of baseboards, trim, and high-touch areas",
      "Sanitizing of kitchens, baths, and wellness spaces",
      "Floor care tailored to hardwood, marble, stone, and carpet",
    ],
    seoDescription:
      "Dependable recurring house cleaning for luxury residences throughout Dallas, Fort Worth, Plano, Frisco, and surrounding DFW suburbs.",
  },
  {
    slug: "deep-cleaning-move",
    title: "Deep Cleaning & Move-In/Out",
    description:
      "White-glove detailing that refreshes every inch before listings, move-ins, or major milestones in the Metroplex.",
    longForm: [
      "When it's time for a total reset, our deep cleaning specialists tackle behind appliances, inside cabinetry, and every elevated surface.",
      "We coordinate with realtors, designers, and property managers to ensure spaces present flawlessly for open houses, walkthroughs, or new ownership.",
    ],
    checklist: [
      "Appliance interiors, shelving, and cabinetry detailing",
      "Hand-wiped baseboards, doors, vents, and casings",
      "Mineral deposit removal and fixture polishing",
    ],
    seoDescription:
      "Comprehensive deep cleaning and move-ready detailing for homes and condos across the Dallas-Fort Worth Metroplex.",
  },
  {
    slug: "short-term-rental-turnovers",
    title: "Short-Term Rental Turnovers",
    description:
      "Five-star turnovers for luxury Airbnbs, corporate rentals, and boutique stays throughout DFW.",
    longForm: [
      "Keep your occupancy high and reviews glowing with hotel-style turnovers that include staging, restocking, and same-day responsiveness.",
      "We document every visit with time-stamped photos, inventory notes, and maintenance alerts so you can manage remotely with confidence.",
    ],
    checklist: [
      "Full linen service, restocking, and welcome presentation",
      "Damage and amenity checks with documented photos",
      "Express scheduling between reservations across DFW",
    ],
    seoDescription:
      "Professional Airbnb and vacation rental cleaning serving Dallas, Fort Worth, Arlington, Irving, Plano, and nearby suburbs.",
  },
  {
    slug: "office-commercial-cleaning",
    title: "Office & Commercial Cleaning",
    description:
      "Discreet janitorial solutions for executive offices, medical suites, and boutique retail in the Metroplex.",
    longForm: [
      "Create a healthy, polished environment for your team and clientele. Our crews are insured, background-checked, and trained on HIPAA and OSHA-conscious protocols.",
      "Whether you host after-hours meetings in Downtown Dallas or operate a growing workspace in Fort Worth, we align with your security and compliance needs.",
    ],
    checklist: [
      "Daytime porter or overnight services on your schedule",
      "HEPA vacuuming, disinfecting, and touchpoint sanitizing",
      "Customized reporting and supply replenishment",
    ],
    seoDescription:
      "Custom commercial cleaning and office janitorial services for businesses throughout Dallas, Fort Worth, and the greater DFW Metroplex.",
  },
  {
    slug: "post-construction-detail",
    title: "Post-Construction Detail",
    description:
      "Specialized crews remove renovation dust and deliver showcase-ready finishes for builders and designers.",
    longForm: [
      "From Highland Park remodels to new builds in Prosper, we perform multi-stage detailing that protects premium materials and reveals your craftsmanship.",
      "We coordinate with contractors for phased cleaning, punch-list touchups, and final presentations before photography or client handoff.",
    ],
    checklist: [
      "HEPA-certified fine dust extraction on every surface",
      "Glass, track, and lighting fixture detailing",
      "Debris haul coordination and vendor-ready walkthroughs",
    ],
    seoDescription:
      "Expert post-construction cleaning for luxury renovation and new-build projects across Dallas-Fort Worth.",
  },
  {
    slug: "one-time-projects",
    title: "One-Time Special Projects",
    description:
      "Bespoke cleaning experiences for events, seasonal refreshes, estates, and specialty requests.",
    longForm: [
      "Hosting a gala in your Preston Hollow residence or prepping the pool house for summer? Our concierge team curates a one-off plan around your priorities.",
      "We collaborate with household managers, designers, and event planners to match timelines and confidentiality expectations.",
    ],
    checklist: [
      "Closet, pantry, and organizing add-ons",
      "Upholstery, mattress, and wellness space sanitizing",
      "Outdoor kitchen, patio, and entertainment space refresh",
    ],
    seoDescription:
      "Luxury one-time cleaning projects for estates, events, and specialty spaces throughout the DFW Metroplex.",
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export function getServicePaths() {
  return services.map((service) => ({ params: { slug: service.slug } }));
}

