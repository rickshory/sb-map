// Scotch broom clump data
// Edit this file by hand, then commit + push to update the live map.
//
// Each entry: { lat, lon, count, label, notes }
//   lat, lon  — decimal degrees
//   count     — number of plants in the clump (used to size the marker)
//   label     — short name shown in the popup header
//   notes     — optional freeform text (access notes, landowner, etc.)

const CLUMPS = [
  { lat: 45.4787493, lon: -122.6562177, count: 3,   label: "Clump A", notes: "Roadside edge" },
  { lat: 45.4790200, lon: -122.6558000, count: 12,  label: "Clump B", notes: "" },
  { lat: 45.4783000, lon: -122.6570000, count: 40,  label: "Clump C", notes: "Dense patch near creek" },
  { lat: 45.4795000, lon: -122.6549000, count: 80,  label: "Clump D", notes: "" },
  { lat: 45.4779000, lon: -122.6543000, count: 150, label: "Clump E", notes: "Large hillside infestation" },
  { lat: 45.4801000, lon: -122.6566000, count: 1,   label: "Clump F", notes: "Single outlier plant" },
];
