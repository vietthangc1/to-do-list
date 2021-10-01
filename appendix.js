module.exports.getDay = function() {
  let today = new Date();
  let options = {
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  title = today.toLocaleDateString("en-US", options);
  return title
} 