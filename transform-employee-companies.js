"use strict";

const fs = require("fs");
const transform = require("node-json-transform").transform;

let employeesData = fs.readFileSync("./demo/employees.json", "utf8");
let employees = JSON.parse(employeesData);
let map = {
  item: {
    company: "profile.company",
  },
};

let result = transform(employees, map);

console.log(result);

fs.writeFileSync("./demo/companies.json", JSON.stringify(result));
