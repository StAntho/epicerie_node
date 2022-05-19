const { DATABASE_USER, DATABASE_PASSWORD } = process.env;

export const dbConnection = {
  url: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@cluster0.hxdjv.mongodb.net/epicerie?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
