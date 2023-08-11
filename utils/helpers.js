const handlebars = require('handlebars');

module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  truncate: (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text.slice(0, maxLength) + ('...');
      return new handlebars.SafeString(truncatedText);
    }
  }
};
