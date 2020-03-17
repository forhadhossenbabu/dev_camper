const nodeGeocodeer = require("node-geocoder");
module.exports = nodeGeocodeer({
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API,
  formatter: null
});
