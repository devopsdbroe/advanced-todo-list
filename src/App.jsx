import InputForm from "./components/InputForm";

function App() {
	return (
		<div className="w-full min-h-screen font-bodyFont bg-gradient-to-t from-sky-600 via-sky-400 to-sky-300 text-white px-4 flex justify-center items-center">
			<div className="w-[850px] bg-bodyColor p-10">
				<InputForm />
			</div>
		</div>
	);
}

export default App;
