import swapi

# empty string to which the entries will be appended
data = ""

# get all 7 films
films = swapi.get_all("films")

# create entry for each film
for f in films.order_by("episode_id"):
	# film node id will be episode number zero-indexed
	film_node_id = str(f.episode_id - 1)

	# entry = { id: , tag: 'films', name: ''},
	entry = "\t{ id: " + film_node_id + ", tag: 'films', name: '" + f.title + "' },\n"

	# append entry to data string
	data += entry

# get all characters in Star Wars
people = swapi.get_all("people")

# films left off at 6, so index people starting from 7
people_index = 7
space = ", "

# create entry for each character
for p in people.order_by("name"):
	# gete all films for each character
	persons_films = p.get_films()

	# number of films each character is in
	number_of_films = len(persons_films.items)

	# empty string to which list of films will be appended
	film_list = ""

	# index for first film in list
	i = 0

	# create entry for each character
	for pf in persons_films.order_by("episode_id"):
		# film node id will be episode number zero-indexed
		film_node_id = str(pf.episode_id - 1)
		
		# if film is not last in list, append film id as well as ", "
		if (i != number_of_films - 1):
			ind_film = film_node_id + space

		# else it is last in list, so just append film id
		else:
			ind_film = film_node_id

		# append individual film to film list
		film_list += ind_film

		# increment film index for person
		i = i + 1

	# entry = { id: , tag: 'people', name: '', target: [] },
	entry = "\t{ id: " + str(people_index) + ", tag: 'people', name: '" + p.name + "', target: [" + film_list + "] },\n"
	
	# append entry to data string
	data += entry

	# increment id for person
	people_index = people_index + 1

# print formatted nodes variable with data
print ("var nodes = [\n" + data + "\n];")

'''
var nodes = [
	{ id: 1, tag: 'films', name: 'The Phantom Menace' },
	{ id: 2, tag: 'films', name: 'Attack of the Clones' },
	{ id: 3, tag: 'films', name: 'Revenge of the Sith' },
	{ id: 4, tag: 'films', name: 'A New Hope' },
	{ id: 5, tag: 'films', name: 'The Empire Strikes Back' },
	{ id: 6, tag: 'films', name: 'Return of the Jedi' },
	{ id: 7, tag: 'films', name: 'The Force Awakens' },
	{ id: 8, tag: 'people', name: 'Ackbar', target: [6, 7] },
	{ id: 9, tag: 'people', name: 'Adi Gallia', target: [1, 3] },
	{ id: 10, tag: 'people', name: 'Anakin Skywalker', target: [1, 2, 3] },
	{ id: 11, tag: 'people', name: 'Arvel Crynyd', target: [6] },
	{ id: 12, tag: 'people', name: 'Ayla Secura', target: [1, 2, 3] },
	{ id: 13, tag: 'people', name: 'BB8', target: [7] },
	{ id: 14, tag: 'people', name: 'Bail Prestor Organa', target: [2, 3] },
	{ id: 15, tag: 'people', name: 'Barriss Offee', target: [2] },
	{ id: 16, tag: 'people', name: 'Ben Quadinaros', target: [1] },
	{ id: 17, tag: 'people', name: 'Beru Whitesun lars', target: [2, 3, 4] },
	{ id: 18, tag: 'people', name: 'Bib Fortuna', target: [6] },
	{ id: 19, tag: 'people', name: 'Biggs Darklighter', target: [4] },
	{ id: 20, tag: 'people', name: 'Boba Fett', target: [2, 5, 6] },
	{ id: 21, tag: 'people', name: 'Bossk', target: [5] },
	{ id: 22, tag: 'people', name: 'C-3PO', target: [1, 2, 3, 4, 5, 6] },
	{ id: 23, tag: 'people', name: 'Captain Phasma', target: [7] },
	{ id: 24, tag: 'people', name: 'Chewbacca', target: [3, 4, 5, 6, 7] },
	{ id: 25, tag: 'people', name: 'Cliegg Lars', target: [2] },
	{ id: 26, tag: 'people', name: 'Cordé', target: [2] },
	{ id: 27, tag: 'people', name: 'Darth Maul', target: [1] },
	{ id: 28, tag: 'people', name: 'Darth Vader', target: [3, 4, 5, 6] },
	{ id: 29, tag: 'people', name: 'Dexter Jettster', target: [2] },
	{ id: 30, tag: 'people', name: 'Dooku', target: [2, 3] },
	{ id: 31, tag: 'people', name: 'Dormé', target: [2] },
	{ id: 32, tag: 'people', name: 'Dud Bolt', target: [1] },
	{ id: 33, tag: 'people', name: 'Eeth Koth', target: [1, 3] },
	{ id: 34, tag: 'people', name: 'Finis Valorum', target: [1] },
	{ id: 35, tag: 'people', name: 'Finn', target: [7] },
	{ id: 36, tag: 'people', name: 'Gasgano', target: [1] },
	{ id: 37, tag: 'people', name: 'Greedo', target: [4] },
	{ id: 38, tag: 'people', name: 'Gregar Typho', target: [2] },
	{ id: 39, tag: 'people', name: 'Grievous', target: [3] },
	{ id: 40, tag: 'people', name: 'Han Solo', target: [4, 5, 6, 7] },
	{ id: 41, tag: 'people', name: 'IG-88', target: [5] },
	{ id: 42, tag: 'people', name: 'Jabba Desilijic Tiure', target: [1, 4, 6] },
	{ id: 43, tag: 'people', name: 'Jango Fett', target: [2] },
	{ id: 44, tag: 'people', name: 'Jar Jar Binks', target: [1, 2] },
	{ id: 45, tag: 'people', name: 'Jek Tono Porkins', target: [4] },
	{ id: 46, tag: 'people', name: 'Jocasta Nu', target: [2] },
	{ id: 47, tag: 'people', name: 'Ki-Adi-Mundi', target: [1, 2, 3] },
	{ id: 48, tag: 'people', name: 'Kit Fisto', target: [1, 2, 3] },
	{ id: 49, tag: 'people', name: 'Lama Su', target: [2] },
	{ id: 50, tag: 'people', name: 'Lando Calrissian', target: [5, 6] },
	{ id: 51, tag: 'people', name: 'Leia Organa', target: [3, 4, 5, 6, 7] },
	{ id: 52, tag: 'people', name: 'Lobot', target: [5] },
	{ id: 53, tag: 'people', name: 'Luke Skywalker', target: [3, 4, 5, 6, 7] },
	{ id: 54, tag: 'people', name: 'Luminara Unduli', target: [2, 3] },
	{ id: 55, tag: 'people', name: 'Mace Windu', target: [1, 2, 3] },
	{ id: 56, tag: 'people', name: 'Mas Amedda', target: [1, 2] },
	{ id: 57, tag: 'people', name: 'Mon Mothma', target: [6] },
	{ id: 58, tag: 'people', name: 'Nien Nunb', target: [6] },
	{ id: 59, tag: 'people', name: 'Nute Gunray', target: [1, 2, 3] },
	{ id: 60, tag: 'people', name: 'Obi-Wan Kenobi', target: [1, 2, 3, 4, 5, 6] },
	{ id: 61, tag: 'people', name: 'Owen Lars', target: [2, 3, 4] },
	{ id: 62, tag: 'people', name: 'Padmé Amidala', target: [1, 2, 3] },
	{ id: 63, tag: 'people', name: 'Palpatine', target: [1, 2, 3, 5, 6] },
	{ id: 64, tag: 'people', name: 'Plo Koon', target: [1, 2, 3] },
	{ id: 65, tag: 'people', name: 'Poe Dameron', target: [7] },
	{ id: 66, tag: 'people', name: 'Poggle the Lesser', target: [2, 3] },
	{ id: 67, tag: 'people', name: 'Quarsh Panaka', target: [1] },
	{ id: 68, tag: 'people', name: 'Qui-Gon Jinn', target: [1] },
	{ id: 69, tag: 'people', name: 'R2-D2', target: [1, 2, 3, 4, 5, 6, 7] },
	{ id: 70, tag: 'people', name: 'R4-P17', target: [2, 3] },
	{ id: 71, tag: 'people', name: 'R5-D4', target: [4] },
	{ id: 72, tag: 'people', name: 'Ratts Tyerell', target: [1] },
	{ id: 73, tag: 'people', name: 'Raymus Antilles', target: [3, 4] },
	{ id: 74, tag: 'people', name: 'Rey', target: [7] },
	{ id: 75, tag: 'people', name: 'Ric Olié', target: [1] },
	{ id: 76, tag: 'people', name: 'Roos Tarpals', target: [1] },
	{ id: 77, tag: 'people', name: 'Rugor Nass', target: [1] },
	{ id: 78, tag: 'people', name: 'Saesee Tiin', target: [1, 3] },
	{ id: 79, tag: 'people', name: 'San Hill', target: [2] },
	{ id: 80, tag: 'people', name: 'Sebulba', target: [1] },
	{ id: 81, tag: 'people', name: 'Shaak Ti', target: [2, 3] },
	{ id: 82, tag: 'people', name: 'Shmi Skywalker', target: [1, 2] },
	{ id: 83, tag: 'people', name: 'Sly Moore', target: [2, 3] },
	{ id: 84, tag: 'people', name: 'Tarfful', target: [3] },
	{ id: 85, tag: 'people', name: 'Taun We', target: [2] },
	{ id: 86, tag: 'people', name: 'Tion Medon', target: [3] },
	{ id: 87, tag: 'people', name: 'Wat Tambor', target: [2] },
	{ id: 88, tag: 'people', name: 'Watto', target: [1, 2] },
	{ id: 89, tag: 'people', name: 'Wedge Antilles', target: [4, 5, 6] },
	{ id: 90, tag: 'people', name: 'Wicket Systri Warrick', target: [6] },
	{ id: 91, tag: 'people', name: 'Wilhuff Tarkin', target: [3, 4] },
	{ id: 92, tag: 'people', name: 'Yarael Poof', target: [1] },
	{ id: 93, tag: 'people', name: 'Yoda', target: [1, 2, 3, 5, 6] },
	{ id: 94, tag: 'people', name: 'Zam Wesell', target: [2] }
];
'''