import React, { useState, useEffect } from "react";
import personService from "./services/person";
import DisplayPeople from "./components/DisplayPeople";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import createUUID from "./services/uuid";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [search, setSearch] = useState("");
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		personService.getAll().then((response) => {
			setPersons(response.data);
		});
	}, []);

	const addName = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber,
			id: createUUID(),
		};

		personService.create(personObject).then((response) => {
			console.log(response);
		});
	};

	function addPerson(personObject) {
		personService.create(personObject).then((response) => {
			console.log(response);
			setMessage(`Added ${response.name}`)
		});
		setPersons([...persons, personObject]);
	}

	function updatePerson(id, name) {
		const person = persons.find(p => p.id === id)
		personService
			.update(id, name)
			.then((response) => {
				setMessage(`Updated ${response.name}`);
				console.log("updated successfully", response);
				setPersons(
					persons.map((newPhone) => (newPhone.id !== id ? newPhone : response))
				);
			})
			.catch((error) => {
				setMessage(`${person.name} has been removed from the server`)
				setError(true)
			});
	}

	function handleNameSubmit(event) {
		event.preventDefault();
		const findMatch = persons.find(
			(person) => person.name.toLowerCase() === newName.toLowerCase()
		);
		if (findMatch) {
			let confirmation = window.confirm(
				`${findMatch.name} is already added to the phonebook, want to replace the old number with a new one?`
			);
			if (confirmation) {
				const person = { ...findMatch, number: newNumber };
				updatePerson(person.id, person);
				setTimeout(() => {
					setMessage(null);
				}, 3000)
			}
		} else {
			const person = { name: newName, number: newNumber, id: createUUID() };
			addPerson(person);
			setTimeout(() => {
				setMessage(null);
			}, 3000);
		}
		setNewName("");
		setNewNumber("");
	}

	const removePerson = async (id, name) => {
		let deleteAlert = window.confirm(`Delete ${name}`);
		if (deleteAlert) {
			await personService.remove(id, name);
			const removeById = persons.filter((person) => {
				return person.id !== id;
			});
			setPersons(removeById);
		}
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const people = persons.filter((person) => {
		return person.name.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={message} error={error} />
			<Filter setSearch={setSearch} />
			<PersonForm
				newName={newName}
				addName={addName}
				handleNameChange={handleNameChange}
				handleNameSubmit={handleNameSubmit}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			<DisplayPeople people={people} removePerson={removePerson} />
		</div>
	);
};

export default App;
