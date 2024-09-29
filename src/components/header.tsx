import { FaRunning } from "react-icons/fa";
import { ModeToggle } from "./toogle";

const Header = () => {
  return (
    <h1 className="flex gap-3 text-foreground cursor-pointer text-5xl font-secondary">
      Better <span className="text-app-primary flex gap-2 items-center">
        Health <FaRunning size={48} />
      </span>
      <ModeToggle />
    </h1>
  );
};

export default Header;
