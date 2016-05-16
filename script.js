var questionURL = function(q) {
  q = q.split("/");
  return q.length == 4;
}

$("a").bind("click", function() {
  console.log($(this));
  var url = ($(this)[0].href);
  if (questionURL(url)) {
    window.location.href = url + "?share=1";
  }
});
