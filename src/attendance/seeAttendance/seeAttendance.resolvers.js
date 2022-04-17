import Attendance from "../../models/attendance";
import { protectedQueryResovler } from "../../user/user.utils";

export default {
  Query: {
    seeAttendance: protectedQueryResovler(async (_, { date, studentId, attendId, month }, { loggedInUser }) => {
      if (month) {
        return await Attendance.find({ userEmail: loggedInUser.email, month })
      }
      if (date) {
        return await Attendance.find({ userEmail: loggedInUser.email, date });
      }
      if (attendId) {
        return await Attendance.find({ userEmail: loggedInUser.email, _id: attendId })
      }
      return {
        ok: true
      }
    })
  }
}