export const GOOGLE_PLACES_API = "https://maps.googleapis.com/maps/api/place/";

export const PlaceTypes = {
  ADDRESS: "address",
  ADMINISTRATIVE_AREA_LEVEL_1: "administrative_area_level_1",
  ADMINISTRATIVE_AREA_LEVEL_2: "administrative_area_level_2",
  CITIES: "(cities)",
  COUNTRY: "country",
  ESTABLISHMENT: "establishment",
  GEOCODE: "geocode",
  LOCALITY: "locality",
  POSTAL_CODE: "postal_code",
  REGIONS: "(regions)",
  SUBLOCALITY: "sublocality"
};

export interface GoogleMapsApiOptions {
  readonly optionalKeys: string[];
  readonly requiredKeys: string[];
  readonly path: string;
}

interface ApiMap {
  readonly [key: string]: GoogleMapsApiOptions;
}

export const API: ApiMap = {
  AUTOCOMPLETE: {
    optionalKeys: [
      "offset",
      "location",
      "radius",
      "language",
      "types",
      "strictbounds",
      "components",
      "sessiontoken"
    ],
    path: "autocomplete",
    requiredKeys: ["input"]
  },
  DETAILS: {
    optionalKeys: ["language", "sessiontoken"],
    path: "details",
    requiredKeys: ["placeid"]
  },
  NEARBY_SEARCH: {
    optionalKeys: [
      "radius",
      "keyword",
      "language",
      "minprice",
      "maxprice",
      "name",
      "opennow",
      "rankby",
      "type",
      "pagetoken",
      "region"
    ],
    path: "nearbysearch",
    requiredKeys: ["location"]
  },
  RADAR_SEARCH: {
    optionalKeys: [
      "keyword",
      "language",
      "minprice",
      "maxprice",
      "name",
      "opennow",
      "type"
    ],
    path: "radarsearch",
    requiredKeys: ["location", "radius"]
  },
  TEXT_SEARCH: {
    optionalKeys: [
      "location",
      "radius",
      "language",
      "minprice",
      "maxprice",
      "opennow",
      "pagetoken",
      "type"
    ],
    path: "textsearch",
    requiredKeys: ["query"]
  }
};
