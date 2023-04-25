const recombee = require("recombee-api-client");

var rqs = recombee.requests;

var client = new recombee.ApiClient(
  "ctu-dev",
  "JOvz0KgwCjKhM9OUJwSmjb9nAoODSnIUChwbL7uErFgQ8g9XE1fc79YEGiUtwgM5",
  { region: "ap-se" }
);

const sendToRecombee = () => {
  var interactions = require("./detail_views.json");

  var requests = interactions.map((interaction) => {
    var userId = interaction["user_id"];
    var itemId = interaction["item_id"];
    var time = interaction["timestamp"];

    return new rqs.AddDetailView(userId, itemId, {
      timestamp: time,
      cascadeCreate: true,
    });
  });

  client.send(new rqs.Batch(requests), (err, responses) => {
    console.log(responses);
  });
};

module.exports = sendToRecombee;
