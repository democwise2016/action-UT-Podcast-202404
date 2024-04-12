const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const ConfigCheck = require('./app/config/ConfigCheck.js')
const feedList = require('./config-list.js')

let CONFIG = {
  publicURL: `https://democwise2016.github.io/action-UT-Podcast-202404/`,
  publicURLShorten: `https://ppt.cc/fnNzzx`,
  thumbnailBorderColor: '298069',
  maxDownloadItemPerFeed: 5,
  maxDownloadFeed: 30,
  newArrialMax: 5,
  maxDownloadItems: 100,
  maxExcutionMinutes: 25,
  feedList
}

module.exports = ConfigCheck(CONFIG)
