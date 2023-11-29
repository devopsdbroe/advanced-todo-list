import { FaChevronDown } from "react-icons/fa";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import ErrMsg from "./msg/ErrMsg";
import SuccessMsg from "./msg/SuccessMsg";

const InputForm = () => {
	const [todoValue, setTodoValue] = useState("");
	const [category, setCategory] = useState("");
	const [currentTodo, setCurrentTodo] = useState(false);
	const [success, setSuccess] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);
	const [error, setError] = useState("");
	const [showError, setShowError] = useState(false);

	const options = [
		{
			_id: 1000,
			title: "categories",
		},
		{
			_id: 1001,
			title: "personal",
		},
		{
			_id: 1002,
			title: "business",
		},
		{
			_id: 1003,
			title: "others",
		},
	];

	const handleTodo = (e) => {
		e.preventDefault();

		if (todoValue === "") {
			setError("Please enter a todo!");
			setShowError(true);
			setShowSuccess(false);
		} else if (category === "") {
			setError("Please select a category!");
			setShowError(true);
			setShowSuccess(false);
		} else if (category === "categories") {
			setError("Please select a valid category!");
			setShowError(true);
			setShowSuccess(false);
		} else {
			setCurrentTodo(todoValue);
			setTodoValue("");
			setShowSuccess(true);
			setShowError(false);
			setSuccess("Todo added successfully!");
		}
		setTodoValue("");
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			showError && setShowError(false);
			showSuccess && setShowSuccess(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, [showError, showSuccess]);

	return (
		<div className="w-full bg-bodyColor flex flex-col gap-4">
			<div className="flex items-center gap-4 h-12">
				<input
					onChange={(e) => setTodoValue(e.target.value)}
					value={todoValue}
					className="w-[80%] h-full bg-bodyColor border-[1px] border-gray-400 py-2 px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-orange-600 hover:border-white"
					type="text"
					placeholder="Enter your Todo..."
				/>
				<div className="w-[20%] h-full relative">
					<select
						onChange={(e) => setCategory(e.target.value)}
						className="w-full h-full capitalize outline-none bg-bodyColor border-[1px] border-gray-400 px-3 cursor-pointer appearance-none rounded-md focus-visible:border-orange-600 hover:border-white"
					>
						{options.map((item) => (
							<option key={item._id}>{item.title}</option>
						))}
					</select>
					<span className="absolute right-3 top-4">
						<FaChevronDown />
					</span>
				</div>
			</div>
			<button
				onClick={handleTodo}
				className="w-full border-[1px] border-gray-400 hover:border-gray-200 duration-300 font-titleFont font-semibold tracking-wider text-gray-300 hover:text-orange-600 h-10 uppercase rounded-md"
			>
				Add Todo
			</button>
			<div className="flex flex-col gap-4">
				<ul className="grid grid-cols-1 gap-4 border border-gray-600 shadow-todoShadow mt-6 p-4">
					<TodoList todoValue={currentTodo} />
				</ul>
			</div>
			{showError && <ErrMsg error={error} />}
			{showSuccess && <SuccessMsg success={success} />}
		</div>
	);
};

export default InputForm;
