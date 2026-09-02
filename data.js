/* ============================================================
   SRI SATHYA SAI DISTRICT POLICE — LANDS DIGITALIZATION
   DATA FILE  —  ee file lo matrame data marchandi.
   index.html ni touch cheyyakandi.

   Sub-division -> Police Station -> Land -> Files (photo/video/pdf)
   ============================================================ */

const SITE = {
  mainImage: "assets/main-image.png",
  logo: "assets/logo.png",
  district: "SRI SATHYA SAI DISTRICT",
  districtTe: "శ్రీ సత్య సాయి జిల్లా",
  officer: {
    name: "Sri. S. Sathish Kumar, I.P.S",
    designation: "Superintendent of Police, Sri Sathya Sai District"
  }
};

/* Kotta land add cheyyali ante: aa station lands: [ ] lopala kotta block paste cheyyandi.
   File add cheyyali ante: aa land files: [ ] lopala —
   { type: "photo", title: "Site photo", src: "media/kadiri-town/land-1/photo1.jpg" }
   type = "photo" | "video" | "pdf"                                                   */

const SUBDIVISIONS = [
  {
    id: "puttaparthi",
    name: "Puttaparthi",
    nameTe: "పుట్టపర్తి",
    color: "#1B3A6B",
    stations: [
      { id: "amadaguru", name: "Amadaguru", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "bukkapatnam", name: "Bukkapatnam", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "kothacheruvu", name: "Kothacheruvu", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "nallamada", name: "Nallamada", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "odcheruvu", name: "O.D.Cheruvu", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "puttaparthi-town", name: "Puttaparthi Town", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "puttaparthi-rural", name: "Puttaparthi Rural", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "puttaparthi-security-wing", name: "Puttaparthi Security Wing", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "puttaparthi-airport", name: "Puttaparthi Airport", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
    ]
  },

  {
    id: "hindupur",
    name: "Hindupur",
    nameTe: "హిందూపురం",
    color: "#1B7A3E",
    stations: [
      { id: "chilmathur", name: "Chilmathur", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "hindupur-i-town", name: "Hindupur I Town", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "hindupur-ii-town", name: "Hindupur II Town", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "hindupur-rural", name: "Hindupur Rural", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "lepakshi", name: "Lepakshi", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "hindupur-traffic", name: "Hindupur Traffic", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
    ]
  },

  {
    id: "dharmavaram",
    name: "Dharmavaram",
    nameTe: "ధర్మవరం",
    color: "#D2611C",
    stations: [
      { id: "bathalapalli", name: "Bathalapalli", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "chennekothapalli", name: "Chennekothapalli", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "dharmavaram-i-town", name: "Dharmavaram I Town", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "dharmavaram-ii-town", name: "Dharmavaram II Town", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "dharmavaram-rural", name: "Dharmavaram Rural", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "kanaganapalli", name: "Kanaganapalli", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "mudigubba", name: "Mudigubba", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "patnam", name: "Patnam", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "ramagiri", name: "Ramagiri", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "tadimarri", name: "Tadimarri", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
    ]
  },

  {
    id: "penukonda",
    name: "Penukonda",
    nameTe: "పెనుకొండ",
    color: "#5B2D8E",
    stations: [
      { id: "agali-ps", name: "Agali PS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "amarapuram-ps", name: "Amarapuram PS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "gorantla-ups", name: "Gorantla UPS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "gudibanda-ps", name: "Gudibanda PS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "kia-ps", name: "KIA PS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "madakasira-ups", name: "Madakasira UPS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "parigi-ps", name: "Parigi PS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "penukonda-ps", name: "Penukonda PS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "roddam-ps", name: "Roddam PS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "rolla-ps", name: "Rolla PS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "somandepalli-ps", name: "Somandepalli PS", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
    ]
  },

  {
    id: "kadiri",
    name: "Kadiri",
    nameTe: "కదిరి",
    color: "#106B7A",
    stations: [
      { id: "gandlapenta", name: "Gandlapenta", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "kadiri-rural", name: "Kadiri Rural", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "kadiri-town", name: "Kadiri Town", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "npkunta", name: "N.P.Kunta", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "nallacheruvu", name: "Nallacheruvu", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "talupula", name: "Talupula", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
      { id: "tanakallu", name: "Tanakallu", lands: [
          { id: "land-1", name: "Land 1", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-2", name: "Land 2", survey: "", extent: "", village: "", status: "", remarks: "", files: [] },
          { id: "land-3", name: "Land 3", survey: "", extent: "", village: "", status: "", remarks: "", files: [] }
      ] },
    ]
  },

];
