(() => {
	function getMovieById(movieId: string) {
		console.log({ movieId });
	}

	function getMovieActors(id: string) {
		console.log({ id });
	}

	function getBioActor(ActorId: string) {
		console.log({ ActorId });
	}

	interface DataMovie {
		title: string;
		description: string;
		rating: number;
		cast: string[];
	}

	function createMovie({ cast, description, rating, title }: DataMovie) {
		console.log({ title, description, rating, cast });
	}

	function createActor(fullName: string, birthdate: Date): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (fullName === "fernando") return false;

		console.log("Crear actor");
		return true;
	}

	const getPayAmount = ({
		isDead = false,
		isSeparated = true,
		isRetired = false,
	}): number => {
		if (isDead) return 1500;

		if (isSeparated) return 2500;

		if (isRetired) return 3000;

		return 4000;
	};
})();
