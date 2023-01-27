import { useEffect, useState } from "react";
import { MergedVehicleDetails } from "@types";
import getData from "../api";

export default function useData() {
  const [vehicles, setVehicles] = useState<MergedVehicleDetails[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getData()
      .then((response) => setVehicles(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { isLoading, error, vehicles };
}
