const express = require("express");
const router = express.Router();
const DeviceDetector = require("node-device-detector");
var fs = require("fs");
var axios = require("axios");

const BaseUrl = "https://antibot.pw";

// Create an empty array => [] in logs.json under root project
const appendObject = async (obj) => {
  var logFile = fs.readFileSync("logs.json");
  let log = JSON.parse(logFile);
  log.push(obj);
  var logJSON = JSON.stringify(log);
  fs.writeFileSync("logs.json", logJSON);
  return obj;
};
//AntiBot Api
const AntiBot = async (api, ip, userAgent) => {
  const url = `${BaseUrl}/api/v2-blockers?ip=${ip}&apikey=${api}&ua=${userAgent}`;
  const response = await axios.get(url).catch(function (error) {
    appendObject({error});
  });
  return response.data;
};
//Check Access and Save Logs
router.get("/check", async (req, res) => {
  const {ip, agent} = req.query;
  var ua = req.header("user-agent");
  const detector = new DeviceDetector();
  const result = detector.detect(agent);
  const antiBotResponse = await AntiBot(
    "8fa0477cedd29d82dcbaa2a199192043",
    ip,
    agent
  );

  await appendObject({
    ...antiBotResponse,
    account: undefined,
    date: Date("now"),
  });
  res.send({
    device: result.device.type,
    country: antiBotResponse.info.ipinfo.countryCode,
    isBot: antiBotResponse.is_bot || false,
  });
});
//check visitors
router.get("/visitors", async (req, res) => {
  const visitors = fs.readFileSync("./logs.json");
  res.send(JSON.parse(visitors) || []);
});
module.exports = router;
