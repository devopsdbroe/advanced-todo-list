import { useState } from "react";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
	const [completed, setCompleted] = useState(false);

	return (
		<li
			onClick={() => {
				setCompleted(!completed);
			}}
			className={`${
				completed
					? "border-l-orange-500 border-orange-900"
					: "border-l-green-500 border-green-900"
			}
            w-full font-titleFont font-medium text-base border-[1px] border-l-[6px] px-2 py-1 cursor-pointer flex items-center justify-between`}
		>
			Todo Item
			<span className="text-xl text-gray-300 hover:text-red-500 duration-300 cursor-pointer">
				<MdDelete />
			</span>
		</li>
	);
};

export default TodoList;
