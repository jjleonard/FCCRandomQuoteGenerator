var quoteContent = "In the middle of every difficulty lies opportunity.";
var quoteAuth = "Albert Einstein";
function logResults(data){
  console.log(data);
  $("#quote").html('"'+data.quoteText+'"');
  quoteContent = data.quoteText;
  if (data.quoteAuthor == "") {
    $("#person").html("Anonymous");
    quoteAuth = "Anonymous";
  }
  else {
    $("#person").html(data.quoteAuthor);
    quoteAuth = data.quoteAuthor;
  };
};

$(document).ready(function(){
  $("#quote").html('"'+quoteContent+'"');
  $("#person").html(quoteAuth);

  $("#getQuote").on("click",function(){
    $.ajax({
      url:"http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=logResults",
      dataType: "jsonp",
    });
  });
  $("#tweet").on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+quoteContent+" - "+quoteAuth+"&via=jjleonard", "Tweet this quote")
  });
});