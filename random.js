$(document).ready(function() {
  var giphyData = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC"
  $.get(giphyData, function(data) {
    var picture = data.data.image_url
    showPicture("<center><img src = '" + picture + "'/></center>")
    console.log(data)
  })
function showPicture(gif) {
  $(".loadedShit").html(gif)
}
  // url.done((data) => {
  //   if(url.status !== 200){
  //     console.log("failed")
  //
  //   }
  //   console.log(data)
  // })
})
