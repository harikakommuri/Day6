var emp = [
    {
      "Name": "Sunny",
      "Age": "21",
      "DOJ": "2014-10-03",
      "Salary": "10000"
    },
    {
      "Name": "Sandy",
      "Age": "23",
      "DOJ": "2015-06-02",
      "Salary": "20000"
    },
    {
      "Name": "John",
      "Age": "22",
      "DOJ": "2013-08-04",
      "Salary": "10000"
    },
    {
      "Name": "Joe",
      "Age": "23",
      "DOJ": "2014-03-02",
      "Salary": "25000"
    },
    {
      "Name": "Noel",
      "Age": "20",
      "DOJ": "2012-10-02",
      "Salary": "18000"
    },
    {
      "Name": "Sam",
      "Age": "25",
      "DOJ": "2015-04-10",
      "Salary": "10000"
    },
    {
      "Name": "Dev",
      "Age": "18",
      "DOJ": "2013-06-08",
      "Salary": "30000"
    },
    {
      "Name": "Bobby",
      "Age": "25",
      "DOJ": "2011-06-08",
      "Salary": "25000"
    },
    {
      "Name": "Hari",
      "Age": "22",
      "DOJ": "2012-10-08",
      "Salary": "28000"
    }
  ];

function createtable()
{
  var emptable =document.getElementById("emptable");
  var tablediv = document.getElementById("tablediv");
  var filterdiv = document.getElementById("filterdiv");
  var button = "<button id ='filter'>" + "Filter" + "</button>";
  filterdiv.innerHTML = button;
  var empcount = emp.length;
  var empdata = "<table border='2' id='tableid' cellpadding = '5'>";
  empdata += "<thead>";
  empdata += "<th class = 'theader' id = 'col1'>" + "Name" + "<p class = 'sort' onclick = 'desc(0)'>" + "&#x025BE" + "</p>" + "<p class = 'sort' onclick = 'asec(0)'>" + "&#x025B4" + "</p>" + "</th>";
  empdata += "<th class = 'theader' id = 'col2'>" + "Age" + "<p class = 'sort' onclick = 'desc(1)'>" + "&#x025BE" + "</p>" + "<p class = 'sort' onclick = 'asec(1)'>" + "&#x025B4" + "</p>" + "</th>";
  empdata += "<th class = 'theader' id = 'col3'>" + "DOJ" + "<p class = 'sort' onclick = 'desc(2)'>" + "&#x025BE" + "</p>" + "<p class = 'sort' onclick = 'asec(2)'>" + "&#x025B4" + "</p>" + "<br>" + "(yyyy/mm/dd)" + "</th>";
  empdata += "<th class = 'theader' id = 'col4'>" + "Salary" + "<p class = 'sort' onclick = 'desc(3)'>" + "&#x025BE" + "</p>" + "<p class = 'sort' onclick = 'asec(3)'>" + "&#x025B4" + "</p>" + "</th>";
  empdata += "</thead>";
  empdata += "<tbody>";
  for(var i = 0; i < empcount; i++)
  {
      empdata += "<tr>";
      empdata += "<td>" + emp[i].Name + "</td>";
      empdata += "<td>" + emp[i].Age + "</td>";
      empdata += "<td>" + emp[i].DOJ + "</td>";
      empdata += "<td>" + emp[i].Salary + "</td>";
  }
  empdata += "</tbody>";
  empdata += "</table>";
  tablediv.innerHTML = empdata;
  var tableid = document.getElementById("tableid");
  var pagediv = document.getElementById("pagediv");
  var pagination = "<button  class = 'pages' id = 'page1' onclick = 'pagination(1)'>" + "1" + "</button>";
  pagination += "<button class = 'pages' id = 'page2' onclick = 'pagination(2)'>" + "2" + "</button>";
  pagination += "<button class = 'pages' id = 'page3' onclick = 'pagination(3)'>" + "3" + "</button>";
  pagediv.innerHTML = pagination;
  /*for(var k = 1; k <= Math.ceil(tableid.rows.length/2); k++)
  {
    var element = document.createElement("input");
    element.type = "button";
    element.className = "pages";
    element.id = k;
    element.value = k;
    pagediv.appendChild(element);
    document.getElementById(k).onclick = paging(k);
  }
  /*for(i = 1; i < Math.ceil(tableid.rows.length/2); i++)
  {
  var pageno = document.getElementById(i);
  pageno.addEventListener("click", paging(i));
}*/
  emptable.innerHTML = filterdiv.outerHTML + tablediv.outerHTML + pagediv.outerHTML;
  document.getElementById("filter").addEventListener("click", filtering);
}
function desc(colid)
{
    var t = document.getElementById("tableid");
    var j,f_row,s_row;
    var temp = "";
    var rowlength = t.rows.length;
    for(var i = 1; i < rowlength; i++)
    {
      for(j = 1; j < rowlength-1; j++)
      {
        f_row = t.rows[j].cells[colid].innerHTML;
        s_row = t.rows[j+1].cells[colid].innerHTML;
          if(f_row > s_row)
          {
            temp = t.rows[j].innerHTML;
            t.rows[j].innerHTML = t.rows[j+1].innerHTML;
            t.rows[j+1].innerHTML = temp;
          }
        }
      }
    }
    function asec(colid)
    {
        var t = document.getElementById("tableid");
        var colnumber = document.getElementsByClassName("theader");
        var j,f_row,s_row;
        var temp = "";
        var rowlength = t.rows.length;
        for(var i = 1; i < rowlength; i++)
        {
          for(j = 1; j < rowlength-1; j++)
          {
            f_row = t.rows[j].cells[colid].innerHTML;
            s_row=t.rows[j+1].cells[colid].innerHTML;
              if(f_row < s_row)
              {
                temp = t.rows[j].innerHTML;
                t.rows[j].innerHTML = t.rows[j+1].innerHTML;
                t.rows[j+1].innerHTML = temp;
              }
            }
          }
        }
        function filtering()
        {
          var tableid = document.getElementById("tableid");
          var cell = document.getElementsByClassName("theader");
          document.getElementById("filter").removeEventListener("click", filtering);
          for(var i = 0; i < tableid.rows[0].cells.length; i++)
          {
            var element = document.createElement("input");
            element.type = "text";
            element.className = "filter";
            element.id = i;
            cell[i].appendChild(element);
          }
          for(i = 0; i<tableid.rows[0].cells.length; i++)
          document.getElementById(i).addEventListener("keyup", function() {search(this.id); });
        }
        function search(col)
        {
          var i;
          var tableid = document.getElementById("tableid");
          var rowcount = tableid.rows.length;
          var element = document.getElementById(col);
          for(i = 1; i < rowcount; i++)
          {
            if(tableid.rows[i].cells[col].innerHTML.indexOf(element.value) >= 0)
            tableid.rows[i].style.display = "table-row";
            else
              tableid.rows[i].style.display = "none";
          }
        }
         function pagination(pageno)
         {
          var i;
          var j;
          var tableid = document.getElementById("tableid");
          var starting = 3*(pageno-1) + 1;
          var ending = 3*pageno;
          var empcount = emp.length;
          for(i = 1; i < tableid.rows.length; i++)
          {
            if(i >= starting && i <= ending)
              tableid.rows[i].style.display = "table-row";
            else
              tableid.rows[i].style.display = "none";
          }
        }
