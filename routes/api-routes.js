const { Workout } = require("../models");
const router = require("express").Router();

router.post("/api/workouts", (request, response) => {
  //console.log('request', response);
  Workout.create({}).then((dbWorkout) => {
    response.json(dbWorkout);
  });
});

router.get("/api/workouts", (request, response) => {
  //console.log('request', response);
  Workout.find()
    .then((dbWorkout) => {
      response.json(dbWorkout);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/api/workouts/range", (request, response) => {
  Workout.find()
    .sort({ day: -1 })
    .then((dbWorkout) => {
      response.json(dbWorkout);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.put("/api/workouts/:id", (request, response) => {
  Workout.update(
    { _id: request.params.id },
    { $push: { exercises: request.body } }
  ).then((dbWorkout) => {
    response.json(dbWorkout);
  });
});

module.exports = router;
