import { FaChevronDown } from "react-icons/fa";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import ErrMsg from "./msg/ErrMsg";
import SuccessMsg from "./msg/SuccessMsg";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos } from "../reduxStore/TodoSlice";
import { motion } from "framer-motion";

const InputForm = () => {
	const dispatch = useDispatch();
	const todosItem = useSelector((state) => state.todos.todosList);
	const [todoValue, setTodoValue] = useState("");
	const [category, setCategory] = useState("");
	const [success, setSuccess] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);
	const [error, setError] = useState("");
	const [showError, setShowError] = useState(false);
	const [showRemove, setShowRemove] = useState(false);

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
			dispatch(
				addTodos({
					_id: Math.random(),
					todo: todoValue,
					category: category,
				})
			);
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
					{todosItem.length > 0 ? (
						todosItem.map((item) => (
							<TodoList key={item._id} todo={item.todo} _id={item._id} />
						))
					) : (
						<p className="text-center text-base text-yellow-500 font-titleFont font-medium tracking-wide">
							Your todo list is empty!
						</p>
					)}
				</ul>
				{todosItem.length > 0 && (
					<motion.button
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5 }}
						onClick={() => setShowRemove(true)}
						className="w-40 h-8 text-sm font-titleFont text-orange-500 hover:text-red-500 font-semibold mx-auto bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300"
					>
						Remove Todos
					</motion.button>
				)}
			</div>
			{showError && <ErrMsg error={error} />}
			{showSuccess && <SuccessMsg success={success} />}

			{showRemove && (
				// Creates overlay for confirmation message
				<div
					onClick={() => setShowRemove(false)}
					className="w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60"
				>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-bodyColor border-red-500 rounded-md z-50 flex flex-col gap-4 shadow-todoShadow">
						<p className="text-xl text-center font-medium text-red-500">
							Are you sure you want to{" "}
							<span className="font-semibold underline underline-offset-2 decoration-[1px]">
								remove
							</span>{" "}
							all the todos?
						</p>
						<div className="flex items-center justify-center gap-4">
							<button
								onClick={() => dispatch(removeTodos()) & setShowRemove(false)}
								className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-red-500 font-semibold bg-transparent border-[1px] border-gray-50 hover:border-red-500 duration-300"
							>
								Yes
							</button>
							<button
								onClick={() => setShowRemove(false)}
								className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-green-500 font-semibold bg-transparent border-[1px] border-gray-50 hover:border-green-500 duration-300"
							>
								No
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default InputForm;
