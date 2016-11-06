from collections import OrderedDict
import swapi

planet = [
	('http://swapi.co/api/planets/2/', 'Alderaan'),
	('http://swapi.co/api/planets/3/', 'Yavin IV'),
	('http://swapi.co/api/planets/4/', 'Hoth'),
	('http://swapi.co/api/planets/5/', 'Dagobah'),
	('http://swapi.co/api/planets/6/', 'Bespin'),
	('http://swapi.co/api/planets/7/', 'Endor'),
	('http://swapi.co/api/planets/8/', 'Naboo'),
	('http://swapi.co/api/planets/9/', 'Coruscant'),
	('http://swapi.co/api/planets/10/', 'Kamino'),
	('http://swapi.co/api/planets/11/', 'Geonosis'),
	('http://swapi.co/api/planets/12/', 'Utapau'),
	('http://swapi.co/api/planets/13/', 'Mustafar'),
	('http://swapi.co/api/planets/14/', 'Kashyyyk'),
	('http://swapi.co/api/planets/15/', 'Polis Massa'),
	('http://swapi.co/api/planets/16/', 'Mygeeto'),
	('http://swapi.co/api/planets/17/', 'Felucia'),
	('http://swapi.co/api/planets/18/', 'Cato Neimoidia'),
	('http://swapi.co/api/planets/19/', 'Saleucami'),
	('http://swapi.co/api/planets/20/', 'Stewjon'),
	('http://swapi.co/api/planets/21/', 'Eriadu'),
	('http://swapi.co/api/planets/22/', 'Corellia'),
	('http://swapi.co/api/planets/23/', 'Rodia'),
	('http://swapi.co/api/planets/24/', 'Nal Hutta'),
	('http://swapi.co/api/planets/25/', 'Dantooine'),
	('http://swapi.co/api/planets/26/', 'Bestine IV'),
	('http://swapi.co/api/planets/27/', 'Ord Mantell'),
	('http://swapi.co/api/planets/28/', 'unknown'),
	('http://swapi.co/api/planets/29/', 'Trandosha'),
	('http://swapi.co/api/planets/30/', 'Socorro'),
	('http://swapi.co/api/planets/31/', 'Mon Cala'),
	('http://swapi.co/api/planets/32/', 'Chandrila'),
	('http://swapi.co/api/planets/33/', 'Sullust'),
	('http://swapi.co/api/planets/34/', 'Toydaria'),
	('http://swapi.co/api/planets/35/', 'Malastare'),
	('http://swapi.co/api/planets/36/', 'Dathomir'),
	('http://swapi.co/api/planets/37/', 'Ryloth'),
	('http://swapi.co/api/planets/38/', 'Aleen Minor'),
	('http://swapi.co/api/planets/39/', 'Vulpter'),
	('http://swapi.co/api/planets/40/', 'Troiken'),
	('http://swapi.co/api/planets/41/', 'Tund'),
	('http://swapi.co/api/planets/42/', 'Haruun Kal'),
	('http://swapi.co/api/planets/43/', 'Cerea'),
	('http://swapi.co/api/planets/44/', 'Glee Anselm'),
	('http://swapi.co/api/planets/45/', 'Iridonia'),
	('http://swapi.co/api/planets/46/', 'Tholoth'),
	('http://swapi.co/api/planets/47/', 'Iktotch'),
	('http://swapi.co/api/planets/48/', 'Quermia'),
	('http://swapi.co/api/planets/49/', 'Dorin'),
	('http://swapi.co/api/planets/50/', 'Champala'),
	('http://swapi.co/api/planets/51/', 'Mirial'),
	('http://swapi.co/api/planets/52/', 'Serenno'),
	('http://swapi.co/api/planets/53/', 'Concord Dawn'),
	('http://swapi.co/api/planets/54/', 'Zolan'),
	('http://swapi.co/api/planets/55/', 'Ojom'),
	('http://swapi.co/api/planets/56/', 'Skako'),
	('http://swapi.co/api/planets/57/', 'Muunilinst'),
	('http://swapi.co/api/planets/58/', 'Shili'),
	('http://swapi.co/api/planets/59/', 'Kalee'),
	('http://swapi.co/api/planets/60/', 'Umbara'),
	('http://swapi.co/api/planets/1/', 'Tatooine'),
	('http://swapi.co/api/planets/61/', 'Jakku')
];

o = OrderedDict(planet)
od = OrderedDict(sorted(o.items(), key=lambda x:x[1]))
'''
print ("OrderedDict([")
for i, j in od.items():
	pip = "\t('" + i + "', '" + j + "'),"
	print(pip)
print ("])")
'''
# empty string to which the entries will be appended
data = ""
space = ", "

# get all 7 films
films = swapi.get_all("films")

# create entry for each film
for f in films.order_by("episode_id"):
	# film node id will be episode number zero-indexed
	film_node_id = str(f.episode_id - 1)
		
	# entry = { id: , tag: 'films', name: '', target: [] },
	entry = "\t{ id: " + film_node_id + ", tag: 'films', name: '" + f.title + "' },\n"

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
	
	# get planet url for each chara
	chara_planet = p.homeworld

	# search dictionary for url and get index
	# people left off at 93, so index planets starting from 94!!!
	planet_id = list(od).index(chara_planet) + 94

	print (p, chara_planet)
		
	# append planet id to list
	ind_planet = ", " + str(planet_id)
		
	lis = film_list + ind_planet
	
	# entry = { id: , tag: 'people', name: '', target: [] },
	entry = "\t{ id: " + str(people_index) + ", tag: 'people', name: '" + p.name + "', target: [" + lis + "] },\n"
	
	# append entry to data string
	data += entry

	# increment id for person
	people_index = people_index + 1

# =======================================================

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

'''
print (planets.count());
print ("planet = [")
for p in planets.iter():
	pip = "\t('" + p.url + "', '" + p.name + "'),"
	print(pip)
print ("]")
'''










