import db from "../Database/index.js";

export default function AssignmentRoutes(app) {
  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignmentIndex = db.assignments.findIndex((a) => a._id === aid);
    db.assignments[assignmentIndex] = {
      ...db.assignments[assignmentIndex],
      ...req.body
    };
    res.json(db.assignments[assignmentIndex]);
  });

  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const initialLength = db.assignments.length;
    db.assignments = db.assignments.filter((a) => a._id !== aid);
    res.sendStatus(204);
  });

  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.assignments.push(newAssignment);
    res.status(201).json(newAssignment);
  });

  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((a) => a.course === cid);
    res.json(assignments);
  });

  app.get("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignment = db.assignments.find((a) => a._id === aid);
    res.json(assignment);
  });
}