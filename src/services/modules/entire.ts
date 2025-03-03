// import { entireRequest } from "../..";

import { entireRequest } from "..";

// entireRequest
//   .request({
//     url: "/entire/list",
//     params: {
//       offset: 0,
//       size: 20,
//     },
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
/**
 * 
 * @param offset 偏移量
 * @param size 一次获取的条数
 *第一次获取的数据 currentPage= 0 offset =0 
  第二次获取的数据 currentPage =1 offset = 20 
 * offset = currentPage * 20
 * @returns 
 */
export function getEntireRoomList(offset = 0, size = 20) {
  return entireRequest.request({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
