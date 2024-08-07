const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')

let feedList = [
  {
    title: '0號手稿 看ACG',
    feedID: 'user-soulkao_0',
    homepageURL: 'https://www.youtube.com/channel/UCbWIKVoPlnahOJj8OZ3kSZA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '紫骷 玩遊戲',
    feedID: 'Zikukirby',
    homepageURL: 'https://www.youtube.com/channel/UCQceikp-aRr_e5uCARuPvEQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '搞完君2.0 講 迷因',
    feedID: 'GWjun2.0',
    homepageURL: 'https://www.youtube.com/channel/UCwYTuoLZaII23xxAGV2zqcA',
    itemFilters: ItemFiltersPreset.between1minTo10Min,
  },
  {
    title: '超級歪 說書',
    feedID: 'superycinema',
    homepageURL: 'https://www.youtube.com/channel/UCAM7yIYvZGYLJR6z6RqLlNw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '一隻土撥鼠 說 CN',
    feedID: 'MrMarmot8',
    homepageURL: 'https://www.youtube.com/channel/UCEaPnL10x4UY7VawhPbDU1A',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '萊斯 新Game報',
    feedID: 'LiceMoo-GameNews',
    homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('新Game報') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '通勤者之歌',
    feedID: 'PoemOfBikers',
    homepageURL: 'https://www.youtube.com/@%E9%80%9A%E5%8B%A4%E8%80%85%E4%B9%8B%E6%AD%8C/videos',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]

// 4 / 20

// 取得ID
// https://docs.google.com/spreadsheets/d/1VL7M9rQfIT1yTDx5noSKQFzaEoG2WVUF0k8ODta8Upk/edit#gid=2000612407



// ---------------------------------------

// 測試用
// feedList = [
//   {
//     title: '萊斯 新Game報',
//     feedID: 'LiceMoo-GameNews',
//     homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
//     thumbnailBorderColor: true,
//     itemFilters: [
//       ItemFiltersPreset.between3minTo30Min,
//       (item) => { return (item.title.indexOf('《新Game報') > -1) }
//     ],
//     options: {
//       maxItems: 3
//     }
//   },
// ]

module.exports = feedList
