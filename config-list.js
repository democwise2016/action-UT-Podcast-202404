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
    title: 'Emmy追劇時間 看財經',
    feedID: 'emmytw',
    homepageURL: 'https://www.youtube.com/channel/UCUkwvRrpvWkocNdk9qIpRSw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]

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
