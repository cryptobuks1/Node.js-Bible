const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
console.log(MONGO_URI);

// recoge el html
const axios = require("axios").default;
// cheerio cargael string html
const cheerio = require("cheerio");
const cron = require("node-cron");

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { BreakingNew } = require("./models");
// "cron expresion" -> cada 4 horas "0 */4 * * *", callback
// cada segundo "* * * * * *"  => https://crontab.guru/
cron.schedule("* * * * * *", async () => {
  console.log("Cron job ejecutandose¡¡¡");
  
  const html = await axios.get("https://www.todomountainbike.net/");
  const $ = cheerio.load(html.data); //accedemos a la data.
  const titles = $(".h2-article-inline");
  const article = $(".text-article-inline");
  // recogemos los elementos
  titles.each((index, element) => {
    const newNotice = {
      title: $(element).text().trim(),
      link: $(element).children().attr("href"),
    };
    console.log(newNotice);
    BreakingNew.create([newNotice]);
  });

  // article.each((index, element) => {
  //   const newArticle = {
  //     text: $(element).text().trim(),
  //   };
  //   console.log(newArticle);
  // });
});

//esto hace que el código se ejecute inmediatamente
//(async () => {
//})();
