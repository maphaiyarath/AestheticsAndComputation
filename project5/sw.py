import swapi

planet = [
	'Alderaan', # 0
	'Aleen Minor',
	'Bespin',
	'Bestine IV',
	'Cato Neimoidia',
	'Cerea',
	'Champala',
	'Chandrila',
	'Concord Dawn',
	'Corellia',
	'Coruscant', # 10
	'Dagobah',
	'Dantooine',
	'Dathomir',
	'Dorin',
	'Endor',
	'Eriadu',
	'Felucia',
	'Geonosis',
	'Glee Anselm',
	'Haruun Kal', # 20
	'Hoth',
	'Iktotch',
	'Iridonia',
	'Jakku',
	'Kalee',
	'Kamino',
	'Kashyyyk',
	'Malastare',
	'Mirial',
	'Mon Cala', # 30
	'Mustafar',
	'Muunilinst',
	'Mygeeto',
	'Naboo',
	'Nal Hutta',
	'Ojom',
	'Ord Mantell',
	'Polis Massa',
	'Quermia',
	'Rodia', # 40
	'Ryloth',
	'Saleucami',
	'Serenno',
	'Shili',
	'Skako',
	'Socorro',
	'Stewjon',
	'Sullust',
	'Tatooine',
	'Tholoth', # 50
	'Toydaria',
	'Trandosha',
	'Troiken',
	'Tund',
	'Umbara',
	'Utapau',
	'Vulpter',
	'Yavin IV',
	'Zolan',
	'unknown', # 60
];

# empty string to which the entries will be appended
data = ""
space = ", "

# get all 7 films
films = swapi.get_all("films")

# create entry for each film
for f in films.order_by("episode_id"):
	# film node id will be episode number zero-indexed
	film_node_id = str(f.episode_id - 1)

	# get all planets for each film
	film_planets = f.get_planets()

	# empty string to which list of planets will be appended
	planet_list = ""

	# index for first planet in list
	i = 0

	# create entry for each film's planet list
	for p in film_planets.order_by("name"):
		# people left off at 93, so index planets starting from 94
		planet_id = planet.index(p.name) + 94 
		
		# if planet is not last in list, append planet id as well as ", "
		if (i != film_planets.count() - 1):
			ind_planet = str(planet_id) + space

		# else it is last in list, so just append planet id
		else:
			ind_planet = str(planet_id)
		
		# append individual film to film list
		planet_list += ind_planet
		
		# increment planet index for person
		i = i + 1
		
	# entry = { id: , tag: 'films', name: '', target: [] },
	entry = "\t{ id: " + film_node_id + ", tag: 'films', name: '" + f.title + "', target: [" + planet_list + "] },\n"

	# append entry to data string
	data += entry

# ========================================================

# get all characters in Star Wars
people = swapi.get_all("people")

# films left off at 6, so index people starting from 7
people_index = 7

# create entry for each character
for p in people.order_by("name"):
	# get all films for each character
	persons_films = p.get_films()

	# number of films each character is in
	number_of_films = len(persons_films.items)

	# empty string to which list of films will be appended
	film_list = ""

	# index for first film in list
	i = 0

	# create entry for each person's film list
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

# get all planets
planets = swapi.get_all("planets")

# people left off at 93, so index planets starting from 94
planets_index = 94

# people left off at 93, so index planets starting from 94
res_index = 94

# create entry for each planet
for p in planets.order_by("name"):
	# get all films for each planet
	planet_films = p.get_films()

	# get all people for each planet
	peeps = p.residents

	# number of films each planet is in
	number_of_films = len(planet_films.items)

	# number of people featured on each planet
	number_of_people = len(peeps)

	# empty string to which list of films will be appended
	film_list = ""

	# empty string to which list of residents will be appended
	res_list = ""

	# index for first film in list
	i = 0

	# index for first resident in list
	j = 0

	# create entry for each planet's film list
	for pf in planet_films.order_by("episode_id"):
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

		# increment film index for planet
		i = i + 1

	'''
	# create entry for each planet's res list
	for peep in peeps.order_by("name"):
		# peep node id will be based off people starting index of 94
		peep_node_id = str(peep.name - 1)
		
		# if film is not last in list, append film id as well as ", "
		if (i != number_of_films - 1):
			ind_film = film_node_id + space

		# else it is last in list, so just append film id
		else:
			ind_film = film_node_id

		# append individual film to film list
		film_list += ind_film

		# increment film index for planet
		i = i + 1
	'''

	# entry = { id: , tag: 'planets', name: '', target: [] },
	entry = "\t{ id: " + str(planets_index) + ", tag: 'planets', name: '" + p.name + "' , target: [" + film_list + "] },\n"

	# append entry to data string
	data += entry

	# increment index for planet
	planets_index = planets_index + 1

# print formatted nodes variable with data
print ("var nodes = [\n" + data + "\n];")










