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
			"title": "Flutter Developer Expert 2019.",
			"year": "2019",
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
			"learn": "Learn Architecture Components in Android Jetpack ",
		}, {
			"title": "Flutter Developer Expert 2022",
			"year": "2022",
			"academy": "Dicoding Academy",
			"learn": "Learn Architecture Components in Flutter, CICD, Scurity (SSL Pinning, Encription), TDD, Modularization, Reactive Programming with BLOC & CUBIT",
		}, {
			"title": "Architecting on AWS (Membangun Arsitektur Cloud di AWS)",
			"year": "2022",
			"academy": "Dicoding Academy",
			"learn": "Belajar menjadi seorang AWS Solutions Architect dengan mengacu pada standar kompetensi internasional milik AWS",
		}, {
			"title": "Pengembangan Aplikasi Android Intermediate Disusun",
			"year": "2022",
			"academy": "Dicoding Academy",
			"learn": "Belajar Advanced UI, Animation, Localization & Accessibility, Service, Media, Geo Location, Advanced Testing, Advanced Database, Firebase",
		}, {
			"title": "Fundamental Aplikasi Back-End",
			"year": "2022",
			"academy": "Dicoding Academy",
			"learn": "Belajar Hapi Plugin dan Data Validation, Database menggunakan Amazon RDS, Authentication dan Authorization, Normalisasi Database, Message Broker dengan Amazon MQ, Storage dengan Amazon S3, Caching menggunakan Amazon ElastiCache",
		}, {
			"title": "Expert Aplikasi Back-End Developer",
			"year": "2023",
			"academy": "Dicoding Academy",
			"learn": "Belajar Automation Test, Clean Arsitektur, CICD, Security & Scalability",
		}
	]
}

for (var key in data) {
    for (var i = 0; i < data[key].length; i++) {
		var title = data[key][i].title;
		var year = data[key][i].year;
		var academy = data[key][i].academy;
		var learn = data[key][i].learn;
			
		var badge = document.createElement('div');
		badge.className = 'resume-item';
		badge.innerHTML =
			"<h4>"+title+"</h4> "+
			"<h5>"+year+"</h5>"+
			"<p><em>"+academy+"</em></p>"+
			"<p>"+learn+"</p>";
			
		document.getElementById(key).appendChild(badge);
    }
}
