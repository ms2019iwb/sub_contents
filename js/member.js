//プロフィールの切り替えファンクション

function Miwa(){
  $("..VisualProfile .ProfileMessage").html("<h5>Miwa</h5><div class='ProfileImage'><img src='img/prof_sample_2.jpg' style='height:200px;'></div><hr><div class='ProfileMessage'>このサイトを主に担当</div>");
}
function Soniko(){
  $(".VisualProfile .ProfileMessage").html("<h5>Soniko</h5><div class='ProfileImage'><img src='img/prof_sample2_2.jpg' style='height:200px;'></div><hr><div class='ProfileMessage'>そに子です！ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。</div>");
}
function Sample3(){
  $(".VisualProfile .ProfileMessage").html("<h5>Banana</h5><div class='ProfileImage'><img src='img/fruit_banana.png' style='height:200px;'></div><hr><div class='ProfileMessage'>バナナです</div>");
}

var kankouchi = new Array(10);
var address = new Array(10);
var tel = new Array(10);
var detail = new Array(10);
var images = new Array(10);
var cnt;
var map;
var marker;

var shopName = new Array(20);
var objShop = new Array(20);
var cnt2;
var oldStr;
var page;
var maxPage;
var kensuu;
var savelat, savelng;

var objHotel = new Array(20);
var cnt3;
var savelat2, savelng2;

var objHotel = new Array(20);			// ホテルのデータを入れる配列（１度に取得する最大数を宣言）
//var cnt;								// 取得したホテルの数を数える変数
var page = 1;							// 表示しているページ数を表す変数
//var maxPage;							// 取得したデータの最後のページ数を表す変数
//var kensuu;								// 取得した件数を表す変数
var hotelOldStr;


$(function(){
  $.ajax(
  {
      url:"kankou.json",
      type:'GET',
      dataType:'json',
      success:function(data){
          tableIn(data);
      }
  });
});

function tableIn(data){
  cnt = 0;
  for(i in data){
      kankouchi[cnt] = data[i].kankouchi;
      address[cnt] = data[i].address;
      tel[cnt] = data[i].tel;
      detail[cnt] = data[i].detail;
      images[cnt] = data[i].images;
      cnt++;
  }
  menuDisp();
}

/*メニューを表示する*/

function menuDisp()
{
  var str = ""
  for(var i=0; i<cnt; i++)
      {
          str += "<div class='ProfileButton' onmouseover=annaiDisp(" + i + ") aria-haspopup='true' style='background-image:url(img/prof_sample_2.jpg);'><p>" + kankouchi[i] + "</p></div>";
      }
  $("#menu").html(str);
}

/*メニュークリック時に詳細情報を表示*/
//"<h5>Miwa</h5><div class='ProfileImage'><img src='img/prof_sample_2.jpg' style='height:200px;'></div><hr><div class='ProfileMessage'>このサイトを主に担当</div>"
/*
str += "<h5>" + kankouchi[bango] + "</h5>";
str += "<div class='ProfileImage'><img src='img/prof_sample_2.jpg' style='height:200px;'></div>";
str += "<div class='ProfileMessage'>" + detail[bango] + "</div>";

*/

function annaiDisp(bango)
{
/*  $("#menu table").animate({
  width: "290px"
  }, 750 );*/
  var str = "";
  str += "<h5>" + kankouchi[bango] + "</h5>";
  str += "<div class='ProfileImage'><img src='img/prof_sample_2.jpg' style='height:200px;'></div>";
  str += "<div class='ProfileMessage'>" + detail[bango] + "</div>";


// "images":"prof_sample_2.jpg"

  $("#member_profile").html(str);
}

/*function annaiDisp(bango)
{
  $("#menu table").animate({
  width: "290px"
  }, 750 );
  var str = "<h2>基本情報</h2>";
  str += "<table>";
  str += "<tr><th>名称</th><td>" + kankouchi[bango] + "</td></tr>";
  str += "<tr><th>住所</th><td>" + address[bango] + "</td></tr>";
  str += "<tr><th>TEL</th><td>" + tel[bango] + "</td></tr>";
  str += "</table>";
  str += "<h2>案内</h2>";
  str += "<div colspan = '2'>" + detail[bango] + "</div>";
  str += "<div class = 'sakura_images'><img src = 'images/" + images[bango] + "' height=218px></div>";
  str += "<h2>周辺情報</h2>";
  str += "<p style='padding:10px;'>周辺にあるレストランや宿泊施設の情報が地図の下に表示されます。<p>";
  str += "<input type = 'button' onClick = 'shopList()' value='レストラン表示' class = 'hyoji_button_style'/><br>";
  str += "<input type = 'button' onClick = 'hotelList()' value='ホテル一覧' class = 'hyoji_button_style'/>";
  str += "<h2>Google map</h2>";

  $("#annai").html(str).fadeIn("slow");
  mapDisp(bango);
}*/

  /*メニューを表示する*/

/*  function menuDisp()
  {
      var str = "<table>"
      str += "<tr><th>メニュー</th></tr>";
      for(var i=0; i<cnt; i++)
          {
              str += "<tr><td><span id='" + i + "' onClick= 'annaiDisp(" + i + ")'>" + kankouchi[i] + "</span></td></tr>";
          }
      str += "</table>";
      $("#menu").html(str);
  }*/
