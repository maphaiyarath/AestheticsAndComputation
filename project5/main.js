// d3 reference from:
// https://www.lynda.com/D3js-tutorials/Working-force-layouts/162449/185075-4.html

// add more info???
// data containing source nodes (name) and a list of their target nodes
/*
var nodes = [
	{name: "I"},
	{name: "II"},
	{name: "III"},
	{name: "IV"},
	{name: "V"},
	{name: "VI"},
	{name: "VII"}, // 7th movie, index 6
	{name: 'Ackbar', target: [5, 6]}, // 1st name, index 7
	//{name: 'Adi Gallia', target: [0, 2]},
	{name: 'Anakin Skywalker', target: [0, 1, 2]}, // 8
	//{name: 'Arvel Crynyd', target: [5]},
	{name: 'Ayla Secura', target: [0, 1, 2]},
	{name: 'Bail Prestor Organa', target:[1, 2]}, // 10
	//{name: 'Barriss Offee', target:[1]},
	{name: 'BB-8', target: [6]},
	//{name: 'Ben Quadinaros', target: [0]},
	{name: 'Beru Whitesun Lars', target: [1, 2, 3]},
	//{name: 'Bib Fortuna', target: [5]},
	//{name: 'Biggs Darklighter', target: [3]},
	{name: 'Boba Fett', target: [1, 4, 5]}, // 13
	//{name: 'Bossk', target: [4]},
	{name: 'C-3PO', target: [0, 1, 2, 3, 4, 5]},
	{name: 'Captain Phasma', target: [6]}, 
	{name: 'Chewbacca', target: [2, 3, 4, 5, 6]}, // 16
	//{name: 'Cliegg Lars', target: [1]},
	//{name: 'Corde', target: [1]},
	{name: 'Darth Maul', target: [0]}, // 17
	{name: 'Darth Vader', target: [2, 3, 4, 5]}, // 18
	//{name: 'Dexter Jettster', target: [1]},
	{name: 'Dooku', target: [1, 2]},
	//{name: 'Dorme', target: [1]},
	//{name: 'Dud Bolt', target: [0]},
	//{name: 'Eeth Koth', target: [0, 2]},
	//{name: 'Finis Valorum', target: [0]},
	{name: 'Finn', target: [6]}, // 20
	//{name: 'Gasgano', target: [0]},
	{name: 'Greedo', target: [3]}, 
	{name: 'Gregar Typho', target: [1]}, // 22
	{name: 'Grievous', target: [2]}, // 23
	{name: 'Han Solo', target: [3, 4, 5, 6]}, // 24
	//{name: 'IG-88', target: [4]},
	{name: 'Jabba Desilijic Tiure', target: [0, 3, 5]},
	{name: 'Jango Fett', target: [1]},
	{name: 'Jar Jar Binks', target: [0, 1]},
	//{name: 'Jocasta Nu', target: [1]},
	{name: 'Ki-Adi-Mundi', target: [0, 1, 2]},
	{name: 'Kit Fisto', target: [0, 1, 2]},
	//{name: 'Jek Tono Porkins', target: [3]},
	//{name: 'Lama Su', target: [1]},
	{name: 'Lando Calrissian', target: [4, 5]}, // 30
	{name: 'Leia Organa', target: [2, 3, 4, 5, 6]},
	//{name: 'Lobot', target: [4]},
	{name: 'Luke Skywalker', target: [2, 3, 4, 5, 6]}, // 32
	{name: 'Luminara Unduli', target: [1, 2]},
	{name: 'Mace Windu', target: [0, 1, 2]},
	//{name: 'Mas Amedda', target: [0, 1]},
	//{name: 'Mon Mothma', target: [5]}, 
	//{name: 'Nien Nunb', target: [5]}, 
	{name: 'Nute Gunray', target: [0, 1, 2]},
	{name: 'Obi-Wan Kenobi', target: [0, 1, 2, 3, 4, 5]}, // 36
	{name: 'Owen Lars', target: [1, 2, 3]},
	{name: 'Padme Amidala', target: [0, 1, 2]}, // 38
	{name: 'Palpatine', target: [0, 1, 2, 4, 5]},
	{name: 'Poe Dameron', target: [6]}, // 40
	{name: 'Plo Koon', target: [0, 1, 2]}, // 41
	//{name: 'Poggle the Lesser', target: [1, 2]},
	//{name: 'Quarsh Panaka', target: [0]},
	{name: 'Qui-Gon Jinn', target: [0]},
	{name: 'R2-D2', target: [0, 1, 2, 3, 4, 5, 6]},
	//{name: 'R4-P17', target: [1, 2]},
	//{name: 'R5-D4', target: [3]},
	//{name: 'Ratts Tyerell', target: [0]},
	{name: 'Raymus Antilles', target: [2, 3]},
	{name: 'Rey', target: [6]},
	//{name: 'Ric Olié', target: [0]},
	//{name: 'Roos Tarpals', target: [0]},
	//{name: 'Rugor Nass', target: [0]},
	//{name: 'Saesee Tiin', target: [0, 2]},
	//{name: 'San Hill', target: [1]},
	//{name: 'Sebulba', target: [0]},
	//{name: 'Shaak Ti', target: [1, 2]},
	{name: 'Shmi Skywalker', target: [0, 1]},
	//{name: 'Sly Moore', target: [1, 2]},
	//{name: 'Tarfful', target: [2]}, 
	//{name: 'Taun We', target: [1]},
	//{name: 'Tion Medon', target: [2]},
	//{name: 'Wat Tambor', target: [1]},
	//{name: 'Watto', target: [0, 1]},
	{name: 'Wedge Antilles', target: [3, 4, 5]}, // 47
	//{name: 'Wicket Systri Warrick', target: [5]},
	//{name: 'Wilhuff Tarkin', target: [2, 3]},
	//{name: 'Yarael Poof', target: [0]},
	{name: 'Yoda', target: [0, 1, 2, 4, 5]}, // 48
	//{name: 'Zam Wesell', target: [1]}
	
	//{name: 'A-wing', target: [5]},
	//{name: 'AA-9 Coruscant freighter', target: [1]},
	//{name: 'arc-170', target: [2]},
	//{name: 'B-wing', target: [5]},
	//{name: 'Banking clan frigate', target: [2]},
	{name: 'Belbullab-22 starfighter', target: [2, 23, 36]},
	//{name: 'Calamari Cruiser', target: [5]},
	{name: 'CR90 corvette', target: [2, 3, 5]},
	{name: 'Death Star', target: [3]},
	{name: 'Droid control ship', target: [0, 1, 2]},
	{name: 'Executor', target: [4, 5]},
	{name: 'EF76 Nebulon-B escort frigate', target: [4, 5]}, 
	{name: 'H-type Nubian yacht', target: [1, 38]},
	{name: 'Imperial shuttle', target: [4, 5, 16, 24, 32]},
	//{name: 'J-type diplomatic barge', target: [1]},
	{name: 'Jedi Interceptor', target: [2, 8, 36]},
	{name: 'Jedi starfighter', target: [1, 2, 36, 41]}, 
	{name: 'Millennium Falcon', target: [3, 4, 5, 6, 16, 24, 30]},
	// {name: 'Naboo Royal Starship', target: [0]},
	{name: 'Naboo fighter', target: [0, 1, 8, 22, 38]},
	{name: 'Naboo star skiff', target: [2, 36, 38]}, 
	{name: 'Rebel transport', 'target': [4, 5]},
	//{name: 'Republic Assault ship', target: [1]},
	//{name: 'Republic attack cruiser', target: [2]},
	//{name: 'Republic Cruiser', target: [0]},
	{name: 'Scimitar', target: [0, 17]},
	//{name: 'Sentinel-class landing craft', target: [3]},
	{name: 'Slave 1', target: [1, 4, 13]},
	//{name: 'Solar Sailer', target: [1]},
	{name: 'Star Destroyer', target: [3, 4, 5]},
	{name: 'T-70 X-wing fighter', target: [6, 40]},
	//{name: 'Theta-class T-2c shuttle', target: [2]},
	{name: 'TIE Advanced x1', target: [3, 18]}, 
	{name: 'Trade Federation cruiser', target: [2, 8, 36]},
	//{name: 'V-wing', target: [2]},
	{name: 'X-wing', target: [3, 4, 5]},
	{name: 'Y-wing', target: [4, 5, 32, 47]},
];
*/

var nodes = [
	{ id: 0, tag: 'films', name: 'The Phantom Menace' },
	{ id: 1, tag: 'films', name: 'Attack of the Clones' },
	{ id: 2, tag: 'films', name: 'Revenge of the Sith' },
	{ id: 3, tag: 'films', name: 'A New Hope' },
	{ id: 4, tag: 'films', name: 'The Empire Strikes Back' },
	{ id: 5, tag: 'films', name: 'Return of the Jedi' },
	{ id: 6, tag: 'films', name: 'The Force Awakens' },
	{ id: 7, tag: 'people', name: 'Ackbar', target: [5, 6, 124] },
	{ id: 8, tag: 'people', name: 'Adi Gallia', target: [0, 2, 104] },
	{ id: 9, tag: 'people', name: 'Anakin Skywalker', target: [0, 1, 2, 143] },
	{ id: 10, tag: 'people', name: 'Arvel Crynyd', target: [5, 154] },
	{ id: 11, tag: 'people', name: 'Ayla Secura', target: [0, 1, 2, 135] },
	{ id: 12, tag: 'people', name: 'BB8', target: [6, 154] },
	{ id: 13, tag: 'people', name: 'Bail Prestor Organa', target: [1, 2, 94] },
	{ id: 14, tag: 'people', name: 'Barriss Offee', target: [1, 123] },
	{ id: 15, tag: 'people', name: 'Ben Quadinaros', target: [0, 148] },
	{ id: 16, tag: 'people', name: 'Beru Whitesun lars', target: [1, 2, 3, 143] },
	{ id: 17, tag: 'people', name: 'Bib Fortuna', target: [5, 135] },
	{ id: 18, tag: 'people', name: 'Biggs Darklighter', target: [3, 143] },
	{ id: 19, tag: 'people', name: 'Boba Fett', target: [1, 4, 5, 120] },
	{ id: 20, tag: 'people', name: 'Bossk', target: [4, 146] },
	{ id: 21, tag: 'people', name: 'C-3PO', target: [0, 1, 2, 3, 4, 5, 143] },
	{ id: 22, tag: 'people', name: 'Captain Phasma', target: [6, 154] },
	{ id: 23, tag: 'people', name: 'Chewbacca', target: [2, 3, 4, 5, 6, 121] },
	{ id: 24, tag: 'people', name: 'Cliegg Lars', target: [1, 143] },
	{ id: 25, tag: 'people', name: 'Cordé', target: [1, 128] },
	{ id: 26, tag: 'people', name: 'Darth Maul', target: [0, 107] },
	{ id: 27, tag: 'people', name: 'Darth Vader', target: [2, 3, 4, 5, 143] },
	{ id: 28, tag: 'people', name: 'Dexter Jettster', target: [1, 130] },
	{ id: 29, tag: 'people', name: 'Dooku', target: [1, 2, 137] },
	{ id: 30, tag: 'people', name: 'Dormé', target: [1, 128] },
	{ id: 31, tag: 'people', name: 'Dud Bolt', target: [0, 151] },
	{ id: 32, tag: 'people', name: 'Eeth Koth', target: [0, 2, 117] },
	{ id: 33, tag: 'people', name: 'Finis Valorum', target: [0, 104] },
	{ id: 34, tag: 'people', name: 'Finn', target: [6, 154] },
	{ id: 35, tag: 'people', name: 'Gasgano', target: [0, 147] },
	{ id: 36, tag: 'people', name: 'Greedo', target: [3, 134] },
	{ id: 37, tag: 'people', name: 'Gregar Typho', target: [1, 128] },
	{ id: 38, tag: 'people', name: 'Grievous', target: [2, 119] },
	{ id: 39, tag: 'people', name: 'Han Solo', target: [3, 4, 5, 6, 103] },
	{ id: 40, tag: 'people', name: 'IG-88', target: [4, 154] },
	{ id: 41, tag: 'people', name: 'Jabba Desilijic Tiure', target: [0, 3, 5, 129] },
	{ id: 42, tag: 'people', name: 'Jango Fett', target: [1, 102] },
	{ id: 43, tag: 'people', name: 'Jar Jar Binks', target: [0, 1, 128] },
	{ id: 44, tag: 'people', name: 'Jek Tono Porkins', target: [3, 97] },
	{ id: 45, tag: 'people', name: 'Jocasta Nu', target: [1, 104] },
	{ id: 46, tag: 'people', name: 'Ki-Adi-Mundi', target: [0, 1, 2, 99] },
	{ id: 47, tag: 'people', name: 'Kit Fisto', target: [0, 1, 2, 113] },
	{ id: 48, tag: 'people', name: 'Lama Su', target: [1, 120] },
	{ id: 49, tag: 'people', name: 'Lando Calrissian', target: [4, 5, 140] },
	{ id: 50, tag: 'people', name: 'Leia Organa', target: [2, 3, 4, 5, 6, 94] },
	{ id: 51, tag: 'people', name: 'Lobot', target: [4, 96] },
	{ id: 52, tag: 'people', name: 'Luke Skywalker', target: [2, 3, 4, 5, 6, 143] },
	{ id: 53, tag: 'people', name: 'Luminara Unduli', target: [1, 2, 123] },
	{ id: 54, tag: 'people', name: 'Mace Windu', target: [0, 1, 2, 114] },
	{ id: 55, tag: 'people', name: 'Mas Amedda', target: [0, 1, 100] },
	{ id: 56, tag: 'people', name: 'Mon Mothma', target: [5, 101] },
	{ id: 57, tag: 'people', name: 'Nien Nunb', target: [5, 142] },
	{ id: 58, tag: 'people', name: 'Nute Gunray', target: [0, 1, 2, 98] },
	{ id: 59, tag: 'people', name: 'Obi-Wan Kenobi', target: [0, 1, 2, 3, 4, 5, 141] },
	{ id: 60, tag: 'people', name: 'Owen Lars', target: [1, 2, 3, 143] },
	{ id: 61, tag: 'people', name: 'Padmé Amidala', target: [0, 1, 2, 128] },
	{ id: 62, tag: 'people', name: 'Palpatine', target: [0, 1, 2, 4, 5, 128] },
	{ id: 63, tag: 'people', name: 'Plo Koon', target: [0, 1, 2, 108] },
	{ id: 64, tag: 'people', name: 'Poe Dameron', target: [6, 154] },
	{ id: 65, tag: 'people', name: 'Poggle the Lesser', target: [1, 2, 112] },
	{ id: 66, tag: 'people', name: 'Quarsh Panaka', target: [0, 128] },
	{ id: 67, tag: 'people', name: 'Qui-Gon Jinn', target: [0, 154] },
	{ id: 68, tag: 'people', name: 'R2-D2', target: [0, 1, 2, 3, 4, 5, 6, 128] },
	{ id: 69, tag: 'people', name: 'R4-P17', target: [1, 2, 154] },
	{ id: 70, tag: 'people', name: 'R5-D4', target: [3, 143] },
	{ id: 71, tag: 'people', name: 'Ratts Tyerell', target: [0, 95] },
	{ id: 72, tag: 'people', name: 'Raymus Antilles', target: [2, 3, 94] },
	{ id: 73, tag: 'people', name: 'Rey', target: [6, 154] },
	{ id: 74, tag: 'people', name: 'Ric Olié', target: [0, 128] },
	{ id: 75, tag: 'people', name: 'Roos Tarpals', target: [0, 128] },
	{ id: 76, tag: 'people', name: 'Rugor Nass', target: [0, 128] },
	{ id: 77, tag: 'people', name: 'Saesee Tiin', target: [0, 2, 116] },
	{ id: 78, tag: 'people', name: 'San Hill', target: [1, 126] },
	{ id: 79, tag: 'people', name: 'Sebulba', target: [0, 122] },
	{ id: 80, tag: 'people', name: 'Shaak Ti', target: [1, 2, 138] },
	{ id: 81, tag: 'people', name: 'Shmi Skywalker', target: [0, 1, 143] },
	{ id: 82, tag: 'people', name: 'Sly Moore', target: [1, 2, 149] },
	{ id: 83, tag: 'people', name: 'Tarfful', target: [2, 121] },
	{ id: 84, tag: 'people', name: 'Taun We', target: [1, 120] },
	{ id: 85, tag: 'people', name: 'Tion Medon', target: [2, 150] },
	{ id: 86, tag: 'people', name: 'Wat Tambor', target: [1, 139] },
	{ id: 87, tag: 'people', name: 'Watto', target: [0, 1, 145] },
	{ id: 88, tag: 'people', name: 'Wedge Antilles', target: [3, 4, 5, 103] },
	{ id: 89, tag: 'people', name: 'Wicket Systri Warrick', target: [5, 109] },
	{ id: 90, tag: 'people', name: 'Wilhuff Tarkin', target: [2, 3, 110] },
	{ id: 91, tag: 'people', name: 'Yarael Poof', target: [0, 133] },
	{ id: 92, tag: 'people', name: 'Yoda', target: [0, 1, 2, 4, 5, 154] },
	{ id: 93, tag: 'people', name: 'Zam Wesell', target: [1, 153] },
	{ id: 94, tag: 'planets', name: 'Alderaan' , target: [2, 3] },
	{ id: 95, tag: 'planets', name: 'Aleen Minor' , target: [] },
	{ id: 96, tag: 'planets', name: 'Bespin' , target: [4] },
	{ id: 97, tag: 'planets', name: 'Bestine IV' , target: [] },
	{ id: 98, tag: 'planets', name: 'Cato Neimoidia' , target: [2] },
	{ id: 99, tag: 'planets', name: 'Cerea' , target: [] },
	{ id: 100, tag: 'planets', name: 'Champala' , target: [] },
	{ id: 101, tag: 'planets', name: 'Chandrila' , target: [] },
	{ id: 102, tag: 'planets', name: 'Concord Dawn' , target: [] },
	{ id: 103, tag: 'planets', name: 'Corellia' , target: [] },
	{ id: 104, tag: 'planets', name: 'Coruscant' , target: [0, 1, 2, 5] },
	{ id: 105, tag: 'planets', name: 'Dagobah' , target: [2, 4, 5] },
	{ id: 106, tag: 'planets', name: 'Dantooine' , target: [] },
	{ id: 107, tag: 'planets', name: 'Dathomir' , target: [] },
	{ id: 108, tag: 'planets', name: 'Dorin' , target: [] },
	{ id: 109, tag: 'planets', name: 'Endor' , target: [5] },
	{ id: 110, tag: 'planets', name: 'Eriadu' , target: [] },
	{ id: 111, tag: 'planets', name: 'Felucia' , target: [2] },
	{ id: 112, tag: 'planets', name: 'Geonosis' , target: [1] },
	{ id: 113, tag: 'planets', name: 'Glee Anselm' , target: [] },
	{ id: 114, tag: 'planets', name: 'Haruun Kal' , target: [] },
	{ id: 115, tag: 'planets', name: 'Hoth' , target: [4] },
	{ id: 116, tag: 'planets', name: 'Iktotch' , target: [] },
	{ id: 117, tag: 'planets', name: 'Iridonia' , target: [] },
	{ id: 118, tag: 'planets', name: 'Jakku' , target: [6] },
	{ id: 119, tag: 'planets', name: 'Kalee' , target: [] },
	{ id: 120, tag: 'planets', name: 'Kamino' , target: [1] },
	{ id: 121, tag: 'planets', name: 'Kashyyyk' , target: [2] },
	{ id: 122, tag: 'planets', name: 'Malastare' , target: [] },
	{ id: 123, tag: 'planets', name: 'Mirial' , target: [] },
	{ id: 124, tag: 'planets', name: 'Mon Cala' , target: [] },
	{ id: 125, tag: 'planets', name: 'Mustafar' , target: [2] },
	{ id: 126, tag: 'planets', name: 'Muunilinst' , target: [] },
	{ id: 127, tag: 'planets', name: 'Mygeeto' , target: [2] },
	{ id: 128, tag: 'planets', name: 'Naboo' , target: [0, 1, 2, 5] },
	{ id: 129, tag: 'planets', name: 'Nal Hutta' , target: [] },
	{ id: 130, tag: 'planets', name: 'Ojom' , target: [] },
	{ id: 131, tag: 'planets', name: 'Ord Mantell' , target: [4] },
	{ id: 132, tag: 'planets', name: 'Polis Massa' , target: [2] },
	{ id: 133, tag: 'planets', name: 'Quermia' , target: [] },
	{ id: 134, tag: 'planets', name: 'Rodia' , target: [] },
	{ id: 135, tag: 'planets', name: 'Ryloth' , target: [] },
	{ id: 136, tag: 'planets', name: 'Saleucami' , target: [2] },
	{ id: 137, tag: 'planets', name: 'Serenno' , target: [] },
	{ id: 138, tag: 'planets', name: 'Shili' , target: [] },
	{ id: 139, tag: 'planets', name: 'Skako' , target: [] },
	{ id: 140, tag: 'planets', name: 'Socorro' , target: [] },
	{ id: 141, tag: 'planets', name: 'Stewjon' , target: [] },
	{ id: 142, tag: 'planets', name: 'Sullust' , target: [] },
	{ id: 143, tag: 'planets', name: 'Tatooine' , target: [0, 1, 2, 3, 5] },
	{ id: 144, tag: 'planets', name: 'Tholoth' , target: [] },
	{ id: 145, tag: 'planets', name: 'Toydaria' , target: [] },
	{ id: 146, tag: 'planets', name: 'Trandosha' , target: [] },
	{ id: 147, tag: 'planets', name: 'Troiken' , target: [] },
	{ id: 148, tag: 'planets', name: 'Tund' , target: [] },
	{ id: 149, tag: 'planets', name: 'Umbara' , target: [] },
	{ id: 150, tag: 'planets', name: 'Utapau' , target: [2] },
	{ id: 151, tag: 'planets', name: 'Vulpter' , target: [] },
	{ id: 152, tag: 'planets', name: 'Yavin IV' , target: [3] },
	{ id: 153, tag: 'planets', name: 'Zolan' , target: [] },
	{ id: 154, tag: 'planets', name: 'unknown' , target: [] }
];

// width and height of canvas
var canvas_width = 1300,
	canvas_height = window.innerHeight;

// width of circle node
var node_width = 5;

// state of node: to highlight, or not to highlight?
var focus_node = null, highlight_node = null;

// if outline is TRUE --> highlight
// else --> no highlight
var outline = false;

// palette references from:
// http://www.colourlovers.com/palette/2368865/Warriors
// http://www.colourlovers.com/palette/694737/Thought_Provoking
// http://www.fubiz.net/en/2015/04/20/the-colors-of-star-wars-palettes/
var palette = {
	"green": "#01DDDD",
	"reddish_brown": "#54211E",
	"sand": "#CEA383",
	"salmon": "#FF8A5E",
	"yellow": "#E0E300",
	"orange": "#D95B43",
	"hot_pink": "#FF598F",
	"purple": "#542437",
	"teal": "#00BFAF",

	// new hope
	"sandy": "#D6BF7C",
	"tan": "#EFB087",
	"neon_purple": "#B1639D",
	"mauve": "#9C5B63",
	"blue": "#165B9E",
	"light_blue": "#62A0DB",
	"brown": "#462E16",
	"white": "#FBFFFE",
	"periwinkle": "#34409F",
	"dark_tan": "#BE8454",

	// force awakens
	"dark_red": "#BB000A",
	"red": "#EC1F1B",
	"bright_blue": "#0089E2",
	"sky_blue": "#4FC4EB",
	"mint": "#00E6B1",
	"aqua": "#00C0AB",
	"beige": "#C8BCA9"
}

// when node is selected, links will be highlighted YELLOW
var highlight_color = "yellow";

// start off with empty list of links btwn nodes
var links = [];

// holds bools to see if nodes are connected
// i.e. luke is associated w/ ep. IV --> true
var linkedByIndex = {};

// fill links list by connecting each source w/ each of its targets
for (var i = 0; i < nodes.length; i++) {					// iterate over each element in nodes
	if (nodes[i].target != undefined) {						// for each valid <source, target> pair,
		for (var j = 0; j < nodes[i].target.length; j++) {	// for each target of the source
			links.push({									// append pair to links array
				source: nodes[i],
				target: nodes[nodes[i].target[j]]
			})
		}
	}
}

// svg image of network graph for html element 'viz'
var network = d3.select('#viz')
	.append('svg')
	.attr('width', canvas_width)
	.attr('height', canvas_height)
	// zoom effect on svg image as whole
	.append("g")
    	.call(d3.behavior.zoom().scaleExtent([0.5, 3]).on("zoom", zoom))
  	.append("g");

// not sure about this...
network.append("rect")
    .attr("class", "overlay")
    .attr("width", canvas_width)
    .attr("height", canvas_height);

// utilize d3's force layout
var force = d3.layout.force()
	.nodes(nodes)
	.links([])
	.gravity(0.25)		// how fast it snaps back to original position
	.charge(-750)		// range of distribution over canvas
	.size([canvas_width, canvas_height])

// display links as lines
var link = network.selectAll('line')
	.data(links).enter().append('line')
	.attr('stroke', palette.sand)

// display nodes
var node = network.selectAll('circle')
	.data(nodes).enter()
	.append('g')
	.call(force.drag)
	.append('g')

// individual node information
node.append('circle')
	.attr('cx', function(d) {return d.x;})
	.attr('cy', function(d) {return d.y;})
	.attr('r', node_width)
	.attr('fill', function(d, i) {
		if (i >= 94) {return palette.neon_purple}
		else if ((i >= 7) && (i < 94)) {return palette.mint}
		else {return palette.hot_pink}
	})
	.on("mouseover", set_highlight)
    .on("mouseout", handleMouseOut)
	//.on("click", function(d,i) {
    	//d3.select(this).style('fill','salmon');
  	//});

// text information for nodes
node.append('text')
	.text(function(d) {return d.name})
	.attr('font-family', 'Helvetica')
	.attr('font-stretch', 'ultra-condensed')
	.attr('fill', function(d, i) {
		if (i >= 94) {return palette.aqua}
		else if ((i >= 7) && (i < 94)) {return palette.red}
		else {return palette.white}
	})
	.attr('x', function(d, i) {
		if (i > 6) {return node_width + 5}
		else {return -10}
	})
	.attr('y', function(d, i) {
		if (i > 6) {return node_width}
		else {return 10}
	})
	.attr('text-anchor', function(d, i) {
		if (i > 6) {return 'beginning'}
		else {return 'end'}
	})
	.attr('font-size', function(d, i) {
		if (i > 6) {return '1em'}
		else {return '2em'}
	})

// drag transformation logic
force.on('tick', function(e) {
	node.attr('transform', function(d, i) {
		return 'translate('+ d.x +', '+ d.y +')';
	})

	link
		.attr('x1', function(d) {return d.source.x})
		.attr('y1', function(d) {return d.source.y})
		.attr('x2', function(d) {return d.target.x})
		.attr('y2', function(d) {return d.target.y})
})

// zoom transformation logic
function zoom() {
	if (d3.event.defaultPrevented) return;
	d3.event.sourceEvent.stopPropagation();
  	network.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

function set_highlight(d, i) {
	d3.select(this).attr ({
		r: node_width * 1.75
	});

	network.style("cursor", "pointer");
	/*
	if (focus_node != null) d = focus_node;
	highlight_node = d;

	if (highlight_color != "white") {
		circle.style(towhite, function(o) {
            return isConnected(d, o) ? highlight_color : "white";
        });
		text.style("font-weight", function(o) {
            return isConnected(d, o) ? "bold" : "normal";
        });
        link.style("stroke", function(o) {
		    return o.source.index == d.index || o.target.index == d.index ? highlight_color : ((isNumber(o.score) && o.score>=0)?color(o.score):default_link_color);
		});
	}
	*/
}

// mouse events referenced from:
// http://bl.ocks.org/WilliamQLiu/76ae20060e19bf42d774
// create event handlers for mouse
function handleMouseOver(d, i) {  // add interactivity
	// use d3 to select element, change color and size
	d3.select(this).attr ({
		r: node_width * 1.75
	})
	network.style("cursor", "default");

	//node.append('text')
		//.text(function(d) {return d.name})
		//.attr('font-family', 'Helvetica')
		//.attr('font-stretch', 'bold')
	
	// specify where to put label of text
	//network.append("text").attr ({
		// create id for text so we can select it later for removing on mouseout
		//id: "t" + d.target + "-" + i,
		//x: function() { return d.x; },
        //y: function() { return d.y; },
        //fill: "white"
    //})
    //.text(function() {
    	//return [d.target];  // value of the text
    //});
}

function handleMouseOut(d, i) {
	// use d3 to select element, change color back to normal
    d3.select(this).attr ({
        r: node_width
    })
    network.style("cursor", "default");

    //node.append('text')
		//.text(function(d) {return d.name})
		//.attr('font-family', 'Helvetica')
		//.attr('font-stretch', 'condensed')

    // select text by id and then remove
    // remove text location
    //d3.select("#t" + d.target + "-" + i).remove();
}

// turn on transformation
force.start();










