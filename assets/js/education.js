data = {
    "education": [
          {
              "title": "Bachelor of Informatics Engineering.",
              "year": "2010 - 2014",
              "academy": "Universitas Serang Raya (IPK 3.50/4.00)"
          }
      ]
  }
  
  for (var key in data) {
      for (var i = 0; i < data[key].length; i++) {
        var title = data[key][i].title;
        var year = data[key][i].year;
        var academy = data[key][i].academy;
            
        var badge = document.createElement('div');
        badge.className = 'resume-item';
        badge.innerHTML = "<h4>"+title+"</h4> "+
            "<h5>"+year+"</h5>"+
            "<p><em>"+academy+"</em></p>";

        document.getElementById(key).appendChild(badge);
      }
  }