import { Button } from "./ui/button";

const CButton = ({ children }:any) => {
  return (
      <Button className="bg-deep-purple-600 hover:bg-deep-purple-400">
        {children}
      </Button>
  );
};

export default CButton;