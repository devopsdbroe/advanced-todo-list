import { FaChevronDown } from "react-icons/fa";

const InputForm = () => {
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

	return (
		<div className="w-full bg-bodyColor flex flex-col gap-4">
			<div className="flex items-center gap-4 h-12">
				<input
					className="w-[80%] h-full bg-bodyColor border-[1px] border-gray-400 py-2 px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-orange-600 hover:border-white"
					type="text"
					placeholder="Enter your Todo..."
				/>
				<div className="w-[20%] h-full relative">
					<select className="w-full h-full capitalize outline-none bg-bodyColor border-[1px] border-gray-400 px-3 cursor-pointer appearance-none rounded-md focus-visible:border-orange-600 hover:border-white">
						{options.map((item) => (
							<option key={item._id}>{item.title}</option>
						))}
					</select>
					<span className="absolute right-3 top-4">
						<FaChevronDown />
					</span>
				</div>
			</div>
			<button className="w-full border-[1px] border-gray-400 hover:border-gray-200 duration-300 font-titleFont font-semibold tracking-wider text-gray-300 hover:text-orange-600 h-10 uppercase rounded-md">
				Add Todo
			</button>
			<div>
				<ul>
					<li>Todo will go here</li>
				</ul>
			</div>
		</div>
	);
};

export default InputForm;
