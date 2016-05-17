var questionURL = function(q) {
  var pattern = /[^.\s]+\.quora\.com\/[a-zA-z\-]*/
  return pattern.test(q);
}

$("a").bind("click", function() {
  console.log($(this));
  var url = ($(this)[0].href);
  if (questionURL(url)) {
    $(this)[0].href = url + "?share=1";
  }
});
