import Journal from "../models/journal";

export default {
  Student: {
    journal: async ({ _id }) => {
      const journal = await Journal.find({ ownerId: _id.toString() });
      return journal;
    },
    journalNum: async ({ _id }) => {
      return Journal.count({ ownerId: _id })
    }
  },
};
