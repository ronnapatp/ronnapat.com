// Latest edit day
let Privacy = new Date("2022-02-21");
export const UpdatePrivacy = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
}).format(Privacy);