// Latest edit day
let Cookie = new Date("2022-02-13");
export const UpdateCookie = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
}).format(Cookie);
