require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const Sitemap = require("react-router-sitemap").default;

// manually list your routes since react-router v6 doesn't expose them
const router = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/careers",
  "/solution",
  "/expertise",
  // Add any extra routes you want to include
];

function generateSitemap() {
  return new Sitemap(router)
    .build("https://manovate.co.in/") // ✅ your domain
    .save("./public/sitemap.xml");   // output location
}

generateSitemap();
