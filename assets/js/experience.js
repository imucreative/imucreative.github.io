data = {
	experience: [
		{
			title: "SMKN 1 Kragilan (Mentor Siswa TKJ)",
			year: "2013 - 2014",
			address: "Jl Raya Serang Kragilan - Serang Banten",
			job_desk: [
				"Mentor Networking",
				"Mentor Web HTML & CSS",
				"Team Support troubleshoot hardware & software"
			],
		},
		{
			title: "Anta Tirta Kirana, PT (Web Programmer)",
			year: "2014 - 2017",
			address: "Jl Daan Mogot, Green Garden Kebon jeruk - Jakarta Barat",
			job_desk: [
				"Develop and Maintenance System Anta Tirta (System purchase request and purchase order, weight scale monitoring, ticketing work order)",
				"Develop and maintenance Website Company Profile using php native and framework CI",
				"Team Support troubleshoot hardware & software"
			],
		},
		{
			title: "Hyundai Mobil Indonesia, PT (System Analyst Programmer)",
			year: "2017 - 2020",
			address: "Jl Teuku Nyak Arief, Simprug - Jakarta Selatan",
			job_desk: [
				"Develop and Maintenance System ERP Dealer Management System Hyundai using framework CI",
				"Develop and Maintenance Mobile Apps Hyundai ( Hyundai Mobil Apps, Salesman Activity, Hyundai Asset, Service History, Hyundai Attendance )",
				"Develop and maintenance Website Company Profile using framework CI",
                "Team Support troubleshoot hardware & software"
			],
		},
		{
			title: "Berca Hardaya Perkasa, PT (Technical Development ERP)",
			year: "2020 - Present",
			address: "Jl Abdul Muis - Jakarta Pusat",
			job_desk: [
				"Develop Web Base using java & kotlin and vueJS as front-end for develop eProcurement",
				"Using Generator Jhipster",
				"Programmer agile for better developer",
                "Mobile apps developer using kotlin & java"
			],
		}
	],
};

for (var key in data) {
    
	for (var i = 0; i < data[key].length; i++) {
		var title = data[key][i].title;
		var year = data[key][i].year;
		var address = data[key][i].address;
		var jobDesks = data[key][i].job_desk;

        var badge = document.createElement("div");
		badge.className = "resume-item";

		var str = "<h4>" + title + "</h4>" +
			"<h5>" + year + "</h5>" +
			"<p><em>" + address + "</em></p>" +
			"<ul>";
				jobDesks.forEach(element => {
					str += "<li>"+element+"</li>";
				});
		str += "</ul>";

        badge.innerHTML = str;

		document.getElementById(key).appendChild(badge);
	}
}
