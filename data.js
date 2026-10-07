// Scotch broom clump data
// Edit this file by hand, then commit + push to update the live map.
//
// Each entry: { lat, lon, count, label, notes }
//   lat, lon  — decimal degrees
//   count     — number of plants in the clump (used to size the marker)
//   label     — short name shown in the popup header
//   notes     — optional freeform text (access notes, landowner, etc.)

const CLUMPS = [

  /* oaks bottom data */
  { lat: 45.4787493, lon: -122.6562177, count: 15, label: "S", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4786063, lon: -122.656313, count: 8, label: "R", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4786404246771, lon: -122.656424365985, count: 1, label: "Q", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.478575, lon: -122.6563453, count: 10, label: "P", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4784833, lon: -122.6563811, count: 9, label: "O", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4783954, lon: -122.6565028, count: 6, label: "N", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4781774, lon: -122.6565782, count: 16, label: "M", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4778783, lon: -122.6567733, count: 9, label: "L", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4777813, lon: -122.6568952, count: 6, label: "K", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4764713676241, lon: -122.657490557096, count: 15, label: "J", notes: "E of trail beyond fence", agencies: ["oaks-bottom"] },
  { lat: 45.4725497, lon: -122.6606238, count: 1, label: "I", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4724195, lon: -122.6609421, count: 1, label: "H", notes: "trail", agencies: ["oaks-bottom"] },
  { lat: 45.4717952, lon: -122.6610707, count: 1, label: "G", notes: "underpass", agencies: ["oaks-bottom"] },
  { lat: 45.4715879, lon: -122.6612276, count: 3, label: "F", notes: "underpass", agencies: ["oaks-bottom"] },
  { lat: 45.4716346, lon: -122.6613049, count: 3, label: "E", notes: "underpass", agencies: ["oaks-bottom"] },
  { lat: 45.4716569, lon: -122.6612175, count: 8, label: "D", notes: "underpass", agencies: ["oaks-bottom"] },
  { lat: 45.4904532791049, lon: -122.655379825715, count: 6, label: "C", notes: "high bank, beyond fence", agencies: [] },
  { lat: 45.4906743791049, lon: -122.655639523282, count: 15, label: "B", notes: "high bank, beyond fence", agencies: [] },
  { lat: 45.4950699998384, lon: -122.659149255075, count: 4, label: "A", notes: "quarry, beyond fence", agencies: [] },

  /* data for area, N end of 91st Ave */
  { lat: 45.5616414, lon: -122.5673359, count: 1, label: "G", notes: "roadside", agencies: ["odot-91st"] },
  { lat: 45.5614621, lon: -122.566039, count: 1, label: "F", notes: "roadside", agencies: ["odot-91st"] },
  { lat: 45.5614643, lon: -122.5661208, count: 1, label: "E", notes: "roadside", agencies: ["odot-91st"] },
  { lat: 45.5616052, lon: -122.5665266, count: 4, label: "D", notes: "roadside", agencies: ["odot-91st"] },
  { lat: 45.5616639, lon: -122.5667411, count: 8, label: "C", notes: "roadside", agencies: ["odot-91st"] },
  { lat: 45.5617585, lon: -122.5669575, count: 4, label: "B", notes: "roadside", agencies: ["odot-91st"] },
  { lat: 45.561987, lon: -122.5675211, count: 12, label: "A", notes: "roadside", agencies: ["odot-91st"] },

/* data for area accessible from N end of 87th Ave */
  { lat: 45.5625439, lon: -122.5752425, count: 2, label: "I", notes: "N of fence, up from sidewalk", agencies: ["odot-87th"] },
  { lat: 45.5625483135679, lon: -122.5742291, count: 1, label: "H", notes: "N of fence, up from sidewalk", agencies: ["odot-87th"] },
  { lat: 45.5625191135679, lon: -122.5741182, count: 5, label: "G", notes: "N of fence, up from sidewalk", agencies: ["odot-87th"] },
  { lat: 45.5625483135679, lon: -122.5741046, count: 11, label: "F", notes: "N of fence, up from sidewalk", agencies: ["odot-87th"] },
  { lat: 45.5625727135679, lon: -122.5739393, count: 15, label: "E", notes: "N of fence, up from sidewalk", agencies: ["odot-87th"] },
  { lat: 45.5625526135679, lon: -122.5738857, count: 25, label: "D", notes: "N of fence, up from sidewalk", agencies: ["odot-87th"] },
  { lat: 45.5625520135679, lon: -122.5738643, count: 25, label: "C", notes: "N of fence, up from sidewalk", agencies: ["odot-87th"] },
  { lat: 45.5625387203518, lon: -122.5736601, count: 20, label: "B", notes: "N of fence, up from sidewalk", agencies: ["odot-87th"] },
  { lat: 45.5625415203518, lon: -122.5736428, count: 17, label: "A", notes: "N of fence, up from sidewalk", agencies: ["odot-87th"] },

/* Sumner SAN LOT, accessible from 92nd */
  { lat: 45.5611095, lon: -122.5669646, count: 1, label: "AI", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5611622, lon: -122.5668043, count: 1, label: "AH", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.561312, lon: -122.5667163, count: 1, label: "AG", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.561435, lon: -122.5666428, count: 5, label: "AF", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5612984, lon: -122.5666834, count: 6, label: "AE", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5612588, lon: -122.5666818, count: 7, label: "AD", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5613012, lon: -122.5667445, count: 23, label: "AC", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.561287, lon: -122.5663711, count: 1, label: "AB", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5612351, lon: -122.5662656, count: 6, label: "AA", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5612604, lon: -122.5662293, count: 1, label: "Z", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5611701, lon: -122.5660622, count: 14, label: "Y", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5611454, lon: -122.5660997, count: 10, label: "X", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5611389, lon: -122.5661216, count: 35, label: "W", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5610884, lon: -122.5661835, count: 15, label: "V", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5611216, lon: -122.5662856, count: 2, label: "U", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5611826, lon: -122.5663433, count: 12, label: "T", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5611176, lon: -122.5664376, count: 6, label: "S", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5611246, lon: -122.5665708, count: 14, label: "R", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5610473, lon: -122.566433, count: 6, label: "Q", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5610504, lon: -122.5663608, count: 12, label: "P", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5609875, lon: -122.5662229, count: 16, label: "O", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.561005, lon: -122.5663795, count: 2, label: "N", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5609859, lon: -122.5664034, count: 2, label: "M", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5609436, lon: -122.5662321, count: 3, label: "L", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5609708, lon: -122.5665344, count: 5, label: "K", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5608887, lon: -122.566164, count: 3, label: "J", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5608644, lon: -122.5661254, count: 4, label: "I", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5607557, lon: -122.5661592, count: 6, label: "H", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.559925, lon: -122.5663936, count: 1, label: "G", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5597808, lon: -122.5662765, count: 9, label: "F", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5595984, lon: -122.5664229, count: 4, label: "E", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5596788, lon: -122.566367, count: 8, label: "D", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },
  { lat: 45.5595097666092, lon: -122.566091215346, count: 21, label: "C", notes: "E of the fence", agencies: ["odot-92nd-ext"] },
  { lat: 45.5591288833744, lon: -122.566371908531, count: 7, label: "B", notes: "E of the fence", agencies: ["odot-92nd-ext"] },
  { lat: 45.5579589, lon: -122.5672369, count: 4, label: "A", notes: "Sumern SAN LOT", agencies: ["odot-92nd"] },


];
