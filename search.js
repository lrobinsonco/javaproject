// $(document).ready(function() {
//   var giphyData = "http://api.giphy.com/v1/gifs/search?q=batman&api_key=dc6zaTOxFJmzC"
//   $.get(giphyData, function(data) {
//     for (var i = 0; i < 10; i++) {
//       var picture = data.data[i].images.fixed_height.url
//       showPicture("<center><img src = '" + picture + "'/></center")
//       console.log(picture)
//     }
//     console.log(data)
//   })
// function showPicture(gif) {
//   $("body").append(gif)
// }
