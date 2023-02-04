const { v4: uuidv4 } = require('uuid');
var slugify = require('slugify')
const { writeFile, readFile } = require("fs");
const data = './models/recipes.json'

exports.getAll = function (req, res) {
	readFile(data, "utf8", (err, recipes) => {
		if (err) {
			res.send({ error: "Error reading the JSON file." });
			console.log("Error reading the JSON file:", err);
			return;
		}
		try {
			res.send(JSON.parse(recipes));
		} catch (err) {
			res.send({ error: "Error parsing JSON string." });
			console.log("Error parsing JSON string:", err);
		}
	});

};

exports.new = function (req, res) {
	readFile(data, "utf8", (err, recipes) => {
		if (err) {
			res.send({ error: "Error reading the JSON file." });
			console.log("Error reading the JSON file:", err);
			return;
		}
		try {
			const parsedData = JSON.parse(recipes)

			const newData = {
				id: uuidv4(),
				name: req.body.name,
				slug: slugify(req.body.name, { lower: true, trim: true }),
				description: req.body.description,
				directions: req.body.directions,
				ingredients: req.body.ingredients,
				times: 0
			}
			parsedData.push(newData)

			writeFile(data, JSON.stringify(parsedData, null, 2), (err) => {
				if (err) {
					res.send({ error: "Failed to write updated data to file." });
					console.log("Failed to write updated data to file:", err);
					return;
				}
				res.send('New recipe')
				console.log("Updated file successfully");
			});

		} catch (err) {
			res.send({ error: "Error parsing JSON string." });
			console.log("Error parsing JSON string:", err);
		}
	});
};

exports.getById = function (req, res) {
	console.log(req.params.id);
	readFile(data, "utf8", (err, recipes) => {
		if (err) {
			res.send("Error reading the JSON file:")
			//console.log("Error reading the JSON file:", err);
			return;
		}
		try {
			const parsed = JSON.parse(recipes);
			const found = parsed.find((element) => element.id == req.params.id)
			res.send(found);
		} catch (err) {
			console.log("Error parsing JSON string:", err);
		}
	});

};

exports.getBySlug = function (req, res) {
	readFile(data, "utf8", (err, recipes_json) => {
		if (err) {
			console.log("Error reading the JSON file:", err);
			return;
		}
		try {
			const recipes = JSON.parse(recipes_json);
			var findRecipe = recipes.find(item => item.slug === req.params.slug);
			res.send(findRecipe);
		} catch (err) {
			console.log("Error parsing JSON string:", err);
		}
	});

};

exports.edit = function (req, res) {
	console.log(req.params.id);

	readFile(data, "utf8", (err, recipes) => {
		if (err) {
			console.log("Error reading the JSON file:", err);
			return;
		}
		try {
			const parsedData = JSON.parse(recipes);
			for (const [key, value] of Object.entries(parsedData)) {
				if (value.id === req.params.id) {

					value.name = req.body.name,
						value.slug = req.body.name,
						value.description = req.body.description,
						value.directions = req.body.directions,
						value.ingredients = req.body.ingredients
				}
			}
			writeFile(data, JSON.stringify(parsedData, null, 2), (err) => {
				if (err) {
					res.send('Failed to write updated data to file')
					console.log("Failed to write updated data to file:", err);
					return;
				}
				res.send('Updated file successfully.')
				console.log("Updated file successfully");
			});
		} catch (err) {
			res.send('Error parsing JSON string.')
			console.log("Error parsing JSON string:", err);
		}
	});
};


exports.updateTimes = function (req, res) {
	readFile(data, "utf8", (err, recipes) => {
		if (err) {
			console.log("Error reading the JSON file:", err);
			return;
		}
		try {
			const parsedData = JSON.parse(recipes);
			for (const [key, value] of Object.entries(parsedData)) {
				if (value.id === req.params.id) {

					value.times++
				}
			}
			writeFile(data, JSON.stringify(parsedData, null, 2), (err) => {
				if (err) {
					console.log("Failed to write updated data to file");
					return;
				}
				console.log("Updated file successfully");
				res.send('Updated file successfully')
			});
			//res.send({'Update times':'asd'})

		} catch (err) {
			console.log("Error parsing JSON string:", err);
		}
	});
};
exports.delete = function (req, res) {
	console.log(req.params.id);
	res.send('Delete recipe')
};