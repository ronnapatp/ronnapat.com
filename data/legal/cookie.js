// Latest edit day
let Cookie = new Date("2022-02-03");
export const UpdateCookie = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
}).format(Cookie);
