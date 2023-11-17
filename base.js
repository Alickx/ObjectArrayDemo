const fieldList = [
  {
    "fieldId": 8,
    "value": "P6666"
  },
  {
    "fieldId": 3,
    "value": "湖南省"
  }
];

const queryParam = {
  page: 1,
  size: 10,
  projectId: 2,
};

fieldList.forEach((field, index) => {
  queryParam[`fieldList[${index}].fieldId`] = field.fieldId;
  queryParam[`fieldList[${index}].value`] = field.value;
});

const queryString = Object.keys(queryParam)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParam[key])}`)
  .join('&');

console.log(queryString);


fetch(`http://localhost:7004/new-media-api/project_account_user/page?${queryString}`, {
  method: 'GET'
})
.then(response => response.json())
.then(data => console.log(JSON.stringify(data)))
.catch(error => console.error('Error:', error));
