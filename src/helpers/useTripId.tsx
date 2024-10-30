import { useParams } from "react-router-dom";

const useTripId = () => {
  const { id } = useParams<{ id: string }>();
  return id ? +id : null;
};

export default useTripId;
