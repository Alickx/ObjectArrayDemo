const qs = require("qs");

const fieldList = [
  {
    fieldId: 8,
    value: "P6666",
  },
  {
    fieldId: 3,
    value: "湖南省",
  },
];

const queryParam = {
  page: 1,
  size: 10,
  projectId: 2,
  fieldList: fieldList
};

const queryString = qs.stringify(queryParam, { allowDots: true });

console.log(queryString);

fetch(
  `http://localhost:7004/new-media-api/project_account_user/page?${queryString}`,
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)))
  .catch((error) => console.error("Error:", error));
