// Sri Sathya Sai District Police - Police Lands Database
// This file contains all police station and land information
// Last Updated: 2026-09-15

const policeData = {
  subdivisions: [
    {
      name: "PUTTAPARTHI",
      policeStations: [
        {
          policeStation: "Amadaguru",
          lands: ["Amadaguru PS Land"]
        },
        {
          policeStation: "Bukkapatnam",
          lands: ["Bukkapatnam PS Land", "Bukkapatnam Old Quarters Land"]
        },
        {
          policeStation: "Kotacheruvu",
          lands: ["Kotacheruvu PS Land"]
        },
        {
          policeStation: "Nallamada",
          lands: ["Nallamada Old PS Circle Office", "Nallamada 43 Cents Land"]
        },
        {
          policeStation: "O.D.Cheruvu",
          lands: ["O.D.Cheruvu PS Land"]
        },
        {
          policeStation: "Puttaparthi Town",
          lands: ["Puttaparthi Town PS Land"]
        },
        {
          policeStation: "Puttaparthi Rural",
          lands: []
        },
        {
          policeStation: "Puttaparthi Security wing",
          lands: []
        },
        {
          policeStation: "Puttaparthi Airport",
          lands: []
        }
      ]
    },
    {
      name: "HINDUPUR",
      policeStations: [
        {
          policeStation: "Chilmathur",
          lands: ["Chilmathur PS Land"]
        },
        {
          policeStation: "Hindupur I Town",
          lands: ["Hindupur I Town PS Land"]
        },
        {
          policeStation: "Hindupur II Town",
          lands: ["Land 1"]
        },
        {
          policeStation: "Hindupur Rural",
          lands: ["Hindupur Rural SP Quarters Land"]
        },
        {
          policeStation: "Lepakshi",
          lands: ["Lepakshi PS Land"]
        },
        {
          policeStation: "Hindupur Traffic",
          lands: ["Hindupur Traffic PS Land"]
        }
      ]
    },
    {
      name: "DHARMAVARAM",
      policeStations: [
        {
          policeStation: "Bathalapalli",
          lands: ["Battalapalli PS Land"]
        },
        {
          policeStation: "Chennekothapalli",
          lands: ["CK Palli PS Land"]
        },
        {
          policeStation: "Dharmavaram I Town",
          lands: ["Dharmavaram I Town PS Land"]
        },
        {
          policeStation: "Dharmavaram II Town",
          lands: ["Land 1"]
        },
        {
          policeStation: "Dharmavaram Rural PS Land",
          lands: ["Dharmavaram Rural"]
        },
        {
          policeStation: "Kanaganapalli",
          lands: ["Kanaganapalli PS Land"]
        },
        {
          policeStation: "Mudigubba",
          lands: ["Mudigubba PS Land"]
        },
        {
          policeStation: "Patnam",
          lands: ["Patnam PS Land"]
        },
        {
          policeStation: "Ramagiri",
          lands: ["Land 1"]
        },
        {
          policeStation: "Tadimarri",
          lands: ["Tadimarri PS Land"]
        },
        {
          policeStation: "Dharmavaram SDPO Office",
          lands: ["Dharmavaram SDPO Office Land"]
        },
        {
          policeStation: "Dharmavaram Police Guest House",
          lands: ["Dharmavaram Police Guest House Land"]
        }
      ]
    },
    {
      name: "PENUKONDA",
      policeStations: [
        {
          policeStation: "Agali PS",
          lands: ["Agali PS Land"]
        },
        {
          policeStation: "Amarapuram PS",
          lands: ["Amarapuram PS Land"]
        },
        {
          policeStation: "Gudibanda PS",
          lands: ["Gudibanda PS Land"]
        },
        {
          policeStation: "KIA PS",
          lands: []
        },
        {
          policeStation: "Madakasira UPS",
          lands: ["Madakasira UPS Land"]
        },
        {
          policeStation: "Parigi PS",
          lands: ["Parigi PS Land"]
        },
        {
          policeStation: "Penukonda PS",
          lands: ["Penukonda PS Land"]
        },
        {
          policeStation: "Roddam PS",
          lands: ["Roddam PS Land"]
        },
        {
          policeStation: "Rolla PS",
          lands: ["Rolla PS Land"]
        },
        {
          policeStation: "Somandapalli PS",
          lands: ["Somandapalli PS Land"]
        }
      ]
    },
    {
      name: "KADIRI",
      policeStations: [
        {
          policeStation: "Gandlapenta",
          lands: ["Gandlapenta PS Land"]
        },
        {
          policeStation: "Kadiri Rural",
          lands: ["Kadiri Rural PS Land"]
        },
        {
          policeStation: "Kadiri Town",
          lands: ["Kadiri Town PS Land"]
        },
        {
          policeStation: "N.P.Kunta",
          lands: ["N.P.Kunta PS Land"]
        },
        {
          policeStation: "Nallacheruvu",
          lands: ["Nallacheruvu PS Land"]
        },
        {
          policeStation: "Talupula",
          lands: ["Talupula PS Land"]
        },
        {
          policeStation: "Tanakallu",
          lands: ["Tanakallu PS Land"]
        }
      ]
    }
  ],
  districtHeadQuarter: {
    name: "District Head Quarter",
    policeStations: [
      {
        policeStation: "Parade Ground",
        lands: ["Parade Ground Land"]
      },
      {
        policeStation: "Firing Range",
        lands: ["Firing Range Land"]
      },
      {
        policeStation: "Land 3",
        lands: []
      },
      {
        policeStation: "Land 4",
        lands: []
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = policeData;
}
