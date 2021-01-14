data = {
  "portofolio": [
		{
			"title": "System ERP Mini for PR & PO.",
			"tag": "filter-web-app",
			"tagline": "Web Apps php.",
			"img": "prDetail.png",
			"description": "System ERP Mini for Purchase Request & Purchase Order",
		}, {
			"title": "System Monitoring Weightscale.",
			"tag": "filter-web-app",
			"tagline": "Web App php, javascript, ajax.",
			"img": "timbanganDashboard.png",
			"description": "System Monitoring Weightscale",
		}, {
			"title": "System Ticketing for Work Order.",
			"tag": "filter-web-app",
			"tagline": "Web App php, javascript, ajax.",
			"img": "woDashBoard.png",
			"description": "System Ticketing for Work Order",
		}, {
			"title": "System Perpustakaan Daerah.",
			"tag": "filter-web-app",
			"tagline": "Web App php, javascript, ajax.",
			"img": "pusdaDashboard.png",
			"description": "System Perpustakaan Daerah",
		}, {
			"title": "System Penerimaan Barang Datang.",
			"tag": "filter-web-app",
			"tagline": "Web App Framework CI.",
			"img": "goodsInventory.png",
			"description": "System Penerimaan Barang Datang",
		}, {
			"title": "Hyundai Mobil Apps (On Playstore).",
			"tag": "filter-mobile-app",
			"tagline": "Using Android Studio base on java.",
			"img": "hyundai_apps.png",
			"description": "Hyundai Mobil Apps (On Playstore) Using Android Studio base on java with feature Service History, Booking service, Booking test drive",
		}, {
			"title": "Hyundai Salesman Activity.",
			"tag": "filter-mobile-app",
			"tagline": "Using Android Studio base on java.",
			"img": "salesman_activity.png",
			"description": "Using Android Studio base on java for develop Salesman Activity & Hyundai Attendance",
		}, {
			"title": "Hyundai Asset.",
			"tag": "filter-mobile-app",
			"tagline": "Feature for scan barcode to find specifiec asset, stock opname.",
			"img": "hyundai_asset.png",
			"description": "Feature for scan barcode to find specifiec asset, stock opname",
		}, {
			"title": "Company Profile.",
			"tag": "filter-web-app",
			"tagline": "Web App Framework CI.",
			"img": "cia.png",
			"description": "Company Profile CIA, Ponpes Darussofa, Wedding Invitation, Seminar Invitation and others",
		}, {
			"title": "Mobile Apps.",
			"tag": "filter-mobile-app",
			"tagline": "Mobile Apps Information & Ticketing.",
			"img": "jadwal_kajian.png",
			"description": "Mobile Apps Information Jadwal Kajian & Ticketing Pengaduan Keluhan Kos-kos'n",
		}, {
			"title": "SSB Tracking Shipment.",
			"tag": "filter-web-app",
			"tagline": "Web Apps Framework CI.",
			"img": "ssbTrackShipment.png",
			"description": "System Tracking Shipment by Delivery Order",
		}, {
			"title": "Wedding Invitation.",
			"tag": "filter-web-app",
			"tagline": "Web Apps Framework CI.",
			"img": "wedding_indra_dona.png",
			"description": "System information wedding invitation",
		}, {
			"title": "Flutter development expert.",
			"tag": "filter-mobile-app",
			"tagline": "Flutter, course, dicoding.com",
			"img": "dicoding_flutter_dev_expert.png",
			"description": "This is a submission Flutter course in dicoding.com (2019)",
		}, {
			"title": "Foundamental Android Development.",
			"tag": "filter-mobile-app",
			"tagline": "Android Native, java, dicoding.com (2020)",
			"img": "dicoding_github_user_kade.png",
			"description": "This is a submission project android basic to middle course in dicoding.com (2020)",
		}, {
			"title": "Android Jetpack Pro.",
			"tag": "filter-mobile-app",
			"tagline": "Android, native, jetpack, mvvm, solid, java",
			"img": "dicoding_movie_catalog_jetpackpro.png",
			"description": "This is a submission project android jetpack pro to management architecture project android course in dicoding.com (2020)",
		}

	],
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