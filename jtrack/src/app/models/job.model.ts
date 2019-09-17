import * as mongoose from "mongoose"
export class job {
  constructor(
    _id:mongoose.Schema.Types.ObjectId,
    jobsite: String,
    jobtitle: String,
    jobdate: String,
    joblink: String
  ) { }
}
