data = {
  "course": [
		{
			"title": "Web Programmer.",
			"year": "2012",
			"academy": "Help Desk Technology",
			"learn": "Learn html, css, php, javascript, jquery and ajax",
		}, {
			"title": "Web Design Foundamental.",
			"year": "2013",
			"academy": "Wahana Training Center",
			"learn": "Learn Basic html, css, php using bootstrap",
		}, {
			"title": "Flutter Foundamental.",
			"year": "2019",
			"academy": "Udacoding",
			"learn": "Learn knowledge in Flutter's life cycle",
		}, {
			"title": "Flutter Developer Expert.",
			"year": "2020",
			"academy": "Dicoding Academy",
			"learn": "Learn software architecture such as MVP",
		}, {
			"title": "Front end web developer.",
			"year": "2020",
			"academy": "Dicoding Academy",
			"learn": "Learn JavaScript, Web Component, Build Tools dan AJAX",
		}, {
			"title": "Membangun Progressive Web Apps.",
			"year": "2020",
			"academy": "Dicoding Academy",
			"learn": "Learn Progressive Web Apps seperti App Shell, Service Worker, Web Push dan Web Apps Manifest",
		}, {
			"title": "Foundamental Android Developer Expert.",
			"year": "2020",
			"academy": "Dicoding Academy",
			"learn": "Learn All feature by Google Developers Authorized Training Partner, from basic to advance",
		}, {
			"title": "Android Jetpack Pro.",
			"year": "2020",
			"academy": "Dicoding Academy",
			"learn": "Learn All Architecture Components in Android Jetpack ",
		}
	]
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
				"<div class='col-lg-4 col-md-6 portfolio-item "+ tag +"'>"+
					"<div class='portfolio-wrap'>"+
						"<img src='./assets/img/portfolio/"+ img +"' class='img-fluid'>"+
						"<div class='portfolio-info'>"+
							"<h4>"+ title +"</h4>"+
							"<p>"+ tagline +"</p>"+
							"<div class='portfolio-links'>"+
								"<a href='./assets/img/portfolio/"+ img +"' data-gall='portfolioGallery' class='venobox' title='"+ description +"'><i class='bx bx-search'></i></a>"+
								//<a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" class="venobox" title="Portfolio Details"><i class="bx bx-link"></i></a>
							"</div>"+
						"</div>"+
					"</div>"+
				"</div>";
  			document.getElementById(key).appendChild(badge);
    }
}