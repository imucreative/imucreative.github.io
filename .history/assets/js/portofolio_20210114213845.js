data = {
  "portofolio": [{
		"title": "System ERP Mini for PR & PO.",
		"tag": "filter-web-app",
		"tagline": "Web Apps php.123",
		"img": "prDetail.png",
		"description": "System ERP Mini for Purchase Request & Purchase Order",
  }, {
    "title": "System ERP Mini for PR & PO.",
		"tag": "filter-web-app",
		"tagline": "Web Apps php.",
		"img": "prDetail.png",
		"description": "System ERP Mini for Purchase Request & Purchase Order",
  }],
  "basketball": [{
    "Description": "Insert description here.",
    "Price": 64.99,
    "ProductName": "Wilson NCAA Solution Official Game Basketball",
  }, {
    "Description": "Insert description here.",
    "Price": 59.99,
    "ProductName": "Spalding NBA NeverFlat Size 7 Composite Leather Basketball",
  }]
}

for (var key in data) {
    for (var i = 0; i < data[key].length; i++) {
				var title = data[key][i].title;
				var tag = data[key][i].tag;
				var tagline = data[key][i].tagline;
				var img = data[key][i].img;
				var description = data[key][i].description;
				
  			var badge = document.createElement('div');
  			badge.className = 'badge';
				badge.innerHTML =
				"<div class='col-lg-4 col-md-6 portfolio-item'"+ tag +"'>"+
					"<div class='portfolio-wrap'>"+
						"<img src='./assets/img/portfolio/'"+ img +"' class='img-fluid'>"+
						"<div class='portfolio-info'>"+
							"<h4>"+ title +"</h4>"+
							"<p>"+ tagline +"</p>"+
							"<div class='portfolio-links'>"+
								"<a href='./assets/img/portfolio/"+ img +"' data-gall='portfolioGallery' class='venobox' title='"+ description +"'><i class='bx bx-search'></i></a>"+
							"</div>"+
						"</div>"+
					"</div>"+
				"</div>";
  			document.getElementById(key).appendChild(badge);
    }
}