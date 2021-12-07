const cloudinary = require("cloudinary");
const cloud_name = require("../config/options")("cloudName");
const api_key = require("../config/options")("apiKEy");
const api_secret = require("../config/options")("apiSecret");

cloudinary.config({
    cloud_name,
    api_key,
    api_secret
});

module.exports = cloudinary;