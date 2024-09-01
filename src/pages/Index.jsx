import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Gym Booking System</h1>
        <p className="text-xl text-gray-600 mb-6">Book your gym slot or badminton court easily and quickly!</p>
        <div className="space-x-4">
          <Link to="/gym-booking">
            <Button size="lg">
              Book Gym
            </Button>
          </Link>
          <Link to="/badminton-booking">
            <Button size="lg" variant="outline">
              Book Badminton
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
