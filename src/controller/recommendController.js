const faceapi = require("face-api.js");

const loadModels = () => {
  Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.ageGenderNet.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    // faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    // faceapi.nets.faceExpressionNet.loadFromUri("/models"),
  ])
    .then(() => {
      handleTraning();
      toast.success("Loaded models", { position: "top-center" });
    })
    .catch((err) => console.log(err));
};

exports.detect = async (req, res) => {
  loadModels();

  console.log(req.files[0]);

  const detection = await faceapi;
  res.send("Image: " + req.files[0]);
};
