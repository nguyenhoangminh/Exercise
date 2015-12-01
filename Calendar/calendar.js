
  <script>
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  var weekday = ("Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun");
  var day = new Date();
  var monthprocess =  new Date().getMonth() + 1;
  var yearprocess = new Date().getFullYear();
  calendar ();
  document.getElementById("test").style.display = "none";
  function clickDate(type) {
  switch (type) {

    case "leftbig": yearprocess -- ; break;
    case "leftsmall": 
      monthprocess -- ;
      if (monthprocess == 0) {
        monthprocess = 12 ;
        yearprocess -- ;
      };
    break;
    case "rightbig": yearprocess ++ ;break;
    case "rightsmall": 
      monthprocess ++ ;
      if (monthprocess == 13) {
        monthprocess = 1;
        yearprocess ++ ;
      };
    break;
    default:
  }
  document.getElementById( "month" ).value = monthprocess -1;
  document.getElementById( "year" ).value = yearprocess;
  calendar();
}
function clickput(numb) {
  document.getElementById( "input" ).value = numb + "-" + monthprocess + "-" + yearprocess; 
}

var check = false;
function clickimg() {               
  if (check){
    document.getElementById("test").style.display = "none";
    }
  else{
    document.getElementById("test").style.display = "block";
    }
    check=!check;
  }

function calendar () {
  document.body.innerHTML = "" ;
  document.write(" <input id = 'input' type='text' name = 'input' value = '' > " );
  document.write(" <img onclick = 'clickimg()' src = 'calendar.png' alt = 'calendar'> " )
  document.write(" <div id = 'test'>");
  document.write(" <table style = 'border: 1px solid; background-color: #666666; text-align: center;' id='calendar'>" );
  document.write(" <tr> ");
  document.write(" <td><button onclick = \""+"clickDate('leftbig')\""+" >&#60;&#60;</button></td>" );
  document.write(" <td><button onclick = \""+"clickDate('leftsmall')\""+" >&#60;</button></td>" );
  buildmonth();
  buildyear();
  document.write( " <td><button onclick = \" "+" clickDate('rightsmall')\" "+" >&#62; </button></td> " );
  document.write( " <td><button onclick = \" "+" clickDate('rightbig')\" "+" >&#62;&#62; </button></td> " );
  document.write( " </tr> " );
  buildday();
  document.write( " </table> " );
  document.write( " </div> " ); 
}

function buildmonth()
{
  document.write( "<td colspan = '2' ><select id = 'month' onchange='changetimemonth();' > ");
  for (var i = 0 ; i<12 ; i++)
 {
  document.write( "<option value='" + i + "'>" + month[i] + "</option>");
}
  document.write( "</select>" );
  document.write( "</td>" );
}

function buildyear()
{
  document.write( "<td><select id = 'year' onchange='changetimeyear();'>" );
  for (var i = 1900; i < 2100; i++)
{
  document.write( "<option value= '"+ i + "'>" + i + "</option>" );
}
  document.write( "</select>");
  document.write( "</td>");
}

function changetimemonth(){
  monthprocess = parseInt(document.getElementById( "month" ).value) + 1;
  calendar();

}
function changetimeyear() {
  yearprocess = parseInt(document.getElementById( " year " ).value);
  calendar();
}

function buildweekday()
{
 document.write("<tr>");
 for(var i = 0 ; i < weekday.length ; i++)
{
  document.write("<td>" + weekday[i] + "</td>");

};
  document.write("</tr>");
}

function buildday()
{
  var str = yearprocess + "-" + monthprocess + "-1" ; 
  var day = new Date(str);
  document.write("<tr>");
  var i=0;
for(; i < day.getDay() ; i++)
 {
  document.write("<td style='width:70px; background-color: #f2f2f2; height:30px; border: 1px solid;'></td>");
 };
  var daynumber = 30;
  switch(day.getMonth() + 1)
  {
  case 1: 
  case 3:
  case 5: 
  case 7:
  case 8:
  case 10:
  case 12:
  dayNumber = 31; break;
  case 4: 
  case 6: 
  case 9: 
  case 11:
   dayNumber = 30;break;
  case 2:
   if ((day.getFullYear()%400 == 0)||((day.getFullYear()%4 == 0)&&(day.getFullYear()%100 != 0))) dayNumber = 29;
   else dayNumber = 28;
  break;
  default: dayNumber = 30;
 }
  var tem = dayNumber + day.getDay();
  for (; i < tem; i++) {
  if (((i)%7 == 0)&&(i != 0)) {document.write("<tr>");};
  var numb = i - day.getDay()+1;
  document.write( " <td style = 'width:70px; background-color: #f2f2f2; height:30px; border: 1px solid;' onclick='clickput( " + numb + " ); clickimg(); '>"+numb+"</td>");
 };
  document.write("</tr>");
  document.write("<tr>");
  document.write("</tr>");
  document.getElementById("year").value = yearprocess;
  document.getElementById("month").value = monthprocess-1;
}
  function Table()
  {
    document.write("<div id = 'calendar' style = 'display:none;' >");

    document.write("<Table>");
  }

  function setDate()
  {
  var day = new Date().getDate();
  var months_now = new Date().getMonth();
  var yearnow = new Date().getFullYear();
  var day = new Date(yearCheck, monthCheck, 1).getDay();
    if ((day.getFullYear()%400 == 0)||((day.getFullYear()%4 == 0)&&(day.getFullYear()%100!=0))) dayNumber = 29;
      else dayNumber = 28;
  }
  
</script>