// const fs = require("fs")
import fs from "fs"
let data=[
	{
		"Name": "Natalie Mcfadden",
		"Postal Code": "366263",
		"Address": "946-3056 Lorem Rd.",
		"EstablishedDate": "1996/42/07",
		"Services": "General Surgery, Pharmacy, Neurology",
		"DistanceFromME": 4430,
		"Rating": 4.2,
		"Hospital Type": "Private",
		"Avg_Fee": 4358
	},
	{
		"Name": "Mollie Knox",
		"Postal Code": "823687",
		"Address": "Ap #894-3626 A, Avenue",
		"EstablishedDate": "1962/58/25",
		"Services": "Orthopedics, Sleep Medicine, General Surgery",
		"DistanceFromME": 9191,
		"Rating": 5.0,
		"Hospital Type": "Private",
		"Avg_Fee": 351
	},
	{
		"Name": "Robert Golden",
		"Postal Code": "883682",
		"Address": "641-2013 Ante St.",
		"EstablishedDate": "1932/27/29",
		"Services": "Cardiology, Oncology, Laboratory Services",
		"DistanceFromME": 4850,
		"Rating": 2.7,
		"Hospital Type": "Private",
		"Avg_Fee": 2845
	},
	{
		"Name": "Martina Castro",
		"Postal Code": "247886",
		"Address": "Ap #964-9475 Morbi Rd.",
		"EstablishedDate": "1964/18/31",
		"Services": "Radiology, Palliative Care, Dental Services, Pharmacy, Ophthalmology",
		"DistanceFromME": 2707,
		"Rating": 3.3,
		"Hospital Type": "Public",
		"Avg_Fee": 4719
	},
	{
		"Name": "Merritt Sellers",
		"Postal Code": "347217",
		"Address": "3717 Odio. Av.",
		"EstablishedDate": "1947/42/11",
		"Services": "Laboratory Services",
		"DistanceFromME": 5481,
		"Rating": 2.3,
		"Hospital Type": "Public",
		"Avg_Fee": 3532
	},
	{
		"Name": "Medge Wright",
		"Postal Code": "650168",
		"Address": "Ap #362-4247 Ipsum Ave",
		"EstablishedDate": "2005/50/18",
		"Services": "Emergency Care, Neurology",
		"DistanceFromME": 9646,
		"Rating": 4,
		"Hospital Type": "Private",
		"Avg_Fee": 1976
	},
	{
		"Name": "Cynthia Ashley",
		"Postal Code": "165241",
		"Address": "Ap #331-862 Mauris St.",
		"EstablishedDate": "1941/48/26",
		"Services": "Ophthalmology, General Surgery, Sleep Medicine, Neurology, Emergency Care",
		"DistanceFromME": 784,
		"Rating": 4.1,
		"Hospital Type": "Public",
		"Avg_Fee": 4388
	},
	{
		"Name": "Illiana Lang",
		"Postal Code": "838180",
		"Address": "Ap #872-4653 Malesuada Street",
		"EstablishedDate": "1991/10/16",
		"Services": "Dermatology, Obstetrics & Gynecology, Ophthalmology",
		"DistanceFromME": 497,
		"Rating": 4.7,
		"Hospital Type": "Private",
		"Avg_Fee": 1007
	},
	{
		"Name": "Jolie White",
		"Postal Code": "768071",
		"Address": "901-7273 Augue Rd.",
		"EstablishedDate": "1926/07/11",
		"Services": "Laboratory Services, Dermatology, Pain Management, Oncology, Neurology",
		"DistanceFromME": 1573,
		"Rating": 2.5,
		"Hospital Type": "Public",
		"Avg_Fee": 3525
	},
	{
		"Name": "Patience Christensen",
		"Postal Code": "405849",
		"Address": "Ap #391-4116 Aenean Avenue",
		"EstablishedDate": "2018/24/24",
		"Services": "Emergency Care",
		"DistanceFromME": 1653,
		"Rating": 1.3,
		"Hospital Type": "Public",
		"Avg_Fee": 2010
	},
	{
		"Name": "Caryn Patterson",
		"Postal Code": "645672",
		"Address": "2922 Dignissim Road",
		"EstablishedDate": "1975/46/28",
		"Services": "General Surgery, Emergency Care, Urgent Care, Sleep Medicine",
		"DistanceFromME": 3494,
		"Rating": 4.8,
		"Hospital Type": "Private",
		"Avg_Fee": 430
	},
	{
		"Name": "Castor Cox",
		"Postal Code": "982380",
		"Address": "596-9318 Fusce Av.",
		"EstablishedDate": "1932/17/04",
		"Services": "Ophthalmology, Laboratory Services, Sleep Medicine",
		"DistanceFromME": 9785,
		"Rating": 2,
		"Hospital Type": "Public",
		"Avg_Fee": 245
	},
	{
		"Name": "Ginger Serrano",
		"Postal Code": "363217",
		"Address": "Ap #621-4029 Pede Road",
		"EstablishedDate": "2000/20/13",
		"Services": "Emergency Care, Laboratory Services, Pharmacy",
		"DistanceFromME": 220,
		"Rating": 4,
		"Hospital Type": "Public",
		"Avg_Fee": 1626
	},
	{
		"Name": "Oren Kelley",
		"Postal Code": "794516",
		"Address": "Ap #390-9264 Fusce St.",
		"EstablishedDate": "1941/43/15",
		"Services": "Dermatology, Emergency Care, Oncology, Pediatrics, Psychiatry",
		"DistanceFromME": 3966,
		"Rating": 3.6,
		"Hospital Type": "Public",
		"Avg_Fee": 1253
	},
	{
		"Name": "Ashely Thomas",
		"Postal Code": "427169",
		"Address": "750-9812 Cras Rd.",
		"EstablishedDate": "1932/07/06",
		"Services": "Ophthalmology, Orthopedics",
		"DistanceFromME": 987,
		"Rating": 2.5,
		"Hospital Type": "Public",
		"Avg_Fee": 4946
	},
	{
		"Name": "Geoffrey Glenn",
		"Postal Code": "960285",
		"Address": "6154 Enim. Rd.",
		"EstablishedDate": "1968/52/31",
		"Services": "Sleep Medicine",
		"DistanceFromME": 8317,
		"Rating": 3.9,
		"Hospital Type": "Private",
		"Avg_Fee": 928
	},
	{
		"Name": "Pandora Alexander",
		"Postal Code": "880233",
		"Address": "Ap #798-1882 Dolor. Road",
		"EstablishedDate": "1955/34/03",
		"Services": "Ophthalmology, Urgent Care",
		"DistanceFromME": 3334,
		"Rating": 3,
		"Hospital Type": "Public",
		"Avg_Fee": 3071
	},
	{
		"Name": "Alika Simmons",
		"Postal Code": "341213",
		"Address": "Ap #520-1153 Adipiscing St.",
		"EstablishedDate": "1979/32/27",
		"Services": "Pain Management, Pediatrics",
		"DistanceFromME": 6793,
		"Rating": 3,
		"Hospital Type": "Public",
		"Avg_Fee": 3778
	},
	{
		"Name": "Rogan Hendrix",
		"Postal Code": "773540",
		"Address": "590-684 Donec Road",
		"EstablishedDate": "1952/11/03",
		"Services": "Palliative Care, Orthopedics, Obstetrics & Gynecology",
		"DistanceFromME": 2386,
		"Rating": 2.9,
		"Hospital Type": "Public",
		"Avg_Fee": 856
	},
	{
		"Name": "Arsenio Graves",
		"Postal Code": "461149",
		"Address": "P.O. Box 641, 5063 Adipiscing, St.",
		"EstablishedDate": "2017/18/25",
		"Services": "Oncology, Sleep Medicine, Psychiatry, Neurology",
		"DistanceFromME": 2388,
		"Rating": 2.6,
		"Hospital Type": "Private",
		"Avg_Fee": 2103
	},
	{
		"Name": "Fitzgerald Dickson",
		"Postal Code": "564255",
		"Address": "Ap #484-6466 Diam Avenue",
		"EstablishedDate": "2016/15/17",
		"Services": "Pharmacy, Urgent Care, Neurology",
		"DistanceFromME": 8959,
		"Rating": 4.9,
		"Hospital Type": "Private",
		"Avg_Fee": 2812
	},
	{
		"Name": "Miranda Stuart",
		"Postal Code": "213751",
		"Address": "1405 Praesent Ave",
		"EstablishedDate": "1925/21/24",
		"Services": "Pain Management, Dental Services, Orthopedics, Dermatology",
		"DistanceFromME": 511,
		"Rating": 1.4,
		"Hospital Type": "Public",
		"Avg_Fee": 4402
	},
	{
		"Name": "Edan Waller",
		"Postal Code": "658120",
		"Address": "531-4275 Libero Rd.",
		"EstablishedDate": "1928/29/03",
		"Services": "Rehabilitation Services, Radiology, Orthopedics",
		"DistanceFromME": 1539,
		"Rating": 2.7,
		"Hospital Type": "Public",
		"Avg_Fee": 1481
	},
	{
		"Name": "Lani Pruitt",
		"Postal Code": "877364",
		"Address": "Ap #678-3784 Consequat Rd.",
		"EstablishedDate": "2017/27/30",
		"Services": "Orthopedics, General Surgery",
		"DistanceFromME": 3267,
		"Rating": 4.3,
		"Hospital Type": "Public",
		"Avg_Fee": 2410
	},
	{
		"Name": "Aidan Rojas",
		"Postal Code": "361451",
		"Address": "Ap #322-9579 Euismod Street",
		"EstablishedDate": "2020/29/28",
		"Services": "Sleep Medicine, Urgent Care, Radiology",
		"DistanceFromME": 7302,
		"Rating": 2.6,
		"Hospital Type": "Private",
		"Avg_Fee": 667
	},
	{
		"Name": "Conan Lewis",
		"Postal Code": "858660",
		"Address": "Ap #458-6399 Convallis, St.",
		"EstablishedDate": "2017/43/15",
		"Services": "Neurology, Rehabilitation Services, Obstetrics & Gynecology, Pediatrics, Emergency Care",
		"DistanceFromME": 1706,
		"Rating": 4.5,
		"Hospital Type": "Public",
		"Avg_Fee": 2376
	},
	{
		"Name": "Hayfa Callahan",
		"Postal Code": "478928",
		"Address": "P.O. Box 955, 2680 Ante Avenue",
		"EstablishedDate": "1981/26/13",
		"Services": "Pediatrics, Psychiatry, Ophthalmology, Emergency Care",
		"DistanceFromME": 3271,
		"Rating": 4.9,
		"Hospital Type": "Private",
		"Avg_Fee": 3552
	},
	{
		"Name": "Denton Parker",
		"Postal Code": "798582",
		"Address": "732-2974 Libero St.",
		"EstablishedDate": "1957/02/16",
		"Services": "Obstetrics & Gynecology, General Surgery",
		"DistanceFromME": 6168,
		"Rating": 3.7,
		"Hospital Type": "Private",
		"Avg_Fee": 437
	},
	{
		"Name": "Colorado Johnson",
		"Postal Code": "649323",
		"Address": "5074 Duis Rd.",
		"EstablishedDate": "1943/08/14",
		"Services": "Dermatology, General Surgery, Urgent Care, Obstetrics & Gynecology",
		"DistanceFromME": 9166,
		"Rating": 3.1,
		"Hospital Type": "Private",
		"Avg_Fee": 325
	},
	{
		"Name": "Shana Waller",
		"Postal Code": "265275",
		"Address": "Ap #569-317 Sed Road",
		"EstablishedDate": "1984/03/08",
		"Services": "Pediatrics, Oncology",
		"DistanceFromME": 4829,
		"Rating": 1.4,
		"Hospital Type": "Private",
		"Avg_Fee": 285
	},
	{
		"Name": "Eaton Cannon",
		"Postal Code": "348713",
		"Address": "Ap #627-6704 Posuere, Avenue",
		"EstablishedDate": "2007/42/19",
		"Services": "Obstetrics & Gynecology, Pediatrics, Orthopedics, General Surgery, Neurology",
		"DistanceFromME": 5555,
		"Rating": 4.1,
		"Hospital Type": "Private",
		"Avg_Fee": 4581
	},
	{
		"Name": "Kellie Gould",
		"Postal Code": "735251",
		"Address": "P.O. Box 301, 6732 Justo Road",
		"EstablishedDate": "1963/30/21",
		"Services": "Dermatology",
		"DistanceFromME": 9847,
		"Rating": 2.3,
		"Hospital Type": "Private",
		"Avg_Fee": 411
	},
	{
		"Name": "Ezekiel Delaney",
		"Postal Code": "253748",
		"Address": "658-3822 Dolor. Street",
		"EstablishedDate": "1984/45/25",
		"Services": "Oncology, Laboratory Services, Pain Management",
		"DistanceFromME": 454,
		"Rating": 1.6,
		"Hospital Type": "Private",
		"Avg_Fee": 1846
	},
	{
		"Name": "Veronica Fulton",
		"Postal Code": "275419",
		"Address": "P.O. Box 172, 836 Donec St.",
		"EstablishedDate": "1950/44/23",
		"Services": "Pharmacy, Psychiatry, Orthopedics",
		"DistanceFromME": 8254,
		"Rating": 1.5,
		"Hospital Type": "Private",
		"Avg_Fee": 3017
	},
	{
		"Name": "Harriet Parrish",
		"Postal Code": "577624",
		"Address": "Ap #848-2556 Duis Av.",
		"EstablishedDate": "2010/22/04",
		"Services": "Cardiology, Dermatology",
		"DistanceFromME": 7542,
		"Rating": 2.5,
		"Hospital Type": "Private",
		"Avg_Fee": 2989
	},
	{
		"Name": "Macaulay Lewis",
		"Postal Code": "798322",
		"Address": "5328 Adipiscing, Rd.",
		"EstablishedDate": "1934/22/04",
		"Services": "Radiology",
		"DistanceFromME": 1685,
		"Rating": 1.3,
		"Hospital Type": "Public",
		"Avg_Fee": 4129
	},
	{
		"Name": "Octavius Reynolds",
		"Postal Code": "418323",
		"Address": "Ap #494-4262 Molestie Rd.",
		"EstablishedDate": "1998/27/23",
		"Services": "Pediatrics, Pain Management, Oncology, Dental Services",
		"DistanceFromME": 5634,
		"Rating": 2.2,
		"Hospital Type": "Private",
		"Avg_Fee": 3133
	},
	{
		"Name": "Isadora Morrow",
		"Postal Code": "587424",
		"Address": "Ap #808-7578 Proin Av.",
		"EstablishedDate": "2020/55/17",
		"Services": "Rehabilitation Services, Psychiatry",
		"DistanceFromME": 7485,
		"Rating": 2,
		"Hospital Type": "Public",
		"Avg_Fee": 342
	},
	{
		"Name": "Sean Cochran",
		"Postal Code": "673047",
		"Address": "Ap #838-9251 Gravida Rd.",
		"EstablishedDate": "1961/23/15",
		"Services": "Cardiology, Pediatrics, Pain Management, Emergency Care",
		"DistanceFromME": 2135,
		"Rating": 1.3,
		"Hospital Type": "Public",
		"Avg_Fee": 2373
	},
	{
		"Name": "Hasad Wells",
		"Postal Code": "348903",
		"Address": "1470 Metus. Avenue",
		"EstablishedDate": "1989/30/19",
		"Services": "Psychiatry, Obstetrics & Gynecology, Pediatrics",
		"DistanceFromME": 3363,
		"Rating": 1.5,
		"Hospital Type": "Private",
		"Avg_Fee": 1229
	},
	{
		"Name": "Katell Santos",
		"Postal Code": "879454",
		"Address": "631-2178 Fusce Street",
		"EstablishedDate": "1996/55/18",
		"Services": "General Surgery, Rehabilitation Services, Pediatrics, Pharmacy",
		"DistanceFromME": 2036,
		"Rating": 2.5,
		"Hospital Type": "Public",
		"Avg_Fee": 2679
	},
	{
		"Name": "Madison Dudley",
		"Postal Code": "218833",
		"Address": "1682 Fermentum Street",
		"EstablishedDate": "1959/58/19",
		"Services": "Cardiology, Ophthalmology, Emergency Care, Laboratory Services",
		"DistanceFromME": 6413,
		"Rating": 3.9,
		"Hospital Type": "Private",
		"Avg_Fee": 675
	},
	{
		"Name": "Joy Bates",
		"Postal Code": "848310",
		"Address": "Ap #310-6312 Elementum Rd.",
		"EstablishedDate": "1994/18/05",
		"Services": "Pharmacy, Cardiology, Emergency Care, Neurology",
		"DistanceFromME": 3206,
		"Rating": 4.5,
		"Hospital Type": "Private",
		"Avg_Fee": 4250
	},
	{
		"Name": "Carissa Gordon",
		"Postal Code": "313582",
		"Address": "Ap #300-781 Aenean Ave",
		"EstablishedDate": "1933/08/23",
		"Services": "Sleep Medicine",
		"DistanceFromME": 4023,
		"Rating": 1.2,
		"Hospital Type": "Private",
		"Avg_Fee": 3829
	},
	{
		"Name": "Richard Singleton",
		"Postal Code": "778387",
		"Address": "807-9827 Quam Rd.",
		"EstablishedDate": "1989/17/19",
		"Services": "Rehabilitation Services, Radiology, Dermatology",
		"DistanceFromME": 4123,
		"Rating": 3.5,
		"Hospital Type": "Private",
		"Avg_Fee": 625
	},
	{
		"Name": "Yasir Avila",
		"Postal Code": "670318",
		"Address": "276-5492 Dignissim. St.",
		"EstablishedDate": "1974/40/16",
		"Services": "Cardiology, Pharmacy, Laboratory Services",
		"DistanceFromME": 4903,
		"Rating": 2.1,
		"Hospital Type": "Private",
		"Avg_Fee": 1986
	},
	{
		"Name": "Xenos Cortez",
		"Postal Code": "752583",
		"Address": "126-9002 Ac Av.",
		"EstablishedDate": "1986/50/07",
		"Services": "Oncology, Dental Services, Neurology, Emergency Care",
		"DistanceFromME": 1291,
		"Rating": 1.2,
		"Hospital Type": "Public",
		"Avg_Fee": 2697
	},
	{
		"Name": "Alexis Brady",
		"Postal Code": "638975",
		"Address": "532-3536 At Rd.",
		"EstablishedDate": "2010/45/18",
		"Services": "Orthopedics",
		"DistanceFromME": 9011,
		"Rating": 2.8,
		"Hospital Type": "Public",
		"Avg_Fee": 3225
	},
	{
		"Name": "Cyrus Burnett",
		"Postal Code": "833372",
		"Address": "P.O. Box 201, 4118 Ut, St.",
		"EstablishedDate": "2024/25/16",
		"Services": "Palliative Care, Dental Services, Orthopedics, General Surgery",
		"DistanceFromME": 3983,
		"Rating": 2.6,
		"Hospital Type": "Private",
		"Avg_Fee": 4291
	},
	{
		"Name": "Sawyer Buckley",
		"Postal Code": "140852",
		"Address": "349-9262 Neque. Road",
		"EstablishedDate": "2018/04/24",
		"Services": "Dental Services, Rehabilitation Services, Oncology",
		"DistanceFromME": 6105,
		"Rating": 4.5,
		"Hospital Type": "Private",
		"Avg_Fee": 1375
	},
	{
		"Name": "Ariel Travis",
		"Postal Code": "733762",
		"Address": "991-1812 Rutrum Avenue",
		"EstablishedDate": "1931/10/26",
		"Services": "Ophthalmology, Cardiology",
		"DistanceFromME": 759,
		"Rating": 1.6,
		"Hospital Type": "Public",
		"Avg_Fee": 4399
	},
	{
		"Name": "Jerry Allison",
		"Postal Code": "731977",
		"Address": "419-5839 Cursus, Avenue",
		"EstablishedDate": "1984/13/16",
		"Services": "Emergency Care, General Surgery, Neurology",
		"DistanceFromME": 5249,
		"Rating": 1.7,
		"Hospital Type": "Public",
		"Avg_Fee": 2277
	},
	{
		"Name": "Phillip Zimmerman",
		"Postal Code": "828536",
		"Address": "120-5350 Lacinia Avenue",
		"EstablishedDate": "1939/55/07",
		"Services": "Urgent Care, Psychiatry, Obstetrics & Gynecology, Cardiology",
		"DistanceFromME": 6693,
		"Rating": 4.9,
		"Hospital Type": "Private",
		"Avg_Fee": 405
	},
	{
		"Name": "Ezra Rivera",
		"Postal Code": "192595",
		"Address": "Ap #926-6270 Habitant Street",
		"EstablishedDate": "1928/22/23",
		"Services": "Oncology, Pain Management, Psychiatry",
		"DistanceFromME": 7724,
		"Rating": 2.9,
		"Hospital Type": "Private",
		"Avg_Fee": 2132
	},
	{
		"Name": "Dean Banks",
		"Postal Code": "482785",
		"Address": "Ap #533-3760 Tempus St.",
		"EstablishedDate": "1940/59/12",
		"Services": "Rehabilitation Services, Sleep Medicine, Radiology, Obstetrics & Gynecology, Cardiology",
		"DistanceFromME": 3951,
		"Rating": 4.8,
		"Hospital Type": "Public",
		"Avg_Fee": 3020
	},
	{
		"Name": "Gail Beck",
		"Postal Code": "861734",
		"Address": "225-3519 Tempor Ave",
		"EstablishedDate": "1945/03/19",
		"Services": "Palliative Care, Oncology, General Surgery, Pharmacy",
		"DistanceFromME": 8378,
		"Rating": 1.6,
		"Hospital Type": "Private",
		"Avg_Fee": 1841
	},
	{
		"Name": "Jena Reid",
		"Postal Code": "719287",
		"Address": "499-6329 Euismod Ave",
		"EstablishedDate": "1960/52/27",
		"Services": "Oncology",
		"DistanceFromME": 5526,
		"Rating": 2.3,
		"Hospital Type": "Public",
		"Avg_Fee": 4128
	},
	{
		"Name": "Timon Oneal",
		"Postal Code": "545785",
		"Address": "483-2935 Vel, St.",
		"EstablishedDate": "1960/58/01",
		"Services": "Pharmacy",
		"DistanceFromME": 6544,
		"Rating": 4.8,
		"Hospital Type": "Public",
		"Avg_Fee": 1177
	},
	{
		"Name": "Travis Powers",
		"Postal Code": "267370",
		"Address": "489-9360 Scelerisque Avenue",
		"EstablishedDate": "1978/49/05",
		"Services": "Cardiology, Orthopedics",
		"DistanceFromME": 2504,
		"Rating": 3.3,
		"Hospital Type": "Private",
		"Avg_Fee": 230
	},
	{
		"Name": "Shea Burks",
		"Postal Code": "934478",
		"Address": "309-7160 Ut St.",
		"EstablishedDate": "1981/09/18",
		"Services": "Sleep Medicine, Pharmacy, Laboratory Services, Psychiatry",
		"DistanceFromME": 7388,
		"Rating": 2.6,
		"Hospital Type": "Public",
		"Avg_Fee": 2704
	},
	{
		"Name": "Bruno Baker",
		"Postal Code": "308837",
		"Address": "510-6343 Tincidunt Street",
		"EstablishedDate": "2022/13/07",
		"Services": "Pediatrics",
		"DistanceFromME": 2810,
		"Rating": 3.4,
		"Hospital Type": "Public",
		"Avg_Fee": 4627
	},
	{
		"Name": "Blake Powell",
		"Postal Code": "483021",
		"Address": "620-2103 Fringilla St.",
		"EstablishedDate": "1979/29/23",
		"Services": "Dermatology, Obstetrics & Gynecology, Urgent Care, Cardiology",
		"DistanceFromME": 8765,
		"Rating": 2.7,
		"Hospital Type": "Public",
		"Avg_Fee": 309
	},
	{
		"Name": "Lamar Berger",
		"Postal Code": "794118",
		"Address": "1842 Aenean Rd.",
		"EstablishedDate": "1957/14/03",
		"Services": "Dermatology, Dental Services, Pharmacy",
		"DistanceFromME": 2978,
		"Rating": 2.5,
		"Hospital Type": "Public",
		"Avg_Fee": 1757
	},
	{
		"Name": "Lucius Jacobs",
		"Postal Code": "342783",
		"Address": "546 Enim. Rd.",
		"EstablishedDate": "1971/33/15",
		"Services": "Dental Services, Neurology, Palliative Care, Pediatrics, Radiology",
		"DistanceFromME": 5338,
		"Rating": 2.8,
		"Hospital Type": "Public",
		"Avg_Fee": 658
	},
	{
		"Name": "Lucius Holloway",
		"Postal Code": "572421",
		"Address": "Ap #266-4422 Integer St.",
		"EstablishedDate": "1930/30/21",
		"Services": "Pharmacy, Radiology, Ophthalmology, Rehabilitation Services, Orthopedics",
		"DistanceFromME": 7813,
		"Rating": 4.5,
		"Hospital Type": "Private",
		"Avg_Fee": 2669
	},
	{
		"Name": "Gannon Norman",
		"Postal Code": "265151",
		"Address": "Ap #802-130 Non, Road",
		"EstablishedDate": "1940/40/20",
		"Services": "Urgent Care, Psychiatry, Ophthalmology",
		"DistanceFromME": 2224,
		"Rating": 3.4,
		"Hospital Type": "Public",
		"Avg_Fee": 3611
	},
	{
		"Name": "Scott Dillon",
		"Postal Code": "862382",
		"Address": "224-326 Nunc Rd.",
		"EstablishedDate": "2004/54/09",
		"Services": "Pharmacy, Pediatrics, Palliative Care, Dental Services, Emergency Care",
		"DistanceFromME": 4958,
		"Rating": 1.7,
		"Hospital Type": "Public",
		"Avg_Fee": 1528
	},
	{
		"Name": "Britanni Burke",
		"Postal Code": "263210",
		"Address": "4494 Et St.",
		"EstablishedDate": "1982/17/16",
		"Services": "Pharmacy",
		"DistanceFromME": 6107,
		"Rating": 1.8,
		"Hospital Type": "Public",
		"Avg_Fee": 1030
	},
	{
		"Name": "Lucius Hurley",
		"Postal Code": "273560",
		"Address": "P.O. Box 916, 6426 Quisque Rd.",
		"EstablishedDate": "2016/54/09",
		"Services": "Oncology, Ophthalmology, Pediatrics, Pharmacy",
		"DistanceFromME": 7775,
		"Rating": 3.8,
		"Hospital Type": "Public",
		"Avg_Fee": 2269
	},
	{
		"Name": "Mara Peters",
		"Postal Code": "497446",
		"Address": "678-2600 Tortor. St.",
		"EstablishedDate": "1983/38/22",
		"Services": "Oncology, Pediatrics, Radiology",
		"DistanceFromME": 6134,
		"Rating": 1.6,
		"Hospital Type": "Private",
		"Avg_Fee": 1816
	},
	{
		"Name": "Flynn Grant",
		"Postal Code": "433516",
		"Address": "780-2353 Turpis St.",
		"EstablishedDate": "2024/08/14",
		"Services": "Laboratory Services, Pediatrics, Neurology",
		"DistanceFromME": 3818,
		"Rating": 1.6,
		"Hospital Type": "Public",
		"Avg_Fee": 2466
	},
	{
		"Name": "Jena Maldonado",
		"Postal Code": "834520",
		"Address": "423-6553 In Street",
		"EstablishedDate": "2012/10/15",
		"Services": "Obstetrics & Gynecology, Ophthalmology",
		"DistanceFromME": 830,
		"Rating": 1.7,
		"Hospital Type": "Public",
		"Avg_Fee": 4448
	},
	{
		"Name": "Russell Gill",
		"Postal Code": "357304",
		"Address": "528-4172 Consectetuer St.",
		"EstablishedDate": "1971/16/09",
		"Services": "Emergency Care, Pharmacy",
		"DistanceFromME": 5139,
		"Rating": 1.3,
		"Hospital Type": "Private",
		"Avg_Fee": 3711
	},
	{
		"Name": "Aristotle House",
		"Postal Code": "973766",
		"Address": "5314 Proin Road",
		"EstablishedDate": "2001/06/27",
		"Services": "Cardiology, Pain Management, Pediatrics, Orthopedics",
		"DistanceFromME": 1066,
		"Rating": 1.5,
		"Hospital Type": "Public",
		"Avg_Fee": 4773
	},
	{
		"Name": "Cleo Bishop",
		"Postal Code": "485277",
		"Address": "981-6014 Lobortis Ave",
		"EstablishedDate": "1978/03/20",
		"Services": "Pain Management, Sleep Medicine, Laboratory Services, Rehabilitation Services",
		"DistanceFromME": 8703,
		"Rating": 3.5,
		"Hospital Type": "Public",
		"Avg_Fee": 4777
	},
	{
		"Name": "David Glover",
		"Postal Code": "433405",
		"Address": "Ap #660-8929 Eu St.",
		"EstablishedDate": "1986/38/04",
		"Services": "Sleep Medicine, Radiology",
		"DistanceFromME": 6147,
		"Rating": 4.4,
		"Hospital Type": "Public",
		"Avg_Fee": 2670
	},
	{
		"Name": "Aileen Cline",
		"Postal Code": "624647",
		"Address": "829-5535 Libero. Rd.",
		"EstablishedDate": "1966/31/27",
		"Services": "Radiology, Laboratory Services",
		"DistanceFromME": 5011,
		"Rating": 3.1,
		"Hospital Type": "Public",
		"Avg_Fee": 1158
	},
	{
		"Name": "Petra Atkinson",
		"Postal Code": "693656",
		"Address": "992 A, St.",
		"EstablishedDate": "1924/21/19",
		"Services": "Orthopedics, Emergency Care, Pain Management",
		"DistanceFromME": 5921,
		"Rating": 2.1,
		"Hospital Type": "Private",
		"Avg_Fee": 4181
	},
	{
		"Name": "Warren Ochoa",
		"Postal Code": "216537",
		"Address": "Ap #783-4026 Eget Road",
		"EstablishedDate": "1994/14/27",
		"Services": "Oncology, Urgent Care",
		"DistanceFromME": 6274,
		"Rating": 1.8,
		"Hospital Type": "Private",
		"Avg_Fee": 4299
	},
	{
		"Name": "Regan Anderson",
		"Postal Code": "947248",
		"Address": "P.O. Box 620, 1921 A, Rd.",
		"EstablishedDate": "1933/17/10",
		"Services": "Ophthalmology, Pain Management",
		"DistanceFromME": 6837,
		"Rating": 2.4,
		"Hospital Type": "Private",
		"Avg_Fee": 1249
	},
	{
		"Name": "Peter Coffey",
		"Postal Code": "374452",
		"Address": "Ap #983-5545 Mauris Rd.",
		"EstablishedDate": "1954/32/31",
		"Services": "Emergency Care, Orthopedics, Obstetrics & Gynecology",
		"DistanceFromME": 2625,
		"Rating": 4,
		"Hospital Type": "Public",
		"Avg_Fee": 4433
	},
	{
		"Name": "Emily Gould",
		"Postal Code": "348713",
		"Address": "3472 Enim. Street",
		"EstablishedDate": "1974/24/26",
		"Services": "Obstetrics & Gynecology, Ophthalmology, Pediatrics, Sleep Medicine, Radiology",
		"DistanceFromME": 4998,
		"Rating": 3.7,
		"Hospital Type": "Public",
		"Avg_Fee": 4376
	},
	{
		"Name": "Faith Morin",
		"Postal Code": "548649",
		"Address": "5509 Mauris. Rd.",
		"EstablishedDate": "2008/55/19",
		"Services": "Radiology, Psychiatry, Palliative Care",
		"DistanceFromME": 9452,
		"Rating": 4.6,
		"Hospital Type": "Public",
		"Avg_Fee": 2025
	},
	{
		"Name": "Lewis Hewitt",
		"Postal Code": "912027",
		"Address": "584-8365 Neque St.",
		"EstablishedDate": "2002/12/29",
		"Services": "Oncology, General Surgery, Orthopedics, Cardiology",
		"DistanceFromME": 8135,
		"Rating": 4.8,
		"Hospital Type": "Public",
		"Avg_Fee": 2242
	},
	{
		"Name": "Wynter Howell",
		"Postal Code": "724317",
		"Address": "473-6692 Ullamcorper, Street",
		"EstablishedDate": "1946/05/03",
		"Services": "Pediatrics, Obstetrics & Gynecology, Neurology, Urgent Care",
		"DistanceFromME": 9096,
		"Rating": 3.1,
		"Hospital Type": "Public",
		"Avg_Fee": 4738
	},
	{
		"Name": "Alden Hardin",
		"Postal Code": "487258",
		"Address": "P.O. Box 112, 8525 Sed Rd.",
		"EstablishedDate": "2002/22/03",
		"Services": "Oncology",
		"DistanceFromME": 1646,
		"Rating": 1.6,
		"Hospital Type": "Private",
		"Avg_Fee": 169
	},
	{
		"Name": "Sonia Maldonado",
		"Postal Code": "820884",
		"Address": "Ap #919-8920 Iaculis, Rd.",
		"EstablishedDate": "1927/07/18",
		"Services": "Orthopedics, Cardiology",
		"DistanceFromME": 8030,
		"Rating": 4.2,
		"Hospital Type": "Private",
		"Avg_Fee": 4363
	},
	{
		"Name": "Katell Vang",
		"Postal Code": "374822",
		"Address": "691-9543 Dictum Rd.",
		"EstablishedDate": "1953/12/01",
		"Services": "Laboratory Services, Psychiatry, Orthopedics, Palliative Care, Pediatrics",
		"DistanceFromME": 6253,
		"Rating": 4.8,
		"Hospital Type": "Private",
		"Avg_Fee": 718
	},
	{
		"Name": "Kylan Spence",
		"Postal Code": "867464",
		"Address": "5852 Ridiculus Avenue",
		"EstablishedDate": "1925/24/26",
		"Services": "Cardiology, Psychiatry, Neurology, Pharmacy",
		"DistanceFromME": 8615,
		"Rating": 3.3,
		"Hospital Type": "Public",
		"Avg_Fee": 3081
	},
	{
		"Name": "Mannix Church",
		"Postal Code": "814223",
		"Address": "P.O. Box 132, 7768 Ultricies St.",
		"EstablishedDate": "2019/42/22",
		"Services": "General Surgery, Radiology, Dermatology, Neurology",
		"DistanceFromME": 7109,
		"Rating": 3.7,
		"Hospital Type": "Private",
		"Avg_Fee": 4758
	},
	{
		"Name": "Colorado Blake",
		"Postal Code": "317048",
		"Address": "Ap #227-1937 Consequat St.",
		"EstablishedDate": "1991/48/04",
		"Services": "Dermatology, Laboratory Services, Pharmacy, Orthopedics, Palliative Care",
		"DistanceFromME": 6455,
		"Rating": 1.5,
		"Hospital Type": "Private",
		"Avg_Fee": 4562
	},
	{
		"Name": "Ulysses Romero",
		"Postal Code": "893537",
		"Address": "231-6375 Eu St.",
		"EstablishedDate": "2009/18/03",
		"Services": "Oncology, Pharmacy",
		"DistanceFromME": 5739,
		"Rating": 2.9,
		"Hospital Type": "Public",
		"Avg_Fee": 4275
	},
	{
		"Name": "Vera Pate",
		"Postal Code": "852026",
		"Address": "Ap #537-6432 Elit. Av.",
		"EstablishedDate": "1999/06/29",
		"Services": "Neurology, Obstetrics & Gynecology, Ophthalmology, Urgent Care, Dental Services",
		"DistanceFromME": 1859,
		"Rating": 2.1,
		"Hospital Type": "Private",
		"Avg_Fee": 3338
	},
	{
		"Name": "Cherokee Warren",
		"Postal Code": "286739",
		"Address": "P.O. Box 126, 8541 Viverra. Avenue",
		"EstablishedDate": "1953/39/07",
		"Services": "Radiology, Obstetrics & Gynecology, Ophthalmology, Dermatology",
		"DistanceFromME": 4039,
		"Rating": 4.8,
		"Hospital Type": "Private",
		"Avg_Fee": 1794
	},
	{
		"Name": "Orla Bates",
		"Postal Code": "338808",
		"Address": "541-4427 Erat St.",
		"EstablishedDate": "1960/23/13",
		"Services": "Laboratory Services, Palliative Care, Urgent Care, Radiology, General Surgery",
		"DistanceFromME": 113,
		"Rating": 3,
		"Hospital Type": "Private",
		"Avg_Fee": 824
	},
	{
		"Name": "Kyra Mosley",
		"Postal Code": "952286",
		"Address": "805-6400 Lorem, St.",
		"EstablishedDate": "2006/27/05",
		"Services": "Radiology, Obstetrics & Gynecology, Ophthalmology, Pediatrics, Neurology",
		"DistanceFromME": 9918,
		"Rating": 1,
		"Hospital Type": "Public",
		"Avg_Fee": 1370
	},
	{
		"Name": "Jessamine Mcleod",
		"Postal Code": "555816",
		"Address": "7250 Cras Rd.",
		"EstablishedDate": "1971/37/04",
		"Services": "Pharmacy, Rehabilitation Services",
		"DistanceFromME": 4137,
		"Rating": 5.0,
		"Hospital Type": "Public",
		"Avg_Fee": 281
	},
	{
		"Name": "Kaye Workman",
		"Postal Code": "663477",
		"Address": "Ap #744-3953 Ante Ave",
		"EstablishedDate": "2007/19/10",
		"Services": "Pain Management, Psychiatry, Obstetrics & Gynecology, Dermatology",
		"DistanceFromME": 8835,
		"Rating": 2.9,
		"Hospital Type": "Public",
		"Avg_Fee": 3609
	},
	{
		"Name": "Amos Rutledge",
		"Postal Code": "177052",
		"Address": "484-949 Ante. Rd.",
		"EstablishedDate": "1979/11/08",
		"Services": "Sleep Medicine, Emergency Care",
		"DistanceFromME": 1990,
		"Rating": 4.7,
		"Hospital Type": "Public",
		"Avg_Fee": 710
	},
	{
		"Name": "Hayden Cunningham",
		"Postal Code": "843878",
		"Address": "Ap #623-8928 Urna. St.",
		"EstablishedDate": "1929/50/25",
		"Services": "Pediatrics, Dermatology, Urgent Care, Obstetrics & Gynecology",
		"DistanceFromME": 3392,
		"Rating": 1.4,
		"Hospital Type": "Public",
		"Avg_Fee": 4016
	}
]


data = data.map((item, index) => ({
	...item,
	Name:`${item.Name} Hospital`,
	id: index
  }));

// function getRandomDate() {
// 	const startDate = '1700-01-01';
// 	const endDate = '2023-12-31'
//     const start = new Date(startDate).getTime();
//     const end = new Date(endDate).getTime();
//     const randomTime = new Date(start + Math.random() * (end - start));
//     return randomTime;
// }

// try {
//     const hospitalData = data.map((item) => {
//         return {
//             "name": item.Name + " Hospital",
//             "postalcode": item["Postal Code"],
//             "address": item.Address,
//             "establishedDate": getRandomDate(),
//             "services": item.Services.split(",").map((i) => i.trim()),
//             "rating": item.Rating,
//             "type": item["Hospital Type"],
//             "avgfee": item.Avg_Fee
//         };
//     });

//     fs.writeFileSync("./HospitalData.json", JSON.stringify(hospitalData, null, 2));
// } catch (err) {
//     console.log("Error writing to file:", err);
// }

export default data;