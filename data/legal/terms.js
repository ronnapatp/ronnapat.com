// Latest edit day
let Terms = new Date("2022-03-04");
export const UpdateTerms = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
}).format(Terms);