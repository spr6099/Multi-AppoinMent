import express from "express";
import {
  appointmentsDoctor,
  appointmentCancel,
  doctorList,
  changeAvailablity,
  appointmentComplete,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
  login,
  addProvider,
} from "../controllers/providerController.js";
import authService from "../middleware/authService.js";
import upload from '../middleware/multer.js';
 
const doctorRouter = express.Router();

doctorRouter.post("/login", login);
doctorRouter.post("/register", upload.single("image"), addProvider);
doctorRouter.post("/cancel-appointment", authService, appointmentCancel);
doctorRouter.get("/appointments", authService, appointmentsDoctor);
doctorRouter.get("/list", doctorList);
doctorRouter.post("/change-availability", authService, changeAvailablity);
doctorRouter.post("/complete-appointment", authService, appointmentComplete);
doctorRouter.get("/dashboard", authService, doctorDashboard);
doctorRouter.get("/profile", authService, doctorProfile);
doctorRouter.post("/update-profile", authService, updateDoctorProfile);

export default doctorRouter;
