const db = require("../models");
const router = require("express").Router();
const Workout = require("../models/workout.js");


// module.exports = function(app) {

    router.get("/api/workouts", (req, res) => {
        Workout.find({})
          .then(Workout => {
            res.json(Workout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

      router.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(7)
          .then(Workout => {
            res.json(Workout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

      router.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
          .then(Workout => {
            res.json(Workout);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });


      router.put('/api/workouts/:id', ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
          params.id,
          { $push: { exercises: body } }
        )
          .then((workout) => {
            res.json(Workout);
          })
          .catch((err) => {
            res.json(err);
          });
      });
      

//   app.get("/api/workouts", (req, res) => {
//     db.Workout.find({}).then(Workout => {
//         res.json(Workout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// })

// app.get("/api/workouts/range", ({}, res) => {
//   db.Workout.find({}).limit(7)
//   .then((Workout) => {
//     res.json(Workout);
//   }).catch(err => {
//     res.status(400).json(err);
//   });
// });

  
  
//   app.post("/api/workouts/", (req, res) => {
//       db.Workout.create(req.body).then((Workout) => {
//         res.json(Workout);
//       }).catch(err => {
//         console.log(err);
//           res.status(400).json(err);
//         });
//     });

//     app.put("/api/workouts/:id", (req, res) => {
//       db.Workout.findByIdAndUpdate(
//         { _id: req.params.id }, { exercises: req.body }
//       ).then((Workout) => {
//         res.json(Workout);
//       }).catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   });
// };

module.exports = router;