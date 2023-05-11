const recombee = require("recombee-api-client");
const Recombee = require("../model/recombeeModel");

exports.add_detail_view = (req, res) => {
  console.log(req.body.userId, req.body.itemId, req.body.timestamp);

  const json = [
    {
      user_id: req.body.userId === null ? "unknown" : req.body.userId,
      item_id: req.body.itemId,
      timestamp: req.body.timestamp,
    },
  ];

  try {
    var rqs = recombee.requests;

    var client = new recombee.ApiClient(
      "ctu-dev",
      "JOvz0KgwCjKhM9OUJwSmjb9nAoODSnIUChwbL7uErFgQ8g9XE1fc79YEGiUtwgM5",
      { region: "ap-se" }
    );

    var requests = json.map((interaction) => {
      var userId = interaction["user_id"];
      var itemId = interaction["item_id"];
      var time = interaction["timestamp"];

      return new rqs.AddDetailView(userId, itemId, {
        timestamp: time,
        cascadeCreate: true,
      });
    });

    client.send(new rqs.Batch(requests), (err, responses) => {
      if (err) {
        console.log(err);
      }
      console.log(responses);
    });

    res.send("ok");
  } catch (error) {
    console.log(error);
  }
};

exports.add_purchase = (req, res) => {
  console.log(req.body.userId, req.body.itemsId, req.body.timestamp);

  const json = [];
  for (let i = 0; i < req.body.itemsId.length; i++) {
    json.push({
      user_id: req.body.userId,
      item_id: req.body.itemsId[i].info.sp_ma,
      timestamp: req.body.timestamp,
    });
  }

  try {
    var rqs = recombee.requests;

    var client = new recombee.ApiClient(
      "ctu-dev",
      "JOvz0KgwCjKhM9OUJwSmjb9nAoODSnIUChwbL7uErFgQ8g9XE1fc79YEGiUtwgM5",
      { region: "ap-se" }
    );

    var requests = json.map((interaction) => {
      var userId = interaction["user_id"];
      var itemId = interaction["item_id"];
      var time = interaction["timestamp"];

      return new rqs.AddPurchase(userId, itemId, {
        timestamp: time,
        cascadeCreate: true,
      });
    });

    client.send(new rqs.Batch(requests), (err, responses) => {
      if (err) {
        console.log(err);
      }
      console.log(responses);
    });

    res.send("ok");
  } catch (error) {
    console.log(error);
  }
};

exports.get_items_for_item = (req, res) => {
  try {
    var rqs = recombee.requests;

    var client = new recombee.ApiClient(
      "ctu-dev",
      "JOvz0KgwCjKhM9OUJwSmjb9nAoODSnIUChwbL7uErFgQ8g9XE1fc79YEGiUtwgM5",
      { region: "ap-se" }
    );

    client.send(
      new rqs.RecommendItemsToItem(req.body.itemId, req.body.userId, 4),
      (err, recommendations) => {
        // console.log(recommendations.recomms);
        if (err) {
          console.log(err);
        } else {
          res.send(recommendations.recomms);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.get_items_for_user = (req, res) => {
  try {
    var rqs = recombee.requests;

    var client = new recombee.ApiClient(
      "ctu-dev",
      "JOvz0KgwCjKhM9OUJwSmjb9nAoODSnIUChwbL7uErFgQ8g9XE1fc79YEGiUtwgM5",
      { region: "ap-se" }
    );

    client.send(
      new rqs.RecommendItemsToUser(req.body.userId, 4),
      (err, recommendations) => {
        // console.log(recommendations.recomms);
        if (err) {
          console.log(err);
        } else {
          res.send(recommendations.recomms);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
