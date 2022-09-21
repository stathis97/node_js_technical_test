const assert = require("assert");
const http = require("http");
const server = require("../server");

describe("Server requests", function () {
  beforeEach(function () {
    server.close();
    server.listen(8081);
  });

  describe("/planets", function () {
    // TODO: provide implementation
  });

  describe("/planet", function () {
    // TODO: provide implementation
  });

  describe("/notFound", function () {
    // TODO: provide implementation
  });
});
